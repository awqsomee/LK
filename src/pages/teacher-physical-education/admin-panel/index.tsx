import React, { useEffect } from 'react'

import { useUnit } from 'effector-react'

import { AddCompetition } from '@features/physical-education/admin-panel/add-competition/ui'

import { peStudentCompetitionModel } from '@entities/pe-student/model'

import { Button } from '@shared/ui/button'
import { useModal } from '@shared/ui/modal'
import Table from '@shared/ui/table'
import { Title } from '@shared/ui/title'

import { columns } from './constants'
import { CompWrapper, Wrapper } from './styled'

export const AdminPanel = () => {
    const [competitions] = useUnit([peStudentCompetitionModel.stores.$competitions])

    const { open } = useModal()

    const handleAddCompetition = () => {
        open(<AddCompetition />)
    }

    useEffect(() => {
        peStudentCompetitionModel.events.load()
    }, [])

    return (
        <Wrapper>
            <CompWrapper>
                <Title align="left" size={4}>
                    Соревнования
                </Title>
                <Button onClick={handleAddCompetition} text={'Добавить соревнование'} />
                <Table
                    data={competitions.map((c) => ({
                        name: c,
                    }))}
                    columns={columns}
                    onRowClick={() => {}}
                />
            </CompWrapper>
        </Wrapper>
    )
}
