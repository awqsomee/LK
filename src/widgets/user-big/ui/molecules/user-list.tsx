import React, { useState } from 'react'

import styled from 'styled-components'

import User from '@features/user'

import { User as UserType } from '@shared/api/model'
import getCorrectWordForm from '@shared/lib/get-correct-word-form'
import { userModel } from '@shared/session'
import { SubmitButton, Title } from '@shared/ui/atoms'
import { LocalSearch } from '@shared/ui/molecules'
import PagintaionList from '@shared/ui/pagination-list'

const UserListWrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;

    @media (min-width: 1001px) {
        width: 600px;
        height: 600px;
    }
`

const UserList = () => {
    const {
        data: { user },
    } = userModel.selectors.useUser()
    const [chosenUsers, setChosenUsers] = useState<number[]>([])

    const handleCheck = (user: UserType) => {
        if (chosenUsers.includes(user.id)) {
            setChosenUsers((prev) => prev.filter((id) => id !== user.id))
        } else {
            setChosenUsers((prev) => [...prev, user.id])
        }
    }

    const renderItem = (item: UserType, isMe: boolean, index?: number) => {
        return (
            <User
                id={item.id}
                checked={!!chosenUsers.find((el) => el.toString() === item.id.toString())}
                name={item.fullName}
                avatar={item?.avatar}
                type={item.user_status}
                key={index}
                onClick={() => handleCheck(item)}
                isMe={isMe}
            />
        )
    }

    if (!user) return null

    return (
        <UserListWrapper>
            <Title size={3} align="left" bottomGap>
                Добавить аккаунт
            </Title>
            <LocalSearch
                whereToSearch={[]}
                searchEngine={() => null}
                setResult={() => null}
                placeholder="Поиск людей"
            />
            <PagintaionList items={[user]} renderItem={renderItem} />
            <SubmitButton
                text={`Добавить ${chosenUsers.length} ${getCorrectWordForm(chosenUsers.length, {
                    zero: 'аккаунтов',
                    one: 'аккаунт',
                    twoToFour: 'аккаунта',
                    fiveToNine: 'аккаунтов',
                })}`}
                action={function (): void {
                    throw new Error('Function not implemented.')
                }}
                isLoading={false}
                completed={false}
                setCompleted={function (): void {
                    throw new Error('Function not implemented.')
                }}
                isActive={!!chosenUsers.length}
                popUpFailureMessage="Ни один аккаунт не выбран"
            />
        </UserListWrapper>
    )
}

export default UserList
