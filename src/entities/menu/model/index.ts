import { combine, createEvent, createStore, sample } from 'effector'
import { useUnit } from 'effector-react'

import { adminLinksModel } from '@entities/admin-links'
import { userSettingsModel } from '@entities/settings'

import { Role } from '@shared/api/allowances/types'
import { AdminLinks, User } from '@shared/api/model'
import { UserSettings } from '@shared/api/settings'
import { MenuType, REQUIRED_LEFTSIDE_BAR_CONFIG, REQUIRED_TEACHER_LEFTSIDE_BAR_CONFIG } from '@shared/consts'
import {
    IRoutes,
    Page,
    employeeHiddenRoutes,
    employeeRoutes,
    studentHiddenRoutes,
    studentRoutes,
} from '@shared/routing'
import { userModel } from '@shared/session'

import findRoutesByConfig from '../lib/find-routes-by-config'

export interface Menu {
    allRoutes: IRoutes | null
    visibleRoutes: IRoutes | null
    currentPage: Page | null
    isOpen: boolean
}

const DEFAULT_HOME_CONFIG = ['settings', 'profile', 'chat', 'schedule', 'payments', 'project-activity', 'all-students']

export const DEFAULT_STUDENT_MOBILE_CONFIG = ['home', 'schedule', 'acad-performance', 'all', 'profile']
export const DEFAULT_PPS_MOBILE_CONFIG = ['home', 'schedule', 'alerts', 'all', 'profile']
export const DEFAULT_STAFF_MOBILE_CONFIG = ['home', 'doclist', 'alerts', 'all', 'profile']

const getLeftsideBarConfig = (user: User | null, settings: UserSettings, adminLinks: AdminLinks | null): MenuType => {
    if (!user) return []

    const settingsMenuData = settings.customizeMenu.pages ?? REQUIRED_LEFTSIDE_BAR_CONFIG

    const uniqueRequiredTeacherMenuItems = REQUIRED_TEACHER_LEFTSIDE_BAR_CONFIG.filter(
        (item) => !settingsMenuData.includes(item),
    )

    const settingsDataToBeSet =
        user?.user_status === 'staff'
            ? Array.from(
                  new Set([
                      ...uniqueRequiredTeacherMenuItems,
                      ...(Object.values(adminLinks ?? {}).some((l) => l.length) ? ['download-agreements'] : []),
                      ...settingsMenuData,
                  ]),
              )
            : settingsMenuData

    return settingsDataToBeSet
}

const DEFAULT_STORE: Menu = {
    allRoutes: null,
    visibleRoutes: null,
    currentPage: null,
    isOpen: false,
}

const useMenu = () => {
    const menu = useUnit($menu)
    const homeRoutes = useUnit($homeRoutes)
    return { ...menu, homeRoutes }
}

const changeOpen = createEvent<{ isOpen: boolean; currentPage?: string }>()
const clearStore = createEvent()
const defineMenu = createEvent<{
    user: User | null
    adminLinks: AdminLinks | null
    homeRoutes?: string[]
    allowancesRoles: Role[]
}>()
const changeNotifications = createEvent<{ page: string; notifications: ((prev: number) => number) | number }>()

const getNewNotifications = (page: string, notifications: number, routes: IRoutes | null) => {
    const newRoutes = { ...routes }
    if (!!newRoutes[page]) newRoutes[page].notifications = notifications
    else return null

    return newRoutes
}

const filterTeachersPrivateRoutes = (adminLinks: AdminLinks | null, allowancesRoles: Role[]): IRoutes => {
    if (!adminLinks) {
        return employeeRoutes({ allowancesRoles })
    }

    const { accepts, agreements, checkdata, studLogins } = adminLinks

    const hasAdminLinks = !!accepts.length || !!agreements.length || !!checkdata.length || !!studLogins?.length

    const adminRoute = 'download-agreements'
    const filteredRoutes = Object.entries(employeeRoutes({ allowancesRoles })).filter(
        ([key]) => key !== adminRoute || (key === adminRoute && hasAdminLinks),
    )
    return Object.fromEntries(filteredRoutes)
}

