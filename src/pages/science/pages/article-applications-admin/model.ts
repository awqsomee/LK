import { attach, createEvent, createStore, sample } from 'effector'
import { createGate } from 'effector-react'
import { pending } from 'patronum'

import { ArticleApplication, scienceApi } from '@shared/api/science'
import { popUpMessageModel } from '@shared/ui/pop-up-message'

export const ArticleApplicationsAdminGate = createGate()

export const approve = createEvent<scienceApi.ApproveApplicationFxParams>()
export const decline = createEvent<scienceApi.DeclineApplicationFxParams>()

export const $articleApplications = createStore<ArticleApplication[]>([])
export const $applicationsLoading = createStore<Map<string, 'approving' | 'declining'>>(new Map())

const getAllArticleApplicationsFx = attach({ effect: scienceApi.getAllArticleApplicationsFx })
const approveApplicationFx = attach({ effect: scienceApi.approveApplicationFx })
const declineApplicationFx = attach({ effect: scienceApi.declineApplicationFx })

export const pageLoading = pending([getAllArticleApplicationsFx])

sample({
    clock: ArticleApplicationsAdminGate.open,
    fn: (): scienceApi.GetAllArticleApplicationsFxParams => ({
        limit: 100,
        offset: 0,
        statuses: ['AdminReview', 'DeanOrDeputyDeanReview', 'HeadOfDepartmentReview'],
    }),
    target: [getAllArticleApplicationsFx],
})

$articleApplications.on(getAllArticleApplicationsFx.doneData, (_, { data }) => data)

sample({
    clock: approve,
    target: approveApplicationFx,
})

sample({
    clock: decline,
    target: declineApplicationFx,
})

$applicationsLoading.on(approve, (applications, { id }) => new Map(applications).set(id, 'approving'))
$applicationsLoading.on(decline, (applications, { id }) => new Map(applications).set(id, 'declining'))

sample({
    clock: approveApplicationFx.done,
    target: popUpMessageModel.events.evokePopUpMessage.prepend(() => ({
        message: 'Заявка одобрена',
        type: 'success',
    })),
})

sample({
    clock: declineApplicationFx.done,
    target: popUpMessageModel.events.evokePopUpMessage.prepend(() => ({
        message: 'Заявка отклонена',
        type: 'success',
    })),
})

sample({
    clock: [approveApplicationFx.fail, declineApplicationFx.fail],
    target: popUpMessageModel.events.evokePopUpMessage.prepend(() => ({
        message: 'Что-то пошло не так',
        type: 'failure',
    })),
})

$applicationsLoading.on(
    [approveApplicationFx.finally, declineApplicationFx.finally],
    (applications, { params: { id } }) => {
        const mapCopy = new Map(applications)
        mapCopy.delete(id)
        return mapCopy
    },
)

sample({
    clock: [approveApplicationFx.done, declineApplicationFx.done],
    fn: (): scienceApi.GetAllArticleApplicationsFxParams => ({
        limit: 100,
        offset: 0,
        statuses: ['AdminReview', 'DeanOrDeputyDeanReview', 'HeadOfDepartmentReview'],
    }),
    target: getAllArticleApplicationsFx,
})
