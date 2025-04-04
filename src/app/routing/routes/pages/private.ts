import { lazy } from 'react'

export const AllPages = lazy(() => import('@pages/all-pages'))
export const ApplicationsPage = lazy(() => import('@pages/applications'))
export const AllStudentsPage = lazy(() => import('@pages/all-students'))
export const AllTeachersPage = lazy(() => import('@pages/all-teachers'))
export const AllStaff = lazy(() => import('@pages/all-staff'))
export const ElectronicInteractionAgreementPage = lazy(() => import('@pages/electronic-interaction-agreement'))
export const AlertsPage = lazy(() => import('@pages/alerts'))
export const Home = lazy(() => import('@pages/home'))
export const InstructionsPage = lazy(() => import('@features/helpful-information/instructions'))
export const SafetyInformation = lazy(() => import('@pages/safety-information'))
export const PaymentsPage = lazy(() => import('@pages/payments'))
export const ProfilePage = lazy(() => import('@pages/profile'))
export const SchedulePage = lazy(() => import('@pages/schedule'))

export const DecreisDirectivesPage = lazy(() => import('@pages/decreis-directives'))
export const MedicalCertificate = lazy(() => import('@pages/medical-certificate'))
export const LkNotificationsPage = lazy(() => import('@pages/lk-notifications'))

export const TechnicalMaintenance = lazy(() => import('@pages/teachers-applications/pages/technical-maintenance'))
export const PhysicalEducationStudent = lazy(() => import('@pages/pe-student'))
export const ChatPage = lazy(() => import('@pages/chat'))
