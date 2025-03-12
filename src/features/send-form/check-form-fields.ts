import { CheckboxDocs, IComplexInputAreaData, IInputArea, IInputAreaData } from '@shared/ui/input-area/model'
import { SpecialFieldsNameConfig } from '@shared/ui/input-area/types'

const checkFormFields = (form: IInputArea, specialFieldsNameConfig?: SpecialFieldsNameConfig) => {
    const isCheckDocument = !form.documents?.required || !!form.documents.files.length
    const expandableVerified = checkExpandable(form)

    return (
        !(form.data as IInputAreaData[]).find((el) => {
            if (el.type === 'date' && (el.maxValueInput || el.minValueInput)) {
                const parsedDate = new Date(el.value?.toString() ?? 0)
                if (el.minValueInput) {
                    const parsedMinDate = new Date(el.minValueInput)

                    if (parsedDate < parsedMinDate) return true
                }
                if (el.maxValueInput) {
                    const parsedMaxDate = new Date(el.maxValueInput)

                    if (parsedDate > parsedMaxDate) return true
                }
            }

            const inputLength = el.value?.toString()?.length
            if (el.minValueLength && inputLength && inputLength < el.minValueLength) return true

            if (
                !!specialFieldsNameConfig &&
                !!el.specialType &&
                !Object.values(specialFieldsNameConfig).includes(el.specialType)
            ) {
                return null
            }

            if (el.type === 'checkbox-docs')
                if (el.required) return !(el.items as CheckboxDocs[]).find((item) => !!item.files.length)
                else
                    return (el.items as CheckboxDocs[])?.find(
                        (item) => item.value && item.required && !item.files.length,
                    )

            return !el.value && el.required
        }) &&
        isCheckDocument &&
        expandableVerified
    )
}

function checkExpandable(form: IInputArea) {
    if (!form.addNew) return true

    const isEmpty = !form.data.length
    const canBeEmpty = (form.default as IComplexInputAreaData)[0].every(
        (field) => !field.required || form.optionalCheckbox?.value,
    )
    if (isEmpty && canBeEmpty) return true

    if (
        !isEmpty &&
        (form.data as IComplexInputAreaData).every((row) => row.every((field) => !field.required || field.value))
    )
        return true

    return false
}

export default checkFormFields
