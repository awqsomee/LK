import React from 'react'

import { UserList } from '@widgets/user-big/ui'

import User from '@features/user'

import { contextMenuModel } from '@entities/context-menu'

import { userModel } from '@shared/session'
import List from '@shared/ui/list'
import { useModal } from '@shared/ui/modal'
import Subtext from '@shared/ui/subtext'
import { Size } from '@shared/ui/types'

type Props = {
    padding?: string
    size?: Size
}

const AvailableAccounts = ({ padding, size = 'middle' }: Props) => {
    const {
        data: { user },
    } = userModel.selectors.useUser()
    const { open } = useModal()
    const isAdmin = false

    const onAdd = () => {
        open(<UserList />)
        contextMenuModel.events.close()
    }

    return (
        <List
            visible={!!user?.accounts}
            padding={padding}
            title="Аккаунты"
            direction="horizontal"
            gap={0}
            showPages
            horizontalAlign="left"
            onAdd={isAdmin ? onAdd : undefined}
        >
            {!user?.accounts?.length && <Subtext>Нет доступных аккаунтов</Subtext>}
            {user?.accounts?.map((account) => {
                return (
                    <User
                        id={undefined}
                        key={account.fio}
                        type={account.user_status}
                        size={size}
                        name={account.fio ?? user.fullName}
                        token={account.token}
                        division={account.work_place}
                        group={account.group}
                        degreeLevel={account.degreeLevel}
                        orientation="vertical"
                    />
                )
            })}
        </List>
    )
}

export default AvailableAccounts
