import React, { useEffect } from 'react'

import { useUnit } from 'effector-react'

import { userModel } from '@shared/session'
import { CenterPage, Input, SubmitButton, TextArea, Title } from '@shared/ui/atoms'
import FormBlockWrapper from '@shared/ui/atoms/form-block'
import FileInput from '@shared/ui/file-input'
import GoBackButton from '@shared/ui/go-back-button'
import Select, { SelectPage } from '@shared/ui/select'

import * as model from './model'

const Maintenance = () => {
    const [pageMounted, done, applicationNumber] = useUnit([
        model.events.pageMounted,
        model.stores.done,
        model.stores.applicationNumber,
    ])
    const isAuthenticated = useUnit(userModel.stores.isAuthenticated)

    useEffect(() => {
        pageMounted()
    }, [])

    return (
        <CenterPage padding="1rem">
            <FormBlockWrapper noHeader>
                {!isAuthenticated && <GoBackButton />}
                <Title size={4} align="left">
                    Техническое обслуживание
                </Title>
                {done ? (
                    <>Спасибо! Ваш номер заявки {applicationNumber}.</>
                ) : (
                    <>
                        <Note />
                        <Name />
                        <Phone />
                        <Email />
                        <ServiceType />
                        <Service />
                        <Location />
                        <File />
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
            title="Опишите проблему и точное местоположение"
            value={value}
            setValue={setValue}
        ></TextArea>
    )
}

const Name = () => {
    const [value, setValue] = useUnit([model.stores.name, model.events.setName])
    return <Input title="ФИО" required={true} value={value} setValue={setValue}></Input>
}

const Phone = () => {
    const [value, setValue] = useUnit([model.stores.phone, model.events.setPhone])
    return <Input title="Контактный телефон" required={true} value={value} setValue={setValue}></Input>
}

const Email = () => {
    const [value, setValue] = useUnit([model.stores.email, model.events.setEmail])
    return <Input title="Email для уведомлений" value={value} setValue={setValue}></Input>
}

const ServiceType = () => {
    const [value, setValue] = useUnit([model.stores.serviceType, model.events.setServiceType])

    return (
        <Select
            title="Вид услуги"
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
            title="Вид услуги"
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
    const [serviceType] = useUnit([model.stores.serviceType])
    return (
        <Select
            title="Локация"
            required={serviceType?.id === 'campus'}
            width="100%"
            items={locations}
            selected={value}
            setSelected={setValue}
            withSearch
        ></Select>
    )
}

const File = () => {
    const [files, setFiles] = useUnit([model.stores.files, model.events.setFiles])
    return (
        <>
            <Title size={4} align="left" bottomGap="5px">
                Фотография
            </Title>
            <FileInput files={files} setFiles={setFiles} isActive />
        </>
    )
}

const Submit = () => {
    const [sendForm, done, loading, note, name, phone, serviceType, service] = useUnit([
        model.events.sendForm,
        model.stores.done,
        model.stores.loading,
        model.stores.note,
        model.stores.name,
        model.stores.phone,
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
            isActive={Boolean(note) && Boolean(name) && Boolean(phone) && Boolean(serviceType) && Boolean(service)}
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

const locations: SelectPage[] = [
    { id: '1679', title: 'Б. Семеновская 38; Корпус А' },
    { id: '1680', title: 'Б. Семеновская 38; Корпус Б' },
    { id: '1681', title: 'Б. Семеновская 38; Корпус В' },
    { id: '1682', title: 'Б. Семеновская 38; Корпус Н' },
    { id: '1683', title: 'Б. Семеновская 38; Корпус НД' },
    { id: '1684', title: 'М. Семеновская 12; Общежитие №1' },
    { id: '1685', title: '7-я Парковая 9/26; Общежитие №2' },
    { id: '1686', title: '11-я Парковая 36 стр.2; Спорт зал' },
    { id: '1865', title: 'ул. Большая Семеновская 38' },
    { id: '1866', title: 'ул. Малая Семеновская 12 стр.2' },
    { id: '1867', title: 'ул. 7-я Парковая 9/26' },
    { id: '1868', title: 'ул. 11-я Парковая 36 стр.2' },
    { id: '1869', title: 'ул. Лефортовский вал 26' },
    { id: '1870', title: 'ул. Лефортовский вал 26; Учебный корпус' },
    { id: '1873', title: 'ул. Садовая - Спасская 4, стр.1' },
    { id: '1875', title: 'ул. Садовая - Спасская 4, стр.3' },
    { id: '1877', title: 'ул. Садовая - Спасская 4, стр.4' },
    { id: '1879', title: 'ул. Садовая - Спасская 4, стр.5' },
    { id: '1881', title: 'ул. Бориса Галушкина 9' },
    { id: '1882', title: 'ул. Бориса Галушкина 9; Общежитие №6' },
    { id: '1885', title: 'ул. Рижский проезд 15, к.2' },
    { id: '1888', title: 'ул. Прянишникова, 2А, к.1' },
    { id: '1889', title: 'ул. Прянишникова, 2А, к.1; Учебный корпус' },
    { id: '1890', title: 'ул. Прянишникова, 2А, к.2' },
    { id: '1891', title: 'ул. Прянишникова, 2А, к.2; Учебный корпус' },
    { id: '1892', title: 'ул. Прянишникова, 2А, к.3' },
    { id: '1893', title: 'ул. Прянишникова, 2А, к.3; Учебный корпус' },
    { id: '1894', title: 'ул. Михалковская, 7, стр. 4' },
    { id: '1895', title: 'ул. Михалковская, 7, стр. 4; Учебный корпус' },
    { id: '1896', title: 'ул. Михалковская, 7, стр. 2' },
    { id: '1897', title: 'ул. Михалковская, 7, стр. 2; Учебный корпус' },
    { id: '1898', title: 'ул. Михалковская, 7, стр. 3' },
    { id: '1899', title: 'ул. Михалковская, 7, к.3' },
    { id: '1900', title: 'ул. 800-летия Москвы, 28, к.1' },
    { id: '1901', title: 'ул. 800-летия Москвы, 28, к.1; Общежитие № 4' },
    { id: '1902', title: 'ул. 1-й Балтийский переулок, 6/21, к.3' },
    { id: '1903', title: 'ул. 1-й Балтийский переулок, 6/21, к.3; Общежитие № 10' },
    { id: '1907', title: 'ул. Автозаводская, д.16, стр.2 (2-х этаж. пристр.)' },
    { id: '1908', title: 'ул. Автозаводская, д.16, стр.4 (корп3)' },
    { id: '1909', title: 'ул. Автозаводская, д.16, стр.5 (корп4)' },
    { id: '1910', title: 'ул. 1-ая Дубровская, д.16А, стр.1' },
    { id: '1911', title: 'ул. 1-ая Дубровская, д.16А, стр.1; Учебный корпус' },
    { id: '1912', title: 'ул. 1-ая Дубровская, д.16А, стр. 2' },
    { id: '1913', title: 'ул. 1-ая Дубровская, д.16А, стр. 2; Учебный корпус' },
    { id: '5084', title: 'ул. Прянишникова 2А' },
    { id: '5085', title: 'ул. Михалковская, 7' },
    { id: '5095', title: 'ул. Павла Корчагина 22 стр.1, 2, 3' },
    { id: '5101', title: 'ул. Павла Корчагина 22 стр.2' },
    { id: '5102', title: 'ул. Павла Корчагина 22 стр.1' },
    { id: '5103', title: 'ул. Павла Корчагина 22 стр.3' },
    { id: '5104', title: 'ул. Павла Корчагина 22 стр.5' },
    { id: '5105', title: 'ул. Павла Корчагина 22 стр.6' },
    { id: '5106', title: 'ул. Павла Корчагина 20а, к.3 Общежитие №7' },
    { id: '5107', title: 'ул. Садовая - Спасская 4, стр.2; Учебный корпус' },
    { id: '5108', title: 'ул. Садовая - Спасская 4, стр.6' },
    { id: '5109', title: 'ул. Садовая - Спасская 4, стр.8' },
    { id: '5110', title: 'ул. Садовая - Спасская 6, стр.1' },
    { id: '5111', title: 'ул. Рижский проезд 15, к.1' },
    { id: '5857', title: 'ул. Автозаводская 16 (корп.1,2)' },
    { id: '5858', title: 'ул. Автозаводская 16 стр 1 (корп5)' },
    { id: '5863', title: 'ул. Павла Корчагина 22а, к.2, общежитие №11' },
]

export default Maintenance
