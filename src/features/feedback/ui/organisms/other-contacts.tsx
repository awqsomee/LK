import React from 'react'

import { Message } from '@shared/ui/atoms'

export function OtherContacts() {
    return (
        <Message lineHeight="1.5rem" title="Уважаемые коллеги!" type="info" gap="0.5rem" fontSize="0.9rem">
            <p>
                Для удобства сотрудников в условиях дистанционной работы Московского Политеха мы запустили линию
                консультирования по вопросам ИТ через приложение WhatsApp.
            </p>
            <p>
                Линия консультаций Техподдержки ИТ доступна по номеру +7 985 770 21 96 – добавьте его себе в контакты и
                пишите вопросы нам в самом распространённом мессенджере.
            </p>
            <p>
                Также мы запустили функцию автоматической фиксации всех заявок, поступающих через Личный кабинет{' '}
                <a href="e.mospolytech.ru">e.mospolytech.ru</a> и на почту{' '}
                <a href="mailto:help@mospolytech.ru">help@mospolytech.ru</a>. Просьба направлять сложные заявки на
                обслуживание и решение вопросов по ИТ с помощью этих способов – это позволит более точно описать
                проблему.
            </p>
            <p>
                Напомню, что с 1 апреля 2020 года заявки по вопросам технической поддержки компьютеров и программного
                обеспечения, кроме внутреннего номера 1111, принимаются по телефонам: +79853504173, +79853503944,
                +79853523122
            </p>
            <p>
                Уважаемый пользователь! Для ускорения технической поддержки удалённо, просим Вас скачать программу
                удаленного доступа Ассистент по ссылке:{' '}
                <a href="https://мойассистент.рф/%D1%81%D0%BA%D0%B0%D1%87%D0%B0%D1%82%D1%8C/Download/540">
                    мойассистент.рф
                </a>
            </p>
        </Message>
    )
}
