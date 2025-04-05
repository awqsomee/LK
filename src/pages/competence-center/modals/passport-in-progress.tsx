import React, { ReactNode } from 'react'

import { useUnit } from 'effector-react'
import styled from 'styled-components'

import localizeDate from '@shared/lib/dates/localize-date'

import * as model from '../models/competence-center-model'
import { Stack, Text } from '../ui'

export const PassportInProgress = () => {
    const [passportReq] = useUnit([model.$passportReq])
    if (!passportReq) return null

    return (
        <Stack gap={24}>
            <LabledData label="Запрос" data="Генерация паспорта компетенций" />
            {Object.keys(passportReq).map((key) => {
                const data =
                    key === 'date' || key === 'endDate'
                        ? localizeDate(passportReq[key as keyof model.PassportReq], 'numeric')
                        : passportReq[key as keyof model.PassportReq]

                if (!data) return null

                if (key === 'results') {
                    return (
                        <LabledData
                            key={key}
                            label={passportLabelMap[key as keyof model.PassportReq]}
                            data={
                                <OutlinedLink key={key} href={data} target="_blank" rel="noreferrer">
                                    Открыть файл
                                </OutlinedLink>
                            }
                        />
                    )
                }
                return <LabledData key={key} label={passportLabelMap[key as keyof model.PassportReq]} data={data} />
            })}
        </Stack>
    )
}

const OutlinedLink = styled.a`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 12px;
    gap: 8px;

    border: 1px solid #567dff;
    border-radius: 9px;
    font-weight: 600;
    font-size: 11.52px;
    line-height: 14px;
    color: #f0f0f0;
`

const passportLabelMap: Record<keyof model.PassportReq, string> = {
    date: 'Дата подачи',
    email: 'Почта',
    endDate: 'Дата завершения',
    fio: 'ФИО',
    results: 'Результаты',
    status: 'Статус',
}

const LabledData = ({ label, data }: { label: string; data: ReactNode }) => {
    return (
        <Stack gap={8}>
            <Label>{label}</Label>
            <Text>{data}</Text>
        </Stack>
    )
}

const Label = styled.h5`
    font-weight: 600;
    font-size: 13.28px;
    line-height: 120%;
    color: rgba(255, 255, 255, 0.5);
`
