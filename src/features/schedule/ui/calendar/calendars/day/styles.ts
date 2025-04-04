import styled from 'styled-components'

import { MEDIA_QUERIES } from '@shared/ui/consts'

import { CALENDAR_HEIGHT_DESKTOP, CALENDAR_HEIGHT_MOBILE, CALENDAR_HEIGHT_TABLET } from '../../consts'
import { Wrapper } from '../../ui/wrapper'

export const DayCalendarWrapper = styled(Wrapper)`
    height: ${CALENDAR_HEIGHT_DESKTOP};

    ${MEDIA_QUERIES.isTablet} {
        height: ${CALENDAR_HEIGHT_TABLET};
    }

    ${MEDIA_QUERIES.isMobile} {
        height: ${CALENDAR_HEIGHT_MOBILE};
    }
`

export const EventInfo = styled.div`
    min-width: 340px;
    max-width: 340px;
    height: calc(100vh - 220px);
    z-index: 10;
    background: var(--block-content);
    border-radius: 10px;
    top: 0;
    overflow: hidden auto;
    box-shadow: var(--block-shadow);

    ${MEDIA_QUERIES.isSmallDesktop} {
        display: none;
    }
`

export const EventsCarousel = styled.div`
    overflow-y: hidden;
    overflow-x: auto;
    height: 100%;
    width: 100%;
    gap: 32px;
    display: flex;
    scroll-snap-type: x mandatory;

    & {
        .calendar-wrapper {
            scroll-snap-align: center;
            min-width: 100%;
        }
    }
`
