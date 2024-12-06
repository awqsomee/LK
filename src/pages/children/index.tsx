import React, { useEffect, useState } from 'react'
import BaseApplicationWrapper from '@pages/applications/ui/base-application-wrapper'
import SubmitButton from '@shared/ui/submit-button'
import { Button, Input, Loading, Message, Title } from '@shared/ui/atoms'
import { useUnit } from 'effector-react'
import { childrensModel } from '@entities/children'
import styled from 'styled-components'
import { FiInfo, FiMinusCircle, FiPlusCircle } from 'react-icons/fi'
import { Colors } from '@shared/constants'
import FormBlockWrapper from '@shared/ui/atoms/form-block'
import { isNumber } from '@shared/lib/is-number'
import Flex from '@shared/ui/flex'

const Children = () => {
    const [pageMounted, loading, childrens, addChildren, saveChildrens, saving, isActive] = useUnit([
        childrensModel.events.pageMounted,
        childrensModel.stores.loading,
        childrensModel.stores.childrens,
        childrensModel.events.addChildren,
        childrensModel.events.saveChildrens,
        childrensModel.stores.saving,
        childrensModel.stores.isActive,
    ])
    const [completed, setCompleted] = useState(false)
    const isDone = completed ?? false

    useEffect(() => {
        pageMounted()
    }, [])

    if (loading)
        return (
            <BaseApplicationWrapper isDone={isDone}>
                <FormBlockWrapper noHeader>
                    <Flex w="100%" jc="center" ai="center">
                        <Loading />
                    </Flex>
                </FormBlockWrapper>
            </BaseApplicationWrapper>
        )

    return (
        <BaseApplicationWrapper isDone={isDone}>
            <FormBlockWrapper noHeader>
                <Title size={3} align="left">
                    Состав семьи
                </Title>
                <Message type="info" title={'Как заполнить'} icon={<FiInfo />}>
                    Укажите ваших детей и внуков в возрасте от 2 до 14 лет
                </Message>
                {[...childrens]?.map((child) => (
                    <ChildrenRow key={child.id} id={child.id} fio={child.fio} birthdate={child.birthdate} />
                ))}
                <Button
                    icon={<FiPlusCircle />}
                    text="Добавить"
                    onClick={() => addChildren()}
                    background="transparent"
                />
                <SubmitButton
                    text={!isDone ? 'Отправить' : 'Отправлено'}
                    action={() => {
                        saveChildrens()
                    }}
                    isLoading={saving}
                    completed={completed}
                    setCompleted={setCompleted}
                    repeatable={false}
                    buttonSuccessText="Отправлено"
                    isDone={isDone}
                    isActive={isActive}
                    popUpFailureMessage="Для отправки формы необходимо, чтобы все поля были заполнены"
                    popUpSuccessMessage="Данные формы успешно отправлены"
                />
            </FormBlockWrapper>
        </BaseApplicationWrapper>
    )
}

const ChildrenRow = ({ id, fio, birthdate }: { id: string; fio: string; birthdate: string }) => {
    const [loading, deleteChildren, editChildren] = useUnit([
        childrensModel.stores.saving,
        childrensModel.events.deleteChildren,
        childrensModel.events.editChildren,
    ])

    const editable = !isNumber(id)
    return (
        <Row>
            <Input
                placeholder="ФИО"
                value={fio}
                setValue={(val) => {
                    editChildren({ id, data: { fio: val, birthdate } })
                }}
                required
                isActive={editable}
            />
            <Input
                type="date"
                placeholder="Дата рождения"
                value={birthdate}
                setValue={(val) => {
                    editChildren({ id, data: { fio, birthdate: val } })
                }}
                required
                width="30%"
                minWidth="150px"
                isActive={editable}
            />
            <Button
                icon={<FiMinusCircle />}
                textColor={Colors.red.main}
                onClick={() => deleteChildren({ id })}
                background="transparent"
                isActive={!loading}
            />
        </Row>
    )
}

const Row = styled.div`
    display: flex;
    align-items: flex-end;
    column-gap: 5px;
`

export default Children
