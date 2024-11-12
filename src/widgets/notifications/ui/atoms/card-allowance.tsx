import { Info } from '@pages/profile/ui/top/styles'
import { PersonalAllowance } from '@shared/api/model/notification'
import React from 'react'
import Subtext from '@shared/ui/subtext'
import localizeDate from '@shared/lib/dates/localize-date'
import styled from 'styled-components'
import { Button, Title } from '@shared/ui/atoms'
import { Colors, ThemeVariant } from '@shared/constants'
import { allowancesModel } from '@entities/allowances'
import { useUnit } from 'effector-react'
import { approvalStatus, orderStatus } from '@entities/allowances/consts'
import getCorrectWordForm, { Rules } from '@shared/lib/get-correct-word-form'
import { userSettingsModel } from '@entities/settings'

const RULES: Rules = {
    fiveToNine: 'дней',
    one: 'день',
    twoToFour: 'дня',
    zero: 'дней',
}

export const CardAllowance = ({ allowance }: { allowance: PersonalAllowance }) => {
    const changeStatus = useUnit(allowancesModel.events.allowanceStatusChanged)
    const settings = useUnit(userSettingsModel.stores.userSettings)
    if (!allowance) return null
    return (
        <CardWrapper>
            <Info>
                <Title align="left" size={3}>
                    {allowance.paymentIdentifier}, {allowance.position}
                </Title>
                {!!allowance.toConfirmDaysLeft && (
                    <Subtext fontSize="1em" color="var(--redMain)">
                        Осталось {allowance.toConfirmDaysLeft} {getCorrectWordForm(allowance.toConfirmDaysLeft, RULES)}
                    </Subtext>
                )}
                {allowance.orderStatus && allowance.selfApprovalStatus === 'Approved' && (
                    <Title align="left" size={4}>
                        {orderStatus[allowance.orderStatus]} {allowance.orderTitle && `(${allowance.orderTitle})`}
                    </Title>
                )}
                {allowance.selfApprovalStatus === 'Approved' && (
                    <Subtext fontSize="1em" color="var(--greenMain)">
                        {approvalStatus[allowance.selfApprovalStatus]}
                    </Subtext>
                )}
                {(allowance.selfApprovalStatus === 'Declined' || allowance.selfApprovalStatus === 'Expired') && (
                    <Subtext fontSize="1em" color="var(--redMain)">
                        {approvalStatus[allowance.selfApprovalStatus]}
                    </Subtext>
                )}
                <Title align="left" size={5}>
                    Инициатор: {allowance.initiatorName}
                </Title>
                <Title align="left" size={5}>
                    Источник: {allowance.sourceOfFunding}
                </Title>
                <Title align="left" size={5}>
                    Сумма: {allowance.sum} руб.
                </Title>
                <Subtext>
                    Период: {localizeDate(allowance.startDate, 'numeric')} -{' '}
                    {localizeDate(allowance.endDate, 'numeric')}{' '}
                </Subtext>
                <Subtext>Дата: {localizeDate(allowance.issueDate, 'numeric')}</Subtext>
            </Info>
            {(allowance.selfApprovalStatus === 'Unknown' || allowance.selfApprovalStatus === 'InProgress') && (
                <>
                    <BlockButtons>
                        <Button
                            text="Отказаться"
                            onClick={() =>
                                changeStatus({
                                    allowanceId: allowance.allowanceId,
                                    isConfirmed: false,
                                })
                            }
                            background={Colors.red.main}
                            textColor="white"
                            height="35px"
                            width="100%"
                            isActive={true}
                        />
                        <Button
                            text="Согласиться"
                            onClick={() =>
                                changeStatus({
                                    allowanceId: allowance.allowanceId,
                                    isConfirmed: true,
                                })
                            }
                            background={Colors.green.main}
                            textColor="white"
                            height="35px"
                            width="100%"
                            isActive={true}
                        />
                    </BlockButtons>
                    <WarningBlock isLightTheme={settings?.appearance.theme === ThemeVariant.Light}>
                        <Subtext>Подтвердите надбавку в течение 1 рабочего дня</Subtext>
                    </WarningBlock>
                </>
            )}
        </CardWrapper>
    )
}

const CardWrapper = styled.div`
    position: relative;
    width: 100%;
    padding: 20px;
    border-radius: var(--brLight);
    background: var(--block-content);
    box-shadow: var(--block-shadow);
    min-height: 70px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    overflow: hidden;
`
const BlockButtons = styled.div`
    display: flex;
    gap: 8px;
    margin: 0.5rem 0;
    width: 300px;

    @media (max-width: 768px) {
        max-width: 100%;
        width: 100%;
    }

    @media (max-width: 380px) {
        margin: 1.5rem 0;
    }
`

const WarningBlock = styled.div<{
    isLightTheme: boolean
}>`
    position: absolute;
    bottom: 0;
    background-color: ${Colors.orange.transparent3};
    width: 100%;
    color: ${({ isLightTheme }) => (isLightTheme ? Colors.orange.dark3 : Colors.orange.light3)};
    left: 0;
    text-align: center;
`
