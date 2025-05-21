import axios from 'axios'

import { isProduction } from '@shared/consts'
import { ApplicationsConstants } from '@shared/consts/applications'

import { addAuthHeaderToRequests, getAuthResponseInterceptor } from '../config/utils'

const COMPETENCE_CENTER_PROD_URL = ''
const COMPETENCE_CENTER_DEV_URL = 'http://localhost:8800/competence-center'

export type CompetencePassport = {
    id: string
    fio: string
    email: string
    status: keyof typeof ApplicationsConstants
    createdAt: string
    error: string | null
    fileKey: string | null
}

export type CompetenceConsultation = {
    id: string
    fio: string
    email: string
}

export const COMPETENCE_CENTER_URL = isProduction ? COMPETENCE_CENTER_PROD_URL : COMPETENCE_CENTER_DEV_URL
export const COMPETENCE_CENTER_WEBSOCKET_URL = 'ws://localhost:8800/competence-center/passports/status'

export const $competenceCenterApi = axios.create({ baseURL: COMPETENCE_CENTER_URL })

$competenceCenterApi.interceptors.request.use(addAuthHeaderToRequests)
$competenceCenterApi.interceptors.response.use((response) => response, getAuthResponseInterceptor($competenceCenterApi))
