import React, { ReactNode } from 'react'
import { FiCheck } from 'react-icons/fi'

import { CheckboxSquare, CheckboxWrapper } from './styles'

export interface CheckboxProps {
    checked: boolean
    setChecked: (value: boolean) => void
    invisibleOnFalse?: boolean
    text?: ReactNode
    isActive?: boolean
    visible?: boolean
    fontSize?: string
}

const Checkbox = ({
    text,
    checked,
    setChecked,
    fontSize,
    visible = true,
    isActive = true,
    invisibleOnFalse = false,
}: CheckboxProps) => {
    if (!visible) return null

    const handleChange = () => {
        isActive && setChecked(!checked)
    }

    return (
        <CheckboxWrapper
            checked={checked}
            invisibleOnFalse={invisibleOnFalse}
            fontSize={fontSize}
            isActive={isActive}
            className="checkbox"
            onClick={(e) => e.stopPropagation()}
        >
            <input className="checkbox" type="checkbox" checked={checked} onChange={handleChange} />
            <CheckboxSquare tabIndex={0} className="checkbox-square">
                {checked && <FiCheck />}
            </CheckboxSquare>
            {text && <div className="checkbox-text">{text}</div>}
        </CheckboxWrapper>
    )
}

export default Checkbox
