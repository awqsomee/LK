import { PageRoute } from '@shared/routing'

import {
    CantAccessPage,
    FeedbackPage,
    ForgotPasswordPage,
    GetYourLoginPage,
    LoginPage,
    MaintenancePage,
    MemoFreshmenPage,
    MemoTeacherPage,
} from './pages'

export const publicPages: PageRoute = {
    login: LoginPage,
    'forgot-password': ForgotPasswordPage,
    feedback: FeedbackPage,
    'cant-access': CantAccessPage,
    'get-login': GetYourLoginPage,
    'student-attention': MemoFreshmenPage,
    'employee-attention': MemoTeacherPage,
    maintenance: MaintenancePage,
}
