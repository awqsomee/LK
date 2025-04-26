import getBasicFieldsApplicationTeacher from '@pages/teachers-applications/lib/get-basic-fields-application-teacher'
import { getLastYearForPeriod } from '@pages/teachers-applications/lib/get-last-year-for-period'

import getAddressFields from '@features/applications/lib/get-address-fields'
import getMethodObtainingFields from '@features/applications/lib/get-method-obtaining-fields'

import getTeacherSubdivisions from '@entities/applications/lib/get-teacher-subdivisions'

import { UserApplication } from '@shared/api/model'
import { IInputArea } from '@shared/ui/input-area/model'

const getForm = (data: UserApplication): IInputArea => {
    return {
        title: 'Справка о ежемесячных выплатах сотрудника, находящегося в отпуске по уходу за ребенком (декрет)',
        data: [
            ...getBasicFieldsApplicationTeacher(data),
            {
                title: 'Период',
                type: 'select',
                value: null,
                fieldName: 'period',
                editable: true,
                width: '100',
                required: true,
                items: getLastYearForPeriod(),
            },
            ...getMethodObtainingFields(),
            ...getTeacherSubdivisions(),
            ...getAddressFields(),
            {
                title: 'Комментарий к заявке',
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
