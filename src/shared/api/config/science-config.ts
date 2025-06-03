import axios from 'axios'

import { addAuthHeaderToRequests, getAuthResponseInterceptor } from './utils'

export const SCIENCE_URL = 'https://api.mospolytech.ru/lk/science/'
export const SUBDIVISIONS_URL = 'https://api.mospolytech.ru/lk/subdivision/'

export const $scienceApi = axios.create({ baseURL: SCIENCE_URL })
export const $subdivisionApi = axios.create({ baseURL: SUBDIVISIONS_URL })

$scienceApi.interceptors.request.use(addAuthHeaderToRequests)
$scienceApi.interceptors.response.use(async (response) => {
    if (response?.data?.errors?.[0]?.extensions?.code === 'AUTH_NOT_AUTHENTICATED') {
        return await getAuthResponseInterceptor($scienceApi)(response)
    }

    return response
}, getAuthResponseInterceptor($scienceApi))

$subdivisionApi.interceptors.request.use(addAuthHeaderToRequests)
$subdivisionApi.interceptors.response.use(async (response) => {
    if (response?.data?.errors?.[0]?.extensions?.code === 'AUTH_NOT_AUTHENTICATED') {
        return await getAuthResponseInterceptor($subdivisionApi)(response)
    }

    return response
}, getAuthResponseInterceptor($subdivisionApi))
