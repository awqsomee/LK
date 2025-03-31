import React from 'react'

import { schedulePages } from '@pages/routes'
import SettingsPage from '@pages/settings'

import { PageRoute } from '@shared/routing'

import {
    AlertsPage,
    AllPages,
    AllStudentsPage,
    AllTeachersPage,
    ChatPage,
    DecreisDirectivesPage,
    ElectronicInteractionAgreementPage,
    FeedbackPage,
    HelpfulInformation,
    Home,
    InstructionsPage,
    LkNotificationsPage,
    MaintenancePage,
    ProfilePage,
    SafetyInformation,
    SchedulePage,
    TechnicalMaintenance,
} from './pages'

export const privatePages: PageRoute = {
    all: AllPages,
    doclist: DecreisDirectivesPage,
    alerts: AlertsPage,
    home: Home,
    settings: SettingsPage,
    profile: ProfilePage,
    'lk-notifications': LkNotificationsPage,
    'electronic-interaction-agreement': ElectronicInteractionAgreementPage,
    chat: ChatPage,
    'specific-chat': ChatPage,
    schedule: SchedulePage,
    'all-students': AllStudentsPage,
    feedback: FeedbackPage,
    instructions: InstructionsPage,
    vaccination: () => {
        React.useEffect(() => {
            window.location.replace('https://e.mospolytech.ru/old/index.php?p=vaccination')
        }, [])

        return null
    },
    'safety-information': SafetyInformation,
    'technical-maintenance': TechnicalMaintenance,
}

export const privateHiddenPages: PageRoute = {
    // 'teachers-schedule':  TeachersSchedule,
    'schedule-filter': SchedulePage,
    ...schedulePages,
    'filtered-all-students': AllStudentsPage,
    // move to student's after #ASM
    'filtered-all-teachers': AllTeachersPage,

    'useful-info-template': HelpfulInformation,
    maintenance: MaintenancePage,
}
