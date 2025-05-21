import React from 'react'
import { Link } from 'react-router-dom'

import { ColumnProps } from '@shared/ui/table/types'

export const getConsColumns = (): ColumnProps[] => [
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
        field: 'date',
        sort: true,
        type: 'date',
        align: 'center',
        width: '120px',
    },
    {
        title: '',
        field: '',
        align: 'center',
        render: () => <Link to="">Завершить...</Link>,
    },
]
