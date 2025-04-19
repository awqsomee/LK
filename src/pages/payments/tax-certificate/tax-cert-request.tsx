import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

import { useUnit } from 'effector-react'
import { z } from 'zod'

import { globalPrepareFormData } from '@pages/applications/lib/prepare-form-data'
import BaseApplicationWrapper from '@pages/applications/ui/base-application-wrapper'

import checkFormFields from '@features/send-form/check-form-fields'

import { ApplicationFormCodes } from '@shared/consts/models/application-form-codes'
import { FormBlock } from '@shared/ui/atoms'
import InputArea from '@shared/ui/input-area'
import { IInputArea } from '@shared/ui/input-area/model'
import { LoadedState } from '@shared/ui/input-area/types'
import { SelectPage } from '@shared/ui/select'
import SubmitButton from '@shared/ui/submit-button'

import * as model from './model'

const TaxCertRequest = () => {
    const { id, paymentId } = useParams<{ id: string; paymentId: string }>()
    const [form, setForm] = useState<IInputArea | null>(null)
    const [pending, completed, setCompleted] = useUnit([
        model.$pending,
        model.completed.value,
        model.completed.setValue,
    ])
    const isDone = completed ?? false

    useEffect(() => {
        setForm(
            getForm({
                taxCertGuid: id,
                paymentGuid: paymentId,
            }),
        )
    }, [])

    return (
        <BaseApplicationWrapper isDone={isDone}>
            {!!form && !!setForm && (
                <FormBlock noHeader>
                    <InputArea {...form} collapsed={isDone} setData={setForm as LoadedState} />
                    <SubmitButton
                        text={'Отправить'}
                        action={() => {
                            const result = globalPrepareFormData(ApplicationFormCodes[''], [form], true)
                            model.sendFormClicked(result)
                        }}
                        isLoading={pending}
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

const documentCodes = z.enum([
    '21',
    '03',
    '07',
    '08',
    '10',
    '11',
    '12',
    '13',
    '14',
    '15',
    '19',
    '22',
    '23',
    '24',
    '27',
    '91',
])

type DocumentCode = z.infer<typeof documentCodes>

const DocumentCode: Record<DocumentCode, string> = {
    '21': 'Паспорт гражданина Российской Федерации',
    '03': 'Свидетельство о рождении',
    '07': 'Военный билет',
    '08': 'Временное удостоверение, выданное взамен военного билета',
    '10': 'Паспорт иностранного гражданина',
    '11': 'Свидетельство о рассмотрении ходатайства о признании лица беженцем на территории Российской Федерации по существу',
    '12': 'Вид на жительство в Российской Федерации',
    '13': 'Удостоверение беженца',
    '14': 'Временное удостоверение личности гражданина Российской Федерации',
    '15': 'Разрешение на временное проживание в Российской Федерации',
    '19': 'Свидетельство о предоставлении временного убежища на территории Российской Федерации',
    '22': 'Загранпаспорт гражданина Российской Федерации',
    '23': 'Свидетельство о рождении, выданное уполномоченным органом иностранного государства',
    '24': 'Удостоверение личности военнослужащего Российской Федерации',
    '27': 'Военный билет офицера запаса',
    '91': 'Иной документ',
}

const documents: SelectPage[] = Object.entries(DocumentCode).map(([code, name]) => ({ id: code, title: name }))

const getForm = ({ taxCertGuid, paymentGuid }: { taxCertGuid: string; paymentGuid: string }): IInputArea => {
    return {
        title: 'Предоставление права проживания в каникулярный период (для выпускников университета, проживающих в общежитиях)',
        data: [
            {
                fieldName: 'TaxCertGuid',
                title: '',
                value: taxCertGuid,
                visible: false,
            },
            {
                fieldName: 'PaymentGuid',
                title: '',
                value: paymentGuid,
                visible: false,
            },
            {
                fieldName: 'Comment',
                title: 'Текст заявки',
                value: '',
                type: 'textarea',
                editable: true,
                required: true,
            },
            {
                fieldName: 'FIO',
                title: 'ФИО нового плетельщика',
                value: '',
                editable: true,
                required: true,
            },
            {
                fieldName: 'Birthday',
                title: 'Дата рождения плательщика',
                value: '',
                type: 'date',
                editable: true,
                required: true,
            },
            {
                fieldName: 'INN',
                title: 'ИНН',
                value: '',
                editable: true,
                required: true,
            },
            {
                fieldName: 'SNILS',
                title: 'СНИЛС',
                value: '',
                editable: true,
                required: true,
            },
            {
                fieldName: 'DocumentKindCode',
                title: 'Код документа удостоверения личности',
                type: 'select',
                value: null,
                items: documents,
                editable: true,
                required: true,
                width: '100%',
            },
            {
                fieldName: 'Series',
                title: 'Серия документа удостоверения личности',
                value: '',
                editable: true,
                required: true,
            },
            {
                fieldName: 'Number',
                title: 'Номер документа',
                value: '',
                editable: true,
                required: true,
            },
            {
                fieldName: 'DateIssue',
                title: 'Дата выдачи',
                value: '',
                editable: true,
                required: true,
                type: 'date',
            },
            {
                fieldName: 'Department',
                title: 'Подразделение',
                value: '',
                editable: true,
                required: true,
            },
            {
                fieldName: 'DepartmentCode',
                title: 'Код подразделения',
                value: '',
                editable: true,
                required: true,
            },
        ],
        documents: {
            files: [],
            fieldName: 'docs',
            required: false,
            allowedTypes: ['pdf', 'jpg', 'png'],
            maxFileSizeInMegaBytes: 5,
        },
    }
}

export default TaxCertRequest
