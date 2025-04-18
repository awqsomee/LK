import token from '@shared/lib/token'

import { $api } from './config'
import { ElectronicInteraction } from './model'

export const get = async () => {
    return (await $api.get<ElectronicInteraction[]>(`?getPEPStatus&token=${token()}`)).data
}

export const set = async () => {
    return (await $api.get(`?setPEPAccept&token=${token()}`)).data
}
