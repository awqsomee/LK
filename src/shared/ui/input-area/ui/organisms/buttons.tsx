import React from 'react'
import { FiCheckCircle, FiEdit3, FiSave, FiXCircle } from 'react-icons/fi'

import { Colors } from '@shared/consts'
import { Button } from '@shared/ui/button'
import useInputArea from '@shared/ui/input-area/lib/use-input-area'
import { IInputArea } from '@shared/ui/input-area/model'
import List from '@shared/ui/list'

type Props = Pick<IInputArea, 'confirmed'> &
    Pick<ReturnType<typeof useInputArea>, 'changeInputArea' | 'setChangeInputArea' | 'handleConfirm'> & {
        setData: React.Dispatch<React.SetStateAction<IInputArea>>
    }

const GetButtons = ({ confirmed, changeInputArea, setData, setChangeInputArea, handleConfirm }: Required<Props>) => {
    if (confirmed)
        return (
            <Button
                onClick={() => {
                    setData((area: IInputArea) => {
                        area.confirmed = false
                        return { ...area }
                    })
                    setChangeInputArea(true)
                }}
                text="Изменить"
                icon={<FiEdit3 />}
                textColor={Colors.blue.main}
                hoverBackground={Colors.blue.transparent3}
                background="transparent"
                width="130px"
            />
        )

    if (changeInputArea)
        return (
            <>
                <Button
                    onClick={handleConfirm}
                    text="Сохранить"
                    icon={<FiSave />}
                    textColor={Colors.blue.main}
                    hoverBackground={Colors.blue.transparent3}
                    background="transparent"
                    width="130px"
                />
                <Button
                    onClick={() => setChangeInputArea(false)}
                    text="Отменить"
                    icon={<FiXCircle />}
                    textColor={Colors.red.main}
                    hoverBackground={Colors.red.transparent3}
                    background="transparent"
                    width="130px"
                />
            </>
        )

    return (
        <>
            <Button
                onClick={handleConfirm}
                text="Подтвердить"
                icon={<FiCheckCircle />}
                textColor={Colors.green.main}
                hoverBackground={Colors.green.transparent3}
                background="transparent"
                width="130px"
            />
            <Button
                onClick={() => setChangeInputArea(true)}
                text="Изменить"
                icon={<FiEdit3 />}
                textColor={Colors.blue.main}
                hoverBackground={Colors.blue.transparent3}
                background="transparent"
                width="130px"
            />
        </>
    )
}

const Buttons = (props: Props) => {
    if (props.confirmed === undefined) return null

    return (
        <List direction="horizontal" horizontalAlign="right">
            <GetButtons {...props} confirmed={props.confirmed} />
        </List>
    )
}

export default Buttons
