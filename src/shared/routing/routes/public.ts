import { BiHeadphone } from 'react-icons/bi'
import { FiXCircle } from 'react-icons/fi'

import { Route } from '../consts'
import {
    CANT_ACCESS_ROUTE,
    FEEDBACK_ROUTE,
    FORGOT_PASSWORD_ROUTE,
    GET_YOUR_LOGIN_ROUTE,
    LOGIN_ROUTE,
    MAINTENANCE,
    MEMO_FRESHMEN_ROUTE,
    MEMO_TEACHER_ROUTE,
} from '../paths'

export const publicRoutes: Route[] = [
    {
        id: 'login',
        path: LOGIN_ROUTE,
    },
    {
        id: 'forgot-password',
        path: FORGOT_PASSWORD_ROUTE,
    },
    {
        id: 'feedback',
        title: 'Обратная связь',
        icon: BiHeadphone,
        path: FEEDBACK_ROUTE,
    },
    {
        id: 'cant-access',
        title: 'Не получается войти в Личный кабинет',
        icon: FiXCircle,
        path: CANT_ACCESS_ROUTE,
    },
    {
        id: 'get-login',
        title: 'Узнать свой логин ЕУЗ',
        path: GET_YOUR_LOGIN_ROUTE,
    },
    {
        id: 'student-attention',
        title: 'Вниманию студентов 1 курса!',
        path: MEMO_FRESHMEN_ROUTE,
    },
    {
        id: 'employee-attention',
        title: 'Вниманию сотрудников!',
        path: MEMO_TEACHER_ROUTE,
    },
    {
        id: 'maintenance',
        title: 'Техническое обслуживание',
        path: MAINTENANCE,
    },
]
