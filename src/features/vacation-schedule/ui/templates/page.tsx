import React, { useEffect, useMemo, useState } from 'react'
import { FiPlus } from 'react-icons/fi'

import { vacationScheduleModel } from '@entities/vacation-schedule'

import { userModel } from '@shared/session'
import { Button, CenterPage, Divider, LinkButton, Title, Wrapper } from '@shared/ui/atoms'
import Card from '@shared/ui/card'
import List from '@shared/ui/list'
import PageBlock from '@shared/ui/page-block'
import Select, { SelectPage } from '@shared/ui/select'
import Subtext from '@shared/ui/subtext'

import { Vacation } from '../organism'

const calendarUrls = {
    fiveWorkDays: 'https://e.mospolytech.ru/old/storage/files/ProizvodstvennyiM%86_kalendar_2025_dlya_pyatidnevki.pdf',
    sixWorkDays: 'https://e.mospolytech.ru/old/storage/files/ProizvodstvennyiM%86_kalendar_2025_dlya_shestidnevki.PDF',
}

const Page = () => {
    const {
        data: { user },
    } = userModel.selectors.useUser()
    const { data, error } = vacationScheduleModel.selectors.useData()

    const items: SelectPage[] = useMemo(() => {
        return data?.map((value, index) => ({ id: index, title: value.division })) || []
    }, [data])

    const [selected, setSelected] = useState<SelectPage | null>(items[0] ?? {})

    useEffect(() => {
        if (!selected?.id) {
            setSelected(items[0])
        }
    }, [selected?.id, setSelected, items])

    const selectedVacation = data?.[Number(selected?.id || 0)]

    return (
        <Wrapper load={vacationScheduleModel.effects.getFx} error={error} data={data}>
            <CenterPage alignItems="flex-start">
                <PageBlock
                    topRightCornerElement={
                        <Button
                            onClick={() => {
                                window.location.replace('https://e.mospolytech.ru/old/index.php?p=vacation')
                            }}
                            text="Заполнить график"
                            background="var(--reallyBlue)"
                            textColor="#fff"
                            icon={<FiPlus />}
                            minWidth={'35px'}
                            height="36px"
                        />
                    }
                >
                    <Subtext width="100%" maxWidth="100%">
                        Производственный календарь на 2025 год
                    </Subtext>
                    <List scroll={false} direction="horizontal" gap={12} wrapOnMobile>
                        <Card
                            title="Для пятидневной рабочей недели"
                            height="120px"
                            width="50%"
                            background="5"
                            padding="20px 40px 20px 20px"
                        >
                            <LinkButton
                                onClick={() => null}
                                href={calendarUrls.fiveWorkDays}
                                textColor="var(--reallyBlue)"
                                text="Подробнее"
                                background="transparent"
                                padding="10px 0"
                            />
                        </Card>
                        <Card
                            title="Для шестидневной рабочей недели"
                            height="120px"
                            width="50%"
                            background="6"
                            padding="20px 40px 20px 20px"
                        >
                            <LinkButton
                                onClick={() => null}
                                href={calendarUrls.sixWorkDays}
                                textColor="var(--reallyBlue)"
                                text="Подробнее"
                                background="transparent"
                                padding="10px 0"
                            />
                        </Card>
                    </List>
                    <Divider />
                    <Title size={3} align="left">
                        Сведения о трудоустройстве
                    </Title>
                    {!!user?.id && (
                        <Select width="fit-content" items={items} selected={selected} setSelected={setSelected} />
                    )}
                    {selectedVacation && <Vacation {...selectedVacation} />}
                </PageBlock>
            </CenterPage>
        </Wrapper>
    )
}

export default Page
