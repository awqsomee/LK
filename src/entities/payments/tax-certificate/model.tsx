import { createMutation } from '@farfetched/core'
import axios from 'axios'
import { createEffect, createEvent, createStore, sample } from 'effector'
import { and, not, reset } from 'patronum'

import { TaxCertificate, createTaxCertificate, getTaxCerts } from '@shared/api/payment-api'
import { userModel } from '@shared/session'
import { popUpMessageModel } from '@shared/ui/pop-up-message'

const pageMounted = createEvent()
const certificatedRequested = createEvent<{ year: string }>()
const $taxCerts = createStore<TaxCertificate[] | null>(null)
const createTaxCertificateMutation = createMutation({
    handler: createTaxCertificate,
})
const getTaxCertsFx = createEffect(getTaxCerts)
sample({
    clock: getTaxCertsFx.doneData,
    target: $taxCerts,
})
const $presentYears = $taxCerts.map((certificates) => {
    if (!certificates) return new Set<string>()
    return new Set(certificates.map((certificate) => certificate.year))
})
sample({
    clock: pageMounted,
    filter: not($taxCerts),
    target: getTaxCertsFx,
})
sample({
    clock: certificatedRequested,
    target: createTaxCertificateMutation.start,
})
sample({
    clock: createTaxCertificateMutation.$succeeded,
    target: [
        popUpMessageModel.events.evokePopUpMessage.prepend(() => ({
            message: 'Запрос отправлен',
            type: 'success',
        })),
        getTaxCertsFx,
    ],
})
sample({
    clock: createTaxCertificateMutation.finished.failure,
    fn: ({ error }) => ({
        message: axios.isAxiosError(error)
            ? 'Не удалось отправить запрос.'
            : 'Не удалось отправить запрос. ' + (error as Error).message,
        time: 6000,
        type: 'failure' as const,
    }),
    target: popUpMessageModel.events.evokePopUpMessage,
})
reset({
    clock: userModel.events.logout,
    target: [$taxCerts],
})
export const taxCertificateModel = {
    pageMounted,
    getTaxCertsFx,
    certificatedRequested,
    certificates: $taxCerts,
    presentYears: $presentYears,
    certificatesLoading: and(getTaxCertsFx.pending, not($taxCerts)),
    createCertificateLoading: createTaxCertificateMutation.$pending,
}
