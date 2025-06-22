import { createEffect } from 'effector'

import { Article, ArticleApplication, ArticleApplicationStatus, Changes, Filter, Sort } from '@shared/api/science/types'

import { $scienceApi } from '../config/science-config'

export type UploadReq = { scopusFile: File; wosFile: File }

export const uploadArticle = async ({ scopusFile, wosFile }: UploadReq) => {
    const formData = new FormData()
    formData.append('scopusFile', scopusFile)
    formData.append('wosFile', wosFile)

    const { data } = await $scienceApi.post<Changes>('/data', formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    })
    return data
}

export const getAllArticles = async (params: {
    limit: number
    offset: number
    sorts: Sort[] | null
    filters: Filter[] | null
}) => {
    const { data } = await $scienceApi.post<{ data: Article[]; totalCount: number }>(`/article/all`, params)
    return data
}

export const getArticle = async (id: string) => {
    const { data } = await $scienceApi.get<{ data: Article }>(`/article/${id}`)

    return data.data
}

export const getArticleDetails = async (id: string) => {
    const {
        data: { data, titles },
    } = await $scienceApi.get(`/article/${id}/details`)
    const scopusData = data?.scopus && convertKeysToLowerCase(data.scopus)
    const wosData = data?.wos && convertKeysToLowerCase(data.wos)

    return {
        titles: {
            scopus: convertKeysToLowerCase(titles.scopus),
            wos: convertKeysToLowerCase(titles.wos),
        },
        data: {
            scopus: scopusData,
            wos: wosData,
        },
    }
}
function convertKeysToLowerCase(obj: Record<string, any>): Record<string, any> {
    return Object.keys(obj).reduce(
        (acc, key) => {
            acc[key.toLowerCase()] = obj[key]
            return acc
        },
        {} as Record<string, any>,
    )
}

export type ApplyArticleFxParams = {
    articleId: string
    departmentId: string
}
export const applyArticleFx = createEffect(async (params: ApplyArticleFxParams) => {
    const { data } = await $scienceApi.post('/article/application', params)
    return data
})

export type GetUserArticleApplicationsFxParams = { limit: number; offset: number; statuses: ArticleApplicationStatus[] }
export const getUserArticleApplicationsFx = createEffect(async (params: GetUserArticleApplicationsFxParams) => {
    const { data } = await $scienceApi.post<{
        data: {
            totalCount: number
            data: ArticleApplication[]
        }
    }>('/article/application/all', params)
    return data.data
})

export type GetAllArticleApplicationsFxParams = { limit: number; offset: number; statuses: ArticleApplicationStatus[] }
export const getAllArticleApplicationsFx = createEffect(async (params: GetAllArticleApplicationsFxParams) => {
    const { data } = await $scienceApi.post<{
        data: {
            totalCount: number
            data: ArticleApplication[]
        }
    }>('/article/application/approver/all', params)
    return data.data
})

export type ApproveApplicationFxParams = { id: string }
export const approveApplicationFx = createEffect(async ({ id }: ApproveApplicationFxParams) => {
    const { data } = await $scienceApi.post(`/article/application/${id}/approve`)
    return data
})

export type DeclineApplicationFxParams = { id: string; declineReason: string }
export const declineApplicationFx = createEffect(async ({ id, declineReason }: DeclineApplicationFxParams) => {
    const { data } = await $scienceApi.post(`/article/application/${id}/decline`, { declineReason })
    return data
})
