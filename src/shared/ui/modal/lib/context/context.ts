import { createContext } from 'react'

import { Property } from 'csstype'

export interface ModalContext {
    isOpen: boolean
    component: React.ReactElement<any, any> | undefined
    setComponent?: (Component: React.ReactElement<any, any> | undefined) => void
    back: () => void
    open: (Component: React.ReactElement<any, any> | undefined) => void
    close: () => void
    canBack: boolean
    title?: string
    gap?: Property.Gap
    padding?: Property.Padding
}

export const Context = createContext<ModalContext>({
    isOpen: false,
    component: undefined,
    back: () => {},
    close: () => {},
    open: () => {},
    title: undefined,
    canBack: false,
})
