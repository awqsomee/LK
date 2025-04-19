import React, { useEffect } from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'

import { useStoreMap, useUnit } from 'effector-react'

import { taxCertificateModel } from '@entities/payments'

import { TAX_CERT_REQUEST_ROUTE_PREFIX } from '@shared/routing'
import { Error, Loading, Title, Wrapper } from '@shared/ui/atoms'
import KeyValue from '@shared/ui/atoms/key-value'
import Flex from '@shared/ui/flex'
import useCurrentDevice from '@shared/ui/hooks/use-current-device'
import { useModal } from '@shared/ui/modal'
import PageBlock from '@shared/ui/page-block'
import Table from '@shared/ui/table'
import { ColumnProps } from '@shared/ui/table/types'

import { Docs, File } from './docs'

const TaxCertificatePage = () => {
    const { close } = useModal()
    const { id } = useParams<{ id: string }>()
    const { isTablet } = useCurrentDevice()
    const [pageMounted, loading] = useUnit([taxCertificateModel.pageMounted, taxCertificateModel.certificatesLoading])
    const certificate = useStoreMap(taxCertificateModel.certificates, (certificates) =>
        certificates?.find((certificate) => certificate.id === id),
    )
    useEffect(() => {
        pageMounted()
    }, [id])
    if (loading)
        return (
            <Flex h="100%" d="column" ai="center" jc="center">
                <Loading />
            </Flex>
        )
    if (!certificate)
        return (
            <Flex h="100%" d="column" ai="center" jc="center">
                <Error text="Справка не найдена"></Error>
            </Flex>
        )

    const getExtendedPaymentColumns = (): ColumnProps[] => [
        ...paymentColumns,
        {
            field: '',
            title: '',
            render: (_, data) => (
                <Link to={`${TAX_CERT_REQUEST_ROUTE_PREFIX}/${id}/${data.paymentGuid}`} onClick={close}>
                    Изменить плательщика
                </Link>
            ),
        },
    ]
    return (
        <Wrapper data={true} load={() => {}} error={null}>
            <PageBlock>
                <Flex d="column" gap="2rem" ai="flex-start">
                    <Docs>
                        <File link={certificate.cert_file_stamp} title="Печатная форма Справки в ФНС" />
                        <File link={certificate.cert_file_sign} title="Электронная подпись" />
                    </Docs>
                    <Flex d="column" ai="flex-start">
                        <KeyValue keyStr="Дата справки" value={certificate.cert_date} />
                        <KeyValue keyStr="Год" value={certificate.year} />
                        <KeyValue keyStr="Очная форма" value={certificate.is_full_time ? 'Да' : 'Нет'} />
                        <KeyValue keyStr="Плательщик" value={certificate.payer} />
                        <KeyValue keyStr="Номер справки" value={certificate.number} />
                        <KeyValue keyStr="Номер корректировки" value={certificate.correction} />
                        <KeyValue keyStr="Подписант" value={certificate.signatory} />
                    </Flex>
                    <Flex gap="2rem" d={isTablet ? 'column' : 'row'} ai="flex-start">
                        <Flex d="column" gap="0.5rem" jc="space-between" h="100%">
                            <Title size={4} align="left" bottomGap={isTablet ? '0' : '1lh'}>
                                Список договоров к справке
                            </Title>
                            <Table
                                loading={loading}
                                innerPadding="0.33rem"
                                fontSize="0.75rem"
                                columns={[
                                    {
                                        title: 'Номер договора',
                                        field: 'contractNumber',
                                    },
                                    {
                                        title: 'Дата договора',
                                        field: 'contractDate',
                                    },
                                ]}
                                data={certificate.contracts}
                            />
                        </Flex>
                        <Flex d="column" gap="0.5rem">
                            <Title size={4} align="left">
                                Список оплат с редакциями к договору к справке (договор, доп.соглашение)
                            </Title>
                            <Table
                                loading={loading}
                                innerPadding="0.33rem"
                                fontSize="0.75rem"
                                columns={paymentColumns}
                                columnsExtended={getExtendedPaymentColumns()}
                                data={certificate.payments}
                            />
                        </Flex>
                    </Flex>
                </Flex>
            </PageBlock>
        </Wrapper>
    )
}

const paymentColumns: ColumnProps[] = [
    {
        title: 'Дата оплаты',
        field: 'paymentDate',
    },
    {
        title: 'Сумма оплаты',
        field: 'summ',
    },
    {
        title: 'Тип редакции',
        field: 'versionType',
    },
    {
        title: 'Дата редакции',
        field: 'versionDate',
    },
    {
        title: 'Плательщик',
        field: 'payer',
        render: (val) => val || '-',
    },
]

export default TaxCertificatePage
