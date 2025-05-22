import styled from 'styled-components'

import { INPUT_HEIGHT } from '@shared/ui/input-size'
import { getValueFromSize } from '@shared/ui/slider/lib/get-value-from-size'
import { Size } from '@shared/ui/types'

const SelectWrapper = styled.div<{
    isOpen: boolean
    isActive: boolean
    width?: string
    appearance: boolean
    size: Size
}>`
    max-width: ${({ width }) => width ?? '155px'};
    width: 100%;
    min-width: 50px;

    min-height: ${getValueFromSize(INPUT_HEIGHT)};

    position: relative;
    user-select: none;
    font-weight: 599;
    white-space: nowrap;
    font-size: ${({ appearance }) => appearance && '0.9em'};
    z-index: ${({ isOpen }) => (isOpen ? 5 : 2)};
    opacity: ${({ isActive }) => !isActive && 0.7};
    pointer-events: ${({ isActive }) => !isActive && 'none'};

    color: var(--text);
    cursor: pointer;
    transition: 0.3s;

    &:focus {
        outline: 4px solid var(--almostTransparentOpposite);
    }

    &:focus:not(:focus-visible) {
        outline: none;
    }
`

export default SelectWrapper
