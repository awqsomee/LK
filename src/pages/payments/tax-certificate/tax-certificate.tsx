import React, { useEffect } from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'

import { format } from 'date-fns'
import { ru } from 'date-fns/locale'
import { useStoreMap, useUnit } from 'effector-react'

import { taxCertificateModel } from '@entities/payments'

import { TAX_CERT_REQUEST_ROUTE_PREFIX } from '@shared/routing'
import { Error, Loading, Title, Wrapper } from '@shared/ui/atoms'
import KeyValue from '@shared/ui/atoms/key-value'
import Flex from '@shared/ui/flex'
import { Grid } from '@shared/ui/grid'
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
            field: '0',
            title: '',
            render: (val, data) => {
                if (data.requestDate)
                    return (
                        <Flex d="column" ai="flex-start">
                            <Grid columns="1fr 1fr" rows="1fr 1fr" columnGap="0.5rem">
                                <p>Новый плательщик:</p>
                                <p>{data.requestFIO}</p>
                                <p>Дата заявления:</p>
                                <p>{format(new Date(data.requestDate), 'dd MMMM yyyy, HH:mm', { locale: ru })}</p>
                            </Grid>
                        </Flex>
                    )
                return null
            },
        },
        {
            field: '1',
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
                        <Flex d="column" gap="0.5rem" jc="space-between" h="100%" style={{ overflow: 'hidden' }}>
                            <Title size={4} align="left" bottomGap={isTablet ? '0' : '1lh'}>
                                Список договоров к справке
                            </Title>
                            <Table
                                loading={loading}
                                rowPadding="0.33rem"
                                headerPadding="0.33rem"
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
                        <Flex d="column" gap="0.5rem" style={{ overflow: 'hidden' }}>
                            <Title size={4} align="left">
                                Список оплат с редакциями к договору к справке (договор, доп.соглашение)
                            </Title>
                            <Table
                                loading={loading}
                                rowPadding="0.33rem"
                                headerPadding="0.33rem"
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
        render: (val, data) => {
            if (data.requestDate) return 'Отправлено заявление на изменение'
            return val || '-'
        },
    },
]

export default TaxCertificatePage
