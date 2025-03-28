import React from 'react'
import { HiChevronDown, HiOutlineCheckCircle, HiOutlineExclamationCircle } from 'react-icons/hi'

import styled from 'styled-components'

import { Button } from '@shared/ui/atoms'

const AreaTitleWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    user-select: none;
    cursor: pointer;
    position: sticky;
    top: -2px;
    background: var(--block);
    z-index: 3;
    width: 100%;
    /* border-radius: var(--brLight) var(--brLight) 0 0; */

    .title-and-icon {
        display: flex;
        align-items: center;
        width: calc(100% - 30px);

        b {
            overflow: hidden;
            width: 100%;
            text-overflow: ellipsis;
            white-space: nowrap;
            font-weight: 500;
        }

        svg {
            min-width: 19px;
            height: 19px;
            margin-right: 7px;
        }
        /* white-space: nowrap; */
    }

    @media (max-width: 1000px) {
        background: transparent;
        position: relative;
    }
`

interface Props {
    title: string
    confirmed: boolean
    setOpenArea: React.Dispatch<React.SetStateAction<boolean>>
    noIcon?: boolean
}

const AccordionTitle = ({ title, confirmed, setOpenArea, noIcon }: Props) => {
    return (
        <AreaTitleWrapper onClick={() => setOpenArea((prev) => !prev)}>
            <div className="title-and-icon">
                {!noIcon &&
                    (confirmed ? (
                        <HiOutlineCheckCircle style={{ color: 'var(--green)' }} />
                    ) : (
                        <HiOutlineExclamationCircle style={{ color: 'var(--red)' }} />
                    ))}
                <b>{title}</b>
            </div>
            <Button icon={<HiChevronDown />} onClick={() => null} background="transparent" />
        </AreaTitleWrapper>
    )
}

export default AccordionTitle
