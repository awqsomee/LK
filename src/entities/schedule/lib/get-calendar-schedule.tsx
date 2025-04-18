import React from 'react'
import { HiBookOpen } from 'react-icons/hi'

import { DayCalendarEvent, ISubject, ITimeIntervalColor, TimeIntervalColor } from '@shared/api/model'
import { IWeekDays } from '@shared/consts'
import { TimeType, getMinutesFromStringTime } from '@shared/lib/dates/get-minutes-from-string-time'
import { getSubjectIcon } from '@shared/lib/get-subject-icon'

import { getFullEndDate } from './get-full-end-date'
import { getFullStartDate } from './get-full-start-date'

export const getCalendarSchedule = (
    lessons: ISubject[] | undefined | null,
    weekday: IWeekDays[keyof IWeekDays]['short'],
): DayCalendarEvent[] => {
    if (!lessons) return []
    const result: DayCalendarEvent[] = lessons?.map(
        ({ place, name, teachers, timeInterval, link, dateInterval, rooms, groups }) => {
            const [startTime, endTime] = timeInterval.split(' - ')
            const duration =
                getMinutesFromStringTime(endTime as TimeType) - getMinutesFromStringTime(startTime as TimeType)
            const [start, end] = dateInterval.split('-').map((part) => part.trim())
            const startDate = getFullStartDate(start)
            const endDate = getFullEndDate(end, start)

            return {
                title: name,
                people: teachers,
                startTime: startTime as TimeType,
                duration,
                startDate,
                endDate,
                placeIcon: <HiBookOpen />,
                dateInterval,
                color: TimeIntervalColor[timeInterval as keyof ITimeIntervalColor],
                place,
                link,
                groups,
                weekday,
                rooms,
                icon: getSubjectIcon(name),
            }
        },
    )
    return result
}
