import getStudentSubdivisions from '@pages/applications/lib/get-student-subdivisions'

import getAddressFields from '@features/applications/lib/get-address-fields'
import { getStudentMethodObtainingFields } from '@features/applications/lib/get-student-method-obtaining-fields'

import { UserApplication } from '@shared/api/model'
import { NumberOfCopiesOptions } from '@shared/consts/applications'
import { IInputArea } from '@shared/ui/input-area/model'

const getForm = (dataUserApplication: UserApplication): IInputArea => {
    return {
        title: 'Справка-вызов',
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
            ...getStudentMethodObtainingFields(),
            ...getStudentSubdivisions(dataUserApplication),
            ...getAddressFields(),
            {
                title: 'Количество экземпляров справки',
                type: 'select',
                width: '100',
                fieldName: 'number_copies',
                value: null,
                editable: true,
                required: true,
                items: NumberOfCopiesOptions,
            },
            {
                title: 'Место предоставления справки',
                fieldName: 'place_reference',
                value: null,
                editable: true,
                required: true,
            },
            {
                title: 'Период времени - с:',
                type: 'date',
                fieldName: 'time-before',
                value: '',
                editable: true,
                required: true,
            },
            {
                title: 'по:',
                type: 'date',
                fieldName: 'time-after',
                value: '',
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
    }
}

export default getForm
