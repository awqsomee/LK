import React, { ReactNode } from 'react'

import { useUnit } from 'effector-react'
import styled from 'styled-components'

import { CompetencePassport } from '@shared/api/competence-center'
import { ApplicationsConstants } from '@shared/consts/applications'
import localizeDate from '@shared/lib/dates/localize-date'

import * as model from '../models/competence-center-model'
import { Stack, Text } from '../ui'

type PassportData = Omit<CompetencePassport, 'viewed' | 'id'>

export const PassportInProgress = () => {
    const [passportReq] = useUnit([model.$currentPassport])
    if (!passportReq) return null

    const passportData: PassportData = {
        createdAt: localizeDate(passportReq.createdAt, 'numeric'),
        email: passportReq.email,
        fio: passportReq.fio,
        status: passportReq.status,
        error: passportReq.error,
        fileKey: passportReq.fileKey,
    }

    return (
        <Stack gap={24}>
            <LabledData label="Запрос" data="Генерация паспорта компетенций" />
            {Object.keys(passportData).map((key) => {
                const data = passportData[key as keyof PassportData]
                if (!data) return null

                if (key === 'status')
                    return (
                        <LabledData
                            key={key}
                            label={passportLabelMap[key as keyof PassportData]}
                            data={ApplicationsConstants[data as keyof typeof ApplicationsConstants]}
                        />
                    )

                if (key === 'fileKey') {
                    return (
                        <LabledData
                            key={key}
                            label={passportLabelMap[key as keyof PassportData]}
                            data={
                                <OutlinedLink key={key} href={data} target="_blank" rel="noreferrer">
                                    Открыть файл
                                </OutlinedLink>
                            }
                        />
                    )
                }

                return <LabledData key={key} label={passportLabelMap[key as keyof PassportData]} data={data} />
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

const passportLabelMap: Record<keyof PassportData, string> = {
    createdAt: 'Дата подачи',
    error: 'Ошибка',
    email: 'Почта',
    fio: 'ФИО',
    status: 'Статус',
    fileKey: 'Файл',
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
