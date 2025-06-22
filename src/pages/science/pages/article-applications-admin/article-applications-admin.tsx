import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { format } from 'date-fns'
import { ru } from 'date-fns/locale'
import { useGate, useStoreMap, useUnit } from 'effector-react'

import { ArticleApplicationStatuses } from '@shared/api/science'
import { Colors } from '@shared/consts'
import { ARTICLE } from '@shared/routing'
import { Button, CenterPage, Error, Loading, TextArea, Title } from '@shared/ui/atoms'
import Flex from '@shared/ui/flex'
import { useModal } from '@shared/ui/modal'
import PageBlock from '@shared/ui/page-block'
import Subtext from '@shared/ui/subtext'

import * as model from './model'

const ArticleApplicationsAdmin = () => {
    useGate(model.ArticleApplicationsAdminGate)

    const articleApplications = useStoreMap(model.$articleApplications, (articleApplications) =>
        articleApplications.map((articleApplication) => ({
            ...articleApplication,
            status: ArticleApplicationStatuses[articleApplication.status],
        })),
    )

    const { open } = useModal()
    const [approve, applicationsLoading, pageLoading] = useUnit([
        model.approve,
        model.$applicationsLoading,
        model.pageLoading,
    ])

    return (
        <CenterPage padding="10px">
            <PageBlock>
                <Flex d="column" ai="flex-start" gap="1rem">
                    {pageLoading ? (
                        <Flex jc="center" style={{ minHeight: '200px' }}>
                            <Loading />
                        </Flex>
                    ) : articleApplications.length > 0 ? (
                        articleApplications.map((application) => (
                            <Flex
                                key={application.id}
                                d="column"
                                ai="flex-start"
                                gap="0.5rem"
                                brad="1rem"
                                style={{
                                    backgroundColor: 'var(--block-content)',
                                    border: '1px solid var(--blockBorder)',
                                }}
                                p="1rem"
                            >
                                <Link
                                    to={ARTICLE.replace(':id', application.articleId)}
                                    style={{
                                        color: 'var(--text)',
                                    }}
                                >
                                    <Title align="left" size={4}>
                                        {application.article.title}
                                    </Title>
                                </Link>
                                {/* <Message
                                width="fit-content"
                                type={
                                    application.status === 'Принято'
                                        ? 'success'
                                        : application.status === 'Отклонено'
                                          ? 'failure'
                                          : 'alert'
                                }
                                title={application.status || '—'}
                                align="center"
                                icon={null}
                            /> */}
                                <Subtext>
                                    Дата подачи:{' '}
                                    {format(new Date(application.createdAt), 'dd MMMM yyyy, HH:mm', { locale: ru })}
                                </Subtext>
                                <Flex>
                                    <Flex gap="0.25rem">
                                        <Button
                                            text="Отказать"
                                            loading={applicationsLoading.get(application.id) === 'declining'}
                                            textColor={Colors.red.main}
                                            hoverBackground={Colors.red.transparent3}
                                            background="transparent"
                                            onClick={() =>
                                                open(<DeclineModal applicationId={application.id} />, 'Отказать')
                                            }
                                            minWidth="120px"
                                        />
                                        <Button
                                            text="Подтвердить"
                                            textColor={Colors.green.main}
                                            background={Colors.green.transparent3}
                                            width="130px"
                                            onClick={() => approve({ id: application.id })}
                                            minWidth="120px"
                                        />
                                    </Flex>
                                </Flex>
                            </Flex>
                        ))
                    ) : (
                        <Error text="Нет заявок" />
                    )}
                </Flex>
            </PageBlock>
        </CenterPage>
    )
}

const DeclineModal = ({ applicationId }: { applicationId: string }) => {
    const { close } = useModal()
    const [value, setValue] = useState('')
    const [decline, applicationsLoading] = useUnit([model.decline, model.$applicationsLoading])

    return (
        <Flex d="column" gap="1rem" style={{ minWidth: '300px' }}>
            <Title align="left" size={5} style={{ marginBottom: '0.5rem' }}>
                Укажите причину
            </Title>
            <TextArea value={value} setValue={setValue} placeholder="Причина отказа" />
            <Flex gap="0.25rem">
                <Button text="Закрыть" textColor="var(--text)" onClick={close} width="100%" />
                <Button
                    text="Отказать"
                    loading={applicationsLoading.get(applicationId) === 'approving'}
                    background="var(--red)"
                    textColor="white"
                    onClick={() => {
                        decline({ id: applicationId, declineReason: value })
                        close()
                    }}
                    width="100%"
                    isActive={!!value}
                    notActiveClickMessage="Введите причину отказа"
                />
            </Flex>
        </Flex>
    )
}

export default ArticleApplicationsAdmin
