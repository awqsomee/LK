import React, { useEffect } from 'react'

import { useUnit } from 'effector-react'

import { pEStudentFilterModel } from '@features/pe-students-filter'
import { FiltersSelect } from '@features/pe-students-filter/types'

import Table from '@shared/ui/table'

import { pageIndexChanged } from '../page-model'
import { $myGroups, load } from './model'

export function MyGroups() {
    const [groups] = useUnit([$myGroups])

    useEffect(() => {
        load()
    }, [])

    const handleRowClick = (row: { groupName: string }) => {
        pEStudentFilterModel.events.resetFilters()
        pEStudentFilterModel.events.addFilter({
            name: FiltersSelect.Group,
            value: row.groupName,
            strict: true,
        })
        pageIndexChanged(0)
    }

    return <Table onRowClick={handleRowClick as any} data={groups} columns={columns} />
}

const columns = [
    { field: 'groupName', title: 'Группа' },
    {
        field: 'curatorFullName',
        title: 'Преподаватель',
    },
]
