import React from 'react'

import TemplateFormPage from '@widgets/template-form-page'

import { teacherStatementModel } from '@entities/teachers-statement'

import { ApplicationTeachersFormCodes } from '@shared/consts/models/application-form-codes'

import getForm from './lib/get-form'

const IssuanceOfLicensesPage = () => {
    return (
        <TemplateFormPage
            model={teacherStatementModel}
            getForm={getForm}
            isSpecialField={true}
            formId={ApplicationTeachersFormCodes.ISSUANCE_OF_LICENSES}
        />
    )
}

export default IssuanceOfLicensesPage
