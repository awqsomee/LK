import { MethodObtainingOptions } from '@shared/consts/applications'
import { IInputAreaData } from '@shared/ui/input-area/model'

export const getStudentMethodObtainingFields = (): IInputAreaData[] => {
    return [
        {
            title: 'Способ получения справки',
            type: 'select',
            width: '100%',
            fieldName: 'method_obtaining',
            value: null,
            editable: true,
            required: true,
            items: MethodObtainingOptions,
        },
    ]
}
