import React from 'react'
import { FiPlus } from 'react-icons/fi'
import { LiaArrowRightSolid } from 'react-icons/lia'
import { LuSendHorizonal } from 'react-icons/lu'
import { PiFileMagnifyingGlassLight } from 'react-icons/pi'
import { TbDownload } from 'react-icons/tb'
import { Link, useHistory } from 'react-router-dom'

import { Property } from 'csstype'
import { useUnit } from 'effector-react'
import styled from 'styled-components'

import { ApplicationStatusType, ApplicationsConstants } from '@entities/applications/consts'

import { useIntersectionObserver } from '@shared/lib/hooks/use-intersection-observer'
import {
    COMPETENCE_CENTER,
    COMPETENCE_CENTER_CONSULTATION_FORM,
    COMPETENCE_CENTER_PASSPORT_FORM,
} from '@shared/routing'
import { ButtonBase } from '@shared/ui'
import { Message, Title } from '@shared/ui/atoms'
import { BrightPlate } from '@shared/ui/bright-plate/bright-plate'
import { MEDIA_QUERIES } from '@shared/ui/consts'
import Flex from '@shared/ui/flex'
import useCurrentDevice from '@shared/ui/hooks/use-current-device'
import { useModal } from '@shared/ui/modal'
import PageBlock from '@shared/ui/page-block'
import Table from '@shared/ui/table'
import { ColumnProps } from '@shared/ui/table/types'

import * as model from './models/competence-center-model'
import { PassportInProgress } from './modals/passport-in-progress'
import { Button, IconButton, IconLink, OutlinedButton, Stack, Text } from './ui'

const CompetenceCenter = () => {
    const { isMobile } = useCurrentDevice()
    return (
        <PageBlock padding="0">
            <Flex d="column" gap="3rem" p="0.75rem 3rem 2rem">
                <Stack gap={isMobile ? 48 : 64}>
                    <PassportBlock />
                    <HowToGet />
                    <Information />
                    <Consultations />
                </Stack>
            </Flex>
        </PageBlock>
    )
}

const PassportBlock = () => {
    const { isMobile } = useCurrentDevice()
    const { open } = useModal()
    const [passportStatus] = useUnit([model.$passportStatus])

    if (!passportStatus) return null

    return (
        <Stack gap={8}>
            <Card w="100%" withBorder>
                <Flex
                    gap="1rem"
                    d={isMobile ? 'column' : 'row'}
                    jc="space-between"
                    ai={isMobile ? 'flex-start' : 'center'}
                >
                    <Flex w="fit-content">
                        <Title size={3} align="left">
                            Актуальный паспорт компетенций
                        </Title>
                    </Flex>
                    {passportStatus === 'in_review' ? (
                        <>
                            <Flex
                                cursor="pointer"
                                gap="0.5rem"
                                w="fit-content"
                                onClick={() =>
                                    open(<PassportInProgress />, 'Подробная информация о заявке', {
                                        gap: '2rem',
                                        padding: '1.5rem',
                                    })
                                }
                            >
                                <Text>Заявка на рассмотрении</Text>
                                <IconLink to={COMPETENCE_CENTER}>
                                    <LiaArrowRightSolid size={14} />
                                </IconLink>
                            </Flex>
                        </>
                    ) : (
                        <Flex gap="0.5rem" ai="stretch" w={isMobile ? '100%' : '50%'}>
                            <OutlinedButton w={isMobile ? '100%' : '50%'} onClick={() => window.open('/passport.pdf')}>
                                Открыть
                                <PiFileMagnifyingGlassLight size={14} />
                            </OutlinedButton>
                            {isMobile ? (
                                <Button size={38} p="0">
                                    <TbDownload size={14} />
                                </Button>
                            ) : (
                                <Button w="50%">
                                    Скачать
                                    <TbDownload size={14} />
                                </Button>
                            )}
                        </Flex>
                    )}
                </Flex>
            </Card>

            <ToArchivedButton margin="0 0 0 auto">
                Перейти к завершенным
                <LiaArrowRightSolid size={14} />
            </ToArchivedButton>
        </Stack>
    )
}

