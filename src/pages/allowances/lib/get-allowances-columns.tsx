import React from 'react'
import { allowanceStatus } from '@entities/allowances/consts'
import { Message } from '@shared/ui/atoms'
import { ColumnProps } from '@shared/ui/table/types'
import { AllowanceFiles, AllowanceStatus } from '@entities/allowances/types'

export const getAllowancesColumns = (): ColumnProps[] => {
    return [
        {
            title: 'Дата',
            field: 'createdAt',
            priority: 'two',
            sort: true,
            type: 'date',
            align: 'center',
            width: '120px',
        },
        {
            title: 'Тип',
            field: 'paymentIdentifier',
            priority: 'three',
            width: '150px',
            showFull: true,
            render: (value) => value || '-',
        },
        {
            title: 'Источник финансирования',
            field: 'sourceOfFunding',
            showFull: true,
            priority: 'four',
            width: '150px',
            render: (value) => value || '-',
        },
        {
            title: 'Статус',
            field: 'allowanceStatus',
            priority: 'one',
            width: '165px',
            showFull: true,
            catalogs: [...(Object.values(allowanceStatus).map((val, i) => ({ id: i.toString(), title: val })) ?? [])],
            render: (value: AllowanceStatus) => {
                return (
                    <Message
                        type={value === 'Completed' ? 'success' : value === 'Cancelled' ? 'failure' : 'alert'}
                        title={value || '—'}
                        align="center"
                        icon={null}
                    />
                )
            },
        },
        { title: 'Комментарий', field: 'commentary', render: (value) => value || '-' },
        {
            title: 'Файлы',
            field: 'files',
            width: '100px',
            align: 'center',
            showFull: true,
            render: (value: AllowanceFiles) => value.application.length + value.other.length || '-',
        },
    ]
}
