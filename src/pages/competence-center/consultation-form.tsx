import React, { useEffect, useState } from 'react'

import BaseApplicationWrapper from '@pages/applications/ui/base-application-wrapper'

import checkFormFields from '@features/send-form/check-form-fields'

import { applicationsModel } from '@entities/applications'

import { UserApplication } from '@shared/api/model'
import { FormBlock, SubmitButton } from '@shared/ui/atoms'
import InputArea from '@shared/ui/input-area'
import { IInputArea, IInputAreaData } from '@shared/ui/input-area/model'
import { LoadedState, SpecialFieldsName, SpecialFieldsNameConfig } from '@shared/ui/input-area/types'
import { SelectPage } from '@shared/ui/select'

const CompetenceCenterConsultationFormPage = () => {
    const [form, setForm] = useState<IInputArea | null>(null)
    const [completed, setCompleted] = useState(false)
    const [loading] = useState(false)
    const [specialFieldsName, setSpecialFieldsName] = useState<SpecialFieldsNameConfig>({})
    const isDone = completed ?? false
    const {
        data: { dataUserApplication },
    } = applicationsModel.selectors.useApplications()

    useEffect(() => {
        if (!!dataUserApplication) {
            setForm(getForm(dataUserApplication))
        }
    }, [dataUserApplication])

    useEffect(() => {
        if (!!form) {
            setSpecialFieldsName(getCommunicationType(form.data as IInputAreaData[]))
        }
    }, [form])

    return (
        <BaseApplicationWrapper isDone={isDone}>
            {!!form && !!setForm && (
                <FormBlock noHeader>
                    <InputArea
                        {...form}
                        collapsed={isDone}
                        setData={setForm as LoadedState}
                        specialFieldsNameConfig={specialFieldsName}
                    />

                    <SubmitButton
                        text={!isDone ? 'Отправить' : 'Отправлено'}
                        action={() => {
                            setCompleted(true)
                        }}
                        isLoading={loading}
                        completed={completed}
                        setCompleted={setCompleted}
                        repeatable={false}
                        buttonSuccessText="Отправлено"
                        isDone={isDone}
                        isActive={checkFormFields(form)}
                        popUpFailureMessage={'Для отправки формы необходимо, чтобы все поля были заполнены'}
                        popUpSuccessMessage="Данные формы успешно отправлены"
                    />
                </FormBlock>
            )}
        </BaseApplicationWrapper>
    )
}

const getForm = (dataUserApplication: UserApplication): IInputArea => {
    const { surname, name, patronymic, email, phone } = dataUserApplication
    return {
        title: 'Связаться с Центром компетенций',
        data: [
            {
                title: 'ФИО',
                fieldName: 'fio',
                value: surname + ' ' + name + ' ' + patronymic,
                editable: false,
            },
            {
                fieldName: 'type',
                title: 'Способ связи',
                type: 'select',
                value: null,
                items: [
                    {
                        id: 'tel',
                        title: 'Телефон',
                    },
                    {
                        id: 'email',
                        title: 'Email',
                    },
                    {
                        id: 'lk',
                        title: 'Личный кабинет',
                    },
                ],
                width: '100',
                editable: true,
                required: true,
            },
            {
                title: 'Электронная почта',
                fieldName: 'email',
                type: 'email',
                value: email,
                specialType: 'email',
            },
            {
                fieldName: 'tel',
                value: phone,
                title: 'Телефон',
                type: 'tel',
                specialType: 'tel',
            },
        ],
    }
}

// eslint-disable-next-line react-refresh/only-export-components
export const getCommunicationType = (data: IInputAreaData[]): SpecialFieldsNameConfig => {
    const reasonField = data.find((item: IInputAreaData) => item.fieldName === 'type')
    let resultNameField: SpecialFieldsName = null
    if (!!reasonField?.value) {
        const valueReason = reasonField?.value as SelectPage
        if (valueReason.id === 'tel') {
            resultNameField = 'tel'
        }
        if (valueReason.id === 'email') {
            resultNameField = 'email'
        }
    }
    return { reason_academic: resultNameField }
}

export default CompetenceCenterConsultationFormPage
