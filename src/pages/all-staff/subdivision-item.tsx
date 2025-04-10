import React from 'react'
import { FiEyeOff } from 'react-icons/fi'

import styled from 'styled-components'

import getImageSize from '@features/user/lib/get-image-size'

import { Employee, Subdivision } from '@shared/api/model/phonebook'
import Avatar from '@shared/ui/avatar'
import { Error } from '@shared/ui/error'
import Flex from '@shared/ui/flex'
import Subtext from '@shared/ui/subtext'

export const SubdivisionItem = ({
    title,
    items,
    action,
}: {
    title: string
    action: (item: Employee | null) => void
    items: Subdivision[] | Employee[]
}) => {
    return (
        <Flex d="column" ai="flex-start" gap="7px">
            <Subtext>{title}</Subtext>
            {items.length > 0 ? (
                items.map((item) => (
                    <Button
                        key={'fio' in item ? item.fio + item.post : item.name}
                        onClick={() => action('fio' in item ? item : null)}
                    >
                        {'fio' in item && (
                            <Avatar
                                name={item.fio}
                                avatar={item.avatar}
                                width={getImageSize('horizontal', 'middle')}
                                height={getImageSize('horizontal', 'middle')}
                                marginRight={'7px'}
                            />
                        )}
                        {'fio' in item ? item.fio : item.name}
                    </Button>
                ))
            ) : (
                <Error size="60px" text="Ничего не было найдено" image={<FiEyeOff />} />
            )}
        </Flex>
    )
}

const Button = styled.button`
    display: flex;
    align-items: center;
    gap: 4px;
    background-color: transparent;
    text-align: left;
    width: 100%;
    padding: 10px 25px 8px 25px;
    border-radius: 10px;
    border: none;
    margin: 0;
    cursor: pointer;
    color: var(--text);
    font-weight: 600;
    line-height: 24px;
    &:hover {
        background-color: var(--theme-1);
    }
`
