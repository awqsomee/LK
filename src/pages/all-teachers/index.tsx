import React from 'react'
import { useHistory, useRouteMatch } from 'react-router'

import { useStore } from 'effector-react'
import styled from 'styled-components'

import ListOfPeople from '@features/list-of-people'

import { paginationList } from '@entities/all-teachers'

import { getDivisions } from '@shared/api/teacher-api'
import { ALL_STAFF_ROUTE } from '@shared/routing'
import { userModel } from '@shared/session'
import { Wrapper } from '@shared/ui/atoms'
import useCurrentDevice from '@shared/ui/hooks/use-current-device'
import PageBlock from '@shared/ui/page-block'
import { SelectPage } from '@shared/ui/select'

const PageWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    height: calc(100vh - var(--header-height) - 20px);

    @media (max-width: 1000px) {
        height: calc(100vh - 80px);
    }
`

const AllTeachersPage = () => {
    const {
        data: { user },
    } = userModel.selectors.useUser()
    const { $isPending, $items } = paginationList
    const route: { params: { filter?: string } } = useRouteMatch()
    const history = useHistory()

    const isPending = useStore($isPending)
    const items = useStore($items)
    const filter = route.params.filter ?? user?.subdivisions?.[0].subdivision ?? ''

    const underSearchText = (filter: SelectPage | null) => {
        if (!filter?.title) return null

        return `Кафедра: ${filter?.title} • Всего: ${items?.length ?? 0}`
    }

    // TODO: remove after all-staff mobile version is ready
    // #ASM
    const { isMobile } = useCurrentDevice()
    const isStaff = user?.user_status === 'staff'

    if (!isMobile && isStaff) history.push(`${ALL_STAFF_ROUTE}?subdivision=${filter}`)

    return (
        <Wrapper load={function () {}} loading={isPending} error={null} data={items}>
            <PageWrapper>
                <PageBlock>
                    <ListOfPeople
                        searchPlaceholder="Поиск сотрудников"
                        paginationList={paginationList}
                        filterRequest={getDivisions}
                        defaultFilter={filter}
                        filterPlaceholder="Подразделения"
                        underSearchText={underSearchText}
                    />
                </PageBlock>
            </PageWrapper>
        </Wrapper>
    )
}

export default AllTeachersPage
