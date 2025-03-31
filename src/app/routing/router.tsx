import React, { Suspense, useRef, useState } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'

import { useUnit } from 'effector-react'

import ContentLayout from '@app/routing/content-layout'
import { useScrollToTop } from '@app/routing/hooks/use-scroll-to-top'

import Header from '@widgets/header'

import { LOGIN_ROUTE } from '@shared/routing'
import { publicRoutes } from '@shared/routing/routes/public'
import { userModel } from '@shared/session'
import { useSetTutorial } from '@shared/tutorial/lib/use-set-tutorial'

import useContentLayout from './content-layout/hooks/use-content-layout'
import { ContentWrapper, PageContent } from './content-layout/styled'
import { useRedirect } from './hooks/use-redirect'
import { publicPages } from './routes/public'

const Router = () => {
    useScrollToTop(window) // scroll window to top when change route
    useRedirect() // redirect on broken links
    useSetTutorial()
    const pageContentRef = useRef<HTMLDivElement>(null)
    useScrollToTop(pageContentRef.current!)
    const { currentPage } = useContentLayout()
    const [headerVisible, setHeaderVisible] = useState<boolean>(false)

    const handleContentScroll = (e: React.UIEvent<HTMLDivElement, UIEvent>) => {
        setHeaderVisible(e.currentTarget.scrollTop > 0)
    }

    const isAuthenticated = useUnit(userModel.stores.isAuthenticated)

    return isAuthenticated ? (
        <ContentLayout />
    ) : (
        <ContentWrapper>
            <Header noTitle={currentPage?.hiddenTitle} headerVisible={headerVisible} currentPage={currentPage} />
            <PageContent ref={pageContentRef} onScroll={handleContentScroll} withHeader={!currentPage?.withoutHeader}>
                <Suspense fallback={null}>
                    <Switch>
                        {publicRoutes.map(({ path, id }, i) => {
                            return <Route path={path} component={publicPages[id]} exact={true} key={i} />
                        })}
                        <Redirect exact to={LOGIN_ROUTE} />
                    </Switch>
                </Suspense>
            </PageContent>
        </ContentWrapper>
    )
}

export default Router
