import React, { useEffect, useLayoutEffect, useState } from 'react'
import { useHistory, useLocation } from 'react-router'

import { getEnrichedTemplatePath } from '@entities/menu/lib/get-enriched-template-path'
import { scheduleModel } from '@entities/schedule'

import { View } from '@shared/api/model'
import { TIME_IN_MS } from '@shared/consts'
import {
    SCHEDULE_FILTER_ROUTE,
    SCHEDULE_RETAKE_ROUTE,
    SCHEDULE_SEMESTR_ROUTE,
    SCHEDULE_SESSION_ROUTE,
} from '@shared/routing'
import { userModel } from '@shared/session'
import Flex from '@shared/ui/flex'
import useCurrentDevice from '@shared/ui/hooks/use-current-device'
import { useModal } from '@shared/ui/modal'
import { popUpMessageModel } from '@shared/ui/pop-up-message'
import { Hint } from '@shared/ui/search'

import { SideMenuContent } from '../ui/side-menu/side-menu-content'

const useSchedule = () => {
    const {
        data: { user },
    } = userModel.selectors.useUser()
    const {
        data: { filter, view, errorInData },
    } = scheduleModel.selectors.useSchedule()

    const { isTablet, isMobile } = useCurrentDevice()
    const [isSideMenuOpen, setIsSideMenuOpen] = useState(true)
    const location = useLocation()
    const history = useHistory()
    const shouldShowSlider = location.pathname !== SCHEDULE_RETAKE_ROUTE
    const splitted = location.pathname.split('/')
    const urlFilter = splitted.length === 4 ? splitted[splitted.length - 1] : null
    const isGroup = urlFilter ? /\d/.test(urlFilter) : false
    const baseSearchValue = user?.user_status === 'staff' ? (user?.fullName ?? '') : (user?.group ?? '')
    const isSessionPage = location.pathname.includes(SCHEDULE_SESSION_ROUTE)
    const isSemestrPage = location.pathname.includes(SCHEDULE_SEMESTR_ROUTE)
    const showMonth = isSessionPage || isSemestrPage
    const { open } = useModal()

    const handleReturnToMySchedule = () => {
        if (filter) {
            history.push(getEnrichedTemplatePath(SCHEDULE_FILTER_ROUTE, { page: location.pathname.split('/')[2] }))
        }

        scheduleModel.events.setSearchValue(baseSearchValue)
        scheduleModel.events.setFilter('')
        scheduleModel.events.resetExternalSchedule()
    }

    useLayoutEffect(() => {
        if (view === View.month && !showMonth) {
            scheduleModel.events.changeView(View.day)
        }
    }, [view, showMonth])

    useEffect(() => {
        if (isMobile || isTablet) {
            setIsSideMenuOpen(false)
        } else {
            setIsSideMenuOpen(true)
        }
    }, [isTablet, isMobile])

    useEffect(() => {
        if (urlFilter) {
            scheduleModel.events.setFilter(urlFilter)
            scheduleModel.events.setSearchValue(urlFilter)
            if (isGroup) {
                scheduleModel.effects.getGroupScheduleFx({ group: urlFilter })
            } else {
                scheduleModel.effects.getTeacherScheduleFx({ fullName: urlFilter })
            }
        } else {
            handleReturnToMySchedule()
        }
    }, [urlFilter])

    useEffect(() => {
        return () => {
            scheduleModel.events.resetExternalSchedule()
        }
    }, [])

    const handleLoad = () => {
        scheduleModel.effects.getScheduleFx(user)
    }

    const onHintClick = () => {
        return (hint: Hint | undefined) => {
            if (hint?.id === user?.group) {
                handleReturnToMySchedule()
            }
            if (hint?.id) {
                location.pathname.split('/')[2] === 'retake'
                    ? history.push(
                          getEnrichedTemplatePath(SCHEDULE_FILTER_ROUTE, {
                              page: 'current',
                              filter: hint.value,
                          }),
                      )
                    : history.push(
                          getEnrichedTemplatePath(SCHEDULE_FILTER_ROUTE, {
                              page: location.pathname.split('/')[2],
                              filter: hint.value,
                          }),
                      )
            }
        }
    }

    const handleValue = (value: string) => {
        scheduleModel.events.setSearchValue(value)
    }

    const handleOpenSideMenu = () => {
        if (isMobile) {
            open(
                <Flex d="column" gap="8px" ai="flex-start">
                    <SideMenuContent
                        isSideMenuOpen
                        baseSearchValue={baseSearchValue}
                        handleReturnToMySchedule={handleReturnToMySchedule}
                        onHintClick={onHintClick}
                        handleValue={handleValue}
                    />
                </Flex>,
            )
        } else {
            setIsSideMenuOpen((prev) => !prev)
        }
    }

    const handleErrorClick = () => {
        popUpMessageModel.events.evokePopUpMessage({
            message: errorInData,
            type: 'failure',
            time: TIME_IN_MS.ten_seconds,
        })
    }

    return {
        isSideMenuOpen,
        shouldShowSlider,
        isMobile,
        isSessionPage,
        baseSearchValue,
        showMonth,
        handleErrorClick,
        handleValue,
        onHintClick,
        handleReturnToMySchedule,
        handleLoad,
        handleOpenSideMenu,
    }
}

export default useSchedule
