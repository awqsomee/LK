import React from 'react'
import { FiArrowLeftCircle, FiPlus, FiX } from 'react-icons/fi'
import { HiOutlineExternalLink, HiOutlineFolder } from 'react-icons/hi'

import { useUnit } from 'effector-react'
import styled from 'styled-components'

import { addPageToHome, deletePageFromHome } from '@features/all-pages/model'
import LinkMoreButton from '@features/link-more-button'

import { userSettingsModel } from '@entities/settings'

import { Colors, IColors } from '@shared/consts'
import getCorrectWordForm from '@shared/lib/get-correct-word-form'
import BlockWrapper from '@shared/ui/block/styles'
import { Button } from '@shared/ui/button'

import Icon from '../../../../shared/ui/icon/icon'
import { PageLinkProps } from './page-link'

export const PageLinkWrapper = styled(BlockWrapper)<{
    color: string
    isVertical: boolean
    hasNotifications: boolean
}>`
    position: relative;
    cursor: pointer;
    text-decoration: none;
    border-radius: var(--brLight);
    background: var(--block-content);

    .new {
        position: absolute;
        top: ${({ isVertical }) => (isVertical ? '5px' : '18px')};
        right: ${({ isVertical }) => (isVertical ? '-5px' : '50px')};
        border-radius: ${({ isVertical }) =>
            isVertical
                ? 'var(--brLight) calc(var(--brLight) - 4px) calc(var(--brLight) - 4px) var(--brLight)'
                : 'var(--brLight)'};
        background: ${Colors.red.light2};
        font-size: 0.7em;
        font-weight: bold;
        color: #fff;
        padding: 5px 10px;
    }

    &[data-selected='true'] {
        .outside {
            .more-button {
                opacity: 1;
                visibility: visible;
            }
            .notification-circle {
                opacity: 0;
            }

            .icon {
                box-shadow: 0 20px 210px 60px ${({ color }) => Colors[color as keyof IColors].main};
                transform: ${({ isVertical }) => isVertical && 'scale(1.1) translateY(20px)'};
            }

            b {
                opacity: ${({ hasNotifications, isVertical }) => isVertical && hasNotifications && 0};
                transform: ${({ isVertical }) => isVertical && 'scale(0.95) translateY(40%)'};
                color: ${({ isVertical }) => (isVertical ? '#fff' : 'var(--text)')};
            }

            .notifications-title {
                opacity: 1;
                transform: translateY(0px);
            }
        }
    }

    .more-button {
        position: absolute;
        top: ${({ isVertical }) => (isVertical ? '5px' : '50%')};
        left: ${({ isVertical }) => (isVertical ? '5px' : 'auto')};
        right: ${({ isVertical }) => !isVertical && '10px'};
        transform: ${({ isVertical }) => !isVertical && 'translateY(-50%)'};
        opacity: 0;
        visibility: hidden;
        transition: 0.2s;
    }

    .outside {
        position: static;
        width: 100%;
        height: 100%;
        overflow: hidden;
        gap: 15px;
        display: flex;
        flex-direction: ${({ isVertical }) => (isVertical ? 'column' : 'row')};
        border-radius: var(--brLight);
        align-items: center;
        justify-content: ${({ isVertical }) => (isVertical ? 'center' : 'flex-start')};
        padding: 15px;

        .notifications-title {
            opacity: 0;
            transform: translateY(20px);
            font-size: 0.7em;
            position: absolute;
            transition: 0.2s;
            bottom: 25px;
            font-weight: bold;
            color: var(--text);
            right: ${({ isVertical }) => !isVertical && '50px'};
        }

        @media (min-width: 1001px) {
            &:hover {
                .more-button {
                    opacity: 1;
                    visibility: visible;
                }
                .notification-circle {
                    opacity: 0;
                }

                .icon {
                    box-shadow: 0 20px 110px 60px ${({ color }) => Colors[color as keyof IColors].main};
                    transform: ${({ isVertical }) => isVertical && 'scale(1.1) translateY(20px)'};
                }

                b {
                    opacity: ${({ hasNotifications, isVertical }) => isVertical && hasNotifications && 0};
                    transform: ${({ isVertical }) => isVertical && 'scale(0.95) translateY(40%)'};
                    color: ${({ isVertical }) => (isVertical ? '#fff' : 'var(--text)')};
                }

                .notifications-title {
                    opacity: 1;
                    transform: translateY(0px);
                }
            }
        }

        b {
            display: flex;
            align-items: center;
            font-size: 0.8em;
            text-align: ${({ isVertical }) => (isVertical ? 'center' : 'left')};
            color: var(--text);
            transition: 0.2s;
            font-weight: 600;
            height: 30px;
        }
    }
`

const LinkIcon = styled.div`
    position: absolute;
    top: 12px;
    left: 12px;
    opacity: 0.7;
`

const PageLinkContent = (props: PageLinkProps & { maxWordLength: number }) => {
    const {
        color,
        shadow,
        notifications,
        title,
        isNew,
        icon: PageLinkIcon,
        isExternal,
        isOldLK,
        mode,
        id,
        orientation = 'vertical',
    } = props

    const isVertical = orientation === 'vertical'
    const settings = useUnit(userSettingsModel.stores.userSettings)

    if (!settings) return null

    const isAdded = settings.homePage.pages.find((el) => el === id)

    return (
        <PageLinkWrapper
            padding="0"
            width={'100%'}
            maxWidth={'100%'}
            height={isVertical ? '135px' : '60px'}
            isVertical={isVertical}
            justifyContent="center"
            shadow={shadow}
            color={color ?? 'blue'}
            hasNotifications={!!notifications}
            data-selected={props.isActive}
        >
            {(isOldLK || isExternal) && isVertical && (
                <LinkIcon>
                    {isOldLK && <FiArrowLeftCircle title="Раздел в старом ЛК" />}
                    {isExternal && <HiOutlineExternalLink title="Раздел на внешнем ресурсе" />}
                </LinkIcon>
            )}
            <div className="outside">
                <Icon badge={notifications?.toString()} color={color ?? 'blue'}>
                    {PageLinkIcon ? <PageLinkIcon /> : <HiOutlineFolder />}
                </Icon>
                <b title={title}>{title}</b>
                {!!notifications && (
                    <span className="notifications-title">
                        {notifications}{' '}
                        {getCorrectWordForm(notifications, {
                            one: 'уведомление',
                            zero: 'уведомлений',
                            twoToFour: 'уведомления',
                            fiveToNine: 'уведомлений',
                        })}
                    </span>
                )}
            </div>
            {mode === 'use' && <LinkMoreButton route={props} />}
            {mode === 'add' ? (
                isAdded ? (
                    <Button
                        icon={<FiX />}
                        width="80px"
                        align="center"
                        textColor="var(--red)"
                        background="var(--block)"
                        onClick={() => deletePageFromHome({ pageId: id })}
                    />
                ) : (
                    <Button
                        icon={<FiPlus />}
                        //  onClick={() => open(<WhatsNew />)}
                        width="80px"
                        textColor="var(--green)"
                        align="center"
                        background="var(--block)"
                        onClick={() => addPageToHome({ pageId: id })}
                    />
                )
            ) : null}
            {isNew && <span className="new">New</span>}
        </PageLinkWrapper>
    )
}

export default PageLinkContent
