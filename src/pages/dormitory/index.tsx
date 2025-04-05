import React from 'react'

import styled from 'styled-components'

import { CenterPage, FileLink, Message, Title } from '@shared/ui/atoms'
import { MEDIA_QUERIES } from '@shared/ui/consts'
import Flex from '@shared/ui/flex'
import PageBlock from '@shared/ui/page-block'

const DormitoryPage = () => {
    return (
        <CenterPage padding="10px">
            <Flex d="column">
                <PageBlock>
                    <Message title="Уважаемые студенты!" type="info">
                        <p>
                            В данном разделе представлены списки обучающихся, нуждающихся в общежитии. Заселение
                            проводится в порядке очереди. Здесь вы можете узнать свой номер в списке.
                        </p>
                    </Message>
                    <FileLink
                        type="document"
                        link="https://e.mospolytech.ru/old//storage/files/Ochered_na_zaselenie_obuchjuschihsya_po_napravleniju_bakalavriat_i_spetsialitet.docx"
                        title="Очередь на заселение обучающихся по направлению бакалавриат и специалитет"
                    />
                    <FileLink
                        type="document"
                        link="https://e.mospolytech.ru/old//storage/files/Ochered_na_zaselenie_obuchjuschihsya_po_napravleniju_magistratura_i_aspirantura_.docx"
                        title="Очередь на заселение обучающихся по направлению магистратуры и аспирантуры"
                    />
                </PageBlock>
                <ResultsBlock>
                    <Title align="left" size={3}>
                        Итоги конкурса КПК
                    </Title>
                    <FileLink
                        type="document"
                        link="https://e.mospolytech.ru/old/storage/files/Odobrennye_zayavki_na_KPK.xlsx"
                        title="Одобренные заявки"
                    />
                    <FileLink
                        type="document"
                        link="https://e.mospolytech.ru/old/storage/files/Otklonennye_zayavki_na_KPK.xlsx"
                        title="Отклоненные заявки"
                    />
                </ResultsBlock>
            </Flex>
        </CenterPage>
    )
}

const ResultsBlock = styled.div`
    width: 100%;
    max-width: 700px;
    padding: 20px;
    border-radius: var(--brLight);
    box-shadow: var(--very-mild-shadow);
    display: flex;
    flex-direction: column;
    background-color: var(--block);
    gap: 1.5rem;

    ${MEDIA_QUERIES.isMobile} {
        box-shadow: none;
        padding: 6px;
        background: transparent;
    }
`

export default DormitoryPage
