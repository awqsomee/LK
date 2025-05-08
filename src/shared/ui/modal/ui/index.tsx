import React, { useMemo, useRef } from 'react'
import { FiChevronLeft, FiX } from 'react-icons/fi'

import { Property } from 'csstype'
import styled from 'styled-components'

import { Button, Title } from '@shared/ui/atoms'
import useOnClickOutside from '@shared/ui/hooks/use-on-click-outside'
import useShortCutKeys from '@shared/ui/hooks/use-short-cut-keys'

import useCoreModal from '../lib/hooks/use-core-modal'
import ModalContent from './atoms/modal-content'
import ModalWrapper from './atoms/modal-wrapper'

const Content = styled.div<{ gap?: Property.Gap }>`
    padding-top: ${({ gap }) => gap || '30px'};
`

const ModalWindow = () => {
    const { isOpen, component: Component, canBack, back, close, title, padding, gap } = useCoreModal()
    const ref = useRef(null)
    const isValid = useMemo(() => isOpen && !!Component, [isOpen, Component])
    // Escape === 27
    useShortCutKeys([27], close)

    useOnClickOutside(ref, () => {
        close()
    })

    // TODO: add soft close
    if (!isValid) {
        return null
    }

    return (
        <ModalWrapper isOpen={isValid}>
            <ModalContent isOpen={isValid} ref={ref} hasBack={canBack} hasTitle={!!title} padding={padding}>
                {canBack && (
                    <Button
                        onClick={back}
                        icon={<FiChevronLeft />}
                        text={!!title ? '' : 'Назад'}
                        background="transparent"
                        textColor={'var(--theme-opposite)'}
                        width="fit-content"
                        align="left"
                        padding="8px"
                        height="fit-content"
                        className="back-button"
                    />
                )}
                {title && (
                    <Title size={3} align="left">
                        {title}
                    </Title>
                )}
                <Button
                    onClick={close}
                    icon={<FiX />}
                    className="close-button"
                    height="35px"
                    minWidth="35px"
                    width="35px"
                    background="var(--almostTransparent)"
                />

                <Content gap={gap}>{Component}</Content>
            </ModalContent>
        </ModalWrapper>
    )
}

export const Modal = React.memo(ModalWindow)
