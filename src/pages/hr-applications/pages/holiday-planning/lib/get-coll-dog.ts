import { IInputAreaData } from '@ui/input-area/model'

import { SelectPage } from '@features/select'

import { SpecialFieldsNameConfig } from '@entities/applications/consts'

//type radioType = { id: number; title: string; data?: number | string }

const getCollDog = (data: IInputAreaData[]): SpecialFieldsNameConfig => {
    const reasonField = data.find((item: IInputAreaData) => item.fieldName === 'holiday_type')
    if (!!reasonField?.value) {
        const valueReason = reasonField?.value as SelectPage
        if (valueReason.title === 'Отпуск по коллективному договору') {
            return { coll_dog: 'collDog' }
        }
    }
    return { coll_dog: null }
}

export default getCollDog
