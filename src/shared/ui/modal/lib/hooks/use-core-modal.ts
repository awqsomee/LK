import { useContext } from 'react'

import { Context, ModalContext } from '../context/context'

const useCoreModal = () => {
    const { isOpen, component, canBack, back, close, title, padding, gap } = useContext<ModalContext>(Context)

    return {
        back,
        close,
        isOpen,
        canBack,
        component,
        title,
        padding,
        gap,
    }
}

export default useCoreModal
