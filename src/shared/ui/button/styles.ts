import styled from 'styled-components'

import { MEDIA_QUERIES } from '../consts'
import { Align, Direction } from '../types'

export const ButtonWrapper = styled.button<{
    text: boolean
    isChosen?: boolean
    width?: string
    minWidth?: string
    background?: string
    padding?: string
    textColor?: string
    shrinkTextInMobile?: boolean
    hoverBackground?: string
    hoverTextColor?: string
    direction?: Direction
    align?: Align
    isActive: boolean
    fixedInMobile?: boolean
    height?: string
    fontSize?: string
    flipped?: boolean
    radius?: string
}>`
    display: flex;
    align-items: center;
    justify-content: ${({ align = 'center' }) => align};
    border: none;
    color: ${({ textColor }) => (textColor ? textColor : 'var(--text)')};
    background: ${({ isChosen, background }) => (isChosen ? 'var(--reallyBlue)' : (background ?? 'var(--search)'))};
    padding: ${({ padding }) => padding ?? '10px'};
    font-size: ${({ fontSize }) => fontSize};
    cursor: pointer;
    font-weight: 600;
    transition: 0.2s transform;
    width: ${({ width }) => (width ? width : 'fit-content')};
    min-width: ${({ minWidth }) => minWidth && minWidth};
    text-decoration: none;
    flex-direction: ${({ direction }) => direction === 'vertical' && 'column'};
    opacity: ${({ isActive }) => (isActive ? 1 : 0.5)};
    height: ${({ height = '40px' }) => height};
    ${({ flipped }) => flipped && 'transform: rotate(180deg);'};
    border-radius: ${({ radius }) => radius ?? '10px'};

    &:focus {
        outline: 4px solid var(--almostTransparentOpposite);
    }

    &:focus:not(:focus-visible) {
        outline: none;
    }

    &:isactive {
        transform: scale(0.95);
    }

    &:hover {
        background: ${({ hoverBackground, isChosen, background }) =>
            hoverBackground ?? (isChosen ? 'var(--blue)' : (background ?? 'var(--search)'))};
        filter: brightness(0.9);
        color: ${({ hoverTextColor }) => hoverTextColor};
    }

    .text {
        margin-top: ${({ direction, text }) => direction === 'vertical' && text && '6px'};
    }

    .icon {
        margin-right: ${({ text, direction }) => (text && direction === 'horizontal' ? '7px' : '0')};
        width: ${({ direction, text }) => (direction === 'vertical' || !text ? '20px' : 'fit-content')};
        min-width: ${({ direction, text }) => (direction === 'vertical' || !text ? '20px' : 'fit-content')};
        height: ${({ direction, text }) => (direction === 'vertical' || !text ? '20px' : '15px')};
        display: flex;
        align-items: center;
        justify-content: center;
        background: transparent;

        svg {
            width: 100%;
            height: 100%;
            max-width: 18px;
            max-height: 18px;
            margin-right: 0 !important;
        }
    }

    ${MEDIA_QUERIES.isTablet} {
        font-size: 12px;
        height: ${({ height = '36px' }) => height};
        position: ${({ fixedInMobile }) => fixedInMobile && 'absolute'};
        z-index: ${({ fixedInMobile }) => fixedInMobile && '5'};
        bottom: 10px;
        right: 10px;

        .text {
            margin-top: ${({ direction, shrinkTextInMobile }) =>
                direction === 'vertical' && !shrinkTextInMobile ? '4px' : '0px'};
        }

        .icon {
            width: ${({ direction }) => (direction === 'vertical' ? '30px' : '15px')};
            min-width: ${({ direction }) => (direction === 'vertical' ? '30px' : '15px')};

            margin-right: ${({ shrinkTextInMobile, text, direction }) =>
                shrinkTextInMobile || direction === 'vertical' || !text ? '0px' : '7px'};
            height: ${({ direction }) => (direction === 'vertical' ? '30px' : '15px')};

            svg {
                max-width: 23px;
                /* max-height: 23px; */
            }
        }

        span {
            display: ${({ shrinkTextInMobile }) => (shrinkTextInMobile ? 'none' : 'flex')};
        }
    }
`

// TODO: create basic Button component
export const ButtonBase = styled.button<{ w?: string; size?: number; margin?: string; c?: string }>`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    width: ${({ w }) => w};
    min-width: ${({ size }) => (size ? size / 16 + 'rem' : undefined)};
    min-height: ${({ size }) => (size ? size / 16 + 'rem' : undefined)};
    margin: ${({ margin }) => margin};
    color: ${({ c }) => c ?? 'var(--text)'};
    border-radius: var(--brLight);
    outline: none;
    border: none;
    text-wrap: nowrap;

    transition: all 200ms;

    &:not(:disabled):hover {
        filter: brightness(0.9);
        cursor: pointer;
    }

    &:disabled {
        opacity: 0.5;
    }

    &:focus {
        outline: 0.25rem solid var(--almostTransparentOpposite);
    }

    &:focus:not(:focus-visible) {
        outline: none;
    }

    ${MEDIA_QUERIES.isTablet} {
        font-size: 0.8em;
    }
`
