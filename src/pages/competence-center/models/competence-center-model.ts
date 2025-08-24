import { attach, createEffect, createEvent, sample } from 'effector'
import { createGate } from 'effector-react'

import {
    CreateConsultationRequest,
    CreatePassportRequest,
    createConsultationMutation,
    createPassportMutation,
    getConsultationsQuery,
    getCurrentPassportQuery,
    getPassportBlobFx,
    getPassportsQuery,
    getRecentConsultationsQuery,
} from '@shared/api/competence-center/student'
import { createCheckboxField } from '@shared/effector/form/create-checkbox-field'
import { popUpMessageModel } from '@shared/ui/pop-up-message'

export const CompetenceCenterPassportFormGate = createGate()
export const CompetenceCenterConsultationFormGate = createGate()
export const CompetenceCenterStudentGate = createGate()

export const passportApplicationFilled = createEvent<CreatePassportRequest>()
export const consultationApplicationFilled = createEvent<CreateConsultationRequest>()

export const $passports = getPassportsQuery.$data
export const $currentPassport = getCurrentPassportQuery.$data
export const $recentConsultations = getRecentConsultationsQuery.$data
export const $consultations = getConsultationsQuery.$data
export const $passportLoading = createPassportMutation.$pending
export const $consultationLoading = createConsultationMutation.$pending
export const completed = createCheckboxField({
    reset: [CompetenceCenterPassportFormGate.open, CompetenceCenterConsultationFormGate.open],
})

sample({
    clock: CompetenceCenterStudentGate.open,
    target: [getCurrentPassportQuery.start, getRecentConsultationsQuery.start, getConsultationsQuery.start],
})

sample({
    clock: passportApplicationFilled,
    target: createPassportMutation.start,
})

sample({
    clock: createPassportMutation.finished.success,
    target: completed.setValue.prepend(() => true),
})

sample({
    clock: createPassportMutation.finished.failure,
    target: popUpMessageModel.events.evokePopUpMessage.prepend(() => ({
        message: 'Возникла какая-то ошибка',
        type: 'failure',
    })),
})

sample({
    clock: consultationApplicationFilled,
    target: createConsultationMutation.start,
})

sample({
    clock: createConsultationMutation.finished.success,
    target: completed.setValue.prepend(() => true),
})

sample({
    clock: createConsultationMutation.finished.failure,
    target: popUpMessageModel.events.evokePopUpMessage.prepend(() => ({
        message: 'Возникла какая-то ошибка',
        type: 'failure',
    })),
})

export const openFile = createEvent<string>()
export const downloadFile = createEvent<string>()

const openPassportFx = attach({
    effect: getPassportBlobFx,
})
const downloadPassportFx = attach({
    effect: getPassportBlobFx,
})

const openFileFx = createEffect(async (blob: Blob) => {
    const url = window.URL.createObjectURL(blob)
    window.open(url, '_blank')
})

const downloadFileFx = createEffect(async (blob: Blob) => {
    const url = window.URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = 'passport.pdf'
    document.body.appendChild(link)
    link.click()
    link.remove()
    URL.revokeObjectURL(url)
})

sample({
    clock: openFile,
    target: openPassportFx,
})

sample({
    clock: downloadFile,
    target: downloadPassportFx,
})

sample({
    clock: openPassportFx.doneData,
    target: openFileFx,
})

sample({
    clock: downloadPassportFx.doneData,
    target: downloadFileFx,
})
