import React from 'react'
import { FiColumns, FiSidebar } from 'react-icons/fi'

import styled from 'styled-components'

import { ViewType } from '@shared/api/model'
import { Button } from '@shared/ui/atoms'

const ScheduleViewButtonsListWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    background: var(--theme-1);
    border-radius: 10px;
    min-width: 80px;
    overflow: hidden;

    button {
        border-radius: 0;
    }

    @media (max-width: 1000px) {
        display: none;
    }
`

interface Props {
    view: string
    setView: (view: ViewType) => void
}

const ScheduleViewButtonsList = ({ view, setView }: Props) => {
    return (
        <ScheduleViewButtonsListWrapper>
            <Button icon={<FiSidebar />} onClick={() => setView('full')} isChosen={view === 'full'} />
            <Button icon={<FiColumns />} onClick={() => setView('big')} isChosen={view === 'big'} />
        </ScheduleViewButtonsListWrapper>
    )
}

export default ScheduleViewButtonsList
