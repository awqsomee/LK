import React from 'react'
import { FiX } from 'react-icons/fi'

import { MessageType, ThemeVariant, messageType } from '@shared/consts'
import { Button } from '@shared/ui/button'

import SkeletonList from '../skeleton-list'
import { Title } from '../title'
import { Align } from '../types'
import { MessageWrapper } from './styles'

export type MessageProps = {
    type: MessageType
    children?: ChildrenType
    title?: ChildrenType
    icon?: ChildrenType
    visible?: boolean
    align?: Align
    width?: string
    minWidth?: string
    maxWidth?: string
    onClose?: () => void
    padding?: string
    fontSize?: string
    gap?: string
    solidBackground?: boolean
    loading?: boolean
    lineHeight?: string
}

const Loading = () => {
    return (
        <SkeletonList
            shapes={[
                {
                    shape: 'rect',
                    size: { width: '200px', height: '13px' },
                    margin: '0',
                },
                {
                    shape: 'rect',
                    size: { width: '100px', height: '12px' },
                    margin: '5px 0',
                },
                {
                    shape: 'rect',
                    size: { width: '120px', height: '12px' },
                    margin: '0',
                },
            ]}
            direction="vertical"
            horizontalAlign="left"
        />
    )
}

export function Message({
    type,
    children,
    icon,
    width,
    minWidth,
    maxWidth,
    title,
    onClose,
    padding,
    fontSize,
    gap,
    lineHeight,
    solidBackground = false,
    align = 'left',
    visible = true,
    loading = false,
}: MessageProps) {
    if (!visible) return null

    const theme = document.documentElement.getAttribute('data-theme') as ThemeVariant[keyof ThemeVariant]

    return (
        <MessageWrapper
            isLightTheme={theme === ThemeVariant.Light}
            className="message"
            closable={!!onClose}
            type={type}
            align={align}
            width={width}
            minWidth={minWidth}
            maxWidth={maxWidth}
            padding={padding}
            fontSize={fontSize}
            gap={gap}
            lineHeight={lineHeight}
            solidBackground={solidBackground}
        >
            <Title size={4} align={align} icon={icon === null ? null : (icon ?? messageType[type].icon({}))}>
                {title ?? messageType[type].title}
            </Title>
            {onClose && <Button onClick={onClose} icon={<FiX />} className="close-button" />}
            {children && <div className="info-text">{children}</div>}
            {loading && <Loading />}
            {/* {type === 'hint' && <Button background="#ffffff10" text="Понятно!" textColor="#fff" />} */}
        </MessageWrapper>
    )
}
