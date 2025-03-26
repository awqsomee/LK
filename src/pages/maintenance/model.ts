import { createMutation } from '@farfetched/core'
import { createEvent, createStore, restore, sample } from 'effector'

import { applicationsModel } from '@entities/applications'

import { TechnicalMaintenance, postMaintenance } from '@shared/api/maintenance'
import { popUpMessageModel } from '@shared/ui/pop-up-message'
import { SelectPage } from '@shared/ui/select'

const pageMounted = createEvent()
const sendForm = createEvent()
const setFiles = createEvent<File[]>()
const setName = createEvent<string>()
const setPhone = createEvent<string>()
const setEmail = createEvent<string>()
const setNote = createEvent<string>()
const setServiceType = createEvent<SelectPage | null>()
const setService = createEvent<SelectPage | null>()
const setLocation = createEvent<SelectPage | null>()

const $files = createStore<File[]>([])
    .on(setFiles, (_, files) => files)
    .reset(pageMounted)
const $note = createStore('')
    .on(setNote, (_, note) => note)
    .reset(pageMounted)
const $name = createStore('')
    .on(setName, (_, name) => name)
    .on(applicationsModel.stores.applications, (_, { dataUserApplication }) => {
        if (!dataUserApplication) return ''
        const { name, surname, patronymic } = dataUserApplication
        return `${name} ${surname} ${patronymic}`
    })
const $phone = createStore('')
    .on(setPhone, (_, phone) => phone)
    .on(applicationsModel.stores.applications, (_, { dataUserApplication }) => dataUserApplication?.phone ?? '')
const $email = createStore('')
    .on(setEmail, (_, email) => email)
    .on(applicationsModel.stores.applications, (_, { dataUserApplication }) => dataUserApplication?.email ?? '')
const $serviceType = restore(setServiceType, null).reset(pageMounted)
const $service = restore(setService, null).reset(pageMounted)
const $location = createStore<SelectPage | null>(null)
    .on(setLocation, (_, location) => location)
    .reset(pageMounted)
const $applicationNumber = createStore('').reset(pageMounted)

const sendFormMutation = createMutation({
    handler: postMaintenance,
})

sample({
    clock: pageMounted,
    target: [sendFormMutation.reset, applicationsModel.effects.getUserDataApplicationsFx],
})
sample({
    clock: sendForm,
    source: {
        files: $files,
        name: $name,
        phone: $phone,
        email: $email,
        note: $note,
        serviceType: $serviceType,
        service: $service,
        location: $location,
    },
    filter: ({ serviceType, service }) => !!serviceType && !!service,
    fn: ({ files, name, phone, email, note, serviceType, service, location }): TechnicalMaintenance => {
        return {
            title: 'Обращение из ЛК',
            description: `Заявитель: ${name}<br/>Телефон: ${phone}<br/>${location?.title ? `Локация: ${location.title}<br/>` : ''}${email ? `Почта: ${email}<br/>` : ''}<br/>Описание:<br/>${note}`,
            custom_fields: `[${serviceType!.id}]=>${service!.id}`,
            files: files,
            user_email: email,
        }
    },
    target: sendFormMutation.start,
})

sample({
    clock: sendFormMutation.finished.success,
    fn: ({ result }) => result.id,
    target: $applicationNumber,
})

sample({
    clock: sendFormMutation.$failed,
    fn: () => ({
        message: 'Произошла ошибка. Попробуйте позднее',
        type: 'failure' as const,
    }),
    target: popUpMessageModel.events.evokePopUpMessage,
})

export const events = {
    pageMounted,
    setFiles,
    setName,
    setPhone,
    setEmail,
    setNote,
    setServiceType,
    setService,
    setLocation,
    sendForm,
}

export const stores = {
    files: $files,
    note: $note,
    name: $name,
    phone: $phone,
    email: $email,
    serviceType: $serviceType,
    service: $service,
    location: $location,
    loading: sendFormMutation.$pending,
    done: sendFormMutation.$succeeded,
    applicationNumber: $applicationNumber,
}
