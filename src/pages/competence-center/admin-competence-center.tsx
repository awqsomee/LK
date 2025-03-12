import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'
import { FiArchive } from 'react-icons/fi'
import { Link } from 'react-router-dom'

import { useUnit } from 'effector-react'
import styled from 'styled-components'

import getCorrectWordForm from '@shared/lib/get-correct-word-form'
import { CC_COMPLETED_CONSULTATIONS, CC_PASSPORT_LOG } from '@shared/routing'
import { ButtonBase } from '@shared/ui'
import { Title } from '@shared/ui/atoms'
import { MEDIA_QUERIES } from '@shared/ui/consts'
import Flex from '@shared/ui/flex'
import useCurrentDevice from '@shared/ui/hooks/use-current-device'
import { useModal } from '@shared/ui/modal'
import PageBlock from '@shared/ui/page-block'
import Table from '@shared/ui/table'

import * as config from './config'
import * as model from './model'
import { getConsColumns } from './lib/get-consultation-columns'
import { NotFoundStudents } from './modals/not-found-students'
import { PassportGenerator } from './modals/passport-generator'

const AdminCompetenceCenter = () => {
    const { isMobile } = useCurrentDevice()
    const [newConsultationApplications, newConsultations] = useUnit([
        model.$newConsultationApplications,
        model.$newConsultations,
    ])

    return (
        <PageBlock>
            <Flex d="column" gap="3rem" p="1.75rem">
                <TableWrapper>
                    <Title align="left" size={2}>
                        Паспорт компетенций
                    </Title>
                    <Flex d="column" gap={isMobile ? '0.25rem' : '0.75rem'}>
                        <PassportActiveElement />
                        <ToListLink to={CC_PASSPORT_LOG}>Перейти к списку заявок</ToListLink>
                    </Flex>
                </TableWrapper>
                <TableWrapper>
                    <Flex>
                        <Title align="left" justify="baseline" size={2}>
                            Консультации
                            {newConsultations && (
                                <Subtext>
                                    {newConsultations} {getCorrectWordForm(newConsultations, config.consultationRules)}
                                </Subtext>
                            )}
                        </Title>
                        {isMobile && (
                            <IconLink to={CC_COMPLETED_CONSULTATIONS}>
                                <FiArchive size={20} />
                            </IconLink>
                        )}
                    </Flex>
                    <Flex d="column" gap={isMobile ? '0.25rem' : '0.75rem'}>
                        <Table
                            dimmedHeaders
                            innerPadding="1rem 1.25rem"
                            fw={500}
                            loading={false}
                            columns={getConsColumns()}
                            data={newConsultationApplications}
                            maxOnPage={7}
                        />
                        {!isMobile && <ToListLink to={CC_COMPLETED_CONSULTATIONS}>Перейти к завершенным</ToListLink>}
                    </Flex>
                </TableWrapper>
            </Flex>
        </PageBlock>
    )
}

const PassportActiveElement = () => {
    const { isMobile } = useCurrentDevice()
    const [
        newPassports,
        passportProcessingProgressPercent,
        passportProcessingDone,
        studentsNotFound,
        denyRemainingApplications,
    ] = useUnit([
        model.$newPassports,
        model.$passportProcessingProgressPercent,
        model.$passportProcessingDone,
        model.$studentsNotFound,
        model.denyRemainingApplications,
    ])

    const { open } = useModal()

    const openGeneratorModal = () =>
        open(<PassportGenerator />, 'Создание паспортов компетенций', {
            padding: isMobile ? '2rem 1rem' : '1.5rem',
            gap: isMobile ? '1.5rem' : '2rem',
        })

    if (passportProcessingDone)
        return (
            <PassportActiveElementWrapper>
                <Flex
                    d={isMobile ? 'column' : 'row'}
                    jc="space-between"
                    ai={isMobile ? 'flex-start' : 'center'}
                    gap={isMobile ? '0.75rem' : '2.5rem'}
                >
                    <ProgressText>Генерация паспортов завершена</ProgressText>
                    <Flex
                        d={isMobile ? 'column' : 'row'}
                        ai={isMobile ? 'flex-start' : 'center'}
                        w={isMobile ? '100%' : 'auto'}
                        gap={isMobile ? '0.75rem' : '2.5rem'}
                    >
                        <NotFoundButton
                            onClick={() =>
                                open(<NotFoundStudents />, 'Не смогли найти следующих студентов', {
                                    padding: isMobile ? '2rem 1rem' : '1.5rem',
                                    gap: isMobile ? '1.5rem' : '2rem',
                                })
                            }
                        >
                            Не найдено студентов: {studentsNotFound}
                        </NotFoundButton>
                        <Flex w={isMobile ? '100%' : 'auto'} gap="0.5rem" ai="stretch">
                            <OutlinedButton onClick={denyRemainingApplications}>
                                {studentsNotFound > 1 ? 'Отклонить заявки' : 'Отклонить заявку'}
                            </OutlinedButton>
                            <Button onClick={openGeneratorModal}>Попробовать снова</Button>
                        </Flex>
                    </Flex>
                </Flex>
            </PassportActiveElementWrapper>
        )

    if (!!passportProcessingProgressPercent)
        return (
            <PassportActiveElementWrapper>
                <Flex d="column" ai="flex-start" gap="0.75rem">
                    <Flex jc="space-between" gap="2.5rem" ai="flex-end">
                        <ProgressText>Идет генерация. Вы можете покинуть страницу 😊</ProgressText>
                        <ProgressText>{passportProcessingProgressPercent}%</ProgressText>
                    </Flex>
                    <Progress max="100" value={passportProcessingProgressPercent} />
                </Flex>
            </PassportActiveElementWrapper>
        )

    if (newPassports)
        return (
            <GeneratePassportsButton onClick={openGeneratorModal}>
                <Flex d={isMobile ? 'column' : 'row'} ai="flex-start" jc="space-between" gap="1rem">
                    <NewApplicationsAmount>
                        {newPassports} {getCorrectWordForm(newPassports, config.newApplicationRules)}
                    </NewApplicationsAmount>
                    <Flex w="fit-content" gap="2.5rem">
                        {newPassports > 1 ? 'Создать паспорта' : 'Создать паспорт'}
                        <FaArrowRightLong size={24} />
                    </Flex>
                </Flex>
            </GeneratePassportsButton>
        )
    return (
        <GeneratePassportsButton
            onClick={() =>
                open(<PassportGenerator />, 'Создание паспортов компетенций', {
                    padding: isMobile ? '2rem 1rem' : '24px',
                    gap: isMobile ? '2.5rem' : '20px',
                })
            }
            disabled
        >
            <Flex ai={isMobile ? 'center' : 'flex-start'}>Пока новых заявок нет</Flex>
        </GeneratePassportsButton>
    )
}

const TableWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 2rem;

    ${MEDIA_QUERIES.isMobile} {
        gap: 1rem;
    }
`
const PassportActiveElementWrapper = styled.div`
    display: flex;
    width: 100%;
    min-height: 6.5rem;
    justify-content: start;
    align-items: center;
    padding-inline: 3.75rem;
    border-radius: 0.5rem;
    background-color: var(--block-content);
    color: var(--text);

    font-weight: 600;
    font-size: 1.125rem;
    line-height: 1.375rem;

    ${MEDIA_QUERIES.isMobile} {
        padding-inline: 1rem;
        padding-block: 0.625rem;
    }
`
const GeneratePassportsButton = styled(ButtonBase)`
    width: 100%;
    min-height: 6.5rem;
    justify-content: start;
    padding-inline: 3.75rem;
    border-radius: 0.5rem;
    background-color: var(--reallyBlue);
    color: var(--text);

    font-weight: 600;
    font-size: 1.125rem;
    line-height: 1.375rem;

    &:disabled {
        background-color: var(--block-content);
        color: var(--text);
        opacity: 1;
    }

    &:not(:disabled):hover {
        background: 'var(--search)';
        filter: brightness(0.9);
        cursor: pointer;
    }

    ${MEDIA_QUERIES.isMobile} {
        padding-inline: 1rem;
        padding-block: 0.625rem;
    }
`
const ToListLink = styled(Link)`
    margin-left: auto;
    padding: 1rem 1.25rem;
    font-weight: 600;
    font-size: 0.83125rem;
    line-height: 1rem;
    border-radius: 0.5rem;

    color: #90b3e7;

    &:hover {
        text-decoration: underline;
    }

    ${MEDIA_QUERIES.isMobile} {
        padding: 0.75rem;
        font-size: 0.625rem;
        line-height: 0.75rem;
    }
`
const Subtext = styled.span`
    font-weight: 500;
    font-size: 0.9rem;
    line-height: 1rem;
    color: var(--text);
    opacity: 0.5;
`
const NewApplicationsAmount = styled.span`
    font-weight: 500;
`
const Progress = styled.progress`
    width: 100%;
    height: 0.5rem;
    border-radius: 0.25rem;
    background-color: var(--reallyBlue);
    color: var(--reallyBlue);

    &::-webkit-progress-bar {
        background-color: var(--theme);
        border-radius: 0.25rem;
    }

    &::-webkit-progress-value {
        background-color: var(--blue);
        border-radius: 0.25rem;
    }
`
const ProgressText = styled.p`
    font-weight: 500;
    font-size: 0.9rem;
    line-height: 1.125rem;
    color: var(--text);
    text-align: start;
`
const NotFoundButton = styled(ButtonBase)`
    font-weight: 500;
    font-size: 0.9rem;
    line-height: 1.125rem;
    color: var(--reallyBlue);
    background-color: transparent;
`
const OutlinedButton = styled(ButtonBase)`
    font-weight: 600;
    font-size: 0.9rem;
    line-height: 1.125rem;
    padding: 1rem 1.25rem;

    background-color: transparent;
    border: 1px solid var(--reallyBlue);

    ${MEDIA_QUERIES.isMobile} {
        width: 100%;
        padding-block: 0.75rem;
        font-size: 0.625rem;
        line-height: 0.75rem;
    }
`
const Button = styled(ButtonBase)`
    font-weight: 600;
    font-size: 0.9rem;
    line-height: 1.125rem;
    padding: 1rem 1.25rem;

    background-color: var(--reallyBlue);

    ${MEDIA_QUERIES.isMobile} {
        padding-block: 0.75rem;
        width: 100%;
        font-size: 0.625rem;
        line-height: 0.75rem;
    }
`

const IconLink = styled(Link)`
    color: var(--text);
    height: fit-content;
    line-height: 0;
    background: transparent;
`

export default AdminCompetenceCenter
