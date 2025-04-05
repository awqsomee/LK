import React, { useEffect, useState } from 'react'

import styled from 'styled-components'

import { Divider } from '@shared/ui/divider'
import { Error } from '@shared/ui/error'
import { Loading } from '@shared/ui/loading'
import Pagination from '@shared/ui/pagination'
import { TableCatalogType, TableProps } from '@shared/ui/table/types'

import { Row } from '../molecules'

const BodyWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;

    .page-indicator {
        width: 100px;
        background: var(--theme-1);
        padding: 3px;
        border-radius: var(--brLight);
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 0.9em;
        font-weight: 600;
    }
`

const LoadingWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 0;

    img {
        width: 35px;
        height: 35px;
    }
`

const PaginationWrapper = styled.div`
    padding: 10px 0;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Body = ({
    data,
    loading,
    columns,
    columnsExtended,
    maxOnPage,
    onRowClick,
    filter,
    selected,
    select,
    pagination,
    rowPadding,
}: TableProps & { filter: TableCatalogType }) => {
    const [currentPage, setCurrentPage] = useState<number>(0)
    const pages = pagination ? pagination.pages : Math.ceil((data?.length ?? 0) / (maxOnPage ?? 1)) - 1
    const result = pagination
        ? data
        : maxOnPage
          ? data?.slice(currentPage * maxOnPage, (currentPage + 1) * maxOnPage)
          : data

    useEffect(() => {
        setCurrentPage(0)
    }, [filter])

    return !loading ? (
        <BodyWrapper>
            {result?.map((el, i) => {
                return (
                    <Row
                        rowPadding={rowPadding}
                        onRowClick={onRowClick}
                        columns={columns}
                        columnsExtended={columnsExtended}
                        el={el}
                        key={i}
                        index={i}
                        selected={selected?.has(i)}
                        select={select}
                    />
                )
            })}
            {!result?.length && <Error text="Нет данных" />}
            {pages > 0 && <Divider margin="0" width="100%" />}
            <PaginationWrapper>
                <Pagination
                    pages={pages}
                    condition={!!maxOnPage && !!result?.length}
                    currentPage={currentPage}
                    setCurrentPage={(value) => {
                        setCurrentPage(value)
                        pagination?.setPage(value)
                    }}
                />
            </PaginationWrapper>
        </BodyWrapper>
    ) : (
        <LoadingWrapper>
            <Loading />
        </LoadingWrapper>
    )
}

export default Body
