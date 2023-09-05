import { SCHEDULE_CURRENT_ROUTE, SCHEDULE_RETAKE_ROUTE, scheduleRoutes } from '@app/routes/general-routes'
import { menuModel } from '@entities/menu'
import { scheduleModel } from '@entities/schedule'
import { VIEWS } from '@entities/schedule/consts'
import Flex from '@shared/ui/flex'
import PageBlock from '@shared/ui/page-block'
import { Button, Wrapper } from '@ui/atoms'
import React from 'react'
import { FiSidebar } from 'react-icons/fi'
import { Redirect, Route, Switch, useLocation } from 'react-router'
import { Slider } from 'widgets'
import useSchedule from './hooks/use-schedule'
import { SideMenu } from './ui/side-menu'

const Schedule = () => {
    const {
        data: { view, schedule, externalSchedule },
        loading,
        error,
    } = scheduleModel.selectors.useSchedule()
    const { allRoutes } = menuModel.selectors.useMenu()
    const { isSideMenuOpen, handleLoad, handleOpenSideMenu } = useSchedule()
    const location = useLocation()

    return (
        <Wrapper loading={loading} load={handleLoad} error={error} data={loading ? externalSchedule : schedule}>
            <PageBlock
                topCenterElement={
                    location.pathname !== SCHEDULE_RETAKE_ROUTE && (
                        <Slider
                            size="small"
                            sliderWidth="240px"
                            pages={VIEWS}
                            currentPage={view}
                            setCurrentPage={scheduleModel.events.changeView}
                        />
                    )
                }
                topRightCornerElement={
                    <Flex w="fit-content" gap="8px">
                        <Button icon={<FiSidebar />} width="36px" height="36px" onClick={handleOpenSideMenu} />
                    </Flex>
                }
            >
                {allRoutes && (
                    <Flex gap="16px" ai="flex-start">
                        {isSideMenuOpen && <SideMenu />}
                        <Switch>
                            {Object.keys(scheduleRoutes ?? {}).map((key) => {
                                const { path, id, Component } = scheduleRoutes[key]
                                return (
                                    <Route exact key={id} path={path}>
                                        {<Component />}
                                    </Route>
                                )
                            })}
                            <Redirect to={SCHEDULE_CURRENT_ROUTE} />
                        </Switch>
                    </Flex>
                )}
            </PageBlock>
        </Wrapper>
    )
}

export default Schedule
