import React, { Suspense, useRef, useState } from 'react'

<<<<<<<< HEAD:src/app/routing/content-layout/index.tsx
import { useScrollToTop } from '@app/routing/hooks/use-scroll-to-top'
import PrivateRouter from '@app/routing/private-router'

import ConfirmMessage from '@widgets/confirm'
import Header from '@widgets/header'
import HintModal from '@widgets/hint-modal'
import { LeftSideBarTutorial } from '@widgets/navbar/leftside-bar'
import MobileBottomMenu from '@widgets/navbar/mobile-bottom-menu'
import PopUpMessage from '@widgets/pop-up-message'
import PopUpNotifications from '@widgets/pop-up-notifications'

import ContextMenu from '@features/context-menu'

import { menuModel } from '@entities/menu'

import { userModel } from '@shared/session'
import { TutorialHero } from '@shared/tutorial/ui/tutorial-hero'
import ErrorBoundary from '@shared/ui/error-boundary'
import { Modal } from '@shared/ui/modal'

import InitialLoader from '../../../shared/ui/initial-loader'
import Story from '../../../widgets/story'
========
import { Confirm, HintModal, MobileBottomMenu, PopUpMessage } from 'widgets'
import ContextMenu from 'widgets/context-menu'
import Header from 'widgets/header'
import { Modal } from 'widgets/modal'
import PopUpNotifications from 'widgets/pop-up-notifications'
import { TutorialHero } from 'widgets/tutorial'
import { LeftSideBarTutorial } from 'widgets/tutorial/tutorials/left-sidebar-tutorial'

import PrivateRouter from '@app/routers/private-router'

import { menuModel } from '@entities/menu'
import { userModel } from '@entities/user'

import { useScrollToTop } from '@shared/lib/hooks/use-scroll-to-top'
import ErrorBoundary from '@shared/ui/error-boundary'

import InitialLoader from '../../shared/ui/initial-loader'
import Story from '../../shared/ui/story'
>>>>>>>> master:src/widgets/content-layout/index.tsx
import useContentLayout from './hooks/use-content-layout'
import { ContentWrapper, PageContent } from './styled'

const ContentLayout = () => {
    const {
        data: { user },
    } = userModel.selectors.useUser()
    const pageContentRef = useRef<HTMLDivElement>(null)
    const { allRoutes } = menuModel.selectors.useMenu()
    const { currentPage } = useContentLayout()
    const [headerVisible, setHeaderVisible] = useState<boolean>(false)

    const handleContentScroll = (e: React.UIEvent<HTMLDivElement, UIEvent>) => {
        setHeaderVisible(e.currentTarget.scrollTop > 0)
    }

    // const [isScrolled, setIsScrolled] = useState(false)

    // useEffect(() => {
    //     const handleScroll = () => {
    //         setIsScrolled(window.scrollY > 0)
    //     }

    //     window.addEventListener('scroll', handleScroll)

    //     return () => {
    //         window.removeEventListener('scroll', handleScroll)
    //     }
    // }, [])

    useScrollToTop(pageContentRef.current!)

    return (
        <>
            <InitialLoader loading={!user || !allRoutes} />
            <Story />
            <LeftSideBarTutorial
            // tutorialModule={{ id: 'sidebar', step: 0, params: { noPadding: true } }}
            />

            <ContentWrapper>
                <Header noTitle={currentPage?.hiddenTitle} headerVisible={headerVisible} currentPage={currentPage} />
                <PageContent
                    ref={pageContentRef}
                    onScroll={handleContentScroll}
                    withHeader={!currentPage?.withoutHeader}
                >
                    <ErrorBoundary>
                        <Suspense fallback={null}>
                            <PrivateRouter />
                        </Suspense>
                    </ErrorBoundary>
                </PageContent>
                <MobileBottomMenu />
            </ContentWrapper>
            <Modal />
            <PopUpMessage />
            <ConfirmMessage />
            <ContextMenu />
            <HintModal />
            <TutorialHero />
            <PopUpNotifications />
        </>
    )
}

export default React.memo(ContentLayout)
