import { createEffect } from 'effector'

import { $subdivisionApi } from '../config/science-config'
import { Subdivision } from './types'

export const getAllSubdivisionsFx = createEffect({
    handler: async (params: {
        guid: string | null
        name: string | null
        isDepartment: boolean | null
        isFaculty: boolean | null
        headGuid: string | null
        parentGuid: string | null
        includeDisabled: boolean | null
        includeChildSubdivisions: boolean | null
    }) => {
        const { data } = await $subdivisionApi.post<{ data: Subdivision[] }>(`/all`, params)
        return data.data
    },
})
