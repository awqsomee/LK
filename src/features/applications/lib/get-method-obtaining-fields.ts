import { TeacherMethodObtainingOptions } from '@entities/applications/consts'

import { IInputAreaData } from '@shared/ui/input-area/model'

const getMethodObtainingFields = (): IInputAreaData[] => {
    return [
        {
            title: 'Способ получения справки',
            type: 'select',
            width: '100%',
            fieldName: 'method_obtaining',
            value: null,
            editable: true,
            required: true,
            items: TeacherMethodObtainingOptions,
        },
    ]
}

export default getMethodObtainingFields
