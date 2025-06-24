import React, { useEffect, useState } from 'react'
import { FiPlus } from 'react-icons/fi'
import { useHistory } from 'react-router'

import { useStoreMap, useUnit } from 'effector-react'
import styled from 'styled-components'

import { taxCertificateModel } from '@entities/payments'

import { TAX_CERTIFICATES_ROUTE } from '@shared/routing'
import { Wrapper } from '@shared/ui/atoms'
import { Button } from '@shared/ui/button'
import { confirmModel } from '@shared/ui/confirm'
import Flex from '@shared/ui/flex'
import PageBlock from '@shared/ui/page-block'
import Select, { SelectPage } from '@shared/ui/select'
import Table from '@shared/ui/table'
import { Title } from '@shared/ui/title'

const currentYear = new Date().getFullYear()
function getYears(): SelectPage[] {
    const startYear = 2006
    return Array.from({ length: currentYear - startYear }, (_, index) => ({
        id: index,
        title: (currentYear - index).toString(),
    }))
}
const years = getYears()
const TaxCertificate = () => {
    const history = useHistory()
    const [selected, setSelected] = useState<SelectPage | null>(years[0])
    const [pageMounted, loading] = useUnit([taxCertificateModel.pageMounted, taxCertificateModel.certificatesLoading])
    const [presentYears, certificatedRequested, certCreating] = useUnit([
        taxCertificateModel.presentYears,
        taxCertificateModel.certificatedRequested,
        taxCertificateModel.createCertificateLoading,
    ])

    const certificates = useStoreMap(taxCertificateModel.certificates, (certificates) =>
        certificates ? [...certificates].reverse() : null,
    )

    useEffect(() => {
        pageMounted()
    }, [])

    return (
        <Wrapper data={true} load={() => {}} error={null}>
            <PageBlock>
                <Flex d="column" gap="2rem" p="1rem 0 0 0" ai="flex-start">
                    <Flex d="column" gap="0.5rem">
                        <Title size={3} align="left">
                            Заказать справку в ФНС
                        </Title>
                        <Flex gap="1rem" jc="space-between" ai="flex-end">
                            <Select
                                title="Год"
                                items={years}
                                selected={selected}
                                setSelected={setSelected}
                                isActive={years.length > 1}
                                required
                                width="10rem"
                                placeholder="Выберите год"
                            />
                            <Button
                                text="Заказать"
                                background="var(--reallyBlue)"
                                textColor="#fff"
                                icon={<FiPlus />}
                                disabled={!selected}
                                loading={certCreating}
                                onClick={() => {
                                    if (!selected) return
                                    if (presentYears.has(selected.title)) {
                                        confirmModel.events.evokeConfirm({
                                            message: (
                                                <Flex d="column" gap="0.5rem" ai="flex-start">
                                                    <Title align="left" size={4}>
                                                        Справка за выбранный год уже сформирована.
                                                    </Title>
                                                    <P>
                                                        Если вы уверены, что есть причина для формирования справки с
                                                        корректировкой, например: изменились состав оплат или личные
                                                        документы, тогда запрос на новую версию справки будет отправлен.
                                                    </P>
                                                    <P>Отправить?</P>
                                                </Flex>
                                            ),
                                            onConfirm: () => {
                                                certificatedRequested({ year: selected.title })
                                            },
                                        })
                                        return
                                    }
                                    certificatedRequested({ year: selected.title })
                                }}
                            />
                        </Flex>
                    </Flex>
                    <Flex d="column" gap="0.5rem">
                        <Title size={3} align="left">
                            Справки в ФНС
                        </Title>
                        <Table
                            loading={loading}
                            innerPadding="0.5rem"
                            columns={[
                                {
                                    title: 'Дата справки',
                                    field: 'cert_date',
                                    priority: 'one',
                                },
                                {
                                    title: 'Номер справки',
                                    field: 'number',
                                    priority: 'four',
                                },
                                {
                                    title: 'Номер корректировки',
                                    field: 'correction',
                                    priority: 'two',
                                },
                                {
                                    title: 'Отчетный год',
                                    field: 'year',
                                    priority: 'one',
                                },
                                {
                                    title: 'Плательщик',
                                    field: 'payer',
                                    priority: 'four',
                                },
                                {
                                    title: 'Подписант',
                                    field: 'signatory',
                                    priority: 'four',
                                },
                                {
                                    title: 'Очная форма',
                                    field: 'is_full_time',
                                    priority: 'four',
                                },
                                {
                                    title: 'Сумма справки',
                                    field: 'summ',
                                    priority: 'three',
                                },
                            ]}
                            data={certificates}
                            onRowClick={(row) => history.push(TAX_CERTIFICATES_ROUTE + '/' + row.id)}
                        />
                    </Flex>
                </Flex>
            </PageBlock>
        </Wrapper>
    )
}

const P = styled.p`
    font-size: 1rem;
    line-height: 1.45rem;
`

export default TaxCertificate
