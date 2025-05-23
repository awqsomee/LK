import { WorkType } from '@shared/api/physical-education'

export const SelectorData: { id: WorkType; title: string }[] = [
    { id: WorkType.Activist, title: 'Активист' },
    { id: WorkType.Competition, title: 'Соревнование' },
    { id: WorkType.GTO, title: 'ГТО' },
    { id: WorkType.InternalTeam, title: 'Сборная' },
    { id: WorkType.OnlineWork, title: 'Работа в LMS' },
    { id: WorkType.Science, title: 'Научная работа' },
]
