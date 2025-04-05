import React, { useCallback, useEffect, useMemo, useState } from 'react'

import { Property } from 'csstype'
import { useUnit } from 'effector-react'

import { modalModel } from '../../model'
import { Context } from './context'

type Props = {
    children: JSX.Element
} & ModalProps

export type ModalProps = {
    padding?: Property.Padding
    gap?: Property.Gap
}

export const ModalProvider = ({ children }: Props) => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [titles, setTitles] = useState<string[]>([])
    const [padding, setPadding] = useState<Property.Padding>('')
    const [gap, setGap] = useState<Property.Gap>('')
    const [openModals, setOpenModals] = useState<React.ReactElement<any, any>[]>([])
    const isModalOpen = useUnit(modalModel.stores.$isModalOpen)

    const canBack = openModals.length > 1

    const back = useCallback(() => {
        if (canBack) {
            openModals.pop()
            titles.pop()
            setOpenModals([...openModals])
            setTitles([...titles])
        }
    }, [openModals, setOpenModals])

    const open = useCallback(
        (Component: React.ReactElement<any, any> | undefined, title?: string, props?: ModalProps) => {
            if (Component) {
                if (!isOpen) {
                    setOpenModals(() => [Component])
                    setTitles(title ? [title] : [])
                } else {
                    setOpenModals(() => [...openModals, Component])
                    setTitles(() => [...titles, title ?? ''])
                }
                if (props?.padding) setPadding(props?.padding)
                if (props?.gap) setGap(props?.gap)
                setIsOpen(() => true)
                modalModel.events.open()
            }
        },
        [setOpenModals, setIsOpen, openModals, isOpen],
    )

    const close = useCallback(() => {
        setIsOpen(() => false)
        setPadding('')
        setGap('')
        modalModel.events.close()
    }, [setOpenModals, setIsOpen])

    const component = useMemo(() => openModals[openModals.length - 1], [openModals])
    const title = useMemo(() => titles[titles.length - 1], [titles])

    const setComponent = useCallback((Component: React.ReactElement<any, any> | undefined) => {
        if (Component) {
            setOpenModals([...openModals, Component])
        }
    }, [])

    useEffect(() => {
        if (isModalOpen !== isOpen) {
            setIsOpen(isModalOpen)
        }
    }, [isModalOpen])

    return (
        <Context.Provider
            value={{
                back,
                open,
                close,
                isOpen,
                canBack,
                component,
                title,
                gap,
                padding,
                setComponent,
            }}
        >
            {children}
        </Context.Provider>
    )
}
