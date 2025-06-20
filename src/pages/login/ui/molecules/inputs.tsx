import React from 'react'

import useLogin from '@pages/login/hooks/use-login'

import { userModel } from '@shared/session'
import { Input, Logo, SubmitButton, Title } from '@shared/ui/atoms'
import Checkbox from '@shared/ui/checkbox'
import Flex from '@shared/ui/flex'
import List from '@shared/ui/list'
import { Message } from '@shared/ui/message'
import Subtext from '@shared/ui/subtext'

const Inputs = () => {
    const { loading, error, data } = userModel.selectors.useUser()
    const {
        isSubmitActive,
        password,
        capsLock,
        login,
        showAbiturientMessage,
        handleKeyPress,
        handleSavePassword,
        handleLogin,
        setPassword,
        setLogin,
    } = useLogin()

    return (
        <div className="right" onKeyDown={handleKeyPress}>
            <List
                gap={16}
                horizontalAlign="center"
                position="static"
                verticalAlign="space-between"
                height="100%"
                scroll={false}
            >
                <Logo width="50px" short className="logo second" />
                <Flex d="column" ai="flex-start">
                    <Title size={3} align="left">
                        Личный кабинет
                    </Title>
                    <Subtext>обучающегося и сотрудника</Subtext>
                </Flex>
                {showAbiturientMessage && (
                    <Message type={'info'} title="Уважаемые абитуриенты!">
                        <p>
                            Личный кабинет абитуриента находится по ссылке{' '}
                            <a href="https://lk.mospolytech.ru/" target="_blank" rel="noreferrer">
                                <strong>lk.mospolytech.ru</strong>
                            </a>
                        </p>
                    </Message>
                )}
                <List gap={16} scroll={false}>
                    <Title size={4} align="left">
                        Вход
                    </Title>
                    <Subtext>Вход в личный кабинет происходит через единую учетную запись (ЕУЗ)</Subtext>
                    <Message type="failure" visible={!!error}>
                        {error}
                    </Message>
                    <Message type="success" visible={data?.isAuthenticated ?? false}>
                        Вы вошли в аккаунт
                    </Message>
                    <Input value={login} setValue={setLogin} title="Логин" placeholder="Введите логин" />
                    <Input
                        value={password}
                        setValue={setPassword}
                        title="Пароль"
                        placeholder="Введите пароль"
                        type="password"
                        alertMessage={capsLock ? 'Включен Capslock' : undefined}
                    />
                    <Checkbox text="Оставаться в системе" checked={data.savePassword} setChecked={handleSavePassword} />
                </List>
                <SubmitButton
                    text="Вход"
                    action={handleLogin}
                    isLoading={loading}
                    completed={false}
                    setCompleted={() => null}
                    isActive={isSubmitActive}
                />
            </List>
        </div>
    )
}

export default Inputs
