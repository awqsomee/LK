import { createStore, sample } from 'effector'

import { userModel } from '@shared/session'

import { IRoutes } from '../consts'
import { employeeHiddenRoutes, employeeRoutes } from './employee'
import { generalHiddenRoutes, generalRoutes } from './private'
import { studentHiddenRoutes, studentRoutes } from './student'

export * from './private'
export * from './student'
export * from './employee'

export const $allRoutes = createStore<IRoutes | null>(null)

sample({
    clock: userModel.stores.user,
    source: { allowancesRoles: userModel.stores.roles, user: userModel.stores.user },
    fn: ({ allowancesRoles, user }) => ({
        ...generalRoutes,
        ...generalHiddenRoutes,
        ...(user?.user_status === 'stud'
            ? { ...studentRoutes(), ...studentHiddenRoutes({ studentFinance: user.finance }) }
            : { ...employeeRoutes({ allowancesRoles }), ...employeeHiddenRoutes({ allowancesRoles }) }),
    }),
    target: $allRoutes,
})
