import { createEffect } from 'effector'

import { $api } from '@shared/api/config'
import token from '@shared/lib/token'

import { ApplicationCreating } from './applications/application-api'
import { LoadPayments } from './model'

export type SendAgreementCodesReq = {
    agreementId: string
    userEmail: string
    clientEmail: string
}

export type SignAgreementReq = {
    agreementId: string
    userPass: string
    clientPass: string
}

export const get = () => {
    return $api.get<LoadPayments>(`?getPayments&token=${token()}`)
}

export const agreementSubmit = (id: string) => {
    return $api.get(`?signAgreement=${id}&token=${token()}`)
}

export const signContract = (contractId: string) => {
    return $api.get(`?signContract=${contractId}&token=${token()}`)
}

export const sendAgreementCodesApi = async ({ agreementId, userEmail, clientEmail }: SendAgreementCodesReq) => {
    const formData = new FormData()
    formData.append('guid_agreement', agreementId)
    formData.append('email_student', userEmail)
    formData.append('email_client', clientEmail)
    const { data } = await $api.post(`?mailCode4Agreement=1&token=${token()}`, formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    })

    if (data.result !== 'ok') throw new Error(data.error_text)
    return data
}

export const signThirdPartyAgreementApi = async ({ agreementId, userPass, clientPass }: SignAgreementReq) => {
    const { data } = await $api.get(
        `?signAgreement=${agreementId}&token=${token()}&pass_student=${userPass}&pass_client=${clientPass}`,
    )

    if (data[0].result !== 'ok') throw new Error(data[0].error_text)
    return data
}
export type SendElectronicInteractionCodes = {
    clientGuid: string
    clientEmail: string
}

export const sendElectroincInteractionCodes = async ({ clientGuid, clientEmail }: SendElectronicInteractionCodes) => {
    const formData = new FormData()
    formData.append('guid_client', clientGuid)
    formData.append('email_client', clientEmail)
    const { data } = await $api.post(`?mailCode4Client=1&token=${token()}`, formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    })

    if (data.result !== 'ok') throw new Error(data.error_text)
    return data
}
export type SignThirdPartyElectronicInteraction = {
    clientGuid: string
    clientPass: string
}
export const signThirdPartyElectronicInteraction = async ({
    clientGuid,
    clientPass,
}: SignThirdPartyElectronicInteraction) => {
    const { data } = await $api.get(
        `?setPEPAcceptClient&client_guid=${clientGuid}&client_pass=${clientPass}&token=${token()}`,
    )

    if (data[0].result !== 'ok') throw new Error(data[0].error_text)
    return data
}

export type TaxCertificate = {
    id: string
    cert_date: string
    year: string
    summ: string
    is_full_time: boolean
    student_is_payer: boolean
    payer: string
    number: string
    correction: string
    signatory: string
    cert_file: string
    cert_file_stamp: string
    cert_file_sign: string
    cert_file_with_sign: string
    payments: TaxPayments[]
    contracts: Contracts[]
}
type TaxPayments = {
    contractNumber: string
    contractGuid: string
    paymentDate: string
    summ: string
    signatory: string
    versionType: string
    versionDate: string
    payer: string
    paymentGuid: string
}
type Contracts = {
    contractGuid: string
    contractNumber: string
    contractDate: string
}
export const getTaxCerts = async () => (await $api.get<TaxCertificate[]>(`?getTaxCert&token=${token()}`)).data

export const createTaxCertificate = async ({ year }: { year: string }) => {
    const { data } = await $api.get(`?createTaxCert=${year}&token=${token()}`)
    if (data.result !== 'ok') throw new Error(data.error_text)
    if (data?.num_created <= 0)
        throw new Error(
            'Документы не были созданы. Возможно, у вас нет оплат или договора на обучение за выбранный год.',
        )
    return data
}

export const createTaxCertRequestFx = createEffect(async (req: ApplicationCreating) => {
    const formData = new FormData()
    formData.set('token', token())
    for (const [key, value] of Object.entries(req)) {
        formData.set(key, value)
    }

    const { data } = await $api.post(`?createTaxCertRequest`, formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    })
    if (data.result !== 'ok') throw new Error(data.error_text)
    return data
})
