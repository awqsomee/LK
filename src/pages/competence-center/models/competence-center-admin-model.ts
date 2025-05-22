import { attach, createEffect, createEvent, createStore, sample } from 'effector'
import { createGate } from 'effector-react'
import { reset } from 'patronum'

import { COMPETENCE_CENTER_WEBSOCKET_URL, CompetencePassport } from '@shared/api/competence-center/api'
import {
    PassportGenerationStatus,
    generatePassportsMutation,
    getConsultationsQuery,
    getFailedPassportsQuery,
    getPassportGenerationStatusFx,
    getPassportsQuery,
    resetGenerationStatusMutation,
} from '@shared/api/competence-center/employee'
import { getJwtToken } from '@shared/api/session/jwt-token'
import { createFilesField } from '@shared/effector/form/create-file-filed'

const TIMEOUT = 5_000

export const CompetenceCenterEmployeeGate = createGate()
export const PassportGeneratorGate = createGate()
export const AllPassportsGate = createGate()

const getGenerationStatusFx = attach({
    effect: getPassportGenerationStatusFx,
})

export const $passportStatus = createStore<PassportGenerationStatus | null>(null)
export const $loading = generatePassportsMutation.$pending

export const $passports = getPassportsQuery.$data
export const $newPassports = $passportStatus.map((status) => status?.passportsCount ?? 0)
export const $newConsultationApplications = getConsultationsQuery.$data
export const $newConsultations = $newConsultationApplications.map((applications) => applications?.length ?? 0)
export const $failedPassportApplications = getFailedPassportsQuery.$data
export const $notFoundStudents = createStore<CompetencePassport[] | null>(null)
export const $studentsNotFound = $notFoundStudents.map((students) => students?.length ?? 0)
export const files = createFilesField({
    reset: [PassportGeneratorGate.open, generatePassportsMutation.finished.success],
})

const $connection = createStore<WebSocket | null>(null)
const $lastMessage = createStore<PassportGenerationStatus | null>(null)
const $socketError = createStore('')

export const generationStarted = createEvent()
export const denyRemainingApplications = createEvent()
export const dismissed = createEvent()

const socketError = createEvent<Error>()
const disconnected = createEvent()
const messageSent = createEvent<string>()
const rawMessageReceived = createEvent<string>()

const connectWebSocketFx = createEffect((url: string): Promise<WebSocket> => {
    const ws = new WebSocket(url)

    return new Promise((res, rej) => {
        const timeout = setTimeout(() => {
            const error = new Error('Connection timeout')

            socketError(error)
            rej(error)
            ws.close()
        }, TIMEOUT)

        ws.onopen = () => {
            clearTimeout(timeout)
            res(ws)
        }

        ws.onmessage = (event) => {
            rawMessageReceived(event.data)
        }

        ws.onclose = () => {
            disconnected()
        }

        ws.onerror = (err) => {
            const error = new Error('WebSocket error')
            disconnected()
            socketError(error)
            rej(err)
        }
    })
})

const disconnectWebSocketFx = createEffect((socket: WebSocket) => socket.close())
const sendMessageFx = createEffect((params: { socket: WebSocket; message: string }) => {
    params.socket.send(params.message)
})
$connection.on(connectWebSocketFx.doneData, (_, ws) => ws).reset(disconnectWebSocketFx.done)
$socketError.on(socketError, (_, error) => error.message).reset(connectWebSocketFx.done)
$lastMessage.on(rawMessageReceived, (_, newMessage) => JSON.parse(newMessage)).reset(connectWebSocketFx.done)

sample({
    clock: connectWebSocketFx.doneData,
    source: $connection,
    filter: Boolean,
    fn: (connection) => ({
        socket: connection,
        message: JSON.stringify({ type: 'auth', token: getJwtToken() }),
    }),
    target: sendMessageFx,
})

const messageReceived = sample({
    clock: $lastMessage,
    filter: Boolean,
})

$passportStatus
    .on(getGenerationStatusFx.doneData, (_, status) => status)
    .on(resetGenerationStatusMutation.finished.success, (_, { result }) => result)
    .on(generatePassportsMutation.finished.success, (_, { result }) => ({
        progress: result.progress,
        status: result.status,
        passportsCount: result.passportsCount,
    }))

sample({
    clock: CompetenceCenterEmployeeGate.open,
    target: [getConsultationsQuery.start, getGenerationStatusFx],
})

sample({
    clock: AllPassportsGate.open,
    fn: () => ({}),
    target: getPassportsQuery.start,
})

sample({
    clock: generationStarted,
    source: files.value,
    fn: (files) => ({
        excelData: files[0],
    }),
    target: generatePassportsMutation.start,
})

sample({
    clock: generatePassportsMutation.finished.success,
    filter: ({ result }) => result.status === 'pending',
    fn: () => COMPETENCE_CENTER_WEBSOCKET_URL,
    target: connectWebSocketFx,
})

sample({
    clock: messageReceived,
    source: $passportStatus,
    filter: (_, data) => 'status' in data,
    fn: (status, data) => ({
        ...status,
        ...data,
    }),
    target: $passportStatus,
})

sample({
    clock: sample({
        clock: $passportStatus,
        filter: Boolean,
    }),
    filter: ({ status }) => status === 'done',
    target: [disconnected],
})

sample({
    clock: generatePassportsMutation.finished.success,
    fn: ({ result }) => result.notFound,
    target: $notFoundStudents,
})

reset({
    clock: [resetGenerationStatusMutation.finished.success],
    target: [$notFoundStudents],
})

sample({
    clock: denyRemainingApplications,
    fn: () => ({
        decline: true,
    }),
    target: resetGenerationStatusMutation.start,
})

sample({
    clock: dismissed,
    fn: () => ({}),
    target: resetGenerationStatusMutation.start,
})

sample({
    clock: messageSent,
    source: $connection,
    filter: Boolean,
    fn: (socket, message) => ({
        socket,
        message,
    }),
    target: sendMessageFx,
})

sample({
    clock: disconnected,
    source: $connection,
    filter: Boolean,
    target: disconnectWebSocketFx,
})
