import { type DayCalendarEvent } from '@shared/ui/calendar'
import { Colors, IColorPalette, IWeekDayNames } from '../../consts'
import { View } from '@entities/schedule/consts'

export interface ITimeIntervalColor {
    '9:00 - 10:30': IColorPalette
    '10:40 - 12:10': IColorPalette
    '12:20 - 13:50': IColorPalette
    '14:30 - 16:00': IColorPalette
    '16:10 - 17:40': IColorPalette
    '17:50 - 19:20': IColorPalette
    '18:20 - 19:40': IColorPalette
    '19:30 - 21:00': IColorPalette
    '19:50 - 21:10': IColorPalette
}

export type TimeIntervals = keyof ITimeIntervalColor

export interface ISubject {
    timeInterval: TimeIntervals
    name: string
    place: string
    link: string | null | undefined
    teachers: string[]
    dateInterval: string
    weekday?: string
    groups?: string
    rooms: string[]
}

export interface ILessons {
    lessons?: ISubject[] | null
}

type ErrorResponse = {
    status: string
    error: string
}

export type CapitalLettersWeekNames = 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday'

export type RawTeacherScheduleResponse = Record<CapitalLettersWeekNames, ISubject[] | null>
export type FullRawTeacherScheduleResponse = RawTeacherScheduleResponse | ErrorResponse

export type RawScheduleResponse = Record<CapitalLettersWeekNames, Record<'lessons', ISubject[] | null>>
export type FullRawScheduleResponse = RawScheduleResponse | ErrorResponse

export interface IWeekSchedule {
    monday: ILessons
    tuesday: ILessons
    wednesday: ILessons
    thursday: ILessons
    friday: ILessons
    saturday: ILessons
}

export type IWeekEventSchedule = Record<IWeekDayNames, DayCalendarEvent[]>

export interface ISessionSchedule {
    [key: string]: ILessons
}

export interface IFullSchedule {
    // today: DayCalendarEvent[]
    week: IWeekEventSchedule
    semestr: IWeekEventSchedule
    session: ISessionSchedule
}

export type ViewType = 'full' | 'big'

export interface ISchedule {
    data: {
        schedule: IFullSchedule | null
        externalSchedule: IFullSchedule | null
        teachers: string[]
        view: View
    }
    loading: boolean
    error: string | null
}

export interface ITimeIntervalColor {
    '9:00 - 10:30': IColorPalette
    '10:40 - 12:10': IColorPalette
    '12:20 - 13:50': IColorPalette
    '14:30 - 16:00': IColorPalette
    '16:10 - 17:40': IColorPalette
    '17:50 - 19:20': IColorPalette
    '18:20 - 19:40': IColorPalette
    '19:30 - 21:00': IColorPalette
    '19:50 - 21:10': IColorPalette
}

export const TimeIntervalColor: ITimeIntervalColor = {
    '9:00 - 10:30': Colors.green,
    '10:40 - 12:10': Colors.blue,
    '12:20 - 13:50': Colors.purple,
    '14:30 - 16:00': Colors.pink,
    '16:10 - 17:40': Colors.red,
    '17:50 - 19:20': Colors.red,
    '18:20 - 19:40': Colors.orange,
    '19:30 - 21:00': Colors.orange,
    '19:50 - 21:10': Colors.orange,
}
