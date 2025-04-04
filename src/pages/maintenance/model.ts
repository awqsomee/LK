import { createMutation, createQuery } from '@farfetched/core'
import { createEvent, createStore, restore, sample } from 'effector'
import { or } from 'patronum'

import { applicationsModel } from '@entities/applications'

import {
    TechnicalMaintenance,
    getLocations,
    getServiceAreas,
    getServices,
    postMaintenance,
} from '@shared/api/maintenance'
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
const setRoom = createEvent<string>()

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
const $service = restore(setService, null).reset([pageMounted, $serviceType])
const $room = restore(setRoom, '').reset(pageMounted)
const $location = createStore<SelectPage | null>(null)
    .on(setLocation, (_, location) => location)
    .reset(pageMounted)
const $applicationNumber = createStore('').reset(pageMounted)

const sendFormMutation = createMutation({
    handler: postMaintenance,
})
const locationsQuery = createQuery({
    handler: getLocations,
})
const serviceAreasQuery = createQuery({
    handler: getServiceAreas,
})
const servicesQuery = createQuery({
    handler: getServices,
})

sample({
    clock: pageMounted,
    target: [
        sendFormMutation.reset,
        applicationsModel.effects.getUserDataApplicationsFx,
        locationsQuery.start,
        serviceAreasQuery.start,
    ],
})

sample({
    clock: sample({
        clock: $serviceType,
        filter: Boolean,
    }),
    fn: ({ id }) => ({ serviceArea: id.toString() }),
    target: servicesQuery.start,
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
        room: $room,
    },
    filter: ({ serviceType, service }) => !!serviceType && !!service,
    fn: ({ files, name, phone, email, note, service, location, room, serviceType }): TechnicalMaintenance => {
        return {
            applicantName: name,
            description: note,
            email,
            phone,
            location: location?.title,
            room,
            files,
            serviceAreaId: serviceType!.id.toString(),
            serviceCategoryId: service!.id.toString(),
        }
    },
    target: sendFormMutation.start,
})

sample({
    clock: sendFormMutation.finished.success,
    fn: ({ result }) => result.ticketId,
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
    setRoom,
    sendForm,
}

export const stores = {
    locations: locationsQuery.$data,
    serviceAreas: serviceAreasQuery.$data,
    services: servicesQuery.$data,
    servicesLoading: servicesQuery.$pending,
    pageLoading: or(
        locationsQuery.$pending,
        serviceAreasQuery.$pending,
        applicationsModel.effects.getUserDataApplicationsFx.pending,
    ),
    files: $files,
    note: $note,
    name: $name,
    phone: $phone,
    email: $email,
    serviceType: $serviceType,
    service: $service,
    location: $location,
    room: $room,
    loading: sendFormMutation.$pending,
    done: sendFormMutation.$succeeded,
    applicationNumber: $applicationNumber,
}