const ToArchivedButton = styled(ButtonBase)`
    padding: 0.75rem;

    background: var(--theme-1t);
`
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
        link: COMPETENCE_CENTER_PASSPORT_FORM,
    },
]

const HowToGet = () => {
    const { isMobile } = useCurrentDevice()
    return (
        <Stack gap={isMobile ? 16 : 32}>
            <Title align="left" size={2}>
                Как получить Паспорт компетенций?
            </Title>
            <InstructionsGrid>
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
            </InstructionsGrid>
        </Stack>
    )
}

const HowToGetStep = ({ title, text, index }: Step & { index: number }) => {
    return (
        <HowToGetCard h="100%" withBg withBorder>
            <Flex ai="stretch" jc="space-between" gap="0.5rem" h="100%">
                <Stack gap={24} h="100%">
                    <Title size={3} align="left">
                        {title}
                    </Title>
                    <Text>{text}</Text>
                </Stack>
                <Stack gap={16} justify="space-between" align="center">
                    <StepNumber>{index + 1}</StepNumber>
                    <CircleLink>
                        <LiaArrowRightSolid size={20} />
                    </CircleLink>
                </Stack>
            </Flex>
        </HowToGetCard>
    )
}

const Information = () => {
    const { isMobile } = useCurrentDevice()
    return (
        <Stack gap={isMobile ? 16 : 32}>
            <Title align="left" size={2}>
                Справочная информация
            </Title>

            <InformationGrid>
                <Card withBorder>
                    <Stack gap={24}>
                        <Title size={3} align="left">
                            Что такое паспорт компетенций?
                        </Title>
                        <Text mw="37.5rem">
                            Паспорт компетенций – официальный документ, подтверждающий прохождение студентом
                            тестирования по оценке надпрофессиональных навыков, среди которых:
                            <UL style={{ marginTop: '1rem', marginLeft: '1rem' }}>
                                <li>анализ информации и выработка решений</li> <li>ориентация на результат</li>
                                <li>партнёрство/сотрудничество</li> <li>стрессоустойчивость</li>
                                <li>планирование и организация</li>
                                <li>следование процедурам и правилам</li>
                            </UL>
                        </Text>
                    </Stack>
                </Card>
                <Card withBorder>
                    <Stack gap={24}>
                        <Title size={3} align="left">
                            Зачем нужен паспорт компетенций?
                        </Title>
                        <Text>
                            Паспорт компетенций даёт следующие преимущества:
                            <UL>
                                <li>5 дополнительных баллов при поступлении в магистратуру;</li>
                                <li>
                                    на платформе hh.ru его можно приложить к резюме, а работодатель сможет узнать ваш
                                    уровень softskills.
                                </li>
                            </UL>
                        </Text>
                    </Stack>
                </Card>
                <BrightPlate show onClick={() => {}} height="auto" padding="0.75rem" maw="100%">
                    <Text>✨ Улучшить компетенции ✨</Text>
                </BrightPlate>
            </InformationGrid>
        </Stack>
    )
}

const Consultations = () => {
    const { isMobile } = useCurrentDevice()
    const history = useHistory()

    const { isIntersecting, ref } = useIntersectionObserver({
        threshold: 0.5,
    })

    return (
        <Stack w="100%" gap={32}>
            <Flex gap="0.5rem" jc="space-between">
                <Flex w="fit-content">
                    <Title size={2} align="left">
                        Заявки на консультацию
                    </Title>
                </Flex>
                {isMobile ? (
                    <IconButton bg="var(--reallyBlue)" c="white" size={38}>
                        <FiPlus size={20} />
                    </IconButton>
                ) : (
                    <Button ref={ref} c="white" onClick={() => history.push(COMPETENCE_CENTER_CONSULTATION_FORM)}>
                        Связаться с Центром
                        <LuSendHorizonal size={14} />
                    </Button>
                )}
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
                        communicationMethod: '+7 (999) 999-99-99',
                        comment: '',
                    },
                    {
                        req: 'Консультация',
                        date: '2022-10-12',
                        status: 'В работе',
                        communicationMethod: 'pochta[pochta@gmail.com',
                        comment: '',
                    },
                ]}
            />
            {!isIntersecting && (
                <CallCenterButton c="white">
                    Связаться с Центром
                    <LuSendHorizonal size={14} />
                </CallCenterButton>
            )}
        </Stack>
    )
}

