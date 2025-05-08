import { FC, LazyExoticComponent } from 'react'
import { IconType } from 'react-icons'

import { PETeacher } from '@shared/api/physical-education'
import { IColors } from '@shared/consts'

export const pageGroups = {
    GENERAL: 'Основное',
    FINANCES_DOCS: 'Кадровая среда',
    LEARNING_ACTIVITIES: 'Учебная деятельность',
    OTHER: 'Находится в разработке',
    COMMUNICATION: 'Коммуникация',
    COMPETENCE_CENTER: 'Центр компетенций',
    SCIENCE: 'Научная деятельность',
}

export type Groups = keyof typeof pageGroups

export type Route = {
    id: string
    path: string
    // Component: LazyExoticComponent<FC>
    // Component: LazyExoticComponent<FC> | FC
    title?: string
    icon?: IconType
}

export type Page = Route & {
    color?: keyof IColors
    group?: Groups

    shortTitle?: string
    fullTitle?: string

    menuPath?: string
    isTemplate: boolean

    show?: boolean
    notifications?: number
    isAdmin?: boolean
    isNew?: boolean
    isExternal?: boolean
    isOldLK?: boolean

    keywords?: string[]

    withoutHeader?: boolean
    withoutBackButton?: boolean
    isSubPage?: boolean
    backButtonText?: string
    subPageHeaderTitle?: string
    fallbackPrevPage?: string
    planeHeader?: boolean
    pageSize?: 'small' | 'middle' | 'big' | 'large'
    getIsVisibleForCurrentUser?: (peTeacher: PETeacher | null) => boolean
    guidsAllowed?: string[]
    hiddenTitle?: boolean
}

export interface IRoutes {
    [id: string]: Page
}

export type PageRoute = Record<string, LazyExoticComponent<FC> | FC>
