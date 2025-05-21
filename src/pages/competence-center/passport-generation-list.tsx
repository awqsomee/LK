import React from 'react'

import { useGate, useUnit } from 'effector-react'

import { ApplicationsConstants } from '@shared/consts/applications'
import { Message } from '@shared/ui/atoms'
import PageBlock from '@shared/ui/page-block'
import Table from '@shared/ui/table'
import { ColumnProps } from '@shared/ui/table/types'

import * as model from './models/competence-center-admin-model'

const PassportGenerationList = () => {
    useGate(model.AllPassportsGate)
    const [passports] = useUnit([model.$passports])

    return (
        <PageBlock>
            <Table loading={false} columns={getPassColumns()} data={passports} maxOnPage={7} />
        </PageBlock>
    )
}

export default PassportGenerationList

const getPassColumns = (): ColumnProps[] => [
    {
        title: 'Email',
        field: 'email',
    },
    {
        title: 'Дата',
        field: 'createdAt',
        priority: 'two',
        sort: true,
        type: 'date',
        width: '120px',
    },
    {
        title: 'Статус',
        field: 'status',
        width: '10.375rem',
        render: (value: keyof typeof ApplicationsConstants) => {
            const status = ApplicationsConstants[value]
            return (
                <Message
                    type={
                        value === 'accepted' || value === 'completed' || value === 'ready' || value === 'recieved'
                            ? 'success'
                            : value === 'rejected' || value === 'not_found'
                              ? 'failure'
                              : 'alert'
                    }
                    title={status || '—'}
                    align="center"
                    icon={null}
                />
            )
        },
    },
    {
        title: '',
        field: 'fileKey',
        width: '120px',
    },
]
