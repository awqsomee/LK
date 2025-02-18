import { createEffect, createEvent, sample } from 'effector'

import { peStudentCompetitionModel } from '@entities/pe-student/model'

import { peApi } from '@shared/api'
import { getPeErrorMsg } from '@shared/api/config/pe-config'
import { modalModel } from '@shared/ui/modal/model'
import { popUpMessageModel } from '@shared/ui/pop-up-message'

import { AddCompetition } from './types'

export const addCompetition = createEvent<AddCompetition>()

const addCompetitionFx = createEffect((payload: AddCompetition) => {
    return peApi.createCompetition(payload.competitionName)
})

sample({ clock: addCompetition, target: addCompetitionFx })

sample({
    clock: addCompetitionFx.failData,
    fn: (err) => {
        return {
            message: getPeErrorMsg(err, 'Не удалось добавить соревнование'),
            type: 'failure' as const,
            time: 3000,
        }
    },
    target: popUpMessageModel.events.evokePopUpMessage,
})

sample({
    clock: addCompetitionFx.doneData,
    fn: () => {
        return {
            message: 'Соревнование добавлено',
            type: 'success' as const,
            time: 3000,
        }
    },
    target: popUpMessageModel.events.evokePopUpMessage,
})

sample({ clock: addCompetitionFx.doneData, target: peStudentCompetitionModel.events.load })

sample({
    clock: addCompetitionFx.doneData,
    target: modalModel.events.close,
})
