import React from 'react'

import { IndexedProperties } from '@shared/consts/models/indexed-properties'
import Checkbox from '@shared/ui/checkbox'
import { useModal } from '@shared/ui/modal'
import displayWithType from '@shared/ui/table/lib/display-with-type'
import { ColumnProps, TableRowProps } from '@shared/ui/table/types'

import { RowWrapper } from '../atoms'
import Column from '../atoms/column'
import RowModal from './row-modal'

type Props = {
    el: { [key: string]: any }
    index: number
    columns: ColumnProps[]
    columnsExtended?: ColumnProps[]
    onRowClick?: (obj: IndexedProperties) => void
    select?: (rowIndex: number) => void
    selected?: boolean
    height?: string
} & TableRowProps

const Row = ({ columns, columnsExtended, el, index, onRowClick, select, selected, height, rowPadding }: Props) => {
    const { open } = useModal()
    const defaultOnClick = () => open(<RowModal obj={el} columns={columnsExtended || columns} />, 'Информация')
    return (
        <RowWrapper
            even={index % 2 === 0}
            onClick={() => (onRowClick ? onRowClick(el) : defaultOnClick())}
            height={height}
        >
            {select && (
                <Column
                    padding="10px"
                    width="36px"
                    className={'one'}
                    align="center"
                    onClick={(e) => {
                        e.stopPropagation()
                    }}
                >
                    <Checkbox
                        setChecked={() => {
                            select(index)
                        }}
                        checked={Boolean(selected)}
                    />
                </Column>
            )}
            {columns.map((column) => {
                return (
                    <Column
                        padding={rowPadding}
                        showFull={column.showFull}
                        width={column.width}
                        className={column.priority?.toString() ?? 'one'}
                        key={column.field}
                        align={column.align}
                        onClick={(e) => {
                            if (column.onClick) {
                                e.stopPropagation()
                                column.onClick(el)
                            }
                        }}
                    >
                        {column.render
                            ? column.render(displayWithType(el[column.field], column.type), el)
                            : displayWithType(el[column.field], column.type)}
                    </Column>
                )
            })}
        </RowWrapper>
    )
}

export default Row
