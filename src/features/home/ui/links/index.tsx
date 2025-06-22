import React, { useEffect, useState } from 'react'

import styled from 'styled-components'

import { menuModel } from '@entities/menu'

import { IRoutes } from '@shared/routing'
import { Divider } from '@shared/ui/divider'
import { TutorialComponent } from '@shared/ui/types'

import LinkItem from './link-item'

const LinksStyled = styled.div<{ componentHeight?: number }>`
    width: 100%;
    display: flex;
    align-items: center;
    max-width: 800px;
    border-radius: var(--brLight);
    background: var(--block);
    box-shadow: var(--very-mild-shadow);
    overflow-y: hidden;
    height: ${({ componentHeight }) =>
        !!componentHeight && componentHeight > 33
            ? '120px'
            : !!componentHeight && componentHeight > 10
              ? '110px'
              : '100px'};

    @media (max-width: 1000px) {
        height: ${({ componentHeight }) =>
            !!componentHeight && componentHeight > 33
                ? '100px'
                : !!componentHeight && componentHeight > 10
                  ? '90px'
                  : '75px'};
    }
`

type Props = {
    links: IRoutes
} & TutorialComponent

const Links = ({ links, forwardedRef }: Props) => {
    const linksKeysArray = Object.keys(links)
    const { allRoutes } = menuModel.selectors.useMenu()

    const [longestTitleLength, setLongestTitleLength] = useState(0)

    if (!allRoutes) return null

    useEffect(() => {
        const longestTitle = linksKeysArray.reduce((a, b) =>
            (links[a].title?.length ?? 0) > (links[b].title?.length ?? 0) ? a : b,
        )
        setLongestTitleLength(links[longestTitle].title?.length ?? 0)
    }, [linksKeysArray])

    const linksAmount = Object.keys(links).length

    return (
        <LinksStyled ref={forwardedRef} componentHeight={longestTitleLength}>
            {linksKeysArray.map((key, index) => {
                return (
                    <React.Fragment key={key}>
                        <LinkItem amount={linksAmount} item={links[key]} />
                        {index !== linksKeysArray.length - 1 && (
                            <Divider direction="vertical" margin="10px 0" width="70%" />
                        )}
                    </React.Fragment>
                )
            })}
            <Divider direction="vertical" margin="10px 0" width="70%" />
            <LinkItem amount={linksAmount} item={allRoutes['all']} />
        </LinksStyled>
    )
}

export default Links
