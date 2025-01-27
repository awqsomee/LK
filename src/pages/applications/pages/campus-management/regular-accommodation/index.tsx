import React, { useEffect, useState } from 'react'

import { applicationsModel } from '@entities/applications'
import { userModel } from '@entities/user'
import { listConfigCert } from '@features/applications/lib/get-list-configs-certificate'
import StepByStepForm, { StagesConfigsT } from '@features/applications/ui/molecules/step-by-step-form'
import { getAdditionally, getDisability, getRegistration, globalAppSendForm } from '@pages/applications/lib'
import BaseApplicationWrapper from '@pages/applications/ui/base-application-wrapper'
import { Error, FormBlock, SubmitButton, Title } from '@ui/atoms'
import { IInputArea } from '@ui/input-area/model'
import { ApplicationFormCodes } from '@utility-types/application-form-codes'
import checkFormFields from '@utils/check-form-fields'

import { CampusError } from '../ui/error'
import getForm from './lib/get-form'

type LoadedState = React.Dispatch<React.SetStateAction<IInputArea>>

const RegularAccommodationPage = () => {
    const [form, setForm] = useState<IInputArea | null>(null)
    const [kvdCert, setKvdCert] = useState<IInputArea>(listConfigCert.kvdCert)
    const [fluorographyCert, setFluorographyCert] = useState<IInputArea>(listConfigCert.fluorographyCert)
    const [vichRwCert, setVichRwCert] = useState<IInputArea>(listConfigCert.vichRwCert)
    const [graftCert, setGraftCert] = useState<IInputArea>(listConfigCert.graftCert)

    const {
        data: { dataUserApplication },
    } = applicationsModel.selectors.useApplications()
    const {
        data: { user },
    } = userModel.selectors.useUser()
    const [completed, setCompleted] = useState(false)
    const [loading, setLoading] = useState(false)
    const [disability, setDisability] = useState<IInputArea | null>(null)
    const [registration, setRegistration] = useState<IInputArea | null>(null)
    const [additionally, setAdditionally] = useState<IInputArea | null>(null)
    const isDone = completed ?? false

    const isForm = !!form && !!registration && !!disability && !!additionally

    if (user?.educationForm !== 'Очная') {
        return <Error text={'Сервис доступен только для обучающихся очной формы'} />
    }

    useEffect(() => {
        if (!!dataUserApplication) {
            setForm(getForm(dataUserApplication))
            setDisability(getDisability())
            setRegistration(getRegistration())
            setAdditionally(getAdditionally())
        }
    }, [dataUserApplication])

    if (!isForm) {
        return null
    }

    if (new Date() < new Date(2024, 8, 15)) return <CampusError />

    const stagesConfigs: StagesConfigsT = [
        [{ dataForm: form, setDataForm: setForm as LoadedState }],
        [{ dataForm: registration, setDataForm: setRegistration as LoadedState }],
        [{ dataForm: kvdCert, setDataForm: setKvdCert as LoadedState }],
        [{ dataForm: fluorographyCert, setDataForm: setFluorographyCert as LoadedState }],
        [{ dataForm: vichRwCert, setDataForm: setVichRwCert as LoadedState }],
        [{ dataForm: graftCert, setDataForm: setGraftCert as LoadedState }],
        [{ dataForm: additionally, setDataForm: setAdditionally as LoadedState }],
    ]

    return (
        <BaseApplicationWrapper isDone={isDone}>
            <FormBlock>
                <Title size={4} align="left">
                    Предоставление права проживания (очная форма)
                </Title>
                <StepByStepForm stagesConfig={stagesConfigs} />
                <SubmitButton
                    text={'Отправить'}
                    action={() =>
                        globalAppSendForm(
                            ApplicationFormCodes.USG_GETHOSTEL_O,
                            [
                                form,
                                registration,
                                disability,
                                additionally,
                                kvdCert,
                                fluorographyCert,
                                vichRwCert,
                                graftCert,
                            ] as IInputArea[],
                            setLoading,
                            setCompleted,
                        )
                    }
                    isLoading={loading}
                    completed={completed}
                    setCompleted={setCompleted}
                    repeatable={false}
                    buttonSuccessText="Отправлено"
                    isDone={isDone}
                    isActive={
                        checkFormFields(form) &&
                        checkFormFields(fluorographyCert) &&
                        checkFormFields(vichRwCert) &&
                        checkFormFields(graftCert) &&
                        checkFormFields(kvdCert) &&
                        !!registration?.documents?.files.length
                    }
                    popUpFailureMessage={'Для отправки формы необходимо, чтобы все поля были заполнены'}
                    popUpSuccessMessage="Данные формы успешно отправлены"
                />
            </FormBlock>
        </BaseApplicationWrapper>
    )
}

export default RegularAccommodationPage
