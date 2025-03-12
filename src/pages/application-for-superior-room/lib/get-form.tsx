import React from 'react'

import { SuperiorRoom } from '@shared/api/model'
import { CheckboxDocs, IInputArea, IInputAreaData } from '@shared/ui/input-area/model'
import { SelectPage } from '@shared/ui/select'

import { superiorRoomAlert } from './get-status'

type DormId = 'm' | 'bg' | 'ms' | 'pk'

const mAllocationTypes = [
    { id: 0, title: 'Один в комнате' },
    { id: 1, title: 'Двое в комнате' },
]

const bgAllocationTypes = [
    { id: 1, title: 'Двое в комнате' },
    { id: 2, title: 'Трое в комнате' },
]

const msAllocationTypes = [
    { id: 0, title: 'Один в комнате' },
    { id: 1, title: 'Двое в комнате' },
    { id: 2, title: 'Трое в комнате' },
]

const pkAllocationTypes = [{ id: 2, title: 'Трое в комнате' }]

export const dormLocations: { id: DormId; title: string }[] = [
    { id: 'bg', title: 'ул. Бориса Галушкина, д. 9' },
    { id: 'm', title: 'ул. Михалковская, д. 7, корп. 3' },
    { id: 'ms', title: 'ул. Малая Семеновская, д. 12' },
    { id: 'pk', title: 'ул. Павла Корчагина, д. 22, к.2' },
]

export const extracurricularActivities: CheckboxDocs[] = [
    {
        value: false,
        title: 'Общественная',
        files: [],
        maxFiles: 10,
        required: true,
        fieldName: 'society',
        checkboxCondition: 'straight',
    },
    {
        value: false,
        title: 'Научная',
        files: [],
        maxFiles: 10,
        required: true,
        fieldName: 'science',
        checkboxCondition: 'straight',
    },
    {
        value: false,
        title: 'Спортивная',
        files: [],
        maxFiles: 10,
        required: true,
        fieldName: 'sport',
        checkboxCondition: 'straight',
    },
    {
        value: false,
        title: 'Творческая',
        files: [],
        maxFiles: 10,
        required: true,
        fieldName: 'creativity',
        checkboxCondition: 'straight',
    },
]

const getForm = (data: SuperiorRoom, form: IInputArea | null): IInputArea => {
    const { fio, phone, email } = data
    const dormId = ((form?.data[3] as IInputAreaData)?.value as SelectPage)?.id
    const documentsAppendedValue = (form?.data[7] as IInputAreaData)?.value
    const optionalCheckboxValue = form?.optionalCheckbox?.value
    return {
        title: 'Заявка на комнату повышенной комфортности',
        data: [
            {
                title: 'ФИО',
                value: fio,
                fieldName: 'fio',
                width: '100%',
                editable: false,
            },
            {
                title: 'Телефон',
                value: (form?.data[1] as IInputAreaData)?.value ?? phone,
                fieldName: 'phone',
                type: 'tel',
                width: '100%',
                editable: true,
                required: true,
                mask: true,
            },
            {
                title: 'Email',
                value: (form?.data[2] as IInputAreaData)?.value ?? email,
                fieldName: 'email',
                type: 'email',
                width: '100%',
                editable: true,
                required: true,
            },
            {
                title: 'Адрес общежития',
                value: (form?.data[3] as IInputAreaData)?.value ?? null,
                fieldName: 'address',
                type: 'select',
                items: dormLocations,
                width: '100%',
                editable: true,
                required: true,
            },
            {
                title: 'Приоритетный тип размещения',
                value: null,
                fieldName: 'allocation',
                type: 'select',
                items:
                    dormId === 'bg'
                        ? bgAllocationTypes
                        : dormId === 'pk'
                          ? pkAllocationTypes
                          : dormId === 'ms'
                            ? msAllocationTypes
                            : mAllocationTypes,
                width: '100%',
                editable: !!dormId,
                required: true,
            },
            {
                title: 'Альтернативный тип размещения',
                value: null,
                fieldName: 'alternative-allocation',
                type: 'select',
                items:
                    dormId === 'bg'
                        ? bgAllocationTypes
                        : dormId === 'pk'
                          ? pkAllocationTypes
                          : dormId === 'ms'
                            ? msAllocationTypes
                            : mAllocationTypes,
                width: '100%',
                editable: !!dormId,
                required: true,
            },
            {
                title: 'Участие во внеучебной деятельности',
                value: null,
                fieldName: 'extracurricular',
                type: 'checkbox-docs',
                items: extracurricularActivities,
                width: '100%',
                editable: true,
                required: false,
            },
            {
                title: 'Необходимые документы приложены',
                type: 'checkbox',
                value: !!documentsAppendedValue,
                fieldName: '',
                editable: true,
                required: true,
            },
        ],
        alert: <>{superiorRoomAlert}</>,
        hint: 'Перед отправкой заявки обязательно проверьте указанную в форме контактную информацию (мобильный телефон и адрес электронной почты) и при необходимости внесите изменения.',
        optionalCheckbox: {
            title: (
                <>
                    С{' '}
                    <a
                        href="https://mospolytech.ru/upload/medialibrary/dcd/aj5km0q67pkjw737j8g5hynmz2dfhlxb/Prikaz-_1564_OD-ot-28.12.2024-Ob-utverzhdenii-razmerov-platy-za-dopolnitelnuyu-uslugu.pdf"
                        target="_blank"
                        rel="noreferrer"
                    >
                        приказом
                    </a>{' '}
                    об утверждении размеров платы за дополнительную услугу в студенческом городке от 28.12.2024 N1564-ОД
                    ознакомлен(а)
                </>
            ),
            value: !!optionalCheckboxValue,
            fieldName: '',
            editable: true,
        },
    }
}

export default getForm
