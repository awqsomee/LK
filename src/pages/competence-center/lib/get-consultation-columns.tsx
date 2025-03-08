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
        field: 'type',
        width: '250px',
        render: (_, row) =>
            row.type === 'phone' ? `Телефон: ${row.phone}` : row.type === 'email' ? `Email: ${row.email}` : 'ЛК',
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
