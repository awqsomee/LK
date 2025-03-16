import React, { useEffect, useRef } from 'react'
import { AutoSizer } from 'react-virtualized/dist/es/AutoSizer'
import { InfiniteLoader } from 'react-virtualized/dist/es/InfiniteLoader'
import { List, ListRowProps } from 'react-virtualized/dist/es/List'

import { useUnit } from 'effector-react'
import styled from 'styled-components'

import { scienceModel } from '@entities/science'
import { TABLE_SIZE } from '@entities/science/model/consts'

import { IndexedProperties } from '@shared/consts/models/indexed-properties'
import Accordion from '@shared/ui/accordion/accordion'
import { Button, Error } from '@shared/ui/atoms'
import Checkbox from '@shared/ui/checkbox'
import Flex from '@shared/ui/flex'
import Input from '@shared/ui/input'
import Subtext from '@shared/ui/subtext'
import { ColumnProps } from '@shared/ui/table/types'
import { Row } from '@shared/ui/table/ui'

import { Header } from './ui/header'

export const ScienceTable = ({
    columns,
    onRowClick,
}: {
    columns: ColumnProps[]
    onRowClick?: (obj: IndexedProperties) => void
}) => {
    const [select, selected, articles, totalCount, fetchArticles, tableOpened] = useUnit([
        scienceModel.events.selectArticle,
        scienceModel.stores.selectedArticles,
        scienceModel.stores.articles,
        scienceModel.stores.totalCount,
        scienceModel.events.fetchArticles,
        scienceModel.events.tableOpened,
    ])

    useEffect(() => {
        tableOpened()
    }, [])

    function isRowLoaded({ index }: { index: number }) {
        return index < articles.length
    }

    const rowRenderer = ({ index, key, style }: ListRowProps) => {
        return (
            <div style={style} key={key}>
                {articles[index] ? (
                    <Row
                        onRowClick={onRowClick}
                        rowPadding="10px"
                        columns={columns}
                        el={articles[index]}
                        index={index}
                        selected={selected?.has(index)}
                        select={select}
                        height="100px"
                    />
                ) : (
                    <Flex h="100px" p="0.5rem 1rem" jc="flex-start" ai="center">
                        Загрузка...
                    </Flex>
                )}
            </div>
        )
    }

    const scrollRef = useRef<List | null>(null)
    useEffect(() => {
        if (articles.length === 0) scrollRef.current?.scrollToPosition(0)
    }, [articles])

    return (
        <Wrapper d="column" jc="flex-start" ai="flex-start" position="relative" h="100%" w="100%">
            <SearchBar />
            <Header columns={columns} padding="10px" tableHasSelect />
            {!totalCount ? (
                <Error text="Нет данных" />
            ) : (
                <Container>
                    <InfiniteLoader
                        minimumBatchSize={TABLE_SIZE}
                        isRowLoaded={isRowLoaded}
                        loadMoreRows={async ({ startIndex, stopIndex }) => {
                            fetchArticles({ startIndex, stopIndex })
                        }}
                        rowCount={totalCount}
                    >
                        {({ onRowsRendered, registerChild }) => (
                            <AutoSizer>
                                {({ height, width }) => (
                                    <List
                                        ref={(list) => {
                                            scrollRef.current = list
                                            registerChild(list) // Register with InfiniteLoader
                                        }}
                                        onRowsRendered={onRowsRendered}
                                        height={height}
                                        rowCount={totalCount}
                                        rowHeight={100}
                                        rowRenderer={rowRenderer}
                                        width={width}
                                    />
                                )}
                            </AutoSizer>
                        )}
                    </InfiniteLoader>
                </Container>
            )}
        </Wrapper>
    )
}

const SearchBar = () => {
    const [
        articleTitle,
        publicationYear,
        publisher,
        quotesCount,
        isScopusCheck,
        isWoSCheck,
        setArticleTitle,
        setPublicationYear,
        setPublisher,
        setQuotesCount,
        setIsScopusCheck,
        setIsWoSCheck,

        areFiltersApplied,
        filtersApplied,
        filtersReset,
    ] = useUnit([
        scienceModel.stores.articleTitle,
        scienceModel.stores.publicationYear,
        scienceModel.stores.publisher,
        scienceModel.stores.quotesCount,
        scienceModel.stores.isScopusCheck,
        scienceModel.stores.isWoSCheck,
        scienceModel.events.setArticleTitle,
        scienceModel.events.setPublicationYear,
        scienceModel.events.setPublisher,
        scienceModel.events.setQuotesCount,
        scienceModel.events.setIsScopusCheck,
        scienceModel.events.setIsWoSCheck,

        scienceModel.stores.filtersApplied,
        scienceModel.events.filtersApplied,
        scienceModel.events.filtersReset,
    ])
    return (
        <Flex ai="center" jc="space-between" gap="1rem" p="0.5rem 10px">
            <Accordion title="Поиск" height={areFiltersApplied ? 120 : 80} noIcon>
                <Flex ai="flex-end" jc="space-between" gap="1rem" p="0 0.25rem">
                    <Input value={articleTitle} setValue={setArticleTitle} placeholder="Название" title="Название" />
                    <Input value={publicationYear} setValue={setPublicationYear} placeholder="Год" title="Год" />
                    <Input value={publisher} setValue={setPublisher} placeholder="Издательство" title="Издательство" />
                    <Input
                        value={quotesCount}
                        setValue={setQuotesCount}
                        placeholder="Количество цитат"
                        title="Количество цитат"
                    />
                    <Checkbox checked={isScopusCheck} setChecked={setIsScopusCheck} text="Scopus" />
                    <Checkbox checked={isWoSCheck} setChecked={setIsWoSCheck} text="WoS" />
                    <Button text="Найти" onClick={() => filtersApplied()} />
                </Flex>
                {areFiltersApplied && (
                    <Subtext align="right" padding="0 0.25rem" onClick={() => filtersReset()}>
                        Сбросить фильтры
                    </Subtext>
                )}
            </Accordion>
        </Flex>
    )
}

const Wrapper = styled(Flex)`
    width: 100%;
    box-shadow: var(--block-shadow);
    border-radius: var(--brLight);
    color: var(--text);
    background: var(--block-content);
    overflow: hidden;
`

const Container = styled.div`
    height: 100%;
    width: 100%;
`
