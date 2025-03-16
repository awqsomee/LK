import React from 'react'
import { FiPlus } from 'react-icons/fi'
import { GoArchive } from 'react-icons/go'
import { LiaArrowRightSolid } from 'react-icons/lia'
import { Link } from 'react-router-dom'

import { Property } from 'csstype'
import styled from 'styled-components'

import { COMPETENCE_CENTER, COMPETENCE_CENTER_FORM } from '@shared/routing'
import { Title, Wrapper } from '@shared/ui/atoms'
import { BrightPlate } from '@shared/ui/bright-plate/bright-plate'
import Flex from '@shared/ui/flex'
import PageBlock from '@shared/ui/page-block'
import Table from '@shared/ui/table'
import { ColumnProps } from '@shared/ui/table/types'

import { Button, ButtonLink, DimmedButton, IconButton, IconLink, OutlinedButton, Text } from './ui'

const CompetenceCenter = () => {
    return (
        <Wrapper load={() => {}} loading={false} error={null} data={true}>
            <PageBlock>
                <PassportBlock />
                <HowToGet />
                <Information />
                <Consultations />
            </PageBlock>
        </Wrapper>
    )
}
type PassportStatus = 'in_review' | 'ready'

const PassportBlock = () => {
    const passportStatus: PassportStatus | null = 'ready'

    if (!passportStatus) return null

    return (
        <Card w="100%">
            <Stack gap={24}>
                <Title size={3} align="left">
                    Актуальный паспорт компетенций
                </Title>
                {passportStatus === 'ready' ? (
                    <>
                        <Flex gap="0.5rem">
                            <Text>Заявка на рассмотрении</Text>
                            <IconLink to={COMPETENCE_CENTER}>
                                <LiaArrowRightSolid size={14} />
                            </IconLink>
                        </Flex>
                        <ButtonLink to={COMPETENCE_CENTER}>Посмотреть предыдущие</ButtonLink>
                    </>
                ) : (
                    <Stack gap={8}>
                        <OutlinedButton>Посмотреть</OutlinedButton>
                        <Button>Скачать</Button>
                        <ButtonLink to={COMPETENCE_CENTER}>Посмотреть предыдущие</ButtonLink>
                    </Stack>
                )}
            </Stack>
        </Card>
    )
}
type Step = { title: string; text: string; link: string; isExternalLink?: boolean }
const howToGetSteps: Step[] = [
    {
        title: 'Регистрация на платформе',
        text: 'Для получения паспорта компетенций необходимо пройти тестирование на официальной платформе Softskills. Перед прохождением следует изучить инструкцию',
        link: 'https://docs.yandex.ru/docs/view?url=ya-disk-public%3A%2F%2FwIRgzN3TJiqUBmvTFYH3uOda6XQUfUcTaONFCt0v%2B96aE8crffa6P7mr70UNFwSoq%2FJ6bpmRyOJonT3VoXnDag%3D%3D%3A%2FИнструкция%20по%20прохождению%20тестирования.pdf&name=Инструкция%20по%20прохождению%20тестирования.pdf',
        isExternalLink: true,
    },
    {
        title: 'Тестирование',
        text: 'Сразу после заполнения всех данных можно начать тестирование',
        link: 'https://softskills.rsv.ru',
        isExternalLink: true,
    },
    {
        title: 'Получение результатов',
        text: 'После прохождения тестирования ты можешь подать заявку в Центр компетенций на формирование результатов и выдачу паспорта компетенций',
        link: COMPETENCE_CENTER_FORM,
    },
]

const HowToGet = () => {
    return (
        <Stack gap={24}>
            <Title align="left" size={2}>
                Как получить Паспорт компетенций?
            </Title>
            <Stack>
                {howToGetSteps.map((step, index) => {
                    if (step.isExternalLink)
                        return (
                            <A href={step.link} target="_blank" rel="noreferrer" key={index}>
                                <HowToGetStep {...step} index={index} />
                            </A>
                        )

                    return (
                        <LinkStyled to={step.link} key={index}>
                            <HowToGetStep {...step} index={index} />
                        </LinkStyled>
                    )
                })}
            </Stack>
        </Stack>
    )
}

const HowToGetStep = ({ title, text, index }: Step & { index: number }) => {
    return (
        <Card role="link">
            <Flex ai="stretch" jc="space-between" gap="0.5rem">
                <Stack gap={24}>
                    <Title size={3} align="left">
                        {title}
                    </Title>
                    <Text>{text}</Text>
                </Stack>
                <Stack gap={16} justify="space-between" align="center">
                    <StepNumber>{index + 1}</StepNumber>
                    <CircleLink>
                        <LiaArrowRightSolid size={30} />
                    </CircleLink>
                </Stack>
            </Flex>
        </Card>
    )
}

