import React from 'react'

import styled from 'styled-components'

import { ITimeIntervalColor, TimeIntervalColor, TimeIntervals } from '@shared/api/model'

const TimeWrapper = styled.span<{
    isCurrent: boolean
    color2: string
    darkColor: string
    transparent: string
}>`
    padding: 3px 10px;
    height: 21px;
    display: flex;
    align-items: center;
    background: var(--search);
    background: ${({ isCurrent, darkColor, color2 }) => (isCurrent ? darkColor : color2)};
    border-radius: 100px;
    /* box-shadow: ${({ transparent }) => `0 0 30px ${transparent}`}; */
    color: #fff;
    white-space: nowrap;
`

interface Props {
    timeInterval: TimeIntervals
    isCurrent: boolean
    differentTimeZone?: boolean
}

const Time = ({ timeInterval, isCurrent, differentTimeZone = false }: Props) => {
    return (
        <TimeWrapper
            isCurrent={isCurrent}
            color2={TimeIntervalColor[timeInterval as keyof ITimeIntervalColor].main}
            darkColor={TimeIntervalColor[timeInterval as keyof ITimeIntervalColor].dark2}
            transparent={TimeIntervalColor[timeInterval as keyof ITimeIntervalColor].transparent2}
        >
            {timeInterval} {differentTimeZone && 'МСК'}
        </TimeWrapper>
    )
}

export default Time
