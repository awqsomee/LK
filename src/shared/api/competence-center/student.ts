import { createMutation, createQuery } from '@farfetched/core'
import { createEffect } from 'effector'

import { $competenceCenterApi, CompetenceConsultation, CompetencePassport } from './api'

export type CreatePassportRequest = {
    fio: string
    email: string
}
export const createPassportMutation = createMutation({
    handler: async (req: CreatePassportRequest) => {
        const { data } = await $competenceCenterApi.post<string>('/student/passports', req)
        return data
    },
})

export type CommunicationType = 'tel' | 'email' | 'lk'
export type CreateConsultationRequest = {
    fio: string
    communicationType: CommunicationType
    communication?: string
}
export const createConsultationMutation = createMutation({
    handler: async (req: CreateConsultationRequest) => {
        const { data } = await $competenceCenterApi.post<string>('/student/consultations', req)
        return data
    },
})

export const getPassportsQuery = createQuery({
    handler: async () => {
        const { data } = await $competenceCenterApi.get<CompetencePassport[]>('/student/passports')
        return data
    },
})

export const getCurrentPassportQuery = createQuery({
    handler: async () => {
        const { data } = await $competenceCenterApi.get<CompetencePassport>('/student/passports/current')
        return data
    },
})

export const getRecentConsultationsQuery = createQuery({
    handler: async () => {
        const { data } = await $competenceCenterApi.get<CompetenceConsultation[]>('/student/consultations/recent')
        return data
    },
})

export const getConsultationsQuery = createQuery({
    handler: async () => {
        const { data } = await $competenceCenterApi.get<CompetenceConsultation[]>('/student/consultations')
        return data
    },
})

export const getPassportBlobFx = createEffect({
    handler: async (id: string) => {
        const { data } = await $competenceCenterApi.get<File>(`/student/passports/${id}`, {
            responseType: 'blob',
        })
        return data
    },
})
