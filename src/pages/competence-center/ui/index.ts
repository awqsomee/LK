import { Link } from 'react-router-dom'

import { Property } from 'csstype'
import styled from 'styled-components'

import { ButtonBase } from '@shared/ui'
import { MEDIA_QUERIES } from '@shared/ui/consts'

export const OutlinedButton = styled(ButtonBase)`
    font-weight: 600;
    line-height: 1.125rem;
    padding: 1rem 1.25rem;

    background-color: transparent;
    border: 1px solid var(--reallyBlue);

    ${MEDIA_QUERIES.isMobile} {
        width: 100%;
        padding-block: 0.75rem;
        line-height: 0.75rem;
    }
`
export const Button = styled(ButtonBase)<{ p?: string }>`
    font-weight: 600;
    font-size: 0.9rem;
    line-height: 1.125rem;
    padding: ${({ p }) => p ?? '1rem 1.25rem'};

    background-color: var(--reallyBlue);

    ${MEDIA_QUERIES.isMobile} {
        line-height: 0.75rem;
    }
`

export const IconLink = styled(Link)`
    color: var(--text);
    height: fit-content;
    line-height: 0;
    background: transparent;
`

export const IconButton = styled(ButtonBase)<{
    bg?: Property.Background
    bd?: Property.Border
    c?: Property.Color
    size?: number
}>`
    color: var(--text);
    line-height: 0;
    background: ${({ bg }) => bg ?? 'transparent'};
    border: ${({ bd }) => bd ?? 'none'};
    color: ${({ c }) => c ?? 'var(--text)'};
    min-width: ${({ size }) => (size ? size / 16 + 'rem' : 'auto')};
    min-height: ${({ size }) => (size ? size / 16 + 'rem' : 'auto')};
`

export const ButtonLink = styled(Link)`
    text-align: center;
    padding: 1rem 1.25rem;
    font-weight: 600;
    font-size: 0.83125rem;
    line-height: 1rem;
    border-radius: 0.5rem;

    color: #90b3e7;

    &:hover {
        text-decoration: underline;
    }

    ${MEDIA_QUERIES.isMobile} {
        padding: 0.75rem;
        line-height: 0.75rem;
    }
`
export const Text = styled.p<{ mw?: Property.MaxWidth }>`
    max-width: 37.5rem;
    font-size: 0.9rem;
    line-height: 1.3rem;
    ${MEDIA_QUERIES.isMobile} {
        font-size: 0.8rem;
    }
`
export const DimmedButton = styled(ButtonBase)`
    padding: 0.625rem;
    color: var(--theme-mild-opposite);
    border: 1px solid var(--theme-mild-opposite);
    font-weight: 600;
    background: transparent;
`

export const Stack = styled.div<{
    gap?: number
    justify?: Property.JustifyContent
    align?: Property.AlignItems
    w?: string
    h?: string
}>`
    position: relative;
    max-width: 100%;
    width: ${({ w }) => w};
    height: ${({ h }) => h};

    display: flex;
    flex-direction: column;
    gap: ${({ gap }) => (gap ? gap / 16 + 'rem' : '1rem')};
    justify-content: ${({ justify }) => justify};
    align-items: ${({ align }) => align};
`
