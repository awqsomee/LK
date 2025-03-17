import React from 'react'

import { useUnit } from 'effector-react'

import PageBlock from '@shared/ui/page-block'
import Table from '@shared/ui/table'
import { ColumnProps } from '@shared/ui/table/types'

import * as model from './models/competence-center-admin-model'

const PassportGenerationList = () => {
    const [newPassportApplications] = useUnit([model.$newPassportApplications])
    return (
        <PageBlock>
            <Table loading={false} columns={getPassColumns()} data={newPassportApplications} maxOnPage={7} />
        </PageBlock>
    )
}

export default PassportGenerationList

const getPassColumns = (): ColumnProps[] => [
    {
        title: 'ФИО',
        field: 'fio',
    },
    {
        title: 'Дата',
        field: 'date',
        priority: 'two',
        sort: true,
        type: 'date',
        align: 'center',
        width: '120px',
    },
]
