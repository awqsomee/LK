import React from 'react'
import { BiHeadphone, BiWrench } from 'react-icons/bi'
import { BsAsterisk } from 'react-icons/bs'
import { FiAlertCircle, FiArrowLeftCircle, FiMeh } from 'react-icons/fi'
import { Link } from 'react-router-dom'

import { OLD_LK_URL } from '@shared/consts'
import {
    CANT_ACCESS_ROUTE,
    FEEDBACK_ROUTE,
    GET_YOUR_LOGIN_ROUTE,
    MAINTENANCE,
    MEMO_FRESHMEN_ROUTE,
    MEMO_TEACHER_ROUTE,
} from '@shared/routing'
import { LinkButton } from '@shared/ui/atoms'
import { Button } from '@shared/ui/button'
import { Divider } from '@shared/ui/divider'
import List from '@shared/ui/list'
import { Logo } from '@shared/ui/logo'

const Information = () => {
    return (
        <div className="left">
            <List scroll={false} height="100%" verticalAlign="space-between" position="static">
                <Logo width="50px" short className="logo first" />

                <List gap={12} scroll={false} height="100%" verticalAlign="center">
                    <Link to={FEEDBACK_ROUTE} tabIndex={-1}>
                        <Button
                            padding="0"
                            icon={<BiHeadphone />}
                            text="Обратная связь"
                            height="25px"
                            background="transparent"
                            textColor="var(--theme-mild-opposite)"
                        />
                    </Link>
                    <Link to={GET_YOUR_LOGIN_ROUTE} tabIndex={-1}>
                        <Button
                            padding="0"
                            icon={<BsAsterisk />}
                            text="Узнать свой логин ЕУЗ"
                            height="25px"
                            background="transparent"
                            textColor="var(--theme-mild-opposite)"
                        />
                    </Link>
                    <Link to={MEMO_FRESHMEN_ROUTE} tabIndex={-1}>
                        <Button
                            padding="0"
                            icon={<FiAlertCircle />}
                            text="Вниманию студентов 1 курса!"
                            height="25px"
                            background="transparent"
                            textColor="var(--theme-mild-opposite)"
                        />
                    </Link>
                    <Link to={MEMO_TEACHER_ROUTE} tabIndex={-1}>
                        <Button
                            padding="0"
                            icon={<FiAlertCircle />}
                            text="Вниманию сотрудников!"
                            height="25px"
                            background="transparent"
                            textColor="var(--theme-mild-opposite)"
                        />
                    </Link>
                    <Link to={MAINTENANCE} tabIndex={-1}>
                        <Button
                            padding="0"
                            icon={<BiWrench />}
                            text="Тех. обслуживание"
                            height="25px"
                            background="transparent"
                            textColor="var(--theme-mild-opposite)"
                        />
                    </Link>
                    <Divider />
                    <Link to={CANT_ACCESS_ROUTE} tabIndex={-1}>
                        <Button
                            padding="0"
                            icon={<FiMeh />}
                            text="Не получается войти"
                            height="25px"
                            align="left"
                            background="transparent"
                            textColor="var(--red)"
                        />
                    </Link>
                </List>

                <LinkButton
                    text={'Перейти к старому дизайну'}
                    onClick={() => {
                        localStorage.setItem('useOldVersion', 'true')
                    }}
                    background="transparent"
                    textColor="var(--reallyBlue)"
                    icon={<FiArrowLeftCircle />}
                    align="left"
                    padding="0"
                    width="100%"
                    href={`${OLD_LK_URL}/index.php`}
                />
            </List>
        </div>
    )
}

export default Information
