import React from 'react'

import { teacherStatementModel } from '@entities/teachers-statement'

import { ApplicationTeachersFormCodes } from '@shared/consts/models/application-form-codes'
import TemplateFormPage from '@shared/widgets/template-form-page'

import getForm from './lib/get-form'

const PaymentForChildCarePage = () => {
    return (
        <TemplateFormPage
            model={teacherStatementModel}
            getForm={getForm}
            isSpecialField={true}
            formId={ApplicationTeachersFormCodes.PAYMENT_FOR_CHILD_CARE}
        />
    )
}

export default PaymentForChildCarePage
