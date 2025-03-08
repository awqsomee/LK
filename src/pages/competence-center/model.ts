import { createStore } from 'effector'

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
export const $studentsNotFound = createStore(2)
