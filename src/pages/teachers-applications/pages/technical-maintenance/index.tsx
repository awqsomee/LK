import React, { useEffect } from 'react'
import { useHistory } from 'react-router'

import { MAINTENANCE } from '@shared/routing'
import { Loading } from '@shared/ui/atoms'
import Flex from '@shared/ui/flex'

const TechnicalMaintenance = () => {
    const history = useHistory()

    useEffect(() => {
        history.push(MAINTENANCE)
    }, [])

    return (
        <Flex h="100%" d="column" ai="center" jc="center">
            <Loading />
        </Flex>
    )
}
export default TechnicalMaintenance
