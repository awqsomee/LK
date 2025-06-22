import React, { useEffect, useState } from 'react'

import { useUnit } from 'effector-react'

import { globalAppSendForm } from '@pages/applications/lib'
import BaseApplicationWrapper from '@pages/applications/ui/base-application-wrapper'
import PageIsNotReady from '@pages/page-is-not-ready'

import checkFormFields from '@features/send-form/check-form-fields'

import { applicationsModel } from '@entities/applications'

import { isProduction } from '@shared/consts'
import { ApplicationFormCodes } from '@shared/consts/models/application-form-codes'
import { userModel } from '@shared/session'
import { Error, FormBlock, SubmitButton } from '@shared/ui/atoms'
import InputArea from '@shared/ui/input-area'
import { IInputArea } from '@shared/ui/input-area/model'

import getForm, { accommodationForGraduatesEndDate } from './lib/get-form'

type LoadedState = React.Dispatch<React.SetStateAction<IInputArea>>

const AccommodationForGraduatesPage = () => {
    const user = useUnit(userModel.stores.user)
    const [form, setForm] = useState<IInputArea | null>(null)
    const {
        data: { dataUserApplication },
    } = applicationsModel.selectors.useApplications()
    const [completed, setCompleted] = useState(false)
    const [loading, setLoading] = useState(false)
    const isDone = completed ?? false

    useEffect(() => {
        if (!!dataUserApplication) {
            setForm(getForm(dataUserApplication))
        }
    }, [dataUserApplication])

    if (
        !['4', '5', '6'].includes(user?.course ?? '') &&
        !user?.status?.toLocaleLowerCase()?.includes('окончил') &&
        !(user?.degreeLevel?.toLocaleLowerCase() === 'магистратура' && user?.course === '2')
    )
        return (
            <PageIsNotReady
                isRedirectButtonVisible={false}
                errorText={'Сервис доступен только выпускникам университета, проживающих в общежитии'}
            />
        )

    if (isProduction && new Date() > accommodationForGraduatesEndDate)
        return <Error text="Подача заявок закончилась"></Error>

    return (
        <BaseApplicationWrapper isDone={isDone}>
            {!!form && !!setForm && (
                <FormBlock noHeader>
                    <InputArea {...form} collapsed={isDone} setData={setForm as LoadedState} />
                    <SubmitButton
                        text={'Отправить'}
                        action={() =>
                            globalAppSendForm(
                                ApplicationFormCodes.ACCOMMODATION_FOR_GRADUATES,
                                [form],
                                setLoading,
                                setCompleted,
                                false,
                            )
                        }
                        isLoading={loading}
                        completed={completed}
                        setCompleted={setCompleted}
                        repeatable={false}
                        buttonSuccessText="Отправлено"
                        isDone={isDone}
                        isActive={checkFormFields(form)}
                        popUpFailureMessage={'Для отправки формы необходимо, чтобы все поля были заполнены'}
                        popUpSuccessMessage="Данные формы успешно отправлены"
                    />
                </FormBlock>
            )}
        </BaseApplicationWrapper>
    )
}

export default AccommodationForGraduatesPage
