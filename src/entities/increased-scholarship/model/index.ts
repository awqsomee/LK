import { createMutation } from '@farfetched/core'
import axios from 'axios'
import { createEvent, sample } from 'effector'

import { applicationsModel } from '@entities/applications'

import { ApplicationCreating, post } from '@shared/api/applications/application-api'
import { createCheckboxField } from '@shared/effector/form/create-checkbox-field'
import { createFilesField } from '@shared/effector/form/create-file-filed'
import { createInputField } from '@shared/effector/form/create-input-field'
import { createSelectField } from '@shared/effector/form/create-select-field'
import { popUpMessageModel } from '@shared/ui/pop-up-message'

const pageMounted = createEvent()
const sendForm = createEvent<ApplicationCreating>()

const fio = createInputField()
const tel = createInputField()
const email = createInputField()
const typeOfActivity = createSelectField()
const listOfAchievements = createInputField({ reset: pageMounted })

const consecutiveExcellentGradesCheck = createCheckboxField({ reset: [pageMounted, typeOfActivity.value] })
const projectAwardCheck = createCheckboxField({ reset: [pageMounted, typeOfActivity.value] })
const academicCompetitionWinnerCheck = createCheckboxField({ reset: [pageMounted, typeOfActivity.value] })

const researchAwardOrGrantCheck = createCheckboxField({ reset: [pageMounted, typeOfActivity.value] })
const scientificPublicationCheck = createCheckboxField({ reset: [pageMounted, typeOfActivity.value] })

const participationCheck = createCheckboxField({ reset: [pageMounted, typeOfActivity.value] })
const infoSupportCheck = createCheckboxField({ reset: [pageMounted, typeOfActivity.value] })
const youthParticipationCheck = createCheckboxField({ reset: [pageMounted, typeOfActivity.value] })

const culturalCreativeAwardCheck = createCheckboxField({ reset: [pageMounted, typeOfActivity.value] })
const publicWorkPresentationCheck = createCheckboxField({ reset: [pageMounted, typeOfActivity.value] })
const publicCulturalActivityCheck = createCheckboxField({ reset: [pageMounted, typeOfActivity.value] })

const sportsAwardCheck = createCheckboxField({ reset: [pageMounted, typeOfActivity.value] })
const sportsParticipationCheck = createCheckboxField({ reset: [pageMounted, typeOfActivity.value] })
const gtoGoldBadgeCheck = createCheckboxField({ reset: [pageMounted, typeOfActivity.value] })

const files = createFilesField({ reset: pageMounted })
const bankDetails = createFilesField({ reset: pageMounted })
const criteria = createCheckboxField({ reset: [pageMounted, typeOfActivity.value] })
const completed = createCheckboxField({ reset: pageMounted })

const sendFormMutation = createMutation({
    handler: async (data: ApplicationCreating) => {
        const resultAddApplication = await post(data)

        if (resultAddApplication.result === 'ok') {
            return 'ok'
        } else {
            throw new Error(resultAddApplication.error_text)
        }
    },
})

sample({
    clock: pageMounted,
    source: applicationsModel.stores.applications,
    fn: ({ dataUserApplication }) => {
        if (!dataUserApplication) return ''
        const { surname, name, patronymic } = dataUserApplication
        return surname + ' ' + name + ' ' + patronymic
    },
    target: fio.setValue,
})

sample({
    clock: pageMounted,
    source: applicationsModel.stores.applications,
    fn: ({ dataUserApplication }) => dataUserApplication?.phone || '',
    target: tel.setValue,
})

sample({
    clock: pageMounted,
    source: applicationsModel.stores.applications,
    fn: ({ dataUserApplication }) => dataUserApplication?.email || '',
    target: email.setValue,
})

sample({
    clock: [
        consecutiveExcellentGradesCheck.setValue,
        projectAwardCheck.setValue,
        academicCompetitionWinnerCheck.setValue,
        participationCheck.setValue,
        infoSupportCheck.setValue,
        youthParticipationCheck.setValue,
        culturalCreativeAwardCheck.setValue,
        publicWorkPresentationCheck.setValue,
        publicCulturalActivityCheck.setValue,
        researchAwardOrGrantCheck.setValue,
        scientificPublicationCheck.setValue,
        sportsAwardCheck.setValue,
        sportsParticipationCheck.setValue,
        gtoGoldBadgeCheck.setValue,
    ],
    source: [
        consecutiveExcellentGradesCheck.value,
        projectAwardCheck.value,
        academicCompetitionWinnerCheck.value,
        participationCheck.value,
        infoSupportCheck.value,
        culturalCreativeAwardCheck.value,
        publicWorkPresentationCheck.value,
        publicCulturalActivityCheck.value,
        researchAwardOrGrantCheck.value,
        scientificPublicationCheck.value,
        sportsAwardCheck.value,
        sportsParticipationCheck.value,
        gtoGoldBadgeCheck.value,
    ],
    fn: (checks) => checks.some((check) => check),
    target: criteria.setValue,
})

sample({
    clock: sendForm,
    target: sendFormMutation.start,
})

sample({
    clock: sendFormMutation.finished.success,
    fn: () => true,
    target: completed.setValue,
})

sample({
    clock: sendFormMutation.finished.failure,
    fn: ({ error }) => ({
        message: axios.isAxiosError(error) ? 'Не удалось подписать соглашение' : (error as Error).message,
        type: 'failure' as const,
    }),
    target: popUpMessageModel.events.evokePopUpMessage,
})

export const stores = { loading: sendFormMutation.$pending }

export const events = { pageMounted, sendForm }

export const fields = {
    fio,
    tel,
    email,
    typeOfActivity,
    listOfAchievements,
    consecutiveExcellentGradesCheck,
    projectAwardCheck,
    academicCompetitionWinnerCheck,
    participationCheck,
    infoSupportCheck,
    youthParticipationCheck,
    culturalCreativeAwardCheck,
    publicWorkPresentationCheck,
    publicCulturalActivityCheck,
    researchAwardOrGrantCheck,
    scientificPublicationCheck,
    sportsAwardCheck,
    sportsParticipationCheck,
    gtoGoldBadgeCheck,
    files,
    bankDetails,

    criteria,
    completed,
}
