import { User } from '@shared/api/model'
import { EndDateSuperiorRoom, StartDateSuperiorRoom } from '@shared/routing/routes/student'

export const superiorRoomAlert = 'Подача заявок открыта с 12:00 4 марта до 12:00 9 марта!'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getStatusFormSuperiorRoom = (user: User) => {
    const currentTime = new Date()

    // if (user.enterYear !== '2023/2024') return 'Форма доступна только для студентов 1 курса'

    if (currentTime < new Date(StartDateSuperiorRoom)) return superiorRoomAlert

    if (currentTime > new Date(EndDateSuperiorRoom)) return 'Подача заявок закрыта'

    return ''
}
