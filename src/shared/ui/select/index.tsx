import React, { memo, useRef } from 'react'
import { FiCheck, FiChevronLeft, FiChevronRight } from 'react-icons/fi'

import { Input, Title } from '@shared/ui/atoms'

import useSelect, { SelectProps } from './lib/hooks/use-select'
import { SelectArrow, SelectHeader, SelectHeaderWrapper, SelectItem, SelectItems, SelectWrapper } from './ui/atoms'

export interface SelectPage {
    id: string | number
    icon?: React.ReactNode
    title: string
    children?: SelectPage[]
    data?: string | number
}

const Select = (props: SelectProps) => {
    const {
        handleOpen,
        refElement,
        isOpen,
        multiple,
        handleSelect,
        selectedRoute,
        currentItems,
        route,
        goBack,
        refItems,
        appearance,
        searchQuery,
        changeQuery,
        clearQuery,
    } = useSelect(props)
    const { isActive, width, title, required, selected, placeholder, size = 'middle', withSearch } = props
    const inputRef = useRef<HTMLInputElement>(null)
    return (
        <SelectWrapper
            onClick={handleOpen}
            appearance={appearance}
            ref={refElement}
            isOpen={isOpen}
            isActive={isActive ?? true}
            width={width}
            size={size}
        >
            <Title size={5} align="left" bottomGap="5px" visible={!!title} required={required}>
                {title}
            </Title>
            <SelectHeaderWrapper multiple={multiple} appearance={appearance} size={size}>
                <SelectHeader appearance={appearance}>
                    {multiple ? (
                        !!selected ? (
                            (selected as SelectPage[]).map((page) => {
                                return (
                                    <div className="header-item" key={page.id}>
                                        {!!page.icon && <span className="icon">{page.icon}</span>}
                                        <span className="header-title">{page.title}</span>
                                    </div>
                                )
                            })
                        ) : (
                            <span className="not-chosen multi">{placeholder ?? 'Не выбрано'}</span>
                        )
                    ) : withSearch ? (
                        <Input
                            ref={inputRef}
                            inputAppearance={false}
                            isActive={isActive}
                            value={searchQuery}
                            setValue={changeQuery}
                            onClear={() => {
                                inputRef.current?.focus()
                                clearQuery()
                            }}
                            placeholder={placeholder}
                        />
                    ) : (
                        <div className="single-header">
                            {!!selected ? (
                                <>
                                    {!!(selected as SelectPage).icon && (
                                        <span className="select-icon">{(selected as SelectPage).icon}</span>
                                    )}
                                    <span className="header-title">{(selected as SelectPage).title}</span>
                                </>
                            ) : (
                                <span className="not-chosen">{placeholder ?? 'Не выбрано'}</span>
                            )}
                        </div>
                    )}
                </SelectHeader>
                <SelectArrow isOpen={isOpen} />
            </SelectHeaderWrapper>
            <SelectItems
                width={width}
                ref={refItems}
                isOpen={isOpen}
                className={isOpen ? 'open' : 'close'}
                itemsAmount={currentItems.length + (!!route.length ? 1 : 0)}
                title={title}
            >
                {!!route.length && (
                    <SelectItem
                        key={-1}
                        isSelected={false}
                        onClick={(e) => {
                            e.stopPropagation()
                            goBack()
                        }}
                    >
                        <span className="back-button">
                            <FiChevronLeft />
                            Назад
                        </span>
                    </SelectItem>
                )}
                {currentItems.length ? (
                    currentItems.map(({ id, icon, title, children, data }) => (
                        <SelectItem
                            key={id ?? title}
                            onClick={(e) => {
                                e.stopPropagation()
                                handleSelect({ id, icon, title, children, data })
                            }}
                            isSelected={
                                !multiple &&
                                !!selected &&
                                ((selected as SelectPage).id
                                    ? id === (selected as SelectPage).id
                                    : title === (selected as SelectPage).title)
                            }
                            leadingToSelected={selectedRoute.includes(id.toString())}
                        >
                            {!!icon && <span className="icon">{icon}</span>}
                            <span className="select-item-title">{title}</span>
                            {!!children && (
                                <span className="right-icon">
                                    <FiChevronRight />
                                </span>
                            )}
                            {multiple &&
                                !!selected &&
                                !!(selected as SelectPage[]).find((page) => page.title.includes(title)) && (
                                    <span className="right-icon">
                                        <FiCheck />
                                    </span>
                                )}
                        </SelectItem>
                    ))
                ) : (
                    <SelectItem
                        onClick={(e) => {
                            e.stopPropagation()
                        }}
                        isSelected={false}
                    >
                        <span className="select-item-title">Не найдено</span>
                    </SelectItem>
                )}
            </SelectItems>
        </SelectWrapper>
    )
}

export default memo(Select)
