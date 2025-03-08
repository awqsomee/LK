import React, { memo } from 'react'
import { FaSort } from 'react-icons/fa'
import { FiSearch } from 'react-icons/fi'

import styled from 'styled-components'

import Select, { SelectPage } from '@shared/ui/select'
import sortPopUp from '@shared/ui/table/lib/sort-pop-up'
import { ColumnProps, TableCatalogType, TableHeaderProps, TableSearchType, TableSortType } from '@shared/ui/table/types'

import { Column, HeaderWrapper } from '../atoms'

type Props = {
    sort: TableSortType
    setSort: React.Dispatch<React.SetStateAction<TableSortType>>
    columns: ColumnProps[]
    search: TableSearchType
    filter: TableCatalogType
    setFilter: React.Dispatch<React.SetStateAction<TableCatalogType>>
    setSearch: React.Dispatch<React.SetStateAction<TableSearchType>>
    tableHasSelect?: boolean
    padding?: string
    fontSize?: string
} & TableHeaderProps

const FilterWrapper = styled.div`
    display: flex;
    align-items: center;
`

const Header = ({
    columns,
    search,
    setSearch,
    filter,
    setFilter,
    sort,
    setSort,
    tableHasSelect,
    padding,
    fontSize,
    dimmedHeaders,
    fw,
}: Props) => {
    const columnClick = (column: ColumnProps) => {
        return () => {
            if (column.search) {
                setSearch({ value: '', column })
            }

            if (column.sort) {
                setSort((prev) => {
                    const result = !prev?.value ? 'desc' : prev.value === 'desc' ? 'asc' : null
                    sortPopUp(result)
                    return !result ? null : { column, value: result }
                })
            }
        }
    }

    return (
        <HeaderWrapper>
            {tableHasSelect && <Column width="36px" align="center" className={'one'}></Column>}
            {columns.map((column) => {
                return (
                    <Column
                        padding={padding}
                        overflow={!!column.catalogs ? 'visible' : 'hidden'}
                        width={column.width}
                        title={column.title}
                        clickable={column.search}
                        align={column.search ? 'space-between' : column.align}
                        key={column.field}
                        showFull={column.showFull}
                        className={column.priority?.toString() ?? 'one'}
                        onClick={columnClick(column)}
                        fontSize={fontSize}
                        dimmedHeaders={dimmedHeaders}
                        fw={fw}
                    >
                        {!column.catalogs && column.title}
                        {!column.catalogs && !column.sort && column.search && (
                            <FiSearch
                                className="icon"
                                style={{
                                    color: column.field === search?.column?.field ? 'var(--reallyBlue)' : 'var(--text)',
                                }}
                            />
                        )}
                        {column.sort && (
                            <FaSort
                                className="icon"
                                style={{
                                    color: column.field === sort?.column?.field ? 'var(--reallyBlue)' : 'var(--text)',
                                }}
                            />
                        )}
                        {column.catalogs && (
                            <FilterWrapper>
                                <Select
                                    appearance={false}
                                    items={column.catalogs ?? []}
                                    setSelected={(page: any) =>
                                        setFilter((prev) => {
                                            if (page) {
                                                prev = { ...prev, [column.field]: { column, value: page } }
                                                return prev
                                            }
                                            return prev
                                        })
                                    }
                                    selected={filter?.[column.field]?.value as SelectPage}
                                    placeholder={column.title}
                                />
                            </FilterWrapper>
                        )}
                    </Column>
                )
            })}
        </HeaderWrapper>
    )
}

export default memo(Header)
