import React from 'react'
import { FiClock, FiList, FiUsers } from 'react-icons/fi'
import { Link } from 'react-router-dom'

import styled from 'styled-components'

import { SendMessage } from '@features/send-first-message'

import { getEnrichedTemplatePath } from '@entities/menu/lib/get-enriched-template-path'

import { ALL_STUDENTS_ROUTE, SCHEDULE_FILTER_ROUTE } from '@shared/routing'
import { Button } from '@shared/ui/button'
import Flex from '@shared/ui/flex'
import { Icon } from '@shared/ui/icon'
import { useModal } from '@shared/ui/modal'
import Subtext from '@shared/ui/subtext'

const GroupModalStyled = styled.div`
    display: flex;
    flex-direction: column;
    height: 300px;

    @media (min-width: 1001px) {
        min-width: 300px;
        width: 300px;
        height: 300px;
    }
`

const LinkStyled = styled(Link)`
    width: 100%;
`

type Props = {
    group: string
}

const GroupModal = ({ group }: Props) => {
    const { close } = useModal()
    return (
        <GroupModalStyled>
            <Flex d="column" gap="12px" jc="center" h="100%">
                <Icon size={120} color="lightBlue">
                    <FiUsers />
                </Icon>
                <Subtext fontSize="1.2rem">{group}</Subtext>
            </Flex>
            <Flex d="column" gap="8px">
                <Flex gap="8px">
                    <LinkStyled
                        to={getEnrichedTemplatePath(SCHEDULE_FILTER_ROUTE, {
                            page: 'current',
                            filter: group,
                        })}
                    >
                        <Button
                            icon={<FiClock />}
                            width="100%"
                            text="Расписание"
                            background="var(--theme-4)"
                            onClick={close}
                        />
                    </LinkStyled>
                    <LinkStyled to={`${ALL_STUDENTS_ROUTE}/${group}`}>
                        <Button
                            icon={<FiList />}
                            width="100%"
                            text="Список"
                            background="var(--theme-4)"
                            onClick={close}
                        />
                    </LinkStyled>
                </Flex>
                <SendMessage group={group} />
            </Flex>
        </GroupModalStyled>
    )
}

export default GroupModal
