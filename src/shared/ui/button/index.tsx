import React, { ButtonHTMLAttributes } from 'react'

import { Align, Direction, TutorialComponent } from '@shared/ui/types'

import { ButtonLoading } from '../loading/button-loading'
import { popUpMessageModel } from '../pop-up-message'
import { ButtonWrapper } from './styles'

type BaseProps = ButtonHTMLAttributes<HTMLButtonElement>

export type ButtonProps = BaseProps & {
    icon?: JSX.Element
    text?: React.ReactNode | string
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
    isChosen?: boolean
    width?: string
    minWidth?: string
    background?: string
    textColor?: string
    shrinkTextInMobile?: boolean
    hoverBackground?: string
    hoverTextColor?: string
    padding?: string
    align?: Align
    direction?: Direction
    isActive?: boolean
    fixedInMobile?: boolean
    height?: string
    notActiveClickMessage?: string
    flipped?: boolean
    loading?: boolean
    fontSize?: string
    radius?: string
}

export function Button(props: ButtonProps & TutorialComponent) {
    const {
        icon,
        text,
        onClick,
        width,
        minWidth,
        background,
        textColor,
        hoverBackground,
        align,
        isChosen,
        padding,
        shrinkTextInMobile,
        fixedInMobile,
        direction = 'horizontal',
        isActive = true,
        height,
        notActiveClickMessage,
        flipped,
        forwardedRef,
        loading,
        ...restProps
    } = props

    const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        if (isActive) onClick?.(event)
        else if (notActiveClickMessage)
            popUpMessageModel.events.evokePopUpMessage({ type: 'failure', message: notActiveClickMessage, time: 10000 })
    }

    return (
        <ButtonWrapper
            text={!!text}
            onClick={handleClick}
            isChosen={isChosen}
            width={width}
            minWidth={minWidth}
            background={background}
            padding={padding}
            textColor={textColor}
            shrinkTextInMobile={shrinkTextInMobile}
            hoverBackground={hoverBackground}
            align={align}
            direction={direction}
            isActive={loading ? false : isActive}
            fixedInMobile={fixedInMobile}
            height={height}
            flipped={flipped}
            ref={forwardedRef}
            {...restProps}
        >
            {loading ? (
                <ButtonLoading />
            ) : (
                <>
                    {!!icon && <div className="icon">{icon}</div>}
                    <span className="text">{text}</span>
                </>
            )}
        </ButtonWrapper>
    )
}
