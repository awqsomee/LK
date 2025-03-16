import React from 'react'

import PageBlock from '@shared/ui/page-block'
import Table from '@shared/ui/table'

import { getConsColumns } from './lib/get-consultation-columns'

const CompletedConsultationList = () => {
    return (
        <PageBlock>
            <Table
                dimmedHeaders
                rowPadding="1rem 1.25rem"
                headerPadding="1rem 1.25rem"
                fw={500}
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
                        status: 'В работе',
                        type: 'phone',
                        phone: '+7 (999) 999-99-99',
                    },
                ]}
                maxOnPage={7}
            />
        </PageBlock>
    )
}

export default CompletedConsultationList
