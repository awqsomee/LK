import React from 'react'
import { FiPlus } from 'react-icons/fi'

import styled from 'styled-components'

import { applicationsModel } from '@entities/applications'

import { Colors } from '@shared/consts'
import { Button, Message, Title, Wrapper } from '@shared/ui/atoms'
import Flex from '@shared/ui/flex'
import PageBlock from '@shared/ui/page-block'
import Subtext from '@shared/ui/subtext'
import Table from '@shared/ui/table'
import { ColumnProps } from '@shared/ui/table/types'

const AdminCompetenceCenter = () => {
    return (
        <Wrapper load={() => applicationsModel.effects.getApplicationsFx()} loading={false} error={null} data={true}>
            <PageBlock
                topRightCornerElement={
                    <Button
                        onClick={() => {}}
                        text="Загрузить файл"
                        background={Colors.orange.main}
                        textColor="#fff"
                        icon={<FiPlus />}
                        minWidth="35px"
                        height="36px"
                        shrinkTextInMobile
                    />
                }
            >
                <TableWrapper>
                    <Flex jc="space-between">
                        <Title size={3} align="left">
                            Консультации
                        </Title>
                        <Subtext>Показать архивные заявки</Subtext>
                    </Flex>
                    <Table
                        loading={false}
                        columns={getConsColumns()}
                        data={[
                            {
                                fio: 'Тестов Тест Тестович',
                                date: '2022-12-12',
                                status: 'В работе',
                                type: 'email',
                                phone: '',
                                email: 'test@email.com',
                            },
                            {
                                fio: 'Тестов Тест Тестович',
                                date: '2022-12-12',
                                status: 'Готово',
                                type: 'phone',
                                phone: '+7 (999) 999-99-99',
                            },
                        ]}
                        maxOnPage={7}
                    />
                </TableWrapper>
                <TableWrapper>
                    <Flex jc="space-between">
                        <Title size={3} align="left">
                            Паспорта компетенций
                        </Title>
                        <Subtext>Показать архивные заявки</Subtext>
                    </Flex>
                    <Table
                        loading={false}
                        columns={getPassColumns()}
                        data={[
                            {
                                fio: 'Тестов Тест Тестович',
                                date: '2022-12-12',
                            },
                            {
                                fio: 'Тестов Тест Тестович',
                                date: '2022-12-12',
                            },
                        ]}
                        maxOnPage={7}
                    />
                </TableWrapper>
            </PageBlock>
        </Wrapper>
    )
}

const TableWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 8px;
`

const getConsColumns = (): ColumnProps[] => [
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
        title: 'Действие',
        field: '',
        render: (_, row) =>
            row.status === 'В работе' ? (
                <Flex jc="space-between" gap="1rem">
                    <Message type="failure" title="Отклонить" />
                    <Message type="success" title="Выполнено" />
                </Flex>
            ) : null,
    },
]

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
export default AdminCompetenceCenter
