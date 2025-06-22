import React from 'react'
import { TbCopy } from 'react-icons/tb'

import { useUnit } from 'effector-react'
import styled from 'styled-components'

import { ButtonBase } from '@shared/ui'
import { MEDIA_QUERIES } from '@shared/ui/consts'
import Flex from '@shared/ui/flex'
import { useModal } from '@shared/ui/modal'

import * as model from '../models/competence-center-admin-model'
import { IconButton } from '../ui'

export const NotFoundStudents = () => {
    const { close } = useModal()
    const [notFoundStudents] = useUnit([model.$notFoundStudents])
    const set = new Set((notFoundStudents ?? []).map((student) => student.fio))
    return (
        <Flex d="column" gap="1.5rem">
            <Flex d="column" gap="1rem" ai="start">
                {Array.from(set)?.map((student) => <FioCopy key={student} fio={student} />)}
            </Flex>
            <Button onClick={close}>Закрыть</Button>
        </Flex>
    )
}

const FioCopy = ({ fio }: { fio: string }) => {
    return (
        <Flex gap="0.375rem" ai="center">
            <Text>{fio}</Text>
            <IconButton onClick={() => navigator.clipboard.writeText(fio)}>
                <TbCopy size={16} />
            </IconButton>
        </Flex>
    )
}

const Text = styled.span`
    font-size: 0.9rem;
    font-weight: 500;
    line-height: 140%;
    color: var(--text);
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
