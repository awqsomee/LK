import { createMutation } from '@farfetched/core'
import { createEvent, createStore, sample } from 'effector'

import { applicationsModel } from '@entities/applications'

import { isProduction } from '@shared/consts'
import { ApplicationFormCodes } from '@shared/consts/models/application-form-codes'
import { createCheckboxField } from '@shared/effector/form/create-checkbox-field'
import { createDatePeriodField } from '@shared/effector/form/create-date-period-field'
import { createFilesField } from '@shared/effector/form/create-file-filed'
import { createInputField } from '@shared/effector/form/create-input-field'
import { createSelectField } from '@shared/effector/form/create-select-field'

export const numberOfCopiesOptions = [
    { id: 1, title: '1' },
    { id: 2, title: '2' },
    { id: 3, title: '3' },
    { id: 4, title: '4' },
    { id: 5, title: '5' },
    { id: 6, title: '6' },
    { id: 7, title: '7' },
    { id: 8, title: '8' },
    { id: 9, title: '9' },
]

export const applicationTypes = [
    { id: 'scholarship', title: 'Справка по стипендии' },
    { id: '7month', title: 'Запрос для субсидии по форме #2 за 7 месяцев' },
    { id: '13month', title: 'Запрос для субсидии по форме #2 за 13 месяцев' },
]

export const pageMounted = createEvent()
export const createApplication = createEvent()

const fio = createInputField({ reset: pageMounted })
const group = createInputField({ reset: pageMounted })
const tel = createInputField({ reset: pageMounted })
const email = createInputField({ reset: pageMounted })
const applicationType = createSelectField({ reset: pageMounted })
const period = createDatePeriodField({ reset: pageMounted })
const copies = createSelectField({ defaultValue: numberOfCopiesOptions[0], reset: pageMounted })
const methodObtaining = createSelectField({ reset: pageMounted })
const mfc = createSelectField({ reset: pageMounted })
const commentary = createInputField({ reset: pageMounted })
const files = createFilesField({ reset: pageMounted })
export const $errorMessage = createStore<string>('')
export const completed = createCheckboxField({ reset: pageMounted })
export const $isFilesRequired = applicationType.value.map((item) =>
    isProduction ? false : item?.id === '7month' || item?.id === '13month',
)

type FormRequest = {
    fio: string
    group: string
    tel: string
    email: string
    application_type: string
    date_from: string
    date_to: string
    number_copies: string
    method_obtaining: string
    'structural-subdivision': string
    commentary: string
    docs: File[]
}

const sendForm = createMutation({
    handler: async ({ docs, ...args }: FormRequest) =>
        applicationsModel.effects.postApplicationFx({
            formId: ApplicationFormCodes.STUD_ACCOUNTING,
            args: { ...args, ...Object.fromEntries(docs.map((file, index) => [`docs[${index}]`, file])) },
        }),
})
export const $pending = sendForm.$pending

sample({
    clock: pageMounted,
    source: applicationsModel.stores.applications,
    fn: ({ dataUserApplication }) => {
        if (!dataUserApplication) return ''
        const { surname, name, patronymic } = dataUserApplication
        return surname + ' ' + name + ' ' + patronymic
    },
    target: fio.setValue,
})

sample({
    clock: pageMounted,
    source: applicationsModel.stores.applications,
    fn: ({ dataUserApplication }) => {
        if (!dataUserApplication) return ''
        const { group } = dataUserApplication
        return group
    },
    target: group.setValue,
})

sample({
    clock: pageMounted,
    source: applicationsModel.stores.applications,
    fn: ({ dataUserApplication }) => {
        if (!dataUserApplication) return ''
        const { email } = dataUserApplication
        return email
    },
    target: email.setValue,
})

sample({
    clock: pageMounted,
    source: applicationsModel.stores.applications,
    fn: ({ dataUserApplication }) => {
        if (!dataUserApplication) return ''
        const { phone } = dataUserApplication
        return phone
    },
    target: tel.setValue,
})

sample({
    clock: [
        fio.value,
        group.value,
        tel.value,
        email.value,
        applicationType.value,
        period.startDate,
        period.endDate,
        copies.value,
        methodObtaining.value,
        mfc.value,
        commentary.value,
        files.value,
    ],
    source: {
        fio: fio.value,
        group: group.value,
        tel: tel.value,
        email: email.value,
        applicationType: applicationType.value,
        periodStartDate: period.startDate,
        periodEndDate: period.endDate,
        copies: copies.value,
        methodObtaining: methodObtaining.value,
        mfc: mfc.value,
        files: files.value,
        isFilesRequired: $isFilesRequired,
    },
    fn: ({
        fio,
        group,
        tel,
        email,
        applicationType,
        periodStartDate,
        periodEndDate,
        copies,
        methodObtaining,
        mfc,
        files,
        isFilesRequired,
    }) => {
        if (!fio)
            return 'Для заполнения формы необходимо указать ФИО. Обновите страницу или обратитесь к администратору'
        if (!group)
            return 'Для заполнения формы необходимо указать учебную группу. Обновите страницу или обратитесь к администратору'
        if (!tel) return 'Введите телефон'
        if (!email) return 'Введите email'
        if (!applicationType) return 'Выберите тип справки'
        if (!periodStartDate || !periodEndDate) return 'Выберите период справки'
        if (!copies) return 'Выберите кол-во копий справки'
        if (!methodObtaining) return 'Выберите способ получения справки'
        if (methodObtaining?.id === 1 && !mfc) return 'Выберите место получения справки'
        if (isFilesRequired && files.length === 0) return 'Приложите файл'
        return ''
    },
    target: $errorMessage,
})

sample({
    clock: createApplication,
    source: {
        fio: fio.value,
        group: group.value,
        tel: tel.value,
        email: email.value,
        application_type: applicationType.value,
        date_from: period.startDate,
        date_to: period.endDate,
        number_copies: copies.value,
        method_obtaining: methodObtaining.value,
        'structural-subdivision': mfc.value,
        commentary: commentary.value,
        docs: files.value,
    },
    fn: (form): FormRequest => ({
        ...form,
        application_type: form.application_type?.title ?? '',
        method_obtaining: form.method_obtaining?.title ?? '',
        'structural-subdivision': form['structural-subdivision']?.title ?? '',
        number_copies: form.number_copies?.title ?? '1',
    }),
    target: sendForm.start,
})

sample({
    clock: sendForm.finished.success,
    target: completed.setValue.prepend(() => true),
})

export const fields = {
    fio,
    group,
    tel,
    email,
    applicationType,
    period,
    copies,
    methodObtaining,
    mfc,
    commentary,
    files,
}
