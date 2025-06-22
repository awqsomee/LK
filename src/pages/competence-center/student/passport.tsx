import React from 'react'
import { LiaArrowRightSolid } from 'react-icons/lia'
import { PiFileMagnifyingGlassLight } from 'react-icons/pi'
import { TbDownload } from 'react-icons/tb'
import { useHistory } from 'react-router'

import { useUnit } from 'effector-react'
import styled from 'styled-components'

import { CompetencePassport } from '@shared/api/competence-center'
import { Colors } from '@shared/consts'
import { COMPETENCE_CENTER, COMPETENCE_CENTER_PASSPORTS } from '@shared/routing'
import { ButtonBase } from '@shared/ui'
import Flex from '@shared/ui/flex'
import useCurrentDevice from '@shared/ui/hooks/use-current-device'
import { useModal } from '@shared/ui/modal'
import { Title } from '@shared/ui/title'

import * as model from '../models/competence-center-model'
import { PassportInProgress } from '../modals/passport-in-progress'
import { Button, Card, IconLink, OutlinedButton, Stack, Text } from '../ui'

export const PassportBlock = () => {
    const history = useHistory()
    const { isMobile } = useCurrentDevice()
    const [currentPassport] = useUnit([model.$currentPassport])

    if (!currentPassport?.status) return null

    return (
        <Stack gap={8}>
            <Card w="100%" withBorder>
                <Flex
                    gap="1rem"
                    d={isMobile ? 'column' : 'row'}
                    jc="space-between"
                    ai={isMobile ? 'flex-start' : 'center'}
                >
                    <PassportStatus currentPassport={currentPassport} />
                </Flex>
            </Card>

            <ToArchivedButton margin="0 0 0 auto" onClick={() => history.push(COMPETENCE_CENTER_PASSPORTS)}>
                Перейти к завершенным
                <LiaArrowRightSolid size={14} />
            </ToArchivedButton>
        </Stack>
    )
}

const PassportStatus = ({ currentPassport }: { currentPassport: CompetencePassport }) => {
    if (currentPassport.status === 'not_found') return <NotFound />
    if (currentPassport.status === 'pending') return <Pending />
    if (currentPassport.status === 'done') return <Done currentPassport={currentPassport} />
    return null
}

const NotFound = () => {
    return (
        <>
            <Flex w="fit-content">
                <Title size={4} align="left" style={{ color: Colors.red.light3 }}>
                    Не удалось найти паспорт компетенций
                </Title>
            </Flex>
            <Flex w="fit-content">
                <Text>Пройдите все базовые тестирования и подайте заявку заново</Text>
            </Flex>
        </>
    )
}

const Pending = () => {
    const { open } = useModal()

    return (
        <>
            <Flex w="fit-content">
                <Title size={3} align="left">
                    Актуальный паспорт компетенций
                </Title>
            </Flex>
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
    )
}

const Done = ({ currentPassport }: { currentPassport: CompetencePassport }) => {
    const { isMobile } = useCurrentDevice()

    return (
        <>
            <Flex w="fit-content">
                <Title size={3} align="left">
                    Актуальный паспорт компетенций
                </Title>
            </Flex>{' '}
            <Flex gap="0.5rem" ai="stretch" w={isMobile ? '100%' : '50%'}>
                <OutlinedButton w={isMobile ? '100%' : '50%'} onClick={() => model.openFile(currentPassport.id)}>
                    Открыть
                    <PiFileMagnifyingGlassLight size={14} />
                </OutlinedButton>
                {isMobile ? (
                    <Button size={38} p="0" onClick={() => model.downloadFile(currentPassport.id)}>
                        <TbDownload size={14} />
                    </Button>
                ) : (
                    <Button w="50%" onClick={() => model.downloadFile(currentPassport.id)}>
                        Скачать
                        <TbDownload size={14} />
                    </Button>
                )}
            </Flex>
        </>
    )
}

const ToArchivedButton = styled(ButtonBase)`
    padding: 0.75rem;

    background: var(--theme-1t);
`