const $leftSidebar = combine(
    userModel.stores.user,
    userSettingsModel.stores.userSettings,
    adminLinksModel.store,
    userModel.stores.roles,
    (user, settings, adminLinks, allowancesRoles) => {
        if (!user || !settings) return null

        return findRoutesByConfig(
            getLeftsideBarConfig(user, settings!, adminLinks.data),
            user?.user_status === 'staff'
                ? {
                      ...filterTeachersPrivateRoutes(adminLinks.data, allowancesRoles),
                      ...employeeHiddenRoutes({ allowancesRoles }),
                  }
                : { ...studentRoutes(), ...studentHiddenRoutes({ studentFinance: user.finance }) },
        )
    },
)

const $homeRoutes = combine(
    userModel.stores.user,
    userSettingsModel.stores.userSettings,
    adminLinksModel.store,
    userModel.stores.roles,
    (user, settings, adminLinks, allowancesRoles) => {
        if (!user || !settings) return null

        return findRoutesByConfig(
            settings?.homePage.pages ?? DEFAULT_HOME_CONFIG,
            user?.user_status === 'staff'
                ? {
                      ...filterTeachersPrivateRoutes(adminLinks.data, allowancesRoles),
                      ...employeeHiddenRoutes({ allowancesRoles }),
                  }
                : { ...studentRoutes(), ...studentHiddenRoutes({ studentFinance: user.finance }) },
        )
    },
)

sample({
    source: {
        userStore: userModel.stores.user,
        settings: userSettingsModel.stores.userSettings,
        adminLinks: adminLinksModel.store,
        allowancesRoles: userModel.stores.roles,
    },
    filter: ({ settings, userStore }) => {
        return Boolean(settings) && Boolean(userStore)
    },
    fn: ({ settings, adminLinks, userStore, allowancesRoles }) => ({
        homeRoutes: settings!.homePage.pages,
        user: userStore!,
        adminLinks: adminLinks.data!,
        allowancesRoles: allowancesRoles,
    }),
    target: defineMenu,
})

// todo: split to stores
const $menu = createStore<Menu>(DEFAULT_STORE)
    .on(changeOpen, (oldState, { isOpen, currentPage }) => ({
        ...oldState,
        currentPage: oldState.allRoutes && currentPage ? oldState.allRoutes?.[currentPage] : oldState.currentPage,
        isOpen: isOpen,
    }))
    .on(clearStore, () => ({
        ...DEFAULT_STORE,
    }))
    .on(defineMenu, (oldData, { user, adminLinks, allowancesRoles }) => ({
        ...oldData,
        currentPage:
            user?.user_status === 'staff'
                ? filterTeachersPrivateRoutes(adminLinks, allowancesRoles)[
                      window.location.hash.slice(2, window.location.hash.length)
                  ]
                : studentRoutes()[window.location.hash.slice(2, window.location.hash.length)],
        allRoutes:
            user?.user_status === 'staff'
                ? {
                      ...filterTeachersPrivateRoutes(adminLinks, allowancesRoles),
                      ...employeeHiddenRoutes({ allowancesRoles }),
                  }
                : { ...studentRoutes(), ...studentHiddenRoutes({ studentFinance: user?.finance }) },
        visibleRoutes:
            user?.user_status === 'staff' ? filterTeachersPrivateRoutes(adminLinks, allowancesRoles) : studentRoutes(),
    }))
    .on(changeNotifications, (oldData, { page, notifications }) => ({
        ...oldData,
        visibleRoutes: getNewNotifications(
            page,
            typeof notifications === 'number'
                ? (oldData.allRoutes ? oldData.allRoutes[page].notifications || 0 : 0) + notifications
                : notifications(oldData.visibleRoutes?.[page].notifications ?? 0),
            oldData.visibleRoutes,
        ),
    }))

export const selectors = {
    useMenu,
}

export const events = {
    changeOpen,
    clearStore,
    defineMenu,
    changeNotifications,
}

export const stores = {
    leftSidebar: $leftSidebar,
    menu: $menu,
    homeRoutes: $homeRoutes,
}
