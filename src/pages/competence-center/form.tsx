import React, { useEffect, useState } from 'react'

import BaseApplicationWrapper from '@pages/applications/ui/base-application-wrapper'

import checkFormFields from '@features/send-form/check-form-fields'

import { Colors } from '@shared/consts'
import { FormBlock, SubmitButton } from '@shared/ui/atoms'
import InputArea from '@shared/ui/input-area'
import { IInputArea } from '@shared/ui/input-area/model'
import { LoadedState } from '@shared/ui/input-area/types'

const ComeptenceCenterForm = () => {
    const [form, setForm] = useState<IInputArea | null>(null)
    const [completed, setCompleted] = useState(false)
    const [loading] = useState(false)
    const isDone = completed ?? false
    useEffect(() => {
        setForm(getForm())
    }, [])
    return (
        <BaseApplicationWrapper isDone={isDone}>
            {!!form && !!setForm && (
                <FormBlock noHeader>
                    <InputArea {...form} collapsed={isDone} setData={setForm as LoadedState} />

                    <SubmitButton
                        text={!isDone ? 'Отправить' : 'Отправлено'}
                        action={() => {}}
                        isLoading={loading}
                        completed={completed}
                        setCompleted={setCompleted}
                        repeatable={false}
                        buttonSuccessText="Отправлено"
                        isDone={isDone}
                        isActive={checkFormFields(form)}
                        popUpFailureMessage={'Для отправки формы необходимо, чтобы все поля были заполнены'}
                        popUpSuccessMessage="Данные формы успешно отправлены"
                        background={Colors.orange.main}
                    />
                </FormBlock>
            )}
        </BaseApplicationWrapper>
    )
}

const getForm = (): IInputArea => {
    return {
        title: 'Отправить заявку в Центр компетенций',
        data: [
            {
                fieldName: 'type',
                title: 'Тип заявки',
                type: 'select',
                value: null,
                items: [
                    {
                        id: '0',
                        title: 'Консультация',
                    },
                    {
                        id: '1',
                        title: 'Генерация паспорта',
                    },
                ],
                width: '100',
                editable: true,
                required: true,
            },
            {
                fieldName: 'fio',
                value: '',
                title: 'ФИО',
            },
            {
                fieldName: 'type',
                title: 'Способ связи',
                type: 'select',
                value: null,
                items: [
                    {
                        id: '0',
                        title: 'Телефон',
                    },
                    {
                        id: '1',
                        title: 'Email',
                    },
                ],
                width: '100',
                editable: true,
                required: true,
            },
            {
                fieldName: 'tel',
                value: '',
                title: 'Телефон',
                type: 'tel',
            },
        ],
    }
}

export default ComeptenceCenterForm