const Information = () => {
    return (
        <Stack>
            <Title align="left" size={2}>
                Справочная информация
            </Title>

            <Card>
                <Stack gap={24}>
                    <Title size={3} align="left">
                        Что такое паспорт компетенций?
                    </Title>
                    <Text>
                        Паспорт компетенций – официальный документ, подтверждающий прохождение студентом тестирования по
                        оценке над профессиональных навыков, среди которых: анализ информации и выработка решений
                        ориентация на результат партнёрство/сотрудничество стрессоустойчивость планирование и
                        организация следование процедурам и правилам
                    </Text>
                </Stack>
            </Card>

            <Card>
                <Stack gap={24}>
                    <Title size={3} align="left">
                        Зачем нужен паспорт компетенций?
                    </Title>
                    <Text>
                        Паспорт компетенций даёт следующие преимущества: 5 дополнительных баллов при поступлении в
                        магистратуру; на платформе hh.ru его можно приложить к резюме, а работодатель сможет узнать ваш
                        уровень softskills.
                    </Text>
                </Stack>
            </Card>
            <BrightPlate show onClick={() => {}} height="auto" padding="0.75rem">
                <Text>✨ Улучшить компетенции ✨</Text>
            </BrightPlate>
        </Stack>
    )
}

const Consultations = () => {
    return (
        <Stack>
            <Flex gap="0.5rem">
                <Title size={2} align="left">
                    Заявки на консультацию
                </Title>
                <IconButton bg="var(--reallyBlue)" c="white" size={38}>
                    <FiPlus size={20} />
                </IconButton>
            </Flex>
            <Table
                dimmedHeaders={true}
                fw={500}
                headerPadding="1rem 0.75rem"
                rowPadding="1.25rem"
                loading={false}
                columns={getColumns()}
                data={[
                    {
                        req: 'Консультация',
                        date: '2022-12-12',
                        status: 'В работе',
                        comment: '',
                    },
                    {
                        req: 'Консультация',
                        date: '2022-10-12',
                        status: 'Готово',
                        comment: '',
                    },
                ]}
            />
            <DimmedButton>
                <Flex jc="center" gap="0.5rem">
                    Перейти к завершенным <GoArchive size={14} />
                </Flex>
            </DimmedButton>
        </Stack>
    )
}

const A = styled.a`
    text-decoration: none;
    color: var(--text);
`

const LinkStyled = styled(Link)`
    text-decoration: none;
    color: var(--text);
`
const StepNumber = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 2.25rem;
    height: 2.25rem;
    border-radius: 50%;
    background-color: var(--theme-mild-opposite);
    color: var(--theme-2);
    font-weight: 600;
`
const CircleLink = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 3.125rem;
    height: 3.125rem;

    border: 1px solid var(--reallyBlue);
    border-radius: 50%;

    transform: rotate(-23.93deg);

    color: var(--text);
`

const Stack = styled.div<{ gap?: number; justify?: Property.JustifyContent; align?: Property.AlignItems }>`
    max-width: 100%;

    display: flex;
    flex-direction: column;
    gap: ${({ gap }) => (gap ? gap / 16 + 'rem' : '1rem')};
    justify-content: ${({ justify }) => justify};
    align-items: ${({ align }) => align};
`

const Card = styled.div<{ w?: Property.Width }>`
    width: ${({ w }) => w};
    padding: 1.5rem;
    background: var(--block-content);
    border-radius: var(--brSemi);
`

const getColumns = (): ColumnProps[] => [
    // {
    //     title: 'Запрос',
    //     field: 'req',
    //     width: '250px',
    // },
    {
        title: 'Дата подачи',
        field: 'date',
        sort: true,
        type: 'date',
    },
    // {
    //     title: 'Статус',
    //     field: 'status',
    //     priority: 'one',
    //     width: '165px',
    //     catalogs: [...(Object.values(ApplicationsConstants).map((val, i) => ({ id: i.toString(), title: val })) ?? [])],
    //     render: (value: ApplicationStatusType) => {
    //         return (
    //             <Message
    //                 type={
    //                     value === 'Готово' || value === 'Выдано' || value === 'Получено' || value === 'Выполнена'
    //                         ? 'success'
    //                         : value === 'Отклонено'
    //                           ? 'failure'
    //                           : 'alert'
    //                 }
    //                 title={value || '—'}
    //                 align="center"
    //                 icon={null}
    //             />
    //         )
    //     },
    // },
    // {
    //     title: 'Примечание',
    //     field: 'comment',
    //     render: (val) => val || '-',
    // },
]

export default CompetenceCenter
