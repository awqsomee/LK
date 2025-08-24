import React from 'react'

import { useUnit } from 'effector-react'

import { CC_COMPLETED_CONSULTATIONS } from '@shared/routing'
import PageBlock from '@shared/ui/page-block'
import Table from '@shared/ui/table'

import * as model from './models/competence-center-admin-model'
import { getConsColumns, getExtendedConsColumns } from './lib/get-consultation-columns'

const CompletedConsultationList = () => {
    const [newConsultationApplications] = useUnit([model.$newConsultationApplications])

    return (
        <PageBlock>
            <Table
                dimmedHeaders
                rowPadding="1rem 1.25rem"
                headerPadding="1rem 1.25rem"
                fw={500}
                loading={false}
                columns={getConsColumns(() => {}, CC_COMPLETED_CONSULTATIONS)}
                columnsExtended={getExtendedConsColumns()}
                data={newConsultationApplications}
                maxOnPage={7}
            />
        </PageBlock>
    )
}

export default CompletedConsultationList
