import axios, { AxiosError } from 'axios'

import { OLD_LK_URL, isProduction } from '@shared/consts'

import { addAuthHeaderToRequests, getAuthResponseInterceptor } from './utils'

export const API_BASE_URL = import.meta.env.MODE === 'development' ? '/api' : `${OLD_LK_URL}/lk_api.php`
export const API_HR_URL = `https://api.mospolytech.ru/serviceforfrontpersonnelorders`
export const API_AUTH_URL = `api.mospolytech.ru/auth`

export const $api = axios.create({ baseURL: API_BASE_URL, withCredentials: true })
export const $hrApi = axios.create({ baseURL: API_HR_URL })
export const $authApi = axios.create({ baseURL: API_AUTH_URL })
$hrApi.interceptors.request.use(addAuthHeaderToRequests)

!isProduction &&
    $hrApi.interceptors.response.use((response) => {
        return response
    }, getAuthResponseInterceptor($hrApi))

export function isAxiosError(error: Error): error is AxiosError {
    return (error as AxiosError).isAxiosError
}

export class RequestError extends Error {
    constructor(public innerException: any) {
        super('Во время запроса произошла ошибка')
        if (isAxiosError(innerException)) {
            if ((innerException as AxiosError).response?.status === 500) {
                // eslint-disable-next-line no-console
                console.error({ content: 'Ошибка сервера. Не удалось выполнить действие', duration: 3 })
            }
        }
    }
}
