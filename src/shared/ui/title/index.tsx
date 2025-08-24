import React from 'react'

import { Property } from 'csstype'

import { Align, HeaderSize } from '@shared/ui/types'

import { CreateHeader } from './create-header'
import { ChildrenWrapper, RedStar, TitleWrapper } from './styles'

export type TitleProps = {
    children: ChildrenType
    width?: string
    size?: HeaderSize
    align?: Align
    justify?: Property.AlignItems
    gap?: string
    bottomGap?: boolean | string
    icon?: React.ReactNode
    iconColor?: string
    required?: boolean
    visible?: boolean
    style?: React.CSSProperties
}

export function Title(props: TitleProps) {
    const {
        icon,
        iconColor,
        children,
        size = 1,
        required,
        width,
        style,
        align = 'center',
        justify = 'center',
        gap,
        bottomGap = false,
        visible = true,
    } = props

    if (!visible) return null

    return (
        <TitleWrapper
            style={style}
            size={size}
            className="title-wrapper"
            align={align}
            bottomGap={bottomGap}
            iconColor={iconColor}
        >
            {icon}
            <CreateHeader size={size} width={width}>
                {required && <RedStar>*</RedStar>}
                <ChildrenWrapper width={width} justify={justify} gap={gap}>
                    {children}
                </ChildrenWrapper>
            </CreateHeader>
        </TitleWrapper>
    )
}
