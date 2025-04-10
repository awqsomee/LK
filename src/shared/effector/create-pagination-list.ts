import { Effect, Unit, combine, createEvent, createStore, sample } from 'effector'

export const DEFAULT_LIMIT = 50
type LastArgs<TFilter extends Record<string, unknown> | unknown> = ServerListRequest<TFilter> & { limit: number }

export function createPaginationList<
    TEntity extends Record<string, unknown>,
    TFilter extends Record<string, unknown> | string | unknown,
>(options: {
    getFx: Effect<ServerListRequest<TFilter>, ServerListResponse<TEntity>>
    limit: number
    reset?: Unit<unknown>[]
}) {
    const { getFx, limit = DEFAULT_LIMIT, reset = [] } = options

    const load = createEvent<ServerListRequest<TFilter>>()
    const next = createEvent<ServerListRequest<TFilter>>()

    const $lastArgs = createStore<LastArgs<TFilter> | null>(null)

    const $items = createStore<TEntity[] | null>(null)
    $items.on(getFx.doneData, (prevItems, response) => [...(prevItems || []), ...(response.results || [])])
    $items.reset([load, ...reset])

    const $page = createStore<number>(1)
    $page.on(getFx.doneData, (prevItems) => ++prevItems)
    $page.reset([load, ...reset])

    const $isPending = getFx.pending

    const $isLoaded = createStore<boolean>(false)
    $isLoaded.reset([load, ...reset])

    const $hasNext = combine($items, $isLoaded, (list, isLoaded) => Boolean(list?.length) && !isLoaded)

    sample({
        clock: load,
        fn: (payload) => ({ ...payload, limit: payload.limit || limit, page: payload.page ?? 1 }),
        target: [getFx, $lastArgs],
    })

    sample({
        clock: next,
        source: { lastArgs: $lastArgs, page: $page },
        fn: ({ lastArgs = {}, page }) => ({ ...lastArgs, limit, page }),
        target: getFx,
    })

    sample({
        clock: getFx.doneData,
        source: $lastArgs,
        fn: (lastArgs, response) => !!lastArgs && (response.results || []).length < lastArgs.limit,
        target: $isLoaded,
    })

    return {
        $items,
        $isPending,
        $hasNext,
        next,
        load,
    }
}
