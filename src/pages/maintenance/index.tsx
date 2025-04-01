import React, { useEffect } from 'react'

import { useStoreMap, useUnit } from 'effector-react'

import { userModel } from '@shared/session'
import { CenterPage, Input, Loading, SubmitButton, TextArea, Title } from '@shared/ui/atoms'
import FormBlockWrapper from '@shared/ui/atoms/form-block'
import Flex from '@shared/ui/flex'
import GoBackButton from '@shared/ui/go-back-button'
import Select, { SelectPage } from '@shared/ui/select'

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
                        <Location />
                        <Room />
                        <ServiceType />
                        <Service />
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
        ></Input>
    )
}

const ServiceType = () => {
    const [value, setValue] = useUnit([model.stores.serviceType, model.events.setServiceType])

    return (
        <Select
            title="Выберите направление заявки"
            placeholder="Выберите направление заявки"
            required={true}
            width="100%"
            items={serviceTypes}
            selected={value}
            setSelected={setValue}
        />
    )
}

const Service = () => {
    const [serviceType] = useUnit([model.stores.serviceType])
    const [value, setValue] = useUnit([model.stores.service, model.events.setService])

    return (
        <Select
            title="Выберите необходимый сервис"
            placeholder="Начните вводить название сервиса"
            isActive={!!serviceType}
            required={true}
            width="100%"
            items={serviceType?.title === 'ИТ' ? itServices : campusServices}
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
            required={serviceType?.id === 'campus'}
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
    return <Input title="№ аудитории" placeholder="Введите № аудитории" value={value} setValue={setValue}></Input>
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
    const [sendForm, done, loading, note, name, serviceType, service] = useUnit([
        model.events.sendForm,
        model.stores.done,
        model.stores.loading,
        model.stores.note,
        model.stores.name,
        model.stores.serviceType,
        model.stores.service,
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
            isActive={Boolean(note) && Boolean(name) && Boolean(serviceType) && Boolean(service)}
            popUpFailureMessage={'Для отправки формы необходимо, чтобы все поля были заполнены'}
            popUpSuccessMessage="Данные формы успешно отправлены"
        />
    )
}

const serviceTypes: SelectPage[] = [
    { id: '1', title: 'ИТ' },
    { id: '25', title: 'Кампус' },
]

const itServices: SelectPage[] = [
    {
        id: 'incidents',
        title: 'Инциденты',
        items: [
            { id: '3', title: 'Сопровождение типового рабочего места' },
            { id: '2', title: 'Сопровождение рабочего места компьютерного класса' },
            { id: '1', title: 'Индивидуальная печать' },
            { id: '50', title: 'Облачная печать' },
            { id: '51', title: 'Корпоративная телефония' },
            { id: '52', title: 'Интернет' },
            { id: '53', title: 'Беспроводная сеть Wi-Fi' },
            { id: '54', title: 'Установка и настройка типового программного обеспечения' },
            { id: '55', title: 'Единая учетная запись пользователя' },
            { id: '56', title: 'Корпоративная электронная почта' },
            { id: '57', title: 'Предоставление доступа к сетевому диску' },
            { id: '58', title: 'Предоставление удаленного доступа к сети и сервисам Университета' },
            { id: '59', title: 'Мультимедийное оборудование' },
            { id: '60', title: 'Поддержка абитуриентов в рамках приемной компании' },
            { id: '61', title: 'Техническая поддержка мероприятия' },
            { id: '62', title: '1С: БИТ ВУЗ' },
            { id: '63', title: '1С: Университет Проф' },
            { id: '64', title: '1С: Зарплата и кадры государственного учреждения' },
            { id: '65', title: '1С: Бухгалтерия государственного учреждения' },
            { id: '66', title: '1С: Телефонный справочник' },
            { id: '67', title: '1С: Стипендия' },
            { id: '68', title: 'Битрикс' },
            { id: '69', title: 'СЭД Директум' },
            { id: '70', title: 'LMS' },
            { id: '71', title: 'МТС Link' },
            { id: '72', title: 'ВКС КонтурТолк' },
            { id: '73', title: 'Электронная подпись' },
            { id: '74', title: 'Бюджетная оценка запроса на изменения для принятия решения' },
            { id: '75', title: 'Антиплагиат' },
            { id: '76', title: 'КонтурДиадок' },
            { id: '77', title: 'Прокторинг' },
            { id: '78', title: 'КонтурЭкстерн' },
            { id: '79', title: 'Виртуальная машина для сайта mospolytech.ru ' },
        ],
    },
    {
        id: 'maintenanceRequest',
        title: 'Запрос на обслуживание',
        items: [
            { id: '80', title: 'Консультации рядовых пользователей' },
            { id: '81', title: 'Обучение пользователей' },
            { id: '82', title: 'Сброс паролей' },
            { id: '129', title: 'Виртуальная машина для видеонаблюдения' },
            { id: '130', title: 'Личный кабинет (новый дизайн)' },
            { id: '131', title: 'Система HelpDeskEddy' },
        ],
    },
    {
        id: 'editsRequest',
        title: 'Запрос на изменения',
        items: [
            { id: '83', title: 'Первичное предоставление типового рабочего места' },
            { id: '84', title: 'Первичное предоставление рабочего места компьютерного класса' },
            { id: '85', title: 'Организация сетевого подключения' },
            { id: '86', title: 'Предоставление виртуальной машины' },
        ],
    },
]

const campusServices: SelectPage[] = [
    {
        id: 'carpenter',
        title: 'Плотник',
        items: [
            { id: '87', title: 'Такелажные работы' },
            { id: '88', title: 'Ремонт мебели' },
            { id: '89', title: 'Замена/ремонт замка' },
            { id: '90', title: 'Окна (не открывается, не закрывается)' },
            { id: '91', title: 'Крепление полок/деталей интерьера' },
            { id: '92', title: 'Двери ремонт' },
            { id: '93', title: 'Замена потолочных плит армстронг' },
            { id: '94', title: 'Мелкий ремонт помещения (подкрасить, закрепить напольное покрытие)' },
            { id: '95', title: 'Ремонт/замена доводчика' },
        ],
    },
    {
        id: 'plumber',
        title: 'Слесарь-сантехник',
        items: [
            { id: '96', title: 'Ремонт и замена кранов' },
            { id: '97', title: 'Ремонт и замена душевой лейки, шланга' },
            { id: '98', title: 'Устранение засоров' },
            { id: '99', title: 'Ремонт слива унитаза, настройка арматуры' },
            { id: '100', title: 'Монтажные работы по сантехники' },
            { id: '101', title: 'Устранение течей в сантехнических изделиях' },
            { id: '102', title: 'Устранение аварийных ситуаций' },
            { id: '103', title: 'Отсутствие холодной/горячей воды' },
        ],
    },
    {
        id: 'electrician',
        title: 'Электрик',
        items: [
            { id: '104', title: 'Освещение (замена ламп)' },
            { id: '105', title: 'Монтаж/ремонт розеток' },
            { id: '106', title: 'Монтаж освещения' },
            { id: '107', title: 'Подключение оборудования к 220' },
            { id: '108', title: 'Подключение рабочего места' },
            { id: '109', title: 'Замена/ремонт выключателя' },
            { id: '110', title: 'Смонтировать освещение' },
            { id: '111', title: 'Устранение аварийных ситуаций' },
            { id: '112', title: 'Ремонт электроплиты' },
            { id: '113', title: 'Монтаж/ремонт кабель-каналов' },
        ],
    },
    {
        id: 'cleaning',
        title: 'Уборка',
        items: [
            { id: '114', title: 'Уборка помещения' },
            { id: '115', title: 'Вынос мусора' },
        ],
    },
    {
        id: 'elevators',
        title: 'Лифты',
        items: [
            { id: '116', title: 'Устранение аварийной ситуации' },
            { id: '117', title: 'Ремонт лифта' },
        ],
    },
    {
        id: 'windows',
        title: 'Окна',
        items: [{ id: '118', title: 'Ремонт окон' }],
    },
    {
        id: 'other',
        title: 'Прочее',
        items: [
            {
                id: '119',
                title: 'Прочее запросы на обслуживание, не входящие в каталог услуг по направлению работы дирекции',
            },
        ],
    },
]

export default Maintenance
