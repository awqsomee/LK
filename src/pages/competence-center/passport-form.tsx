import React, { useEffect, useState } from 'react'

import { useGate, useUnit } from 'effector-react'

import BaseApplicationWrapper from '@pages/applications/ui/base-application-wrapper'

import checkFormFields from '@features/send-form/check-form-fields'

import { applicationsModel } from '@entities/applications'

import { UserApplication } from '@shared/api/model'
import { FormBlock, SubmitButton } from '@shared/ui/atoms'
import InputArea from '@shared/ui/input-area'
import { IInputArea, IInputAreaData } from '@shared/ui/input-area/model'
import { LoadedState } from '@shared/ui/input-area/types'

import * as model from './models/competence-center-model'

const CompetenceCenterPassportFormPage = () => {
    useGate(model.CompetenceCenterPassportFormGate)
    const [applicationFilled, loading, completed, setCompleted] = useUnit([
        model.passportApplicationFilled,
        model.$passportLoading,
        model.completed.value,
        model.completed.setValue,
    ])
    const [form, setForm] = useState<IInputArea | null>(null)
    const isDone = completed ?? false
    const {
        data: { dataUserApplication },
    } = applicationsModel.selectors.useApplications()

    useEffect(() => {
        if (!!dataUserApplication) {
            setForm(getForm(dataUserApplication))
        }
    }, [dataUserApplication])

    return (
        <BaseApplicationWrapper isDone={isDone}>
            {!!form && !!setForm && (
                <FormBlock noHeader>
                    <InputArea {...form} collapsed={isDone} setData={setForm as LoadedState} />

                    <SubmitButton
                        text={!isDone ? 'Отправить' : 'Отправлено'}
                        action={() => {
                            applicationFilled({
                                fio: (form.data[0] as IInputAreaData).value as string,
                                email: (form.data[1] as IInputAreaData).value as string,
                            })
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
    const { surname, name, patronymic, email } = dataUserApplication
    return {
        title: 'Отправить заявку в Центр компетенций',
        data: [
            // {
            //     fieldName: 'type',
            //     title: 'Тип заявки',
            //     type: 'select',
            //     value: null,
            //     items: [
            //         {
            //             id: '0',
            //             title: 'Консультация',
            //         },
            //         {
            //             id: '1',
            //             title: 'Генерация паспорта',
            //         },
            //     ],
            //     width: '100',
            //     editable: true,
            //     required: true,
            // },
            {
                title: 'ФИО',
                fieldName: 'fio',
                value: surname + ' ' + name + ' ' + patronymic,
                editable: false,
            },
            {
                title: 'Электронная почта, указанная при регистрации в АИС ЦП АНО «РСВ»',
                fieldName: 'email',
                type: 'email',
                value: email,
                editable: true,
                required: true,
            },
            // {
            //     fieldName: 'type',
            //     title: 'Способ связи',
            //     type: 'select',
            //     value: null,
            //     items: [
            //         {
            //             id: '0',
            //             title: 'Телефон',
            //         },
            //         {
            //             id: '1',
            //             title: 'Email',
            //         },
            //     ],
            //     width: '100',
            //     editable: true,
            //     required: true,
            // },
            // {
            //     fieldName: 'tel',
            //     value: '',
            //     title: 'Телефон',
            //     type: 'tel',
            // },
        ],
    }
}

export default CompetenceCenterPassportFormPage
