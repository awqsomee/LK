import React from 'react'
import { useLocation } from 'react-router'

import styled from 'styled-components'

import { useScheduleWidget } from '@features/home/ui/schedule-widget/hooks/use-schedule-widget'

import { menuModel } from '@entities/menu'
import {
    DEFAULT_PPS_MOBILE_CONFIG,
    DEFAULT_STAFF_MOBILE_CONFIG,
    DEFAULT_STUDENT_MOBILE_CONFIG,
} from '@entities/menu/model'

import { userModel } from '@shared/session'
import { MEDIA_QUERIES } from '@shared/ui/consts'
import Flex from '@shared/ui/flex'
import { ListWrapper } from '@shared/ui/list/styles'
import { SkeletonShape } from '@shared/ui/skeleton-shape'

import { LeftsideBarItem } from '../leftside-bar/ui'

const MobileBottomMenuWrapper = styled(ListWrapper)`
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    will-change: transform;
    transform: translateZ(0);
    display: flex;
    height: var(--mobile-bottom-menu-height);

    width: 100%;
    background: var(--block);
    border-top: 1px solid var(--theme-2);
    padding: 0px 10px;

    display: none;

    ${MEDIA_QUERIES.isTablet} {
        display: flex;
    }
`

const LinkSkeleton = () => {
    return (
        <Flex d="column" gap="8px">
            <SkeletonShape shape="circle" size={{ width: '20px', height: '20px' }} margin="0" />
            <SkeletonShape shape="rect" size={{ width: '35px', height: '10px' }} margin="0" />
        </Flex>
    )
}

const MobileBottomMenu = () => {
    const { allRoutes } = menuModel.selectors.useMenu()
    const {
        data: { user },
    } = userModel.selectors.useUser()
    const { hasNoSchedule, loading } = useScheduleWidget()
    const location = useLocation()

    if (!allRoutes || !user || loading) {
        return (
            <MobileBottomMenuWrapper direction="horizontal" horizontalAlign="evenly" verticalAlign="center">
                <LinkSkeleton />
                <LinkSkeleton />
                <LinkSkeleton />
                <LinkSkeleton />
                <LinkSkeleton />
            </MobileBottomMenuWrapper>
        )
    }

    const config =
        user?.user_status === 'stud'
            ? DEFAULT_STUDENT_MOBILE_CONFIG
            : hasNoSchedule
              ? DEFAULT_STAFF_MOBILE_CONFIG
              : DEFAULT_PPS_MOBILE_CONFIG

    return (
        <MobileBottomMenuWrapper direction="horizontal" horizontalAlign="evenly">
            {config.map((id) => {
                const isCurrent = allRoutes[id] ? location.pathname.includes(allRoutes[id].path) : false
                return <LeftsideBarItem key={id} {...allRoutes[id]} isCurrent={isCurrent} />
            })}
        </MobileBottomMenuWrapper>
    )
}

export default MobileBottomMenu
