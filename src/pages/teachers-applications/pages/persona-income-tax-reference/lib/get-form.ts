import getMethodObtainingFields from '@features/applications/lib/get-method-obtaining-fields'

import getTeacherSubdivisions from '@entities/applications/lib/get-teacher-subdivisions'

import { UserApplication } from '@shared/api/model'
import { IInputArea } from '@shared/ui/input-area/model'

const getForm = (data: UserApplication): IInputArea => {
    const { surname, name, patronymic, group, email, phone } = data

    return {
        title: 'Справка о выплате стипендии и иные выплаты (из бухгалтерии)',
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
                value: null,
                fieldName: 'number_copies',
                type: 'number',
                editable: true,
                required: true,
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
