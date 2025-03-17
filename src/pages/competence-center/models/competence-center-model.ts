import { createEvent, createStore } from 'effector'

import { ApplicationStatusType } from '@entities/applications/consts'

type PassportStatus = 'in_review' | 'ready'

export const applicationFilled = createEvent<PassportReq>()

export type PassportReq = {
    fio: string
    email: string
    date: string
    endDate?: string
    status: ApplicationStatusType
    results?: string
}
export const $passportReq = createStore<PassportReq | null>(null).on(applicationFilled, (_, payload) => payload)
export const $passportStatus = createStore<PassportStatus | null>(null).on(applicationFilled, () => 'in_review')
