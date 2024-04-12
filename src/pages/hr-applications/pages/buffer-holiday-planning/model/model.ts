import { popUpMessageModel } from '@entities/pop-up-message'
import { getJwtToken, parseJwt } from '@entities/user/lib/jwt-token'
import { $hrApi, isAxiosError } from '@shared/api/config'
import { MessageType } from '@shared/ui/types'
import { createEffect, createEvent, createStore, sample } from 'effector'
import { useStore } from 'effector-react'
import { BufferHolidayPlanningForm } from '../types'
import { BufferHoliday } from '@pages/hr-applications/types/hr-applications'
import axios from 'axios'

const clearStore = createEvent()
const loadBufferHolidayPlanning = createEvent()
const sendBufferHolidayPlanning = createEvent<BufferHolidayPlanningForm>()

const loadBufferHolidayPlanningFx = createEffect(async () => {
    const { data } = await $hrApi.get<BufferHoliday>(
        `Vacation.GetAllHistory?personalGuid=${parseJwt(getJwtToken() ?? '').IndividualGuid}`,
    )
    return data
})

sample({ clock: loadBufferHolidayPlanning, target: loadBufferHolidayPlanningFx })

const sendBufferHolidayPlanningFx = createEffect(async (data: BufferHolidayPlanningForm) => {
    try {
        const { files } = data
        const formData = new FormData()

        for (const [key, value] of Object.entries(data)) {
            if (key !== 'files') formData.set(key, value)
        }
        if (!!files[0]) {
            for (let i = 0; i < files[0].length; i++) {
                formData.append('files', files[0][i])
            }
        }

        const result = await $hrApi.post<BufferHoliday>(`Vacation.AddVacation`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        })
        return result.data
    } catch (error) {
        if (axios.isAxiosError(error)) {
            throw new Error(error.response?.data.error)
        }
        throw new Error(error as string)
    }
})

sample({ clock: sendBufferHolidayPlanning, target: sendBufferHolidayPlanningFx })

const $bufferHolidayPlanning = createStore<BufferHoliday['personVacations'] | null>(null).on(clearStore, () => null)

sample({
    clock: loadBufferHolidayPlanningFx.doneData,
    fn: ({ personVacations }) => personVacations,
    target: $bufferHolidayPlanning,
})

sample({
    clock: sendBufferHolidayPlanningFx.doneData,
    fn: (result) => {
        if (result.isError) {
            throw new Error(result.error)
        }

        return {
            message: `Форма отправлена успешно`,
            type: 'success' as MessageType,
        }
    },
    target: popUpMessageModel.events.evokePopUpMessage,
})

sample({
    clock: sendBufferHolidayPlanningFx.failData,
    fn: (error) => {
        const message = error.message || 'Не удалось отправить форму'

        return {
            message,
            type: 'failure' as MessageType,
            time: 7000,
        }
    },
    target: popUpMessageModel.events.evokePopUpMessage,
})

// sample({
//     clock: sendBufferHolidayPlanningFx.doneData,
//     source: $bufferHolidayPlanning,
//     fn: (source, { personVacations }) => {
//         return [...source!, ...personVacations]
//     },
//     target: $bufferHolidayPlanning,
// })

sample({
    clock: loadBufferHolidayPlanningFx.failData,
    fn: (response) => {
        const message = isAxiosError(response) ? (response.response?.data as any).error : 'Не удалось загрузить данные'

        return {
            message,
            type: 'failure' as MessageType,
        }
    },
    target: popUpMessageModel.events.evokePopUpMessage,
})

sample({
    clock: sendBufferHolidayPlanningFx.doneData,
    target: loadBufferHolidayPlanningFx,
})

export const events = {
    loadBufferHolidayPlanning,
    sendBufferHolidayPlanning,
    clearStore,
}

export const effects = {
    sendBufferHolidayPlanningFx,
}
export const selectors = {
    useBufferHolidayPlanning: () => ({
        data: useStore($bufferHolidayPlanning),
        loading: useStore(sendBufferHolidayPlanningFx.pending),
        getDataLoading: useStore(loadBufferHolidayPlanningFx.pending),
    }),
}
