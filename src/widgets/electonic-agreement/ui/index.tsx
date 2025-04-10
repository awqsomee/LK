import React from 'react'
import { FiCheck, FiDownload } from 'react-icons/fi'

import styled from 'styled-components'

import { electronicInteractionModel } from '@entities/electronic-interaction'

import { ElectronicInteractionTemplate } from '@shared/api/model'
import { Colors } from '@shared/consts'
import localizeDate from '@shared/lib/dates/localize-date'
import { Button, Divider, LinkButton, SubmitButton } from '@shared/ui/atoms'
import Flex from '@shared/ui/flex'
import { Message } from '@shared/ui/message'
import { useModal } from '@shared/ui/modal'
import Subtext from '@shared/ui/subtext'

import { MistakeModal } from './atoms'

export const ElectornicAgreementStyled = styled.div`
    .info-text {
        margin: 16px 0;
        line-height: 1.7rem;
    }

    b {
        font-weight: 600;
    }
`

interface Props {
    children: React.ReactChild
    handleSubmit: () => void
    data: ElectronicInteractionTemplate | null
    done: boolean
    completed: boolean
    loading: boolean
}

const ElectornicAgreement = ({ children, handleSubmit, data, done, completed, loading }: Props) => {
    const { open } = useModal()

    const setCompleted = electronicInteractionModel.events.changeCompleted

    if (!data) return null

    return (
        <ElectornicAgreementStyled>
            <Flex gap="8px">
                {data?.file && (
                    <LinkButton
                        href={data.file}
                        onClick={() => null}
                        text="Скачать согласие"
                        width="100%"
                        minHeight="38px"
                        height="38px"
                        icon={<FiDownload />}
                    />
                )}
                <Message
                    type={'success'}
                    icon={<FiCheck />}
                    title={'Успешно подписано'}
                    visible={data.status || done}
                    align="center"
                />
            </Flex>
            <div className="info-text">{children}</div>
            {!data.status && !done && (
                <SubmitButton
                    text={!data.status && !done ? 'Подписать' : 'Подписано'}
                    action={handleSubmit}
                    isLoading={loading}
                    completed={completed}
                    isDone={done || data.status}
                    setCompleted={setCompleted}
                    isActive={!data.status && !done}
                    popUpFailureMessage="Согласие уже подписано"
                    popUpSuccessMessage="Согласие успешно подписано"
                />
            )}
            {(data.status || done) && (
                <>
                    <Divider margin="16px 0" width="100%" />
                    <Subtext fontSize="0.9rem" lineHeight="1.4rem">
                        Дата подписания: {localizeDate(data.date || new Date())},{' '}
                        {data.time || `${new Date().getHours()}:${new Date().getMinutes()}`}
                        <br />
                        {data.fio}
                    </Subtext>
                </>
            )}
            {!data.status && !done && (
                <Flex jc="center">
                    <Button
                        onClick={() => open(<MistakeModal />, 'Ошибка в данных')}
                        text="Заметили ошибку в личных данных?"
                        background="transparent"
                        textColor={Colors.grey.main}
                    />
                </Flex>
            )}
        </ElectornicAgreementStyled>
    )
}

export default ElectornicAgreement
