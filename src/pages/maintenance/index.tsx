import React, { useEffect } from 'react'

import { useStoreMap, useUnit } from 'effector-react'

import { userModel } from '@shared/session'
import { CenterPage, Input, Loading, SubmitButton, TextArea, Title } from '@shared/ui/atoms'
import FormBlockWrapper from '@shared/ui/atoms/form-block'
import Flex from '@shared/ui/flex'
import GoBackButton from '@shared/ui/go-back-button'
import Select from '@shared/ui/select'

import * as model from './model'

const Maintenance = () => {
    const [pageMounted, done, applicationNumber, pageLoading] = useUnit([
        model.events.pageMounted,
        model.stores.done,
        model.stores.applicationNumber,
        model.stores.pageLoading,
    ])
    const isAuthenticated = useUnit(userModel.stores.isAuthenticated)

    useEffect(() => {
        pageMounted()
    }, [])

    if (pageLoading)
        return (
            <Flex h="100%" d="column" ai="center" jc="center">
                <Loading />
            </Flex>
        )

    return (
        <CenterPage padding="1rem" style={{ overflow: 'auto', alignItems: 'start' }}>
            <FormBlockWrapper noHeader>
                {!isAuthenticated && <GoBackButton />}
                <Title size={4} align="left">
                    Техническое обслуживание
                </Title>
                {done ? (
                    <>Спасибо! Ваш номер заявки {applicationNumber}.</>
                ) : (
                    <>
                        <Name />
                        <Phone />
                        <Email />
                        <ServiceType />
                        <Service />
                        <Location />
                        <Room />
                        <Note />
                        {/* <File /> */}
                        <Submit />
                    </>
                )}
            </FormBlockWrapper>
        </CenterPage>
    )
}

const Note = () => {
    const [value, setValue] = useUnit([model.stores.note, model.events.setNote])
    return (
        <TextArea
            placeholder="Опишите проблему и точное местоположение"
            required={true}
            title="Описание заявки"
            value={value}
            setValue={setValue}
        ></TextArea>
    )
}

const Name = () => {
    const [value, setValue] = useUnit([model.stores.name, model.events.setName])
    return (
        <Input
            title="Фамилия Имя Отчество"
            placeholder="Введите ФИО"
            required={true}
            value={value}
            setValue={setValue}
        ></Input>
    )
}

const Phone = () => {
    const [value, setValue] = useUnit([model.stores.phone, model.events.setPhone])
    return (
        <Input
            title="Контактный телефон (сотовый в формате +7-ххх-ххх-хх-хх или внутренний в формате хххх)"
            placeholder="Введите контактный телефон"
            type="tel"
            value={value}
            setValue={setValue}
            required
        ></Input>
    )
}

const Email = () => {
    const [value, setValue] = useUnit([model.stores.email, model.events.setEmail])
    return (
        <Input
            title="Адрес электронной почты"
            placeholder="Введите адрес электронной почты"
            value={value}
            type="email"
            setValue={setValue}
            required
        ></Input>
    )
}

const ServiceType = () => {
    const [serviceAreas] = useUnit([model.stores.serviceAreas])
    const [value, setValue] = useUnit([model.stores.serviceType, model.events.setServiceType])

    return (
        <Select
            title="Выберите направление заявки"
            placeholder="Выберите направление заявки"
            required={true}
            isActive={!!serviceAreas}
            width="100%"
            items={serviceAreas || []}
            selected={value}
            setSelected={setValue}
        />
    )
}

const Service = () => {
    const [serviceType, services] = useUnit([model.stores.serviceType, model.stores.services])
    const [value, setValue] = useUnit([model.stores.service, model.events.setService])

    return (
        <Select
            title="Выберите необходимый сервис"
            placeholder="Начните вводить название сервиса"
            isActive={!!serviceType && !!services}
            required={true}
            width="100%"
            items={services || []}
            selected={value}
            setSelected={setValue}
            withSearch
        />
    )
}

const Location = () => {
    const [value, setValue] = useUnit([model.stores.location, model.events.setLocation])
    const locations = useStoreMap(
        model.stores.locations,
        (locations) =>
            locations?.map((location) => ({
                id: location.name,
                title: location.name,
            })) ?? [],
    )
    const [serviceType] = useUnit([model.stores.serviceType])

    return (
        <Select
            title="Локация, где необходимо выполнить заявку"
            placeholder="Начните вводить локацию"
            required={serviceType?.id === 'campus-services'}
            width="100%"
            isActive={!!locations?.length}
            items={locations ?? []}
            selected={value}
            setSelected={setValue}
            withSearch
        />
    )
}

const Room = () => {
    const [value, setValue] = useUnit([model.stores.room, model.events.setRoom])
    const [serviceType] = useUnit([model.stores.serviceType])

    return (
        <Input
            title="№ аудитории"
            placeholder="Введите № аудитории"
            value={value}
            setValue={setValue}
            required={serviceType?.id === 'campus-services'}
        />
    )
}

// const File = () => {
//     const [files, setFiles] = useUnit([model.stores.files, model.events.setFiles])
//     return (
//         <>
//             <Title size={4} align="left" bottomGap="5px">
//                 Фотография
//             </Title>
//             <FileInput files={files} setFiles={setFiles} isActive />
//         </>
//     )
// }

const Submit = () => {
    const [sendForm, done, loading, note, name, phone, email, serviceType, service, location, room] = useUnit([
        model.events.sendForm,
        model.stores.done,
        model.stores.loading,
        model.stores.note,
        model.stores.name,
        model.stores.phone,
        model.stores.email,
        model.stores.serviceType,
        model.stores.service,
        model.stores.location,
        model.stores.room,
    ])
    return (
        <SubmitButton
            text={!done ? 'Отправить' : 'Отправлено'}
            action={sendForm}
            isLoading={loading}
            completed={done}
            setCompleted={() => {}}
            repeatable={false}
            buttonSuccessText="Отправлено"
            isDone={done}
            isActive={
                Boolean(note) &&
                Boolean(name) &&
                Boolean(phone) &&
                Boolean(email) &&
                Boolean(serviceType) &&
                Boolean(service) &&
                (serviceType?.id === 'campus-services' ? Boolean(location) && Boolean(room) : true)
            }
            popUpFailureMessage={'Для отправки формы необходимо, чтобы все поля были заполнены'}
            popUpSuccessMessage="Данные формы успешно отправлены"
        />
    )
}

export default Maintenance
