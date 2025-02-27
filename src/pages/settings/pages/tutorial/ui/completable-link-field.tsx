import React from 'react'
import { FiChevronRight } from 'react-icons/fi'
import { IoIosCheckmarkCircleOutline, IoIosRadioButtonOff } from 'react-icons/io'

import useCurrentDevice from '@shared/ui/hooks/use-current-device'
import TextFieldItem from '@shared/ui/text-field/text-field-item'
import { FieldProps } from '@shared/ui/text-field/types'

interface LocalProps {
    completed: boolean
}

export const CompletableLinkField = ({ action, ...props }: FieldProps & LocalProps) => {
    const { isMobile, isTablet } = useCurrentDevice()
    return (
        <TextFieldItem
            {...props}
            onClick={action}
            icon={props.completed ? <IoIosCheckmarkCircleOutline /> : <IoIosRadioButtonOff />}
            rightIcon={<FiChevronRight />}
            fancyBG={!isMobile && !isTablet}
        />
    )
}
