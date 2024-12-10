import { getAllArticles, uploadArticle, UploadReq } from '@shared/api/science-api'
import { createEffect, createEvent, createStore, sample } from 'effector'
import { createMutation } from '@farfetched/core'
import { popUpMessageModel } from '@entities/pop-up-message'
import { getDefaultColumns } from '@pages/science/lib/get-default-columns'
import { ColumnProps, TableSearchType } from '@shared/ui/table/types'
import { TABLE_SIZE } from './consts'
import { Article, Filter, Sort } from '../types'
import { IndexRange } from 'react-virtualized'

const pageMounted = createEvent()
const modalOpened = createEvent()
const setScopusFile = createEvent<File[]>()
const setWosFile = createEvent<File[]>()
const uploadFiles = createEvent<UploadReq>()
const selectArticle = createEvent<number>()
const setColumns = createEvent<ColumnProps[]>()
const getArticles = createEvent<{ offset: number }>()
const fetchArticles = createEvent<IndexRange>()
const setSearch = createEvent<TableSearchType>()
const filterPressed = createEvent<Filter>()
const sortPressed = createEvent<string>()

const fetchArticlesFx = createEffect(async ({ offset, sorts }: { offset: number; sorts: Sort[] | null }) => {
    return await getAllArticles({ limit: TABLE_SIZE, offset, sorts, filters: null })
})
export const uploadArticleMutation = createMutation({ handler: uploadArticle })
const $sorts = createStore<Sort[] | null>(null)
    .on(sortPressed, (sorts, field) => {
        if (!sorts) return [{ field, order: 'ASC' }]

        const existingField = sorts.find((sort) => sort.field === field)
        const filteredSorts = sorts.filter((sort) => sort.field !== field)
        if (existingField)
            return existingField.order === 'ASC'
                ? [...filteredSorts, { field, order: 'DESC' }]
                : filteredSorts.length
                ? filteredSorts
                : null

        return [...sorts, { field, order: 'ASC' }]
    })
    .reset(pageMounted)
const $articles = createStore<Article[]>([])
    .on(fetchArticlesFx.doneData, (store, { data }) => [...store, ...data])
    .reset($sorts)
const $totalCount = createStore<number>(50).on(fetchArticlesFx.doneData, (_, { totalCount }) => totalCount)
sample({
    clock: fetchArticlesFx.doneData,
    source: $totalCount,
    filter: (store, { totalCount }) => store !== totalCount,
    fn: (_, { totalCount }) => totalCount,
    target: $totalCount,
})
const $selectedArticles = createStore<Set<number>>(new Set())
    .on(selectArticle, (state, id) => {
        const newState = new Set(state)

        if (newState.has(id)) {
            newState.delete(id)
        } else {
            newState.add(id)
        }

        return newState
    })
    .reset(pageMounted)
const $scopusFile = createStore<File[]>([])
    .on(setScopusFile, (_, value) => value)
    .reset([uploadArticleMutation.finished.success, modalOpened])
const $wosFile = createStore<File[]>([])
    .on(setWosFile, (_, value) => value)
    .reset(uploadArticleMutation.finished.success, modalOpened)
const $filesUploaded = createStore<boolean>(false)
    .on(uploadArticleMutation.finished.success, () => true)
    .reset(modalOpened)
const $columns = createStore<ColumnProps[]>(getDefaultColumns())
    .on(setColumns, (_, value) => value)
    .reset(pageMounted)

const searchField = createStore<TableSearchType>(null)
    .on(setSearch, (_, query) => query)
    .reset(pageMounted)
const $filters = createStore<Filter[] | null>(null).reset(pageMounted)

sample({
    clock: fetchArticles,
    source: { pending: fetchArticlesFx.inFlight, sorts: $sorts },
    filter: ({ pending }) => !pending,
    fn: ({ sorts }, { startIndex }) => ({ offset: startIndex, sorts }),
    target: fetchArticlesFx,
})
sample({
    clock: $sorts,
    source: { sorts: $sorts },
    fn: ({ sorts }) => ({ offset: 0, sorts }),
    target: fetchArticlesFx,
})

sample({
    clock: uploadFiles,
    target: uploadArticleMutation.start,
})

sample({
    clock: uploadArticleMutation.finished.success,
    fn: () => ({
        message: 'Статья успешно загружена',
        type: 'success' as const,
    }),
    target: popUpMessageModel.events.evokePopUpMessage,
})
sample({
    clock: uploadArticleMutation.finished.failure,
    fn: () => ({
        message: 'Произошла ошибка',
        type: 'failure' as const,
    }),
    target: popUpMessageModel.events.evokePopUpMessage,
})

export const stores = {
    articles: $articles,
    articlesLoading: fetchArticlesFx.inFlight,
    totalCount: $totalCount,
    selectedArticles: $selectedArticles,
    filesUploaded: $filesUploaded,
    scopusFile: $scopusFile,
    wosFile: $wosFile,
    uploadLoading: uploadArticleMutation.$pending,
    columns: $columns,

    search: searchField,
    filters: $filters,
    sorts: $sorts,
}

export const events = {
    pageMounted,
    selectArticle,
    uploadFiles,
    modalOpened,
    setScopusFile,
    setWosFile,
    setColumns,
    getArticles,
    fetchArticles,

    setSearch: setSearch,
    filterPressed,
    sortPressed,
}
