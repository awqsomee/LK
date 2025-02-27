import React from 'react'
import { FiCheck, FiInfo } from 'react-icons/fi'
import { Link } from 'react-router-dom'

import { useUnit } from 'effector-react'
import styled from 'styled-components'

import PaymentButton from '@features/payment-button'
import Debt from '@features/payments/debt'

import { paymentsModel } from '@entities/payments'

import { Payments, PaymentsContract } from '@shared/api/model'
import { PAYMENTS_ROUTE } from '@shared/routing'
import { Button } from '@shared/ui/button'
import { MEDIA_QUERIES } from '@shared/ui/consts'
import { Error } from '@shared/ui/error'
import { Message } from '@shared/ui/message'
import { SkeletonShape } from '@shared/ui/skeleton-shape'
import Subtext from '@shared/ui/subtext'
import { TutorialComponent } from '@shared/ui/types'

const PaymentsWidgetWrapper = styled.div<{ fullWidth?: boolean }>`
    max-width: ${({ fullWidth }) => (fullWidth ? '100%' : '400px')};
    min-width: calc(100% / 3);
    width: 100%;
    height: 156px;
    background: var(--theme-2);
    border-radius: 15px;
    padding: 6px;
    display: flex;
    align-items: center;
    gap: 6px;

    .payment-info {
        width: 100%;
        height: 100%;
        background: var(--block);
        border-radius: 11px;
        padding: 10px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        position: relative;

        .top-info {
            a {
                position: absolute;
                top: 6px;
                right: 6px;
            }
        }
    }

    ${MEDIA_QUERIES.isMobile} {
        width: 100%;
        min-width: 100%;
        max-width: 100%;
    }
`

const SkeletonLoading = () => {
    return (
        <PaymentsWidgetWrapper>
            <div className="payment-info education">
                <div>
                    <SkeletonShape
                        shape={'rect'}
                        size={{
                            width: '100px',
                            height: '10px',
                        }}
                        margin="0 0 6px 0"
                    />
                    <SkeletonShape
                        shape={'rect'}
                        size={{
                            width: '150px',
                            height: '25px',
                        }}
                        margin="0"
                    />
                </div>
                <SkeletonShape
                    shape={'rect'}
                    size={{
                        width: '100%',
                        height: '35px',
                    }}
                    margin="0"
                />
            </div>
        </PaymentsWidgetWrapper>
    )
}

const ErrorMessage = () => {
    return (
        <PaymentsWidgetWrapper>
            <Error text={'Ошибка '} size="70px" />
        </PaymentsWidgetWrapper>
    )
}

const TopMessage = ({
    data,
    debt,
    overpayment,
    section,
}: {
    data: Payments['dormitory'] | Payments['education']
    debt: number
    overpayment: number
    section: 'Обучение' | 'Общежитие'
}) => {
    if (!data.length) return null

    const { qr_current, qr_total } = data[0]

    return (
        <div className="payment-info">
            <div className="top-info">
                <Subtext>{section}</Subtext>
                <Debt size="middle" debt={debt || overpayment} />
                {!!debt && !!overpayment && <Debt debt={overpayment} size="small"></Debt>}
                <Link to={PAYMENTS_ROUTE}>
                    <Button icon={<FiInfo />} background="transparent" />
                </Link>
            </div>
            {debt > 0 && <PaymentButton qr_current={qr_current} qr_total={qr_total} />}
            {debt <= 0 && <Message type="success" title={'Оплачено'} width="100%" align="center" icon={<FiCheck />} />}
        </div>
    )
}

const countPayment = (contracts: PaymentsContract[]) => {
    let debt = 0
    let overpayment = 0

    contracts.forEach((contract) => {
        const balance = Number(contract.balance_currdate)
        if (balance > 0) {
            debt += balance
        }
        if (balance < 0) {
            overpayment += balance
        }
    })

    return { debt, overpayment }
}

const PaymentsWidget = ({ forwardedRef, fullWidth }: { fullWidth?: boolean } & TutorialComponent) => {
    const [
        payments,
        contractsWithDebtDorm,
        contractsWithoutDebtDorm,
        contractsWithDebtEdu,
        contractsWithoutDebtEdu,
        error,
    ] = useUnit([
        paymentsModel.stores.$paymentsStore,
        paymentsModel.stores.contractsWithDebtDorm,
        paymentsModel.stores.contractsWithoutDebtDorm,
        paymentsModel.stores.contractsWithDebtEdu,
        paymentsModel.stores.contractsWithoutDebtEdu,
        paymentsModel.stores.$error,
    ])

    if (error) return <ErrorMessage />

    if (!payments) return <SkeletonLoading />

    if (!!payments && !payments.dormitory.length && !payments.education.length) return null
    const dormPayment = countPayment(payments?.dormitory)
    const eduPayment = countPayment(payments?.education)

    return (
        <PaymentsWidgetWrapper ref={forwardedRef} fullWidth={fullWidth}>
            <TopMessage
                data={[...contractsWithDebtDorm, ...contractsWithoutDebtDorm]}
                debt={dormPayment.debt}
                overpayment={dormPayment.overpayment}
                section={'Общежитие'}
            />
            <TopMessage
                data={[...contractsWithDebtEdu, ...contractsWithoutDebtEdu]}
                debt={eduPayment.debt}
                overpayment={eduPayment.overpayment}
                section={'Обучение'}
            />
        </PaymentsWidgetWrapper>
    )
}

export default PaymentsWidget
