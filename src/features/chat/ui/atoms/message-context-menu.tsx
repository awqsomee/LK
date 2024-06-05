import { ChatMessage } from '@entities/chat-messages/type'
import { contextMenuModel } from '@entities/context-menu'
import { popUpMessageModel } from '@entities/pop-up-message'
import { Button } from '@ui/button'
import React from 'react'
import { FiCopy } from 'react-icons/fi'

interface Props {
    message: ChatMessage
}

const MessageContextMenu = ({ message }: Props) => {
    return (
        <>
            <Button
                text="Копировать"
                icon={<FiCopy />}
                width="100%"
                align="left"
                background="transparent"
                onClick={() => {
                    navigator.clipboard.writeText(message.html ?? '')
                    contextMenuModel.events.close()
                    popUpMessageModel.events.evokePopUpMessage({ message: 'Сообщение скопировано', type: 'info' })
                }}
            />
        </>
    )
}

export default MessageContextMenu
