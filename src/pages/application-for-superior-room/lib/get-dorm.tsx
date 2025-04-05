import { IInputAreaData } from '@shared/ui/input-area/model'
import { SpecialFieldsName, SpecialFieldsNameConfig } from '@shared/ui/input-area/types'
import { SelectPage } from '@shared/ui/select'

export const getDorm = (data: IInputAreaData[]): SpecialFieldsNameConfig => {
    const reasonField = data.find((item: IInputAreaData) => item.fieldName === 'address')
    let resultNameField: SpecialFieldsName = null
    if (!!reasonField?.value) {
        const valueReason = reasonField?.value as SelectPage
        if (valueReason.id !== 'pk') {
            resultNameField = 'not_dorm11'
        }
    }
    return { reason_academic: resultNameField }
}
