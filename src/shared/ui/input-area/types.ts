import { IInputArea } from './model'

export type SpecialFieldsName =
    | 'personalMethod'
    | 'postMethod'
    | 'personalNature'
    | 'Compensation'
    | 'Compensation2'
    | 'Address'
    | 'collHoliday1'
    | 'collHoliday2'
    | 'collHoliday3'
    | 'collHoliday4'
    | 'collHoliday5'
    | 'Structure1'
    | 'Structure2'
    | 'PartTime'
    | 'collDog'
    | 'dueToWithdrawal'
    | 'medicalReport'
    | 'employed'
    | 'unemployed'
    | 'universityTransfer'
    | 'not_dorm11'
    | 'email'
    | 'tel'
    | null

export type SpecialFieldsNameConfig = { [key: string]: SpecialFieldsName }

export type LoadedState = React.Dispatch<React.SetStateAction<IInputArea>>
