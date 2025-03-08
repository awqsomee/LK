import React from 'react'
import { FiPlus } from 'react-icons/fi'
import { useHistory } from 'react-router'

import { ApplicationStatusType, ApplicationsConstants } from '@entities/applications/consts'

import { Colors } from '@shared/consts'
import { COMPETENCE_CENTER_FORM } from '@shared/routing'
import { Button, Message, Wrapper } from '@shared/ui/atoms'
import PageBlock from '@shared/ui/page-block'
import Table from '@shared/ui/table'
import { ColumnProps } from '@shared/ui/table/types'

const ComptetnceCenterList = () => {
    const history = useHistory()

    return (
        <Wrapper load={() => {}} loading={false} error={null} data={true}>
            <PageBlock
                topRightCornerElement={
                    <Button
                        onClick={() => history.push(COMPETENCE_CENTER_FORM)}
                        text="Подать заявку"
                        background={Colors.orange.main}
                        textColor="#fff"
                        icon={<FiPlus />}
                        minWidth="35px"
                        height="36px"
                        shrinkTextInMobile
                    />
                }
            >
                <Table
                    loading={false}
                    columns={getColumns()}
                    data={[
                        {
                            req: 'Консультация',
                            date: '2022-12-12',
                            status: 'В работе',
                            comment: '',
                        },
                        {
                            req: 'Консультация',
                            date: '2022-10-12',
                            status: 'Готово',
                            comment: '',
                        },
                        {
                            req: 'Генерация паспорта',
                            date: '2022-12-12',
                            status: 'Отклонено',
                            comment: 'Вам необходимо пройти раздел Управленческие навыки',
                        },
                        {
                            req: 'Консультация',
                            date: '2022-12-10',
                            status: 'Отклонено',
                            comment: 'Указан некорректный номер телефона',
                        },
                    ]}
                    maxOnPage={7}
                />
            </PageBlock>
        </Wrapper>
    )
}
const getColumns = (): ColumnProps[] => [
    {
        title: 'Запрос',
        field: 'req',
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
        title: 'Примечание',
        field: 'comment',
        render: (val) => val || '-',
    },
]

export default ComptetnceCenterList
