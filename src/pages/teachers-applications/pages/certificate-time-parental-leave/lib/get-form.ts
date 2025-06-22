import getBasicFieldsApplicationTeacher from '@pages/teachers-applications/lib/get-basic-fields-application-teacher'

import getAddressFields from '@features/applications/lib/get-address-fields'
import getMethodObtainingFields from '@features/applications/lib/get-method-obtaining-fields'

import getTeacherSubdivisions from '@entities/applications/lib/get-teacher-subdivisions'

import { UserApplication } from '@shared/api/model'
import { IInputArea } from '@shared/ui/input-area/model'

const getForm = (data: UserApplication): IInputArea => {
    return {
        title: 'Справка об отпуске по уходу за ребенком до 1,5 и 3 лет',
        data: [
            ...getBasicFieldsApplicationTeacher(data),
            {
                title: 'Текст заявки',
                type: 'textarea',
                fieldName: 'commentary',
                value: '',
                editable: true,
            },
            ...getMethodObtainingFields(),
            ...getTeacherSubdivisions('buhg'),
            ...getAddressFields(),
        ],
        documents: { files: [], fieldName: 'docs', maxFiles: 4, required: false },
    }
}

export default getForm
