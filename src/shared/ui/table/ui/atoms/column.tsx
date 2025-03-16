import { Property } from 'csstype'
import styled from 'styled-components'

import { Align } from '@shared/ui/types'

const Column = styled.div<{
    even?: boolean
    align?: Align | 'space-between'
    clickable?: boolean
    width?: string
    overflow?: string
    showFull?: boolean
    onRowClick?: () => void
    fontSize?: string
    dimmed?: boolean
    fw?: Property.FontWeight
    padding?: Property.Padding
}>`
    width: ${({ width }) => width ?? '100%'};
    min-width: ${({ width }) => width ?? 'auto'};
    padding: ${({ padding }) => padding ?? '20px'};
    height: 100%;
    text-align: ${({ align }) => align && align};
    cursor: ${({ clickable }) => clickable && 'pointer'};
    overflow: ${({ overflow }) => overflow ?? 'hidden'};
    display: block;
    white-space: ${({ showFull }) => (showFull ? 'wrap' : 'nowrap')};
    text-overflow: ${({ showFull }) => (showFull ? 'clip' : 'ellipsis')};
    position: relative;
    font-size: ${({ fontSize }) => fontSize};

    @media (max-width: 700px) {
        padding: ${({ clickable, padding }) => !clickable && (padding ?? '10px')};
    }

    opacity: ${({ dimmed }) => dimmed && 0.5};
    font-weight: ${({ fw }) => fw};
`

export default Column
