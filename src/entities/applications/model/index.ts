import { combine, createEffect, createStore, sample } from 'effector'
import { useStore } from 'effector-react/compat'

import { applicationsModel } from '@entities/hr-applications'

import { applicationApi } from '@shared/api'
import { ApplicationCreating } from '@shared/api/applications/application-api'
import { Application, UserApplication, WorkerApplication } from '@shared/api/model'
import { MessageType } from '@shared/consts'
import { userModel } from '@shared/session'
import { popUpMessageModel } from '@shared/ui/pop-up-message'

interface ApplicationsStore {
    listApplication: Application[] | null
    dataUserApplication: UserApplication | null
    dataWorkerApplication: WorkerApplication[] | null
    error: string | null
}
const DEFAULT_STORE = { listApplication: null, error: null, dataUserApplication: null, dataWorkerApplication: null }

const getWorkerPostsFx = createEffect(async (): Promise<any[]> => {
    const response = await applicationApi.getWorkerData()
    try {
        return response.data
    } catch (_) {
        throw new Error('Не удалось загрузить информацию о пользователе')
    }
})

const getApplicationsFx = createEffect(async (): Promise<Application[]> => {
    const response = await applicationApi.get()
    try {
        return response.data.reverse()
    } catch (_) {
        throw new Error('Не удалось загрузить заявления')
    }
})
const getUserDataApplicationsFx = createEffect(async (): Promise<UserApplication> => {
    const response = await applicationApi.getAppData()

    try {
        return response.data
    } catch (_) {
        throw new Error('Не удалось загрузить информацию о пользователе')
    }
})

const postApplicationFx = createEffect(async (data: ApplicationCreating): Promise<string> => {
    const resultAddApplication = await applicationApi.post(data)

    if (resultAddApplication.result === 'ok') {
        return 'ok'
    } else {
        throw new Error(resultAddApplication.error_text)
    }
})

const useApplications = () => {
    const { listApplication, dataUserApplication, dataWorkerApplication, error } = useStore($applicationsStore)
    return {
        data: { listApplication, dataUserApplication, dataWorkerApplication },
        loading: useStore(getUserDataApplicationsFx.pending),
        workerLoading: useStore(
            combine(
                getWorkerPostsFx.pending,
                applicationsModel.effects.postApplicationFx.pending,
                (first, second) => first || second,
            ),
        ),
        error: error,
    }
}

sample({ clock: userModel.events.authenticated, target: getUserDataApplicationsFx })

sample({
    clock: userModel.events.authenticated,
    source: userModel.stores.userRole,
    filter: (role) => role === 'staff',
    target: getWorkerPostsFx,
})

sample({ clock: postApplicationFx.doneData, target: getApplicationsFx })

sample({
    clock: postApplicationFx.failData,
    fn: (error) => {
        return {
            message: `Не удалось отправить форму. Ошибка: ${error.message}`,
            type: 'failure',
            time: 30000,
        } satisfies {
            message: ChildrenType
            type: MessageType
            time?: number
            onClick?: () => void
        }
    },
    target: popUpMessageModel.events.evokePopUpMessage,
})

const $applicationsStore = createStore<ApplicationsStore>(DEFAULT_STORE)
    .on(getUserDataApplicationsFx, (oldData) => ({
        ...oldData,
        error: null,
    }))
    .on(getUserDataApplicationsFx.doneData, (oldData, newData) => ({
        ...oldData,
        dataUserApplication: newData,
    }))
    .on(getUserDataApplicationsFx.failData, (oldData, newData) => ({
        ...oldData,
        error: newData.message,
    }))
    .on(getApplicationsFx, (oldData) => ({
        ...oldData,
        error: null,
    }))
    .on(getApplicationsFx.doneData, (oldData, newData) => ({
        ...oldData,
        listApplication: newData,
    }))
    .on(getApplicationsFx.failData, (oldData, newData) => ({
        ...oldData,
        error: newData.message,
    }))
    .on(getWorkerPostsFx, (oldData) => ({
        ...oldData,
        error: null,
    }))
    .on(getWorkerPostsFx.doneData, (oldData, newData) => ({
        ...oldData,
        dataWorkerApplication: newData,
    }))
    // .on(getWorkerPostsFx.failData, (oldData, newData) => ({
    //     ...oldData,
    //     error: newData.message,
    // }))
    .on(userModel.stores.userGuid, () => ({
        ...DEFAULT_STORE,
    }))

export const selectors = {
    useApplications,
}

export const effects = {
    getApplicationsFx,
    getUserDataApplicationsFx,
    postApplicationFx,
    getWorkerPosts: getWorkerPostsFx,
}
export const stores = { applications: $applicationsStore }
