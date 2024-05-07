import React, { useMemo } from 'react'
import { SubdivisionItem } from './subdivision-item'
import { useUnit } from 'effector-react'
import { phonebookModel } from '@entities/phonebook'
import { useModal } from 'widgets'
import { PhonebookModal } from './ui/phonebook-modal'
import { ScrollWrapper } from './styled'
import useQueryParams from '@shared/lib/hooks/use-query-params'
import { findEmployeeByFio } from './lib/find-employee-by-fio'
import { getEmployeeInfo } from './lib/ge-employee-info'

export const Staff = () => {
    const query = useQueryParams()
    const fio = query.get('fio') || ''
    const subdivision = query.get('subdivision') || ''
    const { subdivisionPath, subdivisions } = useUnit({
        subdivisionPath: phonebookModel.stores.subdivisionPath,
        subdivisions: phonebookModel.stores.subdivisions,
    })

    const chosenSubdivision = subdivisionPath?.[0]

    const { open } = useModal()

    const searchedEmployees = useMemo(() => {
        if (fio && subdivisions) {
            const employees = findEmployeeByFio(chosenSubdivision ? [chosenSubdivision] : subdivisions, fio)
            return employees
        }
        return []
    }, [fio, subdivision, subdivisions])

    if (fio && subdivisions) {
        return (
            <ScrollWrapper d="column" ai="flex-start" jc="flex-start" gap="20px">
                <SubdivisionItem
                    title="Сотрудники"
                    items={searchedEmployees}
                    action={(employee) => {
                        open(
                            <PhonebookModal
                                title={employee!.fio}
                                info={getEmployeeInfo(employee!)}
                                avatar={employee!.avatar}
                                isEmployee
                            />,
                        )
                    }}
                />
            </ScrollWrapper>
        )
    }

    if (!chosenSubdivision) return null

    return (
        <ScrollWrapper d="column" ai="flex-start" jc="flex-start" gap="20px">
            <SubdivisionItem
                title="Информация"
                items={[chosenSubdivision]}
                action={() => {
                    open(
                        <PhonebookModal
                            title={chosenSubdivision.name}
                            info={[
                                {
                                    attributes: [
                                        { title: 'Руководитель', text: chosenSubdivision.head.fio },
                                        {
                                            title: 'Корпоративная электронная почта подразделения',
                                            text: chosenSubdivision.email,
                                        },
                                        {
                                            id: 'innerPhone',
                                            title: 'Внутренний телефон',
                                            text: chosenSubdivision.phone_inner,
                                        },
                                        {
                                            id: 'mobile',
                                            title: 'Прямой телефон',
                                            text: chosenSubdivision.phone_direct,
                                        },
                                        { title: 'Адрес рабочего места', text: chosenSubdivision.address },
                                        { title: 'Номер кабинета', text: chosenSubdivision.room },
                                    ],
                                },
                            ]}
                        />,
                    )
                }}
            />
            {chosenSubdivision?.head?.fio && (
                <SubdivisionItem
                    title="Руководитель"
                    items={[chosenSubdivision.head]}
                    action={(employee) => {
                        open(
                            <PhonebookModal
                                title={employee!.fio}
                                info={getEmployeeInfo(employee!)}
                                avatar={employee!.avatar}
                                isEmployee
                            />,
                        )
                    }}
                />
            )}
            {chosenSubdivision.staff.filter((person) => person.fio !== chosenSubdivision.head.fio).length > 0 && (
                <SubdivisionItem
                    title="Сотрудники"
                    items={chosenSubdivision.staff}
                    action={(employee) => {
                        open(
                            <PhonebookModal
                                title={employee!.fio}
                                info={getEmployeeInfo(employee!)}
                                avatar={employee!.avatar}
                                isEmployee
                            />,
                        )
                    }}
                />
            )}
        </ScrollWrapper>
    )
}
