import { createEvent, createStore, sample } from 'effector'
import { Module, Modules, TutorialId, TutorialRoles } from '../types'
import { createMutation, createQuery } from '@farfetched/core'
import {
    callUserInteraction,
    changeTutorialState,
    clear,
    completeModule,
    getUserTutorials,
    initializeTutorials,
    rerunModule,
    resetTutorial,
} from '@shared/api/tutorial-api'
import { popUpMessageModel } from '@entities/pop-up-message'
import { ModuleData, commonTutorials } from '../lib/tutorials'
import { stringToHash } from '@shared/lib/stringToHash'
import { userModel } from '@entities/user'
import { paymentsModel } from '@entities/payments'
import { TUTORIAL_HASH } from '@shared/constants'
import { getKeys } from '@shared/lib/typescript/getKeys'

const tutorialEnabled = createEvent<boolean>()
const setHeroVisited = createEvent<boolean>()
const increasedInteractions = createEvent()
const moduleCompleted = createEvent<TutorialId>()
const moduleRestarted = createEvent<TutorialId>()
const setCurrentTutorial = createEvent<TutorialId | null>()
const nextStep = createEvent()
const prevStep = createEvent()
const resetStep = createEvent()
const getTutorialData = createEvent()
const clearProgress = createEvent()

const $tutorialState = createStore<boolean | null>(null).reset(userModel.events.logout)
const $heroVisited = createStore<boolean>(false)
    .on(setHeroVisited, (_, value) => {
        localStorage.setItem('heroVisited', String(value))
        return value
    })
    .reset(userModel.events.logout)
const $currentModule = createStore<Module | null>(null)
    .on(moduleCompleted, (module) => ({ ...module, completed: true } as Module))
    .reset(userModel.events.logout)

const $currentStep = createStore<number>(0).reset(resetStep).reset(userModel.events.logout)
const $tutorials = createStore<Modules | null>(null)
    .on(moduleCompleted, (state, id) => {
        if (!state) return null
        const tutorials = {
            ...state,
            [id]: {
                ...state[id],
                completed: true,
            },
        }
        return tutorials
    })
    .reset(userModel.events.logout)
const $interactions = createStore<number>(0).reset(userModel.events.logout)

const setRoles = createEvent<TutorialRoles>()
const $roles = createStore<TutorialRoles>([])
    .on(setRoles, (_, roles) => roles)
    .reset(userModel.events.logout)

const $userTutorialsData = createStore<ModuleData | null>(null).reset(userModel.events.logout)

sample({
    clock: $roles,
    fn: (roles) => commonTutorials(roles),
    target: $userTutorialsData,
})

sample({
    clock: paymentsModel.effects.getPaymentsFx.doneData,
    fn: ({ dormitory, education }) => {
        const roles: TutorialRoles = []
        if (dormitory.length) roles.push('dormitory')
        if (education.length) roles.push('education')
        return roles
    },
    target: setRoles,
})

sample({
    clock: nextStep,
    source: {
        currentStep: $currentStep,
        currentModule: $currentModule,
    },
    fn: ({ currentStep, currentModule }) => {
        if (!currentModule) return 0
        const nextStep = currentStep + 1
        if (currentModule?.steps.length <= nextStep) return 0
        return nextStep
    },
    target: $currentStep,
})
sample({
    clock: prevStep,
    source: {
        currentStep: $currentStep,
        currentModule: $currentModule,
    },
    fn: ({ currentStep, currentModule }) => {
        if (!currentModule) return 0
        const prevStep = currentStep - 1
        if (prevStep < 0) return currentStep
        return prevStep
    },
    target: $currentStep,
})
sample({
    clock: setCurrentTutorial,
    source: $tutorials,
    fn: (tutorials, id) => {
        if (!tutorials || !id) return null
        const tutorial = tutorials[id]
        return tutorial ?? null
    },
    target: $currentModule,
})

sample({
    clock: moduleCompleted,
    target: resetStep,
})

const rerunModuleMutation = createMutation({
    handler: rerunModule,
})

sample({
    clock: moduleRestarted,
    target: rerunModuleMutation.start,
})

sample({
    clock: moduleRestarted,
    source: $tutorials,
    fn: (tutorials, id) => {
        if (!tutorials || !id) return null
        return { ...tutorials, [id]: { ...tutorials[id], completed: false } }
    },
    target: $tutorials,
})
sample({
    clock: rerunModuleMutation.$succeeded,
    source: { id: rerunModuleMutation.__.$latestParams, tutorials: $tutorials },
    filter: Boolean,
    fn: ({ id, tutorials }) => {
        if (!tutorials || !id) return null
        return { ...tutorials, [id]: { ...tutorials[id], completed: false } }
    },
    target: $tutorials,
})

sample({
    clock: rerunModuleMutation.$failed,
    fn: () => ({
        message: 'Не удалось перезапустить модуль',
        type: 'failure' as const,
    }),
    target: popUpMessageModel.events.evokePopUpMessage,
})
// sample({
//     clock: moduleRestarted,
//     source: {
//         tutorials: $tutorials,
//         tutorialState: $tutorialState,
//     },
//     fn: ({ tutorials, tutorialState }, id) => {
//         if (!tutorials) return null
//         if (!tutorialState) return tutorials
//         const newTutorials = {
//             ...tutorials,
//             [id]: {
//                 ...tutorials[id],
//                 completed: false,
//             },
//         }
//         return newTutorials
//     },
//     target: $tutorials,
// })

