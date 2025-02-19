import { Sex } from '@shared/consts/models/sex'

export type UserStatus = 'stud' | 'staff'

type EducationFormT = 'Очная' | 'Очно-заочная' | 'Заочная' | 'Недоступен'

type TechicalAccount = {
    token: string
    jwt: string
    jwt_refresh: string
}

type GeneralAccountFields = {
    user_status: UserStatus
    fio: string
    avatar: string
}
export type Finance = 'Бюджетная' | 'С оплатой обучения' | 'Целевой прием'

export type StudentAccount = {
    status?: string
    group?: string
    course?: string
    educationForm?: EducationFormT
    finance?: Finance
    vacation_start?: string
    vacation_end?: string
    degreeLevel?: string
}

export type StaffAccount = {
    work_place?: string
    email_staff?: string
}

export type GeneralAccount = GeneralAccountFields & StudentAccount & StaffAccount & TechicalAccount

export type User = StudentAccount & {
    id: number
    guid: string
    name: string
    fullName: string
    avatar: string
    surname: string
    birthday: string
    patronymic: string
    email?: string
    email_staff?: string
    phone?: string
    phone_staff?: string
    allow_mobphone_in?: boolean
    allow_mobphone_out?: boolean
    orders: string[]
    hasAlerts: boolean
    sex: Sex
    code: string
    faculty: string
    specialty: string
    specialization: string
    degreeLength: number
    enterYear: string
    subdivisions?: Subdivision[]
    user_status: UserStatus
    lastaccess: string
    accounts?: GeneralAccount[]
    authorIDs?: AuthorIDs
    head_div?: Division[]
} & PhoneSettingsType

export interface Division {
    guid: string
    name: string
}

interface Subdivision {
    guid_person: string
    guid_staff: string
    categoty: string
    jobType?: string
    status?: string
    subdivision?: string
    wage?: string
    post?: string
    address?: string
    room?: string
    phone_inner?: string
    phone_direct?: string
}

interface AuthorIDs {
    wosReasearcher?: string
    scopus?: string
    eLibrary?: string
}

export type PhoneSettingsType = {
    phone_staff?: string
    allow_mobphone_in?: boolean
    allow_mobphone_out?: boolean
}

export type LocationSettingsType = {
    guid_staff: string
    post: string
    address: string
    room: string
}
