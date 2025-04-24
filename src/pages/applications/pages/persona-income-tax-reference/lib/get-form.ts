import getTeacherSubdivisions from '@pages/teachers-applications/lib/get-teacher-subdivisions'

import getMethodObtainingFields from '@features/applications/lib/get-method-obtaining-fields'

import { UserApplication } from '@shared/api/model'
import { IInputArea } from '@shared/ui/input-area/model'

const numberOfCopiesOptions = [
    { id: 1, title: '1' },
    { id: 2, title: '2' },
    { id: 3, title: '3' },
    { id: 4, title: '4' },
    { id: 5, title: '5' },
    { id: 6, title: '6' },
    { id: 7, title: '7' },
    { id: 8, title: '8' },
    { id: 9, title: '9' },
]

const getForm = (data: UserApplication): IInputArea => {
    const { surname, name, patronymic, group, email, phone } = data

    return {
        title: 'Запрос справки из бухгалтерии',
        data: [
            {
                title: 'ФИО',
                fieldName: 'fio',
                value: surname + ' ' + name + ' ' + patronymic,
                editable: false,
            },
            {
                title: 'Учебная группа',
                fieldName: 'group',
                type: 'tel',
                value: group,
                editable: false,
            },
            {
                title: 'Электронная почта',
                fieldName: 'email',
                type: 'email',
                value: email,
                editable: true,
                required: true,
            },
            {
                title: 'Телефон',
                fieldName: 'phone',
                type: 'tel',
                value: phone,
                editable: true,
                required: true,
            },
            {
                title: 'Тип справки',
                type: 'select',
                value: null,
                fieldName: 'type',
                editable: true,
                width: '100',
                required: true,
                items: [
                    { id: '0', title: 'Справка по стипендии' },
                    { id: '1', title: 'Запрос для субсидии по форме #2 за 7 месяцев' },
                    { id: '2', title: 'Запрос для субсидии по форме #2 за 13 месяцев' },
                ],
            },
            {
                title: 'Период c',
                type: 'month',
                fieldName: 'time-from',
                value: '',
                editable: true,
                required: true,
            },
            {
                title: 'по',
                type: 'month',
                fieldName: 'time-to',
                value: '',
                editable: true,
                required: true,
            },
            {
                title: 'Количество копий',
                type: 'select',
                width: '100',
                fieldName: 'number_copies',
                value: numberOfCopiesOptions[0],
                editable: true,
                required: true,
                items: numberOfCopiesOptions,
            },
            ...getMethodObtainingFields(),
            ...getTeacherSubdivisions(),
            {
                title: 'Дополнительная информация',
                type: 'textarea',
                fieldName: 'commentary',
                value: '',
                editable: true,
            },
        ],
        documents: { files: [], fieldName: 'docs', maxFiles: 4, required: false },
    }
}

export default getForm
