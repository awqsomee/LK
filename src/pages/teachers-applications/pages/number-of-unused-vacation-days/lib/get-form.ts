import { getDefaultSubdivision } from '@pages/teachers-applications/lib/get-default-subdivision'

import { getFormattedSubDivisions } from '@features/applications/lib/get-formatted-subdivisions'

import { UserApplication } from '@shared/api/model'
import { IInputArea } from '@shared/ui/input-area/model'

const getForm = (data: UserApplication): IInputArea => {
    return {
        title: 'Справка о количестве неиспользованных дней отпуска',
        data: [
            {
                title: 'Подразделение/должность',
                value: getDefaultSubdivision(data.subdivisions),
                fieldName: 'guid_staff',
                editable: true,
                width: '100',
                required: true,
                type: 'select',
                items: getFormattedSubDivisions(data.subdivisions),
                isSpecificSelect: true,
            },
        ],
    }
}

export default getForm
