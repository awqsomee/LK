import React, { useEffect } from 'react'

import { useUnit } from 'effector-react'

import BaseApplicationWrapper from '@pages/applications/ui/base-application-wrapper'

import { listTeacherMfc } from '@entities/applications'
import { TeacherMethodObtainingOptions } from '@entities/applications/consts'

import { Input, Message, TextArea, Title } from '@shared/ui/atoms'
import FormBlockWrapper from '@shared/ui/atoms/form-block'
import FileInput from '@shared/ui/file-input'
import Flex from '@shared/ui/flex'
import { Grid } from '@shared/ui/grid'
import { RadioButtonList } from '@shared/ui/organisms'
import Select from '@shared/ui/select'
import SubmitButton from '@shared/ui/submit-button'

import * as model from './model'

const PersonaIncomeTaxReferencePage = () => {
    const [createApplication, errorMessage, loading, completed, setCompleted, pageMounted] = useUnit([
        model.createApplication,
        model.$errorMessage,
        model.$pending,
        model.completed.value,
        model.completed.setValue,
        model.pageMounted,
    ])
    const isDone = completed ?? false

    useEffect(() => pageMounted(), [])

    return (
        <BaseApplicationWrapper isDone={isDone}>
            <FormBlockWrapper noHeader>
                <Message title="" icon={null} type="failure">
                    Срок изготовления справки - 3 рабочих дня, не считая дня подачи заявления
                </Message>
                <Fio />
                <Group />
                <Tel />
                <Email />
                <ApplicationType />
                <Dates />
                <Copies />
                <MethodObtaining />
                <Commentary />
                <Files />
                <SubmitButton
                    text={!isDone ? 'Отправить' : 'Отправлено'}
                    action={createApplication}
                    isLoading={loading}
                    completed={completed}
                    setCompleted={setCompleted}
                    repeatable={false}
                    buttonSuccessText="Отправлено"
                    isDone={isDone}
                    isActive={!errorMessage}
                    popUpFailureMessage={errorMessage}
                    popUpSuccessMessage="Данные формы успешно отправлены"
                />
            </FormBlockWrapper>
        </BaseApplicationWrapper>
    )
}

function Fio() {
    const { value, setValue } = useUnit(model.fields.fio)
    return <Input title="ФИО" placeholder="ФИО" value={value} setValue={setValue} isActive={false} required />
}

function Group() {
    const { value, setValue } = useUnit(model.fields.group)
    return (
        <Input
            title="Учебная группа"
            placeholder="Учебная группа"
            value={value}
            setValue={setValue}
            isActive={false}
            required
        />
    )
}

function Email() {
    const { value, setValue } = useUnit(model.fields.email)
    return (
        <Input
            title="Электронная почта"
            placeholder="test@test.com"
            value={value}
            setValue={setValue}
            type="email"
            required
        />
    )
}

function Tel() {
    const { value, setValue } = useUnit(model.fields.tel)
    return <Input title="Телефон" placeholder="Телефон" value={value} setValue={setValue} type="tel" mask required />
}

function ApplicationType() {
    const [value, setValue] = useUnit([model.fields.applicationType.value, model.fields.applicationType.setValue])

    return (
        <Select
            title="Тип справки"
            items={model.applicationTypes}
            selected={value}
            setSelected={setValue}
            required
            width="100%"
            placeholder="Тип справки"
        />
    )
}

function Dates() {
    const { startDate, setStartDate, endDate, setEndDate } = useUnit(model.fields.period)

    return (
        <Grid columnGap="0.5rem" columns="1fr 1fr" rows="1fr">
            <Input
                title="Период c"
                value={startDate}
                setValue={setStartDate}
                type="month"
                required
                width="100%"
                maxValue={model.maxDate}
            />
            <Input
                title="по"
                value={endDate}
                setValue={setEndDate}
                type="month"
                required
                width="100%"
                minValue={startDate}
                maxValue={model.maxDate}
            />
        </Grid>
    )
}

function Copies() {
    const [value, setValue] = useUnit([model.fields.copies.value, model.fields.copies.setValue])

    return (
        <Select
            title="Количество копий"
            items={model.numberOfCopiesOptions}
            selected={value}
            setSelected={setValue}
            required
            width="100%"
            placeholder="Количество копий"
        />
    )
}

// TODO: make shared
function MethodObtaining() {
    const [methodObtaining, setMethodObtaining, mfc, setMfc] = useUnit([
        model.fields.methodObtaining.value,
        model.fields.methodObtaining.setValue,
        model.fields.mfc.value,
        model.fields.mfc.setValue,
    ])
    return (
        <>
            <Select
                title="Способ получения справки"
                items={TeacherMethodObtainingOptions}
                selected={methodObtaining}
                setSelected={setMethodObtaining}
                required
                width="100%"
                placeholder="Способ получения справки"
            />
            {methodObtaining?.id === 1 && (
                <RadioButtonList
                    buttons={listTeacherMfc}
                    title="Выберите отделение МФЦ, где желаете получить готовый документ"
                    required
                    current={mfc}
                    setCurrent={setMfc}
                />
            )}
        </>
    )
}

function Commentary() {
    const { value, setValue } = useUnit(model.fields.commentary)
    return (
        <TextArea
            title="Дополнительная информация"
            placeholder="Дополнительная информация"
            value={value}
            setValue={setValue}
        />
    )
}

function Files() {
    const [value, setValue, isFilesRequired] = useUnit([
        model.fields.files.value,
        model.fields.files.setValue,
        model.$isFilesRequired,
    ])

    return (
        <Flex d="column" gap="0.5rem">
            {isFilesRequired && <Message type="alert" title="Прикрепите скан запроса" />}
            <Title size={5} align="left" required={isFilesRequired}>
                Приложите файлы
            </Title>
            <FileInput files={value} setFiles={setValue} isActive maxFiles={4} />
        </Flex>
    )
}

export default PersonaIncomeTaxReferencePage
