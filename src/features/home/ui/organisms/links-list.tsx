import React from 'react'

import AllPagesLink from '@features/all-pages/ui/molecules/all-pages-link'

import { IRoutes } from '@shared/routing'
import Flex from '@shared/ui/flex'
import { Title } from '@shared/ui/title'
import { Align } from '@shared/ui/types'

import PageLink, { PageLinkProps } from '../../../all-pages/ui/molecules/page-link'

type Props = Pick<PageLinkProps, 'orientation' | 'shadow' | 'mode' | 'background'> & {
    links: IRoutes
    title?: string
    align?: Align
    doNotShow?: string
    wrapOnMobile?: boolean
}

const LinksList = ({ title, links, doNotShow, orientation, background, shadow = true, mode }: Props) => {
    return (
        <Flex d="column">
            <Title size={4} align="left" bottomGap>
                {title}
            </Title>
            <Flex gap="8px" $wrap>
                {Object.values(links).map((el) => {
                    if (el?.show !== false && doNotShow !== el?.id)
                        return (
                            <PageLink
                                background={background}
                                orientation={orientation}
                                key={el.id}
                                mode={mode}
                                shadow={shadow}
                                {...el}
                                color={el.color?.length ? el.color : 'blue'}
                            />
                        )
                })}
                {doNotShow !== 'all' && <AllPagesLink />}
            </Flex>
        </Flex>
    )
}

export default LinksList
