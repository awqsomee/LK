import styled from 'styled-components'

import { MEDIA_QUERIES } from '../consts'
import { Direction } from '../types'

export interface StyledProps {
    width?: string
    maxWidth?: string
    orientation?: Direction
    background?: string
    gap?: string
    height?: string
    maxHeight?: string
    minHeight?: string
    justifyContent?: string
    alignItems?: string
    padding?: string
    shadow?: boolean
    noAppearanceInMobile?: boolean
    lineHeight?: string
}

const BlockWrapper = styled.div<StyledProps>`
    display: flex;
    align-items: ${({ alignItems }) => alignItems ?? 'center'};
    justify-content: ${({ justifyContent }) => justifyContent ?? 'space-between'};
    background: ${({ background }) => background ?? 'var(--block)'};
    line-height: ${({ lineHeight }) => lineHeight};
    border-radius: var(--brLight);
    flex-direction: ${({ orientation }) => (orientation === 'vertical' ? 'column' : 'row')};
    box-shadow: ${({ shadow }) => (shadow ?? true) && 'var(--very-mild-shadow)'};
    padding: ${({ padding }) => padding ?? '20px'};
    height: ${({ height }) => height ?? '330px'};
    max-width: ${({ maxWidth }) => (maxWidth ? `max(${maxWidth}, 800px)` : '800px')};
    width: ${({ width }) => width ?? '100%'};
    color: var(--text);
    gap: ${({ gap }) => gap ?? '0'};
    max-height: ${({ maxHeight }) => maxHeight};
    min-height: ${({ minHeight }) => minHeight};

    .list {
        width: 100%;
        display: flex;
        height: 100%;
        flex-direction: column;
        overflow-y: auto;
        padding-right: 5px;
    }

    ${MEDIA_QUERIES.isMobile} {
        flex-direction: column;
        box-shadow: ${({ noAppearanceInMobile }) => noAppearanceInMobile && 'none'};
        border-radius: ${({ noAppearanceInMobile }) => noAppearanceInMobile && 'none'};
        padding: ${({ noAppearanceInMobile }) => noAppearanceInMobile && '6px'};
        background: ${({ noAppearanceInMobile }) => noAppearanceInMobile && 'transparent'};
    }
`
export default BlockWrapper
