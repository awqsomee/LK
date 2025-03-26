import React, { useCallback, useEffect, useRef, useState } from 'react'

import useOnClickOutside from '@shared/ui/hooks/use-on-click-outside'
import { Size } from '@shared/ui/types'

import { SelectPage } from '../..'
import findCurrentPage from '../find-current-page'

type SingleSelect = React.Dispatch<React.SetStateAction<SelectPage | null>>
type MultipleSelect = React.Dispatch<React.SetStateAction<SelectPage[] | null>>

export interface SelectProps {
    items: SelectPage[]
    setSelected: SingleSelect | MultipleSelect | ((val: SelectPage | null) => void)
    selected: SelectPage | SelectPage[] | null
    isActive?: boolean
    title?: string
    width?: string
    onClick?: (page: SelectPage) => void
    multiple?: boolean
    required?: boolean
    placeholder?: string
    appearance?: boolean
    size?: Size
    withSearch?: boolean
}

const useSelect = (props: SelectProps) => {
    const { items, setSelected, onClick, selected, appearance = true, multiple = false, withSearch } = props
    const [searchQuery, setSearchQuery] = useState<string>('')
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const refElement = useRef<HTMLDivElement | null>(null)
    const refItems = useRef<HTMLUListElement | null>(null)
    const [route, setRoute] = useState<string[]>([])
    const [currentItems, setCurrentItems] = useState<SelectPage[]>(items)
    const [debouncedItems, setDebouncedItems] = useState<SelectPage[]>(currentItems)
    const [selectedRoute, setSelectedRoute] = useState<string>('')

    useEffect(() => {
        setCurrentItems(items)
    })

    const handleOpen = useCallback(() => {
        setIsOpen((prev) => !prev)
    }, [setIsOpen])

    const handleSelect = useCallback(
        (page: SelectPage) => {
            if (!page.children) {
                if (multiple) {
                    if (!!selected) {
                        if (!!(selected as SelectPage[]).find((p) => p.id === page.id)) {
                            const newSelected = (selected as SelectPage[]).filter((p) => p.id !== page.id)
                            !newSelected.length
                                ? (setSelected as MultipleSelect)(null)
                                : (setSelected as MultipleSelect)(newSelected)
                        } else {
                            ;(setSelected as MultipleSelect)([...(selected as SelectPage[]), page])
                        }
                    } else {
                        ;(setSelected as MultipleSelect)([page])
                    }
                } else {
                    ;(setSelected as SingleSelect)(page)
                    if (withSearch) setSearchQuery(page.title)
                }

                !multiple && handleOpen()
                setSelectedRoute(route.join('/'))
            } else {
                route.push(page.id.toString())
                setCurrentItems(findCurrentPage(items, [...route]) ?? [])

                setRoute([...route])
            }
            onClick?.(page)
        },
        [setSelected, route],
    )

    const goBack = useCallback(() => {
        route.pop()
        setRoute([...route])
        if (route.length === 0) {
            setCurrentItems(items)
        } else {
            setCurrentItems(findCurrentPage(items, route) ?? [])
        }
    }, [route, setCurrentItems])

    useOnClickOutside(refElement, () => {
        if (isOpen) {
            handleOpen()
        }
    })

    useEffect(() => {
        if (!withSearch || !searchQuery) {
            setDebouncedItems(currentItems)
            return
        }

        const searchHandler = setTimeout(() => {
            const foundItems = currentItems[0]?.items
                ? currentItems.map((group) => ({
                      ...group,
                      items:
                          group.items?.filter((item) => item.title.toLowerCase().includes(searchQuery.toLowerCase())) ??
                          [],
                  }))
                : currentItems.filter((item) => item.title.toLowerCase().includes(searchQuery.toLowerCase()))

            const isExactMatch = currentItems[0]?.items
                ? foundItems.reduce((acc, el) => acc + (el.items?.length ?? 0), 0)
                : foundItems.length <= 1

            setDebouncedItems(isExactMatch ? items : foundItems)
        }, 300)

        return () => {
            clearTimeout(searchHandler)
        }
    }, [currentItems, searchQuery, withSearch])

    const clearQuery = useCallback(() => {
        setSelected(null)
        setIsOpen(false)
    }, [])

    const changeQuery = useCallback((value: string) => {
        setSelected(null)
        setSearchQuery(value)
        setIsOpen(true)
    }, [])

    useEffect(() => {
        if (!multiple) setSearchQuery(!selected ? '' : (selected as SelectPage).title)
    }, [selected])

    return {
        handleOpen,
        refElement,
        isOpen,
        multiple,
        handleSelect,
        selectedRoute,
        currentItems: debouncedItems,
        route,
        goBack,
        refItems,
        appearance,
        searchQuery,
        changeQuery,
        clearQuery,
    }
}

export default useSelect
