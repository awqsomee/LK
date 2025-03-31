import React from 'react'

import PageIsNotReady from '@pages/page-is-not-ready'

const Maintenance = () => {
    return (
        <PageIsNotReady
            href="/"
            buttonText="На главную"
            errorText={'Сервис технического обслуживания находится в разработке'}
        />
    )
}

export default Maintenance
