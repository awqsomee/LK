import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { useUnit } from 'effector-react'

import { CompetenceConsultation } from '@shared/api/competence-center'
import Flex from '@shared/ui/flex'
import { useModal } from '@shared/ui/modal'
import { ColumnProps } from '@shared/ui/table/types'
import { TextArea } from '@shared/ui/textarea'

import * as model from '../models/competence-center-admin-model'
import { Button, OutlinedButton, Stack } from '../ui'

export const getConsColumns = (onClick: () => void, link: string): ColumnProps[] => [
    {
        title: 'ФИО',
        field: 'fio',
        width: '250px',
    },
    {
        title: 'Способ связи',
        field: 'communication',
        width: '250px',
    },
    {
        title: 'Дата',
        field: 'createdAt',
        sort: true,
        type: 'date',
        align: 'center',
        width: '120px',
    },
    {
        title: '',
        field: '',
        align: 'center',
        render: () => (
            <Link to={link} onClick={onClick}>
                Завершить...
            </Link>
        ),
    },
]

export const getExtendedConsColumns = (): ColumnProps[] => [
    {
        title: 'ФИО',
        field: 'fio',
        width: '250px',
    },
    {
        title: 'Способ связи',
        field: 'communication',
        width: '250px',
    },
    {
        title: 'Дата',
        field: 'createdAt',
        sort: true,
        type: 'date',
        align: 'center',
        width: '120px',
    },
    {
        title: '',
        field: '',
        align: 'center',
        render: (value, data) => <Commentary data={data as CompetenceConsultation} />,
    },
]

// eslint-disable-next-line react-refresh/only-export-components
const Commentary = ({ data }: { data: CompetenceConsultation }) => {
    const [setConsultationStatus] = useUnit([model.setConsultationStatus])
    const [value, setValue] = useState('')
    const { close } = useModal()

    return (
        <Stack gap={24} w="334px">
            <TextArea placeholder="Комментарий" value={value} setValue={setValue} rows={6} />
            <Flex gap="10px">
                <OutlinedButton
                    disabled={!value}
                    w="50%"
                    style={{ flexShrink: 0 }}
                    onClick={() => {
                        setConsultationStatus({ id: data.id, status: 'rejected', comment: value })
                        close()
                    }}
                >
                    Отклонить заявку
                </OutlinedButton>
                <Button
                    w="50%"
                    style={{ flexShrink: 0 }}
                    onClick={() => {
                        setConsultationStatus({ id: data.id, status: 'completed', comment: value })
                        close()
                    }}
                >
                    Завершить
                </Button>
            </Flex>
        </Stack>
    )
}
