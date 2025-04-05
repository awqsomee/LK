import React, { useEffect, useState } from 'react'
import { FiInfo } from 'react-icons/fi'
import { Link } from 'react-router-dom'

import { format } from 'date-fns'
import { ru } from 'date-fns/locale'
import styled from 'styled-components'

import checkFormFields from '@features/send-form/check-form-fields'

import { superiorRoomModel } from '@entities/superior-room'

import { isProduction } from '@shared/consts'
import { DORMITORY, superiorRoomResultsDate } from '@shared/routing'
import { userModel } from '@shared/session'
import { Error, FormBlock, Message, SubmitButton, Wrapper } from '@shared/ui/atoms'
import InputArea from '@shared/ui/input-area'
import { IInputArea, IInputAreaData } from '@shared/ui/input-area/model'
import { SpecialFieldsNameConfig } from '@shared/ui/input-area/types'
import { SelectPage } from '@shared/ui/select'

import { getDorm } from './lib/get-dorm'
import getForm from './lib/get-form'
import { getStatusFormSuperiorRoom } from './lib/get-status'
import sendForm from './lib/send-form'

const ApplicationForSuperiorRoomWrapper = styled.div<{ isDone: boolean }>`
    display: flex;
    justify-content: center;
    width: 100%;
    height: ${({ isDone }) => isDone && '100%'};
    padding: 10px;
    color: var(--text);

    @media (max-width: 1000px) {
        padding: 0;
    }
`

type LoadedState = React.Dispatch<React.SetStateAction<IInputArea>>

const ApplicationForSuperiorRoom = () => {
    const [form, setForm] = useState<IInputArea | null>(null)
    const { data, error } = superiorRoomModel.selectors.useSuperiorRoom()
    const [dormId, setDormId] = useState<number>(0)
    const [completed, setCompleted] = useState(false)
    const [loading, setLoading] = useState(false)
    const [specialFieldsName, setSpecialFieldsName] = useState<SpecialFieldsNameConfig>({})

    const isDone = (completed || !data?.is_avaliable) ?? false

    const {
        data: { user },
    } = userModel.selectors.useUser()

    if (user?.educationForm !== 'Очная') {
        return <Error text={'Данный раздел недоступен для вашей формы обучения'} />
    }

    const statusForm = getStatusFormSuperiorRoom(user)
    if (isProduction && !!statusForm) {
        return <Error text={statusForm} />
    }

    useEffect(() => {
        if (!!data) {
            setForm(getForm(data, form))
        }
    }, [data, dormId])

    useEffect(() => {
        if (!!form) {
            setDormId(((form?.data[3] as IInputAreaData)?.value as SelectPage)?.id as number)
        }
    }, [(form?.data[3] as IInputAreaData)?.value])

    useEffect(() => {
        if (!!form) {
            setSpecialFieldsName(getDorm(form.data as IInputAreaData[]))
        }
    }, [form])

    return (
        <Wrapper load={() => superiorRoomModel.effects.getSuperiorRoomFx()} loading={!data} error={error} data={data}>
            <ApplicationForSuperiorRoomWrapper isDone={isDone}>
                {!!form && !!setForm && (
                    <FormBlock>
                        <InputArea
                            {...form}
                            collapsed={isDone}
                            setData={setForm as LoadedState}
                            specialFieldsNameConfig={specialFieldsName}
                        />
                        <Message title="Информация по заявке" type="info" icon={<FiInfo />} visible={isDone}>
                            <p>
                                Ваша заявка направлена на рассмотрение жилищной комиссии. С результатами распределения
                                мест и датой заселения можно будет ознакомиться{' '}
                                {format(new Date(superiorRoomResultsDate), 'd MMMM', { locale: ru })} в Личном кабинете
                                в разделе <Link to={DORMITORY}>«Список нуждающихся в общежитии»</Link>.
                            </p>
                        </Message>
                        <SubmitButton
                            text={data?.is_avaliable ? 'Отправить' : 'Отправлено'}
                            // Функция отправки здесь
                            action={() => sendForm(form, setLoading, setCompleted)}
                            isLoading={loading}
                            completed={completed}
                            // Здесь должен быть setCompleted, он нужен для анимации. В функции отправки формы после успешного завершения его нужно сделать true
                            setCompleted={setCompleted}
                            repeatable={false}
                            buttonSuccessText="Отправлено"
                            isDone={isDone}
                            isActive={checkFormFields(form) && (form.optionalCheckbox?.value ?? true)}
                            popUpFailureMessage={
                                isDone
                                    ? (data?.error_text ?? 'Форма отправлена')
                                    : 'Для отправки формы необходимо, чтобы все поля были заполнены'
                            }
                            popUpSuccessMessage="Данные формы успешно отправлены"
                        />
                    </FormBlock>
                )}
            </ApplicationForSuperiorRoomWrapper>
        </Wrapper>
    )
}

export default ApplicationForSuperiorRoom
