import { lazy } from 'react'

export const LoginPage = lazy(() => import('@pages/login'))
export const ForgotPasswordPage = lazy(() => import('@pages/forgot-password'))
export const FeedbackPage = lazy(() => import('@pages/feedback'))
export const CantAccessPage = lazy(() => import('@pages/cant-access'))
export const GetYourLoginPage = lazy(() => import('@pages/get-your-login'))
export const MemoFreshmenPage = lazy(() => import('@pages/memo-freshmen'))
export const MemoTeacherPage = lazy(() => import('@pages/memo-teacher'))
export const MaintenancePage = lazy(() => import('@pages/maintenance'))
