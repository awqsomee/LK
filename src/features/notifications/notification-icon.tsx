import React from 'react'
import { BiNews, BiRuble } from 'react-icons/bi'
import { FiClock, FiFileText, FiInfo, FiMessageCircle, FiStar } from 'react-icons/fi'
import { HiOutlineClipboardCheck } from 'react-icons/hi'

import { NotificationType } from '@entities/lk-notifications'

import NewVersionMessage from '@shared/ui/new-version-message'

import { IconWrapper } from './icon-wrapper'

export const iconObject = (): Record<NotificationType, ChildrenType> => ({
    info: (
        <IconWrapper color="grey">
            <FiInfo />
        </IconWrapper>
    ),
    message: (
        <IconWrapper color="red">
            <FiMessageCircle />
        </IconWrapper>
    ),
    alert: (
        <IconWrapper color="purple">
            <BiNews />
        </IconWrapper>
    ),
    'payment-dorm': (
        <IconWrapper color="green">
            <BiRuble />
        </IconWrapper>
    ),
    'payment-ed': (
        <IconWrapper color="green">
            <BiRuble />
        </IconWrapper>
    ),
    'digital-services': (
        <IconWrapper color="red">
            <FiFileText />
        </IconWrapper>
    ),
    'doc-for-review': (
        <IconWrapper color="blue">
            <FiFileText />
        </IconWrapper>
    ),
    'kpi-pps': (
        <IconWrapper color="pink">
            <FiStar />
        </IconWrapper>
    ),
    schedule: (
        <IconWrapper color="pink">
            <FiClock />
        </IconWrapper>
    ),
    'version-update': <NewVersionMessage />,
    'electronic-interaction': (
        <IconWrapper color="blue">
            <HiOutlineClipboardCheck />
        </IconWrapper>
    ),
    allowance: (
        <IconWrapper color="orange">
            <FiStar />
        </IconWrapper>
    ),
})
