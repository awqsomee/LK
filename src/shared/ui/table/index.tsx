import React from 'react'

import styled from 'styled-components'

import AddedElementsList from '@shared/ui/added-elements-list'

import { TutorialComponent } from '../types'
import useFilter from './lib/hooks/use-filter'
import { TableProps } from './types'
import { Body, Footer, Header, Search } from './ui'

const TableWrapper = styled.div`
    width: 100%;
    box-shadow: var(--block-shadow);
    border-radius: var(--brLight);
    color: var(--text);
    background: var(--block-content);
    overflow: hidden;
`

const Table = ({
    columns,
    columnsExtended,
    data,
    maxOnPage,
    onRowClick,
    footer,
    select,
    selected,
    loading = false,
    forwardedRef,
    pagination,
    innerPadding,
    fontSize,
    dimmedHeaders,
    fw,
}: TableProps & TutorialComponent) => {
    const {
        sort,
        setSort,
        search,
        setSearch,
        resultData,
        filter,
        setFilter,
        filterList,
        setFilterList,
        onRemoveOne,
        onRemoveAll,
    } = useFilter(data)

    return (
        <TableWrapper ref={forwardedRef}>
            <AddedElementsList
                hideWithEmpty
                setList={setFilterList}
                padding="0 10px"
                list={filterList}
                onRemoveOne={onRemoveOne}
                onRemoveAll={onRemoveAll}
            />
            <Search search={search} setSearch={setSearch} />
            <Header
                padding={innerPadding}
                sort={sort}
                setSort={setSort}
                columns={columns}
                search={search}
                setSearch={setSearch}
                filter={filter}
                setFilter={setFilter}
                tableHasSelect={Boolean(select)}
                fontSize={fontSize}
                dimmedHeaders={dimmedHeaders}
                fw={fw}
            />
            <Body
                innerPadding={innerPadding}
                loading={loading}
                onRowClick={onRowClick}
                filter={filter}
                columns={columns}
                columnsExtended={columnsExtended}
                data={resultData}
                maxOnPage={maxOnPage}
                select={select}
                selected={selected}
                pagination={pagination}
            />
            <Footer footer={footer} data={data} columns={columns} />
        </TableWrapper>
    )
}

export default Table