const getTutorialDataQuery = createQuery({
    handler: getUserTutorials,
})

sample({
    clock: getTutorialData,
    fn: () => Boolean(localStorage.getItem('heroVisited')),
    target: setHeroVisited,
})

sample({
    clock: getTutorialData,
    target: getTutorialDataQuery.start,
})

sample({
    clock: getTutorialDataQuery.finished.success,
    fn: ({ result: { tutorialState } }) => tutorialState,
    target: $tutorialState,
})

sample({
    clock: getTutorialDataQuery.finished.success,
    source: $userTutorialsData,
    fn: (userTutorials, { result: { tutorials } }) => {
        if (!userTutorials || !tutorials) return null

        return tutorials.reduce((acc, tutorial) => {
            return {
                ...acc,
                [tutorial.id]: {
                    ...userTutorials[tutorial.id],
                    ...tutorial,
                },
            }
        }, {} as Modules)
    },
    target: $tutorials,
})

sample({
    clock: $userTutorialsData,
    source: $tutorials,
    fn: (tutorials, userTutorials) => {
        if (!userTutorials || !tutorials) return null

        const newTutorials = { ...tutorials }
        getKeys(tutorials).forEach((key) => {
            newTutorials[key] = {
                ...tutorials[key],
                ...userTutorials[key],
            }
        })

        return newTutorials
    },
    target: $tutorials,
})

sample({
    clock: getTutorialDataQuery.finished.success,
    fn: ({ result: { interactions } }) => interactions,
    target: $interactions,
})
const initialized = createEvent<TutorialId[]>()
const updatedM = createMutation({
    handler: initializeTutorials,
})

sample({
    clock: initialized,
    target: updatedM.start,
})

sample({
    clock: updatedM.finished.success,
    source: updatedM.__.$latestParams,
    fn: (req) => localStorage.setItem(TUTORIAL_HASH, stringToHash(JSON.stringify(req)).toString()),
    target: getTutorialDataQuery.start,
})

const callInteractionMutation = createMutation({
    handler: callUserInteraction,
})

sample({
    clock: increasedInteractions,
    target: callInteractionMutation.start,
})

const changeTutorialStateMutation = createMutation({
    handler: changeTutorialState,
})

sample({
    clock: tutorialEnabled,
    target: changeTutorialStateMutation.start,
})

sample({
    clock: changeTutorialStateMutation.$succeeded,
    source: changeTutorialStateMutation.__.$latestParams,
    filter: Boolean,
    target: $tutorialState,
})
sample({
    clock: changeTutorialStateMutation.$succeeded,
    target: getTutorialDataQuery.start,
})

sample({
    clock: changeTutorialStateMutation.$failed,
    fn: () => ({
        message: 'Не удалось сохранить данные о прохождении',
        type: 'failure' as const,
    }),
    target: popUpMessageModel.events.evokePopUpMessage,
})
const resetTutorialMutation = createMutation({
    handler: resetTutorial,
})

sample({
    clock: clearProgress,
    target: resetTutorialMutation.start,
})

const clearAll = createEvent()
const clearMut = createMutation({
    handler: clear,
})
sample({
    clock: clearAll,
    target: clearMut.start,
})

sample({
    clock: clearMut.$succeeded,
    fn: () => {
        localStorage.clear()
    },
    target: userModel.events.logout,
})

sample({
    clock: resetTutorialMutation.$succeeded,
    target: getTutorialDataQuery.start,
})

sample({
    clock: resetTutorialMutation.$succeeded,
    fn: () => ({
        message: 'Прогресс успешно сброшен',
        type: 'success' as const,
    }),
    target: popUpMessageModel.events.evokePopUpMessage,
})

sample({
    clock: resetTutorialMutation.$failed,
    fn: () => ({
        message: 'Не удалось сбросить данные о прохождении',
        type: 'failure' as const,
    }),
    target: popUpMessageModel.events.evokePopUpMessage,
})

const completeModuleMutation = createMutation({
    handler: completeModule,
})

const sync = createEvent()
const syncMutation = createMutation({
    handler: getUserTutorials,
})

sample({
    clock: sync,
    target: syncMutation.start,
})

sample({
    clock: moduleCompleted,
    target: completeModuleMutation.start,
})

sample({
    clock: completeModuleMutation.$succeeded,
    target: getTutorialDataQuery.start,
})

sample({
    clock: completeModuleMutation.$failed,
    fn: () => ({
        message: 'Не удалось сохранить данные о прохождении',
        type: 'failure' as const,
    }),
    target: popUpMessageModel.events.evokePopUpMessage,
})

sample({
    clock: userModel.events.logout,
    target: [getTutorialDataQuery.reset],
})

export const stores = {
    tutorialState: $tutorialState,
    currentModule: $currentModule,
    currentStep: $currentStep,
    tutorials: $tutorials,
    heroVisited: $heroVisited,
    interactions: $interactions,
    roles: $roles,
    userTutorials: $userTutorialsData,
}

export const events = {
    tutorialEnabled,
    setHeroVisited,
    moduleCompleted,
    moduleRestarted,
    setCurrentTutorial,
    getTutorialData,
    nextStep,
    prevStep,
    clearProgress,
    resetStep,
    increasedInteractions,
    initialized,
    clearAll,
    sync,
    setRoles,
}

export const mutations = {
    syncMutation,
}
