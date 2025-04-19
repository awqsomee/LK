import { createMutation } from '@farfetched/core'
import { createEvent, sample } from 'effector'

import { taxCertificateModel } from '@entities/payments'

import { ApplicationCreating } from '@shared/api/applications/application-api'
import { createTaxCertRequestFx } from '@shared/api/payment-api'
import { createCheckboxField } from '@shared/effector/form/create-checkbox-field'
import { popUpMessageModel } from '@shared/ui/pop-up-message'

export const sendFormClicked = createEvent<ApplicationCreating>()

export const completed = createCheckboxField()

const createTaxCertRequestMutation = createMutation({
    handler: createTaxCertRequestFx,
})

export const $pending = createTaxCertRequestMutation.$pending

sample({
    clock: sendFormClicked,
    target: createTaxCertRequestMutation.start,
})

sample({
    clock: createTaxCertRequestMutation.$succeeded,
    target: [
        completed.setValue.prepend(() => true),
        taxCertificateModel.getTaxCertsFx,
        popUpMessageModel.events.evokePopUpMessage.prepend(() => ({
            message: 'Заявка отправлена на рассмотрение',
            type: 'success',
            time: 10_000,
        })),
    ],
})

sample({
    clock: createTaxCertRequestMutation.$failed,
    target: popUpMessageModel.events.evokePopUpMessage.prepend(() => ({
        message: 'При отправке заявки произошла ошибка. Попробуйте позднее',
        type: 'failure',
    })),
})
