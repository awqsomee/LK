import getBasicFieldsApplicationTeacher from '@pages/teachers-applications/lib/get-basic-fields-application-teacher'

import getAddressFields from '@features/applications/lib/get-address-fields'
import getMethodObtainingFields from '@features/applications/lib/get-method-obtaining-fields'

import getTeacherSubdivisions from '@entities/applications/lib/get-teacher-subdivisions'

import { UserApplication } from '@shared/api/model'
import { IInputArea } from '@shared/ui/input-area/model'

const getForm = (data: UserApplication): IInputArea => {
    return {
        title: 'Справка о выплате (не выплате) единовременного пособия на рождение ребенка',
        data: [
            ...getBasicFieldsApplicationTeacher(data),
            {
                title: 'ФИО ребенка',
                value: null,
                fieldName: 'child_fio',
                mask: true,
                editable: true,
                required: true,
            },
            {
                title: 'Дата рождения ребенка',
                type: 'date',
                value: '',
                editable: true,
                fieldName: 'birth_child',
                required: true,
            },
            ...getMethodObtainingFields(),
            ...getTeacherSubdivisions('buhg'),
            ...getAddressFields(),
            {
                title: 'Текст заявки',
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
