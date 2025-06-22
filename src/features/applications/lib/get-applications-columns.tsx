import React from 'react'
import { FiDownload } from 'react-icons/fi'

import { ApplicationStatusType, ApplicationsConstants } from '@shared/consts/applications'
import { LinkButton } from '@shared/ui/atoms'
import Flex from '@shared/ui/flex'
import { Message } from '@shared/ui/message'
import { ColumnProps } from '@shared/ui/table/types'
import { Tooltip } from '@shared/ui/tooltip'

import { ApplicationFileOutput } from '../../../shared/api/model/applications'

const getApplicationsColumns = (): ColumnProps[] => {
    return [
        {
            title: 'Запрос',
            field: 'subject',
            priority: 'one',
            search: true,
            showFull: true,
            render: (val, obj) => {
                return (
                    <Flex jc="space-between">
                        {val}
                        {!!obj?.files_output?.length &&
                            obj.files_output.map((file: ApplicationFileOutput) => (
                                <div key={file.url} onClick={(e) => e.stopPropagation()}>
                                    <Tooltip text={file.fname} direction="left">
                                        <LinkButton icon={<FiDownload />} background="transparent" href={file?.url} />
                                    </Tooltip>
                                </div>
                            ))}
                    </Flex>
                )
            },
        },
        ...getCommonApplicationsColumns(),
    ]
}

export const getCommonApplicationsColumns = (): ColumnProps[] => [
    {
        title: 'Дата',
        field: 'created',
        priority: 'two',
        sort: true,
        type: 'date',
        align: 'center',
        width: '120px',
    },
    {
        title: 'Рег. номер',
        field: 'num',
        priority: 'five',
        align: 'center',
        width: '170px',
    },
    {
        title: 'Статус',
        field: 'status',
        priority: 'one',
        width: '165px',
        catalogs: [...(Object.values(ApplicationsConstants).map((val, i) => ({ id: i.toString(), title: val })) ?? [])],
        render: (value: ApplicationStatusType) => {
            return (
                <Message
                    type={
                        value === 'Готово' || value === 'Выдано' || value === 'Получено' || value === 'Выполнена'
                            ? 'success'
                            : value === 'Отклонено'
                              ? 'failure'
                              : 'alert'
                    }
                    title={value || '—'}
                    align="center"
                    icon={null}
                />
            )
        },
    },
    {
        title: 'Структурное подразделение, адрес',
        priority: 'four',
        field: 'response_div',
        showFull: false,
    },
    { title: 'Примечание', field: 'comment', priority: 'five', width: '150px' },
]

export default getApplicationsColumns
