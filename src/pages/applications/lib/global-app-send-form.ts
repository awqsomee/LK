import { applicationsModel } from '@entities/applications'

import { ApplicationFormCodes, ApplicationTeachersFormCodes } from '@shared/consts/models/application-form-codes'
import { IInputArea } from '@shared/ui/input-area/model'

import { globalPrepareFormData } from './prepare-form-data'

const globalAppSendForm = async (
    formId: ApplicationFormCodes | ApplicationTeachersFormCodes,
    inputAreas: IInputArea[],
    setLoading: (loading: boolean) => void,
    setCompleted: (loading: boolean) => void,
    isAttachedFiles = false,
) => {
    setLoading(true)

    const result = globalPrepareFormData(formId, inputAreas, isAttachedFiles)

    try {
        await applicationsModel.effects.postApplicationFx({ formId: formId, args: result })
        setLoading(false)
        setCompleted(true)
    } catch (error) {
        setLoading(false)
    }
}

export default globalAppSendForm