const CallCenterButton = styled(ButtonBase)`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    gap: 0.5rem;

    position: fixed;
    right: calc((100% - 235px) / 2);
    transform: translateX(50%);
    left: auto;
    top: auto;
    bottom: 0.625rem;

    background: #222222;
`

const A = styled.a`
    width: 100%;
    text-decoration: none;
    color: var(--text);
`

const LinkStyled = styled(Link)`
    width: 100%;
    text-decoration: none;
    color: var(--text);
`

const InstructionsGrid = styled.div`
    display: grid;
    gap: 0.75rem;
    grid-template-columns: 1fr 1fr 1fr;

    ${MEDIA_QUERIES.isSmallDesktop} {
        grid-template-columns: 1fr 1fr;

        a:first-child {
            grid-column: span 2;
        }
    }

    ${MEDIA_QUERIES.isMobile} {
        grid-template-columns: 1fr;
        a:first-child {
            grid-column: span 1;
        }
        gap: 0.5rem;
    }
`

const InformationGrid = styled.div`
    display: grid;
    gap: 0.75rem;
    grid-template-columns: 1fr 1fr;

    div:first-child {
        grid-row: span 2;
    }

    ${MEDIA_QUERIES.isMobile} {
        grid-template-columns: 1fr;
        gap: 0.5rem;
    }
`
const StepNumber = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    border: 1px solid var(--theme-mild-opposite);
    color: var(--theme-mild-opposite);
    font-weight: 500;
    font-size: 0.9rem;
`
const CircleLink = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 2.5rem;
    height: 2.5rem;

    background: var(--reallyBlue);
    border-radius: 50%;

    transform: rotate(-35deg);

    color: white;
`

const Card = styled.div<{ w?: Property.Width; h?: Property.Height; withBorder?: boolean; withBg?: boolean }>`
    width: ${({ w }) => w};
    height: ${({ h }) => h};
    border: ${({ withBorder }) => withBorder && '1px solid var(--bgLink3)'};
    padding: 1.5rem;
    background: ${({ withBg }) => withBg && 'var(--block-content)'};
    border-radius: var(--brLight);
`

const HowToGetCard = styled(Card)`
    transition: all 0.3s ease-in-out;
    ${CircleLink} svg {
        transition: all 0.3s ease-in-out;
    }

    &:hover {
        ${CircleLink} svg {
            scale: 1.2;
            translate: 20%;
            transition: all 0.2s ease-in-out;
        }
        background: linear-gradient(353.15deg, #567dff -21.96%, rgba(0, 0, 0, 0.12) 111.04%);
        border-color: var(--almostTransparentOpposite);
    }
`

const UL = styled.ul`
    margin-top: 1rem;
    margin-left: 1rem;
`

const getColumns = (): ColumnProps[] => [
    {
        title: 'Дата подачи',
        field: 'date',
        sort: true,
        type: 'date',
        width: '8.75rem',
    },
    {
        title: 'Способ связи',
        field: 'communicationMethod',
        render: (val) => val || '-',
    },
    {
        title: 'Статус',
        field: 'status',
        priority: 'three',
        width: '10.375rem',
        catalogs: [...(Object.values(ApplicationsConstants).map((val, i) => ({ id: i.toString(), title: val })) ?? [])],
        render: (value: ApplicationStatusType) => {
            return (
                <Message
                    type={
                        value === 'Готово' || value === 'Выдано' || value === 'Получено' || value === 'Выполнена'
                            ? 'success'
                            : value === 'Отклонено'
                              ? 'failure'
                              : 'alert'
                    }
                    title={value || '—'}
                    align="center"
                    icon={null}
                />
            )
        },
    },
]

export default CompetenceCenter
