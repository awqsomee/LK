import React, { Suspense } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'

import { useUnit } from 'effector-react'

import ContentLayout from '@app/routing/content-layout'
import { useScrollToTop } from '@app/routing/hooks/use-scroll-to-top'

import { LOGIN_ROUTE } from '@shared/routing'
import { publicRoutes } from '@shared/routing/routes/public'
import { userModel } from '@shared/session'
import { useSetTutorial } from '@shared/tutorial/lib/use-set-tutorial'

import { useRedirect } from './hooks/use-redirect'
import { publicPages } from './routes/public'

const Router = () => {
    useScrollToTop(window) // scroll window to top when change route
    useRedirect() // redirect on broken links
    useSetTutorial()
    const isAuthenticated = useUnit(userModel.stores.isAuthenticated)

    return isAuthenticated ? (
        <ContentLayout />
    ) : (
        <Suspense fallback={null}>
            <Switch>
                {publicRoutes.map(({ path, id }, i) => {
                    return <Route path={path} component={publicPages[id]} exact={true} key={i} />
                })}
                <Redirect exact to={LOGIN_ROUTE} />
            </Switch>
        </Suspense>
    )
}

export default Router
