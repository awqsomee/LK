import React from 'react'

import { scheduleModel } from '@entities/schedule'

import capitalizeFirstLetter from '@shared/lib/capitalize-first-letter'
import { getDateInSomeDays } from '@shared/lib/dates/get-date-in-some-days'
import { getWeekDayFromDate } from '@shared/lib/dates/get-weekday-from-date'
import { Button } from '@shared/ui/button'
import { useModal } from '@shared/ui/modal'

import { EventsModal } from './events-modal'

export const ShowNextDayEventsButton = () => {
    const {
        data: { schedule },
    } = scheduleModel.selectors.useSchedule()
    const { open } = useModal()
    const nextDay = getDateInSomeDays(new Date(), 1)
    const modalTitle = capitalizeFirstLetter(
        nextDay.toLocaleDateString('ru-RU', { weekday: 'long', day: '2-digit', month: 'long' }),
    )

    const weekday = getWeekDayFromDate(nextDay)
    const dayEvents = weekday === 'sunday' ? [] : schedule?.week[weekday]

    if (!schedule?.week) return null

    const handleClick = () =>
        open(<EventsModal isCurrentDay={false} dayEvents={dayEvents} day={modalTitle} />, modalTitle)

    return <Button text="Посмотреть следующий" onClick={handleClick} textColor="var(--blue)" background="transparent" />
}
