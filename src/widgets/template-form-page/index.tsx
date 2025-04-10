import { useEffect, useState } from 'react'
import React from 'react'

import TemplateForm, { TemplateFormProps } from '@features/template-form'

import { CenterPage, Error, FormBlock, Wrapper } from '@shared/ui/atoms'
import GoBackButton from '@shared/ui/go-back-button'
import { IInputArea } from '@shared/ui/input-area/model'

type Props<T extends { last_update?: string }> = TemplateFormProps<T> & {
    pageAvailability?: {
        isAvailable: boolean
        text?: string
    }
    goBack?: string
    formId?: string
    isSpecialField?: boolean
    title?: string
}

const TemplateFormPage = <T extends { last_update?: string }>({
    model,
    getForm,
    successMessage,
    goBack,
    pageAvailability,
    isAvailableToSend = true,
    repeatable = true,
    formId,
    isSpecialField = false,
    title,
}: Props<T>) => {
    const { data, error } = model.selectors.useForm()
    const [form, setForm] = useState<IInputArea | null>(null)

    if ((!!pageAvailability && !pageAvailability?.isAvailable) ?? false) {
        return <Error text={pageAvailability?.text ?? 'Вам не доступен этот раздел'} />
    }

    useEffect(() => {
        if (!!data) {
            setForm(getForm(data))
        }
    }, [data])

    return (
        <Wrapper load={() => model.effects.getFormFx()} error={error} data={form}>
            <CenterPage>
                {!!form && !!setForm && (
                    <FormBlock>
                        <GoBackButton text={goBack} visible={!!goBack} />
                        {title && <h2>{title}</h2>}
                        <TemplateForm
                            model={model}
                            successMessage={successMessage}
                            isAvailableToSend={isAvailableToSend}
                            repeatable={repeatable}
                            getForm={getForm}
                            outerForm={form}
                            formId={formId}
                            isSpecialField={isSpecialField}
                        />
                    </FormBlock>
                )}
            </CenterPage>
        </Wrapper>
    )
}

export default TemplateFormPage
