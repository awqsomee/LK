import styled from 'styled-components'

import { Colors } from '@shared/consts'

const RowWrapper = styled.div<{ even?: boolean; height?: string }>`
    display: flex;
    align-items: center;
    width: 100%;
    font-size: 0.9em;
    cursor: pointer;
    background: ${({ even }) => (!even ? 'var(--theme)' : `${Colors.blue.transparent3}`)};
    height: ${({ height }) => height};
    &:hover {
        filter: brightness(0.98);
    }

    .five {
        display: none;
    }

    @media (max-width: 650px) {
        font-size: 0.9em;

        .four {
            display: none;
        }
    }

    @media (max-width: 550px) {
        .three {
            display: none;
        }
    }

    @media (max-width: 450px) {
        .two {
            display: none;
        }
    }
`

export default RowWrapper
