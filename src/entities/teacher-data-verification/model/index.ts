import { createEffect, createEvent, createStore, sample } from 'effector'
import { useStore } from 'effector-react/compat'
import { forward } from 'effector/effector.mjs'

import { teacherDataVerificationApi } from '@shared/api'
import { TeacherDataVerification } from '@shared/api/model'
import { userModel } from '@shared/session'

interface TeacherDataVerificationStore {
    teacherDataVerification: TeacherDataVerification | null
    error: string | null
    completed: boolean
}

const DEFAULT_STORE: TeacherDataVerificationStore = {
    teacherDataVerification: null,
    error: null,
    completed: false,
}

const useTeacherDataVerification = () => {
    return {
        data: useStore($teacherDataVerificationStore).teacherDataVerification,
        loading: useStore(getTeacherDataVerificationFx.pending),
        error: useStore($teacherDataVerificationStore).error,
        completed: useStore($teacherDataVerificationStore).completed,
    }
}

const postTeacherDataVerification = createEvent<TeacherDataVerification>()
const changeCompleted = createEvent<{ completed: boolean }>()

const postTeacherDataVerificationFx = createEffect(async (postData: TeacherDataVerification): Promise<void> => {
    try {
        const response = await teacherDataVerificationApi.post(postData)

        return response.data
    } catch (error) {
        throw new Error('Не удалось загрузить раздел')
    }
})

forward({ from: postTeacherDataVerification, to: postTeacherDataVerificationFx })

const getTeacherDataVerificationFx = createEffect(async (): Promise<TeacherDataVerification> => {
    try {
        const response = await teacherDataVerificationApi.get()

        return response.data
    } catch (error) {
        throw new Error('Не удалось войти')
    }
})

const $teacherDataVerificationStore = createStore<TeacherDataVerificationStore>(DEFAULT_STORE)
    .on(getTeacherDataVerificationFx, (oldData) => ({
        ...oldData,
        error: null,
    }))
    .on(getTeacherDataVerificationFx.doneData, (oldData, newData) => ({
        ...oldData,
        teacherDataVerification: newData,
    }))
    .on(getTeacherDataVerificationFx.failData, (oldData, newData) => ({
        ...oldData,
        error: newData.message,
    }))
    .on(changeCompleted, (oldData, newData) => ({
        ...oldData,
        completed: newData.completed,
    }))
    .on(userModel.stores.userGuid, () => ({
        ...DEFAULT_STORE,
    }))

sample({ clock: changeCompleted, target: getTeacherDataVerificationFx })

export const selectors = {
    useTeacherDataVerification,
}

export const effects = {
    getTeacherDataVerificationFx,
}

export const events = {
    postTeacherDataVerification,
    changeCompleted,
}
