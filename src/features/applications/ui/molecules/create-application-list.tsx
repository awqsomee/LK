import createApplicationSearch from '@features/applications/lib/create-application-search'
import getSectionLinks from '@features/applications/lib/get-section-links'
import { Error } from '@ui/error'
import { LocalSearch } from '@ui/molecules'
import { Title } from '@ui/title'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { useModal } from 'widgets'
import { getTeachersSectionLinks } from '@features/applications/lib/get-teachers-section-links'
import { User } from '@api/model'
import isEnabledForEducationForm from '@features/applications/ui/lib/isEnabledForEducationForm'
import { userModel } from '@entities/user'
import Subtext from '@shared/ui/subtext'
import Flex from '@shared/ui/flex'
import isEnabledForDegreeLevel from '../lib/isEnabledForDegreeLevel'

const CreateApplicationListWrapper = styled.div`
    @media (min-width: 1001px) {
        width: 100%;
        max-width: 900px;
        min-width: 900px;
        max-height: 600px;
    }

    display: flex;
    flex-direction: column;
    height: 70vh;

    .list {
        padding: 5px;
        margin-top: 10px;
        overflow-y: auto;
        height: 100%;

        .links-wrapper {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;

            .link-list {
                display: flex;
                flex-direction: column;
                width: calc(50% - 5px);
                background: var(--block);
                box-shadow: var(--block-shadow);
                padding: 10px;
                border-radius: var(--brLight);

                .links {
                    display: flex;
                    flex-direction: column;
                    gap: 10px;
                    font-size: 0.9em;

                    & a {
                        text-decoration: none;
                        color: var(--blue);
                    }
                    .disabled-link {
                        cursor: not-allowed;
                        opacity: 0.5;
                        text-decoration: none;
                        pointer-events: none;
                    }
                }
            }
        }
    }

    @media (max-width: 800px) {
        .list {
            .links-wrapper {
                .link-list {
                    width: 100%;
                }
            }
        }
    }
`

export interface Section {
    title: string
    disabled?: boolean
    links: {
        title: string
        link: string
        isExternalLink?: boolean
        isOpenInNewWindow?: boolean
        disabled?: boolean
        exceptionalFormEducationList?: User['educationForm'][]
        exceptionalDegreeLevelList?: User['degreeLevel'][]
        description?: string
    }[]
}

interface Props {
    isTeachers?: boolean
    currentFormEducation?: User['educationForm']
    currentDegreeLevel?: User['degreeLevel']
}

const CreateApplicationList = ({ isTeachers = false, currentFormEducation, currentDegreeLevel }: Props) => {
    const { close } = useModal()
    const {
        data: { user },
    } = userModel.selectors.useUser()
    const sections: Section[] = (isTeachers && user ? getTeachersSectionLinks(user) : getSectionLinks()).map(
        (section) => {
            const links = section.links.filter((link) => !link.disabled)
            return { ...section, links }
        },
    )
    const [search, setSearch] = useState<string>('')

    const [foundSections, setFoundSections] = useState<Section[] | null>(sections)

    return (
        <CreateApplicationListWrapper>
            <LocalSearch
                whereToSearch={sections}
                searchEngine={createApplicationSearch}
                setResult={setFoundSections}
                placeholder="Поиск заявок"
                setExternalValue={setSearch}
            />
            <div className="list">
                <div className="links-wrapper">
                    {(foundSections ?? sections).map((section) => {
                        if (!section.disabled)
                            return (
                                <div className="link-list" key={section.title}>
                                    <Title size={4} align="left" bottomGap>
                                        {section.title}
                                    </Title>

                                    <div className="links">
                                        {section.links.map((link, index) => {
                                            if (
                                                link.disabled ||
                                                !isEnabledForEducationForm(
                                                    currentFormEducation,
                                                    link.exceptionalFormEducationList,
                                                ) ||
                                                !isEnabledForDegreeLevel(
                                                    currentDegreeLevel,
                                                    link.exceptionalDegreeLevelList,
                                                )
                                            )
                                                return

                                            return link.isExternalLink ? (
                                                <a
                                                    key={link.link + index}
                                                    href={link.link}
                                                    target={link.isOpenInNewWindow ? '_blank' : '_self'}
                                                    rel="noreferrer"
                                                >
                                                    {link.title}
                                                </a>
                                            ) : (
                                                <Flex d="column" ai="flex-start">
                                                    <Link to={link.link} key={link.link + index} onClick={close}>
                                                        {link.title}
                                                    </Link>
                                                    {link.description && <Subtext>{link.description}</Subtext>}
                                                </Flex>
                                            )
                                        })}
                                    </div>
                                </div>
                            )
                    })}
                    {!foundSections?.length && !!search.length && (
                        <Error text={`По запросу ${search} ничего не найдено`} />
                    )}
                </div>
            </div>
        </CreateApplicationListWrapper>
    )
}

export default CreateApplicationList
