import React, { useEffect } from 'react'

import { useUnit } from 'effector-react'
import styled from 'styled-components'

import AlertsWidget from '@widgets/alerts-widget'
import UserInfo from '@widgets/user-info'

import ScheduleAndNotification from '@features/home/ui/organisms/schedule-and-notification'
import { GlobalAppSearchTutorial } from '@features/tutorials/global-app-search-tutorial'
import { LinksTutorial } from '@features/tutorials/links-tutorial'

import { menuModel } from '@entities/menu'
import { paymentsModel } from '@entities/payments'
import { scheduleModel } from '@entities/schedule'
import { userSettingsModel } from '@entities/settings'

import { userModel } from '@shared/session'
import { withTutorial } from '@shared/tutorial/lib/with-tutorial'
import { TutorialActionPlate } from '@shared/tutorial/ui/tutorial-action-plate'
import { CenterPage, Title } from '@shared/ui/atoms'
import Block from '@shared/ui/block'
import Flex from '@shared/ui/flex'
import { TutorialComponent } from '@shared/ui/types'

const HomePageStyled = styled.div`
    width: 100%;
    padding-top: 160px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 12px;

    @media (max-width: 1000px) {
        padding-top: 153px;
    }
`
export const HomePage = ({ forwardedRef }: TutorialComponent) => {
    const {
        data: { user },
    } = userModel.selectors.useUser()

    const { homeRoutes } = menuModel.selectors.useMenu()
    const settings = useUnit(userSettingsModel.stores.userSettings)
    const news = settings?.homePage.hasNews

    const payments = useUnit(paymentsModel.stores.$paymentsStore)
    const {
        data: { schedule },
    } = scheduleModel.selectors.useSchedule()

    useEffect(() => {
        if (!payments) {
            paymentsModel.events.getPayments()
        }
    }, [payments])

    useEffect(() => {
        if (!schedule) {
            scheduleModel.effects.getScheduleFx(user)
        }
    }, [schedule])

    if (!homeRoutes) return null
    return (
        <HomePageStyled>
            <GlobalAppSearchTutorial tutorialModule={{ id: 'home', step: 1, params: { position: 'bottom' } }} />
            <LinksTutorial
                tutorialModule={{ id: 'home', step: 2, params: { position: 'bottom' } }}
                links={homeRoutes}
            />
            <TutorialActionPlate />
            <CenterPage>
                <Block
                    forwardedRef={forwardedRef}
                    noAppearanceInMobile
                    maxWidth="750px"
                    minHeight="100%"
                    height="100%"
                    orientation="vertical"
                    gap="20px"
                >
                    <Flex>
                        <Title size={2} align="left" width="100%">
                            Главная
                        </Title>
                        <UserInfo />
                    </Flex>
                    <ScheduleAndNotification />
                    {!!news && <AlertsWidget />}
                </Block>
            </CenterPage>
        </HomePageStyled>
    )
}

export const HomePageTutorial = withTutorial(HomePage)
