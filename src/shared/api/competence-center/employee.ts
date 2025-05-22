import { createMutation, createQuery } from '@farfetched/core'
import { createEffect } from 'effector'

import { $competenceCenterApi, CompetenceConsultation, CompetencePassport } from './api'

export type PassportGenerationStatus = {
    status: 'idle' | 'pending' | 'done'
    progress: number
    passportsCount: number
}

type GeneratePassportsRequest = {
    excelData: File
}
export const generatePassportsMutation = createMutation({
    handler: async (req: GeneratePassportsRequest) => {
        const formData = new FormData()
        formData.append('excelData', req.excelData)
        const { data } = await $competenceCenterApi.post<
            { message: string; notFound: CompetencePassport[] } & PassportGenerationStatus
        >('/employee/passports/generate', req, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        })
        return data
    },
})

export const getPassportGenerationStatusFx = createEffect({
    handler: async () => {
        const { data } = await $competenceCenterApi.get<PassportGenerationStatus>('/employee/passports/status')
        return data
    },
})

export const getFailedPassportsQuery = createQuery({
    handler: async () => {
        const { data } = await $competenceCenterApi.get('/employee/passports/failed')
        return data
    },
})

export const resetGenerationStatusMutation = createMutation({
    handler: async (req: { decline?: boolean }) => {
        const { data } = await $competenceCenterApi.post<PassportGenerationStatus>('/employee/passports/status', req)
        return data
    },
})

type GetPassportsRequest = {
    fio?: string
}
export const getPassportsQuery = createQuery({
    handler: async (req: GetPassportsRequest) => {
        const { data } = await $competenceCenterApi.get<CompetencePassport[]>('/employee/passports', {
            params: req,
        })
        return data
    },
})

type DonwloadPassportRequest = {
    id: string
}
export const downloadPassportFx = createEffect({
    handler: async ({ id }: DonwloadPassportRequest) => {
        const { data } = await $competenceCenterApi.get<File>(`/employee/passports/${id}`)
        return data
    },
})

export const getConsultationsQuery = createQuery({
    handler: async () => {
        const { data } = await $competenceCenterApi.get<CompetenceConsultation[]>('/employee/consultations')
        return data
    },
})

type SetConsultationStatusRequest = {
    id: string
    status: string
}
export const setConsultationStatusMutation = createMutation({
    handler: async ({ id, status }: SetConsultationStatusRequest) => {
        const { data } = await $competenceCenterApi.put(`/employee/consultations/${id}`, { status })
        return data
    },
})
