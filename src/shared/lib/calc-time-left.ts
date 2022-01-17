const calcTimeLeft = (eventTime: string, type: 'minutes' | 'days' = 'minutes') => {
    switch (type) {
        case 'minutes':
            const currentTime = new Date()
            const [startTime] = eventTime.split(' - ')
            const [startHour, startMinutes] = startTime.split(':')

            return +startHour * 60 + +startMinutes - (currentTime.getHours() * 60 + currentTime.getMinutes())
        case 'days':
            const date = new Date(eventTime)

            return Math.ceil(Math.floor((date.getTime() - new Date().getTime()) / 1000 / 60 / 60) / 24)
    }
}

export default calcTimeLeft
