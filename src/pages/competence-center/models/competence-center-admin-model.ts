import { EventCallable, createEffect, createEvent, createStore, sample } from 'effector'
import { reset } from 'patronum'

export const $newPassportApplications = createStore([
    {
        fio: 'Тестов Тест Тестович',
        date: '2022-12-12',
    },
    {
        fio: 'Тестов Тест Тестович',
        date: '2022-12-12',
    },
])
export const $newPassports = $newPassportApplications.map((applications) => applications.length)
export const $newConsultationApplications = createStore([
    {
        fio: 'Тестов Тест Тестович',
        date: '2022-12-12',
        status: 'В работе',
        type: 'email',
        phone: '',
        email: 'test@email.com',
    },
    {
        fio: 'Тестов Тест Тестович',
        date: '2022-12-12',
        status: 'В работе',
        type: 'phone',
        phone: '+7 (999) 999-99-99',
    },
])
export const $newConsultations = $newConsultationApplications.map((applications) => applications.length)
export const $passportProcessingProgressPercent = createStore(100)
export const $passportProcessingDone = $passportProcessingProgressPercent.map((percent) => percent === 100)
export const $notFoundStudents = createStore([
    { fio: 'Адыльбекова Кизира Хайнусовна', email: '123@email.ru' },
    { fio: 'Паулюс Криштиан Андреевич', email: '321@email.ru' },
])
export const $studentsNotFound = $notFoundStudents.map((students) => students.length)

export const generationStarted = createEvent()
export const generationFinished = createEvent()
export const denyRemainingApplications = createEvent()

const $passportProgress = createCountdown('passportProgress', {
    start: generationStarted,
    abort: generationFinished,
})

sample({
    clock: $passportProgress.tick,
    source: $passportProcessingProgressPercent,
    fn: (percent) => (percent >= 100 ? 100 : percent + 1),
    target: $passportProcessingProgressPercent,
})

sample({ clock: denyRemainingApplications, fn: () => [], target: $newPassportApplications })

reset({
    clock: [generationStarted, denyRemainingApplications],
    target: [$passportProcessingProgressPercent, $notFoundStudents],
})

function createCountdown(
    name: string,
    {
        start,
        abort = createEvent(`${name}Reset`),
        timeout = 66,
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
