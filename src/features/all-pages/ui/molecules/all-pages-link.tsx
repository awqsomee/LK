import React from 'react'
import { FiArrowRight } from 'react-icons/fi'
import { Link } from 'react-router-dom'

import styled from 'styled-components'

import { menuModel } from '@entities/menu'

import { ALL_ROUTE } from '@shared/routing'

import Icon from '../../../../shared/ui/icon/icon'
import { PageLinkWrapper } from './page-link-content'

const AllPagesLinkWrapper = styled(PageLinkWrapper)`
    box-shadow: none;
    color: var(--blue);
    background: transparent;
`

const AllPagesLink = () => {
    return (
        <Link
            to={ALL_ROUTE}
            onClick={() => {
                menuModel.events.changeOpen({ isOpen: false, currentPage: ALL_ROUTE.slice(1, ALL_ROUTE.length) })
            }}
        >
            <AllPagesLinkWrapper
                padding="0"
                width="125px"
                height="135px"
                isVertical={true}
                justifyContent="center"
                color={'blue'}
                hasNotifications={false}
            >
                <div className="outside">
                    <Icon color={'blue'}>
                        <FiArrowRight />
                    </Icon>
                    <b>Все разделы</b>
                </div>
            </AllPagesLinkWrapper>
        </Link>
    )
}

export default AllPagesLink
