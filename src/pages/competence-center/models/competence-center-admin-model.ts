import { EventCallable, createEffect, createEvent, createStore, sample } from 'effector'
import { reset } from 'patronum'

export const $newPassportApplications = createStore([
    {
        fio: 'Тестов Тест Тестович',
        date: '2025-03-17',
    },
])
export const $newPassports = $newPassportApplications.map((applications) => applications.length)
export const $newConsultationApplications = createStore([
    {
        fio: 'Тестов Тест Тестович',
        date: '2024-12-12',
        status: 'В работе',
        type: 'email',
        phone: '',
        email: 'pochta[pochta@gmail.com',
    },
    {
        fio: 'Тестов Тест Тестович',
        date: '2024-12-12',
        status: 'В работе',
        type: 'phone',
        phone: '+7 (999) 999-99-99',
    },
])

type NotFoundStudent = {
    fio: string
    email: string
}
export const $newConsultations = $newConsultationApplications.map((applications) => applications.length)
export const $passportProcessingProgressPercent = createStore(0)
export const $passportProcessingDone = $passportProcessingProgressPercent.map((percent) => percent === 100)
export const $notFoundStudents = createStore<NotFoundStudent[]>([])
export const $studentsNotFound = $notFoundStudents.map((students) => students.length)

export const generationStarted = createEvent()
export const generationFinished = createEvent()
export const denyRemainingApplications = createEvent()
export const dismissed = createEvent()

const $passportProgress = createCountdown('passportProgress', {
    start: generationStarted,
    abort: generationFinished,
    timeout: 33,
})

sample({
    clock: $passportProgress.tick,
    source: $passportProcessingProgressPercent,
    fn: (percent) => (percent >= 100 ? 100 : percent + 1),
    target: $passportProcessingProgressPercent,
})

sample({
    clock: $passportProgress.tick,
    source: $passportProcessingProgressPercent,
    filter: (percent) => percent >= 100,
    target: generationFinished,
})

sample({ clock: [denyRemainingApplications, dismissed], fn: () => [], target: $newPassportApplications })

reset({
    clock: [generationStarted, denyRemainingApplications],
    target: [$passportProcessingProgressPercent, $notFoundStudents],
})

reset({
    clock: [dismissed],
    target: [$passportProcessingProgressPercent, $notFoundStudents],
})
function createCountdown(
    name: string,
    {
        start,
        abort = createEvent(`${name}Reset`),
        timeout = 1000,
    }: { start: EventCallable<void>; abort?: EventCallable<void>; timeout?: number },
) {
    const $working = createStore(true, { name: `${name}Working` })
    const tick = createEvent(`${name}Tick`)
    const timerFx = createEffect(`${name}Timer`).use(() => wait(timeout))

    $working.on(abort, () => false).on(start, () => true)

    sample({
        source: start,
        filter: timerFx.pending.map((is) => !is),
        target: tick,
    })

    sample({
        clock: tick,
        target: timerFx,
    })

    sample({
        source: timerFx.done,
        filter: $working,
        target: tick,
    })

    return { tick }
}

function wait(ms: number) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms)
    })
}
