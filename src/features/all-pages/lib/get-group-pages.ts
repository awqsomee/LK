import { PETeacher } from '@shared/api/physical-education'
import { Groups, IRoutes, pageGroups } from '@shared/routing'

type RoutesOrder = Record<(typeof pageGroups)[Groups], number>

export const routesOrder: RoutesOrder = {
    Основное: 0,
    'Кадровая среда': 1,
    'Учебная деятельность': 2,
    Коммуникация: 3,
    'Центр компетенций': 4,
    'Научная деятельность': 5,
    'Находится в разработке': 6,
}

const getGroupPages = (routes: IRoutes | null, peTeacher: PETeacher | null, userGuid: string | null) => {
    if (!routes) return {} as Record<Groups, IRoutes>

    const tabs = Object.values(routes)
        .filter(({ getIsVisibleForCurrentUser, guidsAllowed }) =>
            (getIsVisibleForCurrentUser && peTeacher ? getIsVisibleForCurrentUser(peTeacher) : true) && guidsAllowed
                ? guidsAllowed.includes(userGuid || '')
                : true,
        )
        .reduce(
            (acc, route) => {
                const group = (route?.group ? pageGroups[route.group] : pageGroups.OTHER) as Groups

                if (!acc[group]) acc[group] = {}
                acc[group][route.id] = route
                return acc
            },
            {} as Record<Groups, IRoutes>,
        )

    return tabs
}

export default getGroupPages
