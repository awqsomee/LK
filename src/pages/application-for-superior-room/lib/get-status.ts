import { format } from 'date-fns'
import { ru } from 'date-fns/locale'

import { User } from '@shared/api/model'
import { superiorRoomEndDate, superiorRoomStartDate } from '@shared/routing/routes/student'

export const superiorRoomAlert = `Подача заявок открыта с ${format(new Date(superiorRoomStartDate), 'HH:mm d MMMM', { locale: ru })} до ${format(new Date(superiorRoomEndDate), 'HH:mm d MMMM', { locale: ru })}!`

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getStatusFormSuperiorRoom = (user: User) => {
    const currentTime = new Date()

    // if (user.enterYear !== '2023/2024') return 'Форма доступна только для студентов 1 курса'

    if (currentTime < new Date(superiorRoomStartDate)) return superiorRoomAlert

    if (currentTime > new Date(superiorRoomEndDate)) return 'Подача заявок закрыта'

    return ''
}
