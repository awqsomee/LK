import { Link } from 'react-router-dom'

import styled from 'styled-components'

import { MEDIA_QUERIES } from '@shared/ui/consts'
import Flex from '@shared/ui/flex'

export const Header = styled.div<{ isEmployee: boolean }>`
    display: flex;
    flex-direction: column-reverse;
    color: #fff;
    min-height: 110px;
    width: 100%;
    padding-left: ${({ isEmployee }) => (isEmployee ? '125px' : '20px')};

    ${MEDIA_QUERIES.isNotMobile} {
        padding-left: ${({ isEmployee }) => (isEmployee ? '180px' : '0')};
    }

    @media (max-width: 800px) {
        padding-bottom: 0;
    }
`

export const Wrapper = styled.div`
    width: 700px;
    padding-bottom: 20px;
    /* padding: 40px 35px 20px 35px; */

    @media (max-width: 800px) {
        width: 100%;
        /* padding: 20px 16px 10px 36px; */
    }
`

export const Content = styled.div<{ isEmployee: boolean }>`
    display: flex;
    flex-direction: column;
    gap: 18px;
    min-width: 100%;
    padding: 60px 20px 10px 20px;

    ${MEDIA_QUERIES.isNotMobile} {
        padding: 35px 20px 10px ${({ isEmployee }) => (isEmployee ? '180px' : '0')};
    }
`

export const Title = styled.h3`
    font-size: 1.17rem;
    line-height: 28px;
`

export const Subtitle = styled.h4`
    opacity: 0.7;
    font-weight: 400;
    font-size: 1.17rem;
    line-height: 28px;
`

export const Buttons = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    gap: 8px;

    a {
        width: 100%;
    }
    button {
        width: 100%;
    }
`

export const AvatarWrapper = styled.div`
    position: absolute;
    top: 100px;
    left: 25px;
    z-index: 50;

    ${MEDIA_QUERIES.isMobile} {
        top: 95px;
        left: 10px;
    }
`

export const ScrollWrapper = styled(Flex)`
    overflow-x: hidden;
    padding-right: 10px;
    ${MEDIA_QUERIES.isNotMobile} {
        overflow-y: scroll;
        height: calc(100vh - 240px);
    }
    ${MEDIA_QUERIES.isTablet} {
        height: calc(100vh - 300px);
    }
`

export const LinkStyled = styled(Link)`
    width: 100%;
`
