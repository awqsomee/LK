import React from 'react'

import { useUnit } from 'effector-react'

import { $requiredSidebarItems, addPageToSidebar, deletePageFromSidebar } from '@features/all-pages/model'
import CustomizeMenu from '@features/customize-menu'

import { menuModel } from '@entities/menu'
import { userSettingsModel } from '@entities/settings'

import AddedElementsList, { FilterElementList } from '@shared/ui/added-elements-list'
import { useModal } from '@shared/ui/modal'
import { Title } from '@shared/ui/title'

import { TITLE_CONFIG } from '../constants'

const MenuSettings = () => {
    const [settings, menu, requiredList] = useUnit([
        userSettingsModel.stores.userSettings,
        menuModel.stores.menu,
        $requiredSidebarItems,
    ])

    const { open } = useModal()
    const list = settings?.customizeMenu.pages
        .filter((route) => !requiredList.includes(route))
        .reduce((prev, curr) => ({ ...prev, [curr]: menu.allRoutes?.[curr] }), {}) as FilterElementList

    return (
        <>
            <Title {...TITLE_CONFIG}>Разделы меню</Title>
            <AddedElementsList
                padding="0 10px 10px 10px"
                list={list}
                onRemoveOne={(id) => {
                    deletePageFromSidebar({ pageId: id })
                }}
                onAddElement={() => {
                    open(
                        <CustomizeMenu
                            enabledListStore={menuModel.stores.leftSidebar}
                            requiredListStore={$requiredSidebarItems}
                            remove={(pageId) => deletePageFromSidebar({ pageId })}
                            add={(pageId) => addPageToSidebar({ pageId })}
                        />,
                        'Настройка меню',
                    )
                }}
            />
        </>
    )
}

export default MenuSettings
