import getDelayInDays from '@features/medical-certificate/lib/get-delay-in-days'

import { UserApplication } from '@shared/api/model'
import { IInputArea } from '@shared/ui/input-area/model'

const ReasonDeductionOptions = [
    { id: 0, title: 'по собственному желанию' },
    { id: 1, title: 'за академическую неуспеваемость' },
    { id: 2, title: 'за неоплату обучения' },
    { id: 3, title: 'в связи с переводом' },
    { id: 4, title: 'отчисление с расторжением договора' },
]

const getForm = (dataUserApplication: UserApplication): IInputArea => {
    return {
        title: 'Отчисление по инициативе обучающегося',
        data: [
            {
                title: 'Телефон',
                type: 'tel',
                mask: true,
                fieldName: 'phone',
                editable: true,
                required: true,
                value: dataUserApplication.phone,
            },
            {
                title: 'Email',
                type: 'email',
                fieldName: 'email',
                value: dataUserApplication.email,
                editable: true,
                required: true,
            },
            {
                title: 'Причина отчисления',
                type: 'select',
                fieldName: 'reason',
                width: '100',
                value: null,
                required: true,
                editable: true,
                items: ReasonDeductionOptions,
            },
            {
                title: 'Перевод в',
                fieldName: 'toVuz',
                value: '',
                editable: true,
                required: true,
                specialType: 'universityTransfer',
            },
            {
                title: 'Количество листов документов, подтверждающих возможность перевода:',
                type: 'text',
                fieldName: 'num_sheets',
                value: null,
                specialType: 'universityTransfer',
                editable: true,
                required: true,
            },
            {
                title: 'Дата отчисления c:',
                type: 'date',
                fieldName: 'time-before',
                value: '',
                minValueInput: getDelayInDays(0),
                editable: true,
                required: true,
            },
            {
                title: 'Комментарий к заявке',
                type: 'textarea',
                fieldName: 'comment',
                value: '',
                editable: true,
            },
        ],
        documents: { files: [], fieldName: 'docs', maxFiles: 6, required: false },
    }
}

export default getForm
