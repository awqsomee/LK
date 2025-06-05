import React from 'react'
import { useHistory } from 'react-router'

import { useGate, useUnit } from 'effector-react'

import { ArticleApplicationStatus, ArticleApplicationStatuses } from '@shared/api/science'
import { ARTICLE } from '@shared/routing'
import { CenterPage, Message } from '@shared/ui/atoms'
import PageBlock from '@shared/ui/page-block'
import Table from '@shared/ui/table'
import { ColumnProps } from '@shared/ui/table/types'

import * as model from './model'

const ArticleApplicationsAdmin = () => {
    useGate(model.ArticleApplicationsAdminGate)

    const history = useHistory()

    const [articleApplications] = useUnit([model.$articleApplications])

    return (
        <CenterPage padding="10px">
            <PageBlock>
                <Table
                    columns={columns}
                    data={articleApplications}
                    onRowClick={(row) => history.push(ARTICLE.replace(':id', row.articleId))}
                />
            </PageBlock>
        </CenterPage>
    )
}

const columns: ColumnProps[] = [
    {
        field: 'article',
        title: 'Название',
        render: (value) => value.title,
    },
    {
        field: 'status',
        title: 'Статус',
        render: (value: ArticleApplicationStatus) => (
            <Message
                type={value === 'Accepted' ? 'success' : value === 'Declined' ? 'failure' : 'alert'}
                title={ArticleApplicationStatuses[value] || '—'}
                align="center"
                icon={null}
            />
        ),
    },
    {
        field: 'createdAt',
        title: 'Дата запроса',
        type: 'date',
    },
]
export default ArticleApplicationsAdmin
