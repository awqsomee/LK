import { Button, CenterPage } from '@shared/ui/atoms'
import Flex from '@shared/ui/flex'
import PageBlock from '@shared/ui/page-block'
import React from 'react'
import { SettingsContent } from './ui/settings-content'
import { SettingsList } from './ui/settings-list'
import { confirmModel } from '@entities/confirm'
import { userModel } from '@entities/user'
import { FiLogOut } from 'react-icons/fi'

const SettingsPage = () => {
    return (
        <CenterPage padding="10px">
            <PageBlock
                topRightCornerElement={
                    <Button
                        icon={<FiLogOut />}
                        text={'Выйти из аккаунта'}
                        onClick={() => {
                            confirmModel.events.evokeConfirm({
                                message: 'Вы точно хотите выйти из аккаунта?',
                                onConfirm: userModel.events.logout,
                            })
                        }}
                        textColor="var(--red)"
                        background="var(--block)"
                    />
                }
            >
                <Flex ai="flex-start">
                    <SettingsList />
                    <SettingsContent />
                </Flex>
            </PageBlock>
        </CenterPage>
    )
}

export default SettingsPage
