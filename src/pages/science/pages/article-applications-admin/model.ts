import { attach, createStore, sample } from 'effector'
import { createGate } from 'effector-react'

import { ArticleApplication, scienceApi } from '@shared/api/science'

export const ArticleApplicationsAdminGate = createGate()

export const $articleApplications = createStore<ArticleApplication[]>([])

const getAllArticleApplicationsFx = attach({ effect: scienceApi.getAllArticleApplicationsFx })

sample({
    clock: ArticleApplicationsAdminGate.open,
    fn: (): scienceApi.GetAllArticleApplicationsFxParams => ({
        limit: 100,
        offset: 0,
        statuses: ['Accepted', 'AdminReview', 'DeanOrDeputyDeanReview', 'Declined', 'HeadOfDepartmentReview'],
    }),
    target: [getAllArticleApplicationsFx],
})

$articleApplications.on(getAllArticleApplicationsFx.doneData, (_, { data }) => data)
