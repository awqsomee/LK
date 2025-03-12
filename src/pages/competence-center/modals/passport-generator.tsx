import React, { useState } from 'react'

import { useUnit } from 'effector-react'
import styled from 'styled-components'

import { ButtonBase } from '@shared/ui'
import { MEDIA_QUERIES } from '@shared/ui/consts'
import FileInput from '@shared/ui/file-input'
import Flex from '@shared/ui/flex'
import useCurrentDevice from '@shared/ui/hooks/use-current-device'
import { useModal } from '@shared/ui/modal'

import * as model from '../model'

export const PassportGenerator = () => {
    const { isMobile } = useCurrentDevice()
    const { close } = useModal()
    const [files, setFiles] = useState([])

    const [generationStarted, generationFinished] = useUnit([model.generationStarted, model.generationFinished])

    return (
        <Flex w={isMobile ? '100%' : '36rem'} d="column" gap={isMobile ? '2.5rem' : '1.5rem'}>
            <Flex d="column" ai="start" gap={isMobile ? '1rem' : '1.5rem'}>
                <Text>
                    Выбрать и скачать таблицу с данными:{' '}
                    <a href="https://rsv.ru/" target="_blank" rel="noreferrer">
                        по этой ссылке
                    </a>
                </Text>
                <Flex ai="start" d="column" gap={isMobile ? '0.5rem' : '0.75rem'}>
                    <Text>Загрузите таблицу</Text>
                    <FileInput isActive files={files} setFiles={setFiles} formats={['xlsx']} />
                </Flex>
            </Flex>
            <Flex gap={isMobile ? '0.625rem' : '2rem'} ai="stretch">
                <OutlinedButton onClick={close}>Отмена</OutlinedButton>
                <Button
                    disabled={!files.length}
                    onClick={() => {
                        close()
                        generationStarted()
                        setTimeout(generationFinished, 8000)
                    }}
                >
                    Начать генерацию
                </Button>
            </Flex>
        </Flex>
    )
}
const Text = styled.p`
    font-size: 0.9rem;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    line-height: 18px;
    color: var(--text);
`

const OutlinedButton = styled(ButtonBase)`
    width: 100%;
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
    width: 100%;
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
