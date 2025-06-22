import { useContext } from 'react'

import { ModalProps } from '../context'
import { Context, ModalContext } from '../context/context'

export interface IModal {
    isOpen: boolean
    back: () => void
    open: (Component: React.ReactElement<any, any> | undefined, title?: string, props?: ModalProps) => void
    close: () => void
}

export const useModal = (): IModal => {
    const { open, isOpen, ...rest } = useContext<ModalContext>(Context)

    return {
        open,
        isOpen,
        ...rest,
    }
}
