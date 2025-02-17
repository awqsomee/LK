import React, { useEffect, useState } from 'react'

import { useUnit } from 'effector-react'
import styled from 'styled-components'

import { parseFilesToFormData } from '@pages/applications/lib/prepare-form-data'
import BaseApplicationWrapper from '@pages/applications/ui/base-application-wrapper'

import { increasedScholarshipModel } from '@entities/increased-scholarship'

import { ApplicationFormCodes } from '@shared/consts/models/application-form-codes'
import { userModel } from '@shared/session'
import { Divider, FormBlock, Input, Message, SubmitButton, TextArea, Title } from '@shared/ui/atoms'
import Checkbox from '@shared/ui/checkbox'
import FileInput from '@shared/ui/file-input'
import Flex from '@shared/ui/flex'
import TextHeader from '@shared/ui/molecules/text-header'
import Select from '@shared/ui/select'
import Subtext from '@shared/ui/subtext'

const typesOfActivity = [
    { id: 0, title: 'Учебная деятельность' },
    { id: 1, title: 'Научно-исследовательская деятельность' },
    { id: 2, title: 'Общественная деятельность' },
    { id: 3, title: 'Культурно-творческая деятельность' },
    { id: 4, title: 'Спортивная деятельность' },
]

const IncreasedStateAcademicScholarship = () => {
    const pageMounted = useUnit(increasedScholarshipModel.events.pageMounted)
    const { value: completed } = useUnit(increasedScholarshipModel.fields.completed)
    useEffect(() => {
        pageMounted()
    }, [])

    return (
        <BaseApplicationWrapper isDone={completed ?? false}>
            <FormBlock noHeader>
                <Fio />
                <Tel />
                <Email />
                <Divider />
                <InfoMessage />
                <TypeOfActivity />
                <ListOfAchievements />
                <Сriteria />
                <Files />
                <BankDetails />
                <Submit />
            </FormBlock>
        </BaseApplicationWrapper>
    )
}

function Fio() {
    const { value, setValue } = useUnit(increasedScholarshipModel.fields.fio)
    return <Input title="ФИО" placeholder="ФИО" value={value} setValue={setValue} isActive={false} />
}

function Tel() {
    const { value, setValue } = useUnit(increasedScholarshipModel.fields.tel)
    return <Input title="Телефон" placeholder="Телефон" value={value} setValue={setValue} type="tel" mask required />
}

function Email() {
    const { value, setValue } = useUnit(increasedScholarshipModel.fields.email)
    return <Input title="Email" placeholder="Email" value={value} setValue={setValue} type="email" />
}

function TypeOfActivity() {
    const [value, setValue] = useUnit([
        increasedScholarshipModel.fields.typeOfActivity.value,
        increasedScholarshipModel.fields.typeOfActivity.setValue,
    ])

    return (
        <Select
            title="Вид деятельности"
            items={typesOfActivity}
            selected={value}
            setSelected={setValue}
            required
            width="100%"
            placeholder="Вид деятельности"
        />
    )
}

function ListOfAchievements() {
    const { value, setValue } = useUnit(increasedScholarshipModel.fields.listOfAchievements)
    return (
        <TextArea
            title="Перечень достижений в выбранном виде деятельности"
            placeholder="Перечень достижений в выбранном виде деятельности"
            value={value}
            setValue={setValue}
            required
        />
    )
}

function Сriteria() {
    const { value: typeOfActivity } = useUnit(increasedScholarshipModel.fields.typeOfActivity)
    if (!typeOfActivity) return null

    return (
        <>
            <TextHeader visible={true} title="Критерии" />
            {(typeOfActivity.id as (typeof typesOfActivity)[number]['id']) === 0 ? (
                <>
                    <ConsecutiveExcellentGradesCheck />
                    <ProjectAwardCheck />
                    <AcademicCompetitionWinnerCheck />
                    <Flex gap="2rem" jc="flex-start">
                        <ConsecutiveExcellentAssessmentsCheck />
                        <ConsecutiveExcellentAssessmentsAmount />
                        (справочно)
                    </Flex>
                </>
            ) : (typeOfActivity.id as (typeof typesOfActivity)[number]['id']) === 1 ? (
                <>
                    <ResearchAwardOrGrantCheck />
                    <ScientificPublicationCheck />
                </>
            ) : (typeOfActivity.id as (typeof typesOfActivity)[number]['id']) === 2 ? (
                <>
                    <ParticipationCheck />
                    <InfoSupportCheck />
                </>
            ) : (typeOfActivity.id as (typeof typesOfActivity)[number]['id']) === 3 ? (
                <>
                    <CulturalCreativeAwardCheck />
                    <PublicWorkPresentationCheck />
                    <PublicCulturalActivityCheck />
                </>
            ) : (typeOfActivity.id as (typeof typesOfActivity)[number]['id']) === 4 ? (
                <>
                    <SportsAwardCheck />
                    <SportsParticipationCheck />
                    <GtoGoldBadgeCheck />
                </>
            ) : null}
        </>
    )
}

function ConsecutiveExcellentGradesCheck() {
    const { value, setValue } = useUnit(increasedScholarshipModel.fields.consecutiveExcellentGradesCheck)
    return (
        <Checkbox
            checked={value}
            setChecked={setValue}
            text={
                'Получение студентом в течение не менее 2-х следующих друг за другом промежуточных аттестаций, предшествующих назначению повышенной государственной академической стипендии, только оценок «отлично»'
            }
        />
    )
}

function ProjectAwardCheck() {
    const { value, setValue } = useUnit(increasedScholarshipModel.fields.projectAwardCheck)
    return (
        <Checkbox
            checked={value}
            setChecked={setValue}
            text={
                'получение студентом в течение 1 года, предшествующего назначению повышенной государственной академической стипендии, награды (приза) за результаты в проектной деятельности и (или) опытно-конструкторской работы'
            }
        />
    )
}

function AcademicCompetitionWinnerCheck() {
    const { value, setValue } = useUnit(increasedScholarshipModel.fields.academicCompetitionWinnerCheck)
    return (
        <Checkbox
            checked={value}
            setChecked={setValue}
            text={
                'признание студента победителем или призёром международной, всероссийской, ведомственной или региональной олимпиады, конкурса, соревнования, состязания или иного мероприятия, направленных на выявление учебных достижений студентов, проведённых в течение 1 года, предшествующих назначению повышенной государственной академической стипендии'
            }
        />
    )
}

function ConsecutiveExcellentAssessmentsCheck() {
    const { value, setValue } = useUnit(increasedScholarshipModel.fields.consecutiveExcellentAssessmentsCheck)
    return (
        <Checkbox
            checked={value}
            setChecked={setValue}
            text="количество сданных промежуточных аттестаций подряд на «отлично»:"
        />
    )
}

function ConsecutiveExcellentAssessmentsAmount() {
    const { value, setValue } = useUnit(increasedScholarshipModel.fields.consecutiveExcellentAssessmentsAmount)
    return (
        <Input
            placeholder="Количество"
            value={value}
            setValue={setValue}
            type="email"
            required
            width="20%"
            minWidth="135px"
        />
    )
}

function ResearchAwardOrGrantCheck() {
    const { value, setValue } = useUnit(increasedScholarshipModel.fields.researchAwardOrGrantCheck)
    return (
        <Checkbox
            checked={value}
            setChecked={setValue}
            text={
                'Получение студентом в течение 1 года, предшествующего назначению повышенной государственной академической стипендии награды (приза) за результаты научно-исследовательской работы, проводимой студентом; документа, удостоверяющего исключительное право студента на достигнутый им научный (научно-методический, научно-технический, научно-творческий) результат интеллектуальной деятельности (патент, свидетельство); гранта на выполнение научно-исследовательской работы'
            }
        />
    )
}

function ScientificPublicationCheck() {
    const { value, setValue } = useUnit(increasedScholarshipModel.fields.scientificPublicationCheck)
    return (
        <Checkbox
            checked={value}
            setChecked={setValue}
            text={
                'Наличие у студента публикации в научном (учебно-научном, учебно-методическом) международном, всероссийском, ведомственном или региональном издании, в издании федеральной государственной образовательной организации высшего образования или иной организации в течение 1 года, предшествующего назначению повышенной государственной академической стипендии'
            }
        />
    )
}

function ParticipationCheck() {
    const { value, setValue } = useUnit(increasedScholarshipModel.fields.participationCheck)
    return (
        <Checkbox
            checked={value}
            setChecked={setValue}
            text={
                'Систематическое участие студента в течение 1 года, предшествующего назначению повышенной государственной академической стипендии, в проведении (обеспечении проведения) общественно значимой деятельности социального, культурного, правозащитного, общественно полезного характера, организуемой федеральной государственной образовательной организацией высшего образования или с её участием, подтверждаемое документально'
            }
        />
    )
}

function InfoSupportCheck() {
    const { value, setValue } = useUnit(increasedScholarshipModel.fields.infoSupportCheck)
    return (
        <Checkbox
            checked={value}
            setChecked={setValue}
            text={
                'Систематическое участие студента в течение 1 года, предшествующего назначению повышенной государственной академической стипендии, в деятельности по информационному обеспечению общественно значимых мероприятий, общественной жизни федеральной государственной образовательной организации высшего образования, подтверждаемое документально'
            }
        />
    )
}

function CulturalCreativeAwardCheck() {
    const { value, setValue } = useUnit(increasedScholarshipModel.fields.culturalCreativeAwardCheck)
    return (
        <Checkbox
            checked={value}
            setChecked={setValue}
            text={
                'Получение студентом в течение 1 года, предшествующего назначению повышенной государственной академической стипендии, награды (приза) за результаты культурно-творческой деятельности, осуществленной им в рамках деятельности, проводимой федеральной государственной образовательной организацией высшего образования или иной организацией, в том числе в рамках конкурса, смотра и иного аналогичного международного, всероссийского, ведомственного, регионального мероприятия, подтверждаемое документально'
            }
        />
    )
}

function PublicWorkPresentationCheck() {
    const { value, setValue } = useUnit(increasedScholarshipModel.fields.publicWorkPresentationCheck)
    return (
        <Checkbox
            checked={value}
            setChecked={setValue}
            text={
                'Публичное представление в течение 1 года, предшествующего назначению повышенной государственной академической стипендии, созданного им произведения литературы или искусства (литературного произведения, драматического, музыкально-драматического произведения, сценарного произведения, хореографического произведения, пантомимы, музыкального произведения с текстом или без текста, аудиовизуального произведения, произведения живописи, скульптуры, графики, дизайна, графического рассказа, комикса, другого произведения изобразительного искусства, произведения декоративно-прикладного, сценографического искусства, произведения архитектуры, градостроительства, садово-паркового искусства, в том числе в виде проекта, чертежа, изображения, макета, фотографического произведения, произведения, полученного способом, аналогичным фотографии, географической, геологической, другой карты, плана, эскиза, пластического произведения, относящегося к географии, топографии и другим наукам, а также другого произведения), подтверждаемое документально'
            }
        />
    )
}

function PublicCulturalActivityCheck() {
    const { value, setValue } = useUnit(increasedScholarshipModel.fields.publicCulturalActivityCheck)
    return (
        <Checkbox
            checked={value}
            setChecked={setValue}
            text={
                'Систематическое участие студента в течение 1 года, предшествующего назначению повышенной государственной академической стипендии, в проведении (обеспечении проведения) публичной культурно-творческой деятельности воспитательного, пропагандистского характера и иной общественно значимой публичной культурно-творческой деятельности, подтверждаемое документально'
            }
        />
    )
}

function SportsAwardCheck() {
    const { value, setValue } = useUnit(increasedScholarshipModel.fields.sportsAwardCheck)
    return (
        <Checkbox
            checked={value}
            setChecked={setValue}
            text={
                'Получение студентом в течение 1 года, предшествующего назначению повышенной государственной академической стипендии, награды (приза) за результаты спортивной деятельности, осуществленной им в рамках спортивных международных, всероссийских, ведомственных, региональных мероприятий, проводимых федеральной государственной образовательной организацией высшего образования или иной организацией'
            }
        />
    )
}

function SportsParticipationCheck() {
    const { value, setValue } = useUnit(increasedScholarshipModel.fields.sportsParticipationCheck)
    return (
        <Checkbox
            checked={value}
            setChecked={setValue}
            text={
                'Систематическое участие студента в течение 1 года, предшествующего назначению повышенной государственной академической стипендии, в спортивных мероприятия воспитательного, пропагандистского характера и (или) иных общественно значимых спортивных мероприятиях, подтверждаемое документально'
            }
        />
    )
}

function GtoGoldBadgeCheck() {
    const { value, setValue } = useUnit(increasedScholarshipModel.fields.gtoGoldBadgeCheck)
    return (
        <Checkbox
            checked={value}
            setChecked={setValue}
            text={
                'Выполнение нормативов и требований золотого знака отличия «Всероссийского физкультурно-спортивного комплекса «Готов к труду и обороне» (ГТО) соответствующей возрастной группы на дату назначения повышенной государственной академической стипендии'
            }
        />
    )
}

function InfoMessage() {
    const { value: typeOfActivity } = useUnit(increasedScholarshipModel.fields.typeOfActivity)
    if (!typeOfActivity) return <Message type="info">Выберите вид деятельности:</Message>
    return (
        <Message type="info">
            Присоединить файлы, не более трех:
            {typeOfActivity.id === 0 ? (
                <Ul>
                    <li>служебная записка от кафедры, УНИР и др. структурных подразделений;</li>
                    <li>диплом;</li>
                    <li>грамота;</li>
                    <li>свидетельство;</li>
                    <li>документы, подтверждающие участие в конференциях, конкурсах, олимпиадах, мероприятиях;</li>
                    <li>иные документы, подтверждающие достижения студента.</li>
                </Ul>
            ) : typeOfActivity.id === 1 ? (
                <Ul>
                    <li>служебная записка от кафедры, УНИР и др. структурных подразделений;</li>
                    <li>диплом;</li>
                    <li>грамота;</li>
                    <li>свидетельство;</li>
                    <li>список научных трудов, публикаций, выступлений;</li>
                    <li>публикации;</li>
                    <li>документы, подтверждающие участие в конференциях, конкурсах, олимпиадах, мероприятиях;</li>
                    <li>иные документы, подтверждающие достижения студента.</li>
                </Ul>
            ) : typeOfActivity.id === 2 ? (
                <Ul>
                    <li>выписка из решения профсоюзной организации университета;</li>
                    <li>диплом;</li>
                    <li>грамота;</li>
                    <li>документы, подтверждающие участие в мероприятиях;</li>
                    <li>иные документы, подтверждающие достижения студента.</li>
                </Ul>
            ) : typeOfActivity.id === 3 ? (
                <Ul>
                    <li>диплом;</li>
                    <li>грамота;</li>
                    <li>свидетельство;</li>
                    <li>документы, подтверждающие участие в мероприятиях;</li>
                    <li>иные документы, подтверждающие достижения студента.</li>
                </Ul>
            ) : typeOfActivity.id === 4 ? (
                <Ul>
                    <li>выписка из решения профсоюзной организации университета;</li>
                    <li>служебная записка от кафедры «Физическое воспитание»;</li>
                    <li>диплом;</li>
                    <li>грамота;</li>
                    <li>документы, подтверждающие разряды, звания;</li>
                    <li>документы, подтверждающие участие в мероприятиях;</li>
                    <li>иные документы, подтверждающие достижения студента.</li>
                </Ul>
            ) : null}
        </Message>
    )
}

function Files() {
    const { value, setValue } = useUnit(increasedScholarshipModel.fields.files)
    return <FileInput files={value} setFiles={setValue} isActive maxFiles={3} formats={['pdf']} />
}

function BankDetails() {
    const { value, setValue } = useUnit(increasedScholarshipModel.fields.bankDetails)

    const user = useUnit(userModel.stores.user)
    if (!user?.finance || user.finance === 'Бюджетное') return null

    return (
        <Flex d="column" gap="0.5rem">
            <Title size={5} align="left" required>
                Прикрепите файл с банковскими реквизитами карты для зачисления стипендии*
            </Title>
            <Subtext>
                Важно! Карта должна быть открыта на имя студента, участвующего в конкурсе, с платежной системой{' '}
                <strong>МИР следующих банков: Сбербанк, ВТБ или Газпромбанк</strong>
            </Subtext>
            <FileInput
                files={value}
                setFiles={setValue}
                isActive
                maxFiles={1}
                formats={['pdf', 'jpeg', 'jpg', 'png']}
            />
        </Flex>
    )
}

function Submit() {
    const { value: completed, setValue: setCompleted } = useUnit(increasedScholarshipModel.fields.completed)
    const user = useUnit(userModel.stores.user)
    const [
        loading,
        sendForm,
        fio,
        tel,
        email,
        typeOfActivity,
        listOfAchievements,
        consecutiveExcellentGradesCheck,
        projectAwardCheck,
        academicCompetitionWinnerCheck,
        consecutiveExcellentAssessmentsCheck,
        consecutiveExcellentAssessmentsAmount,
        researchAwardOrGrantCheck,
        scientificPublicationCheck,
        participationCheck,
        infoSupportCheck,
        culturalCreativeAwardCheck,
        publicWorkPresentationCheck,
        publicCulturalActivityCheck,
        sportsAwardCheck,
        sportsParticipationCheck,
        gtoGoldBadgeCheck,

        files,
        bankDetails,
        criteria,
    ] = useUnit([
        increasedScholarshipModel.stores.loading,
        increasedScholarshipModel.events.sendForm,
        increasedScholarshipModel.fields.fio.value,
        increasedScholarshipModel.fields.tel.value,
        increasedScholarshipModel.fields.email.value,
        increasedScholarshipModel.fields.typeOfActivity.value,
        increasedScholarshipModel.fields.listOfAchievements.value,
        increasedScholarshipModel.fields.consecutiveExcellentGradesCheck.value,
        increasedScholarshipModel.fields.projectAwardCheck.value,
        increasedScholarshipModel.fields.academicCompetitionWinnerCheck.value,
        increasedScholarshipModel.fields.consecutiveExcellentAssessmentsCheck.value,
        increasedScholarshipModel.fields.consecutiveExcellentAssessmentsAmount.value,
        increasedScholarshipModel.fields.researchAwardOrGrantCheck.value,
        increasedScholarshipModel.fields.scientificPublicationCheck.value,
        increasedScholarshipModel.fields.participationCheck.value,
        increasedScholarshipModel.fields.infoSupportCheck.value,
        increasedScholarshipModel.fields.culturalCreativeAwardCheck.value,
        increasedScholarshipModel.fields.publicWorkPresentationCheck.value,
        increasedScholarshipModel.fields.publicCulturalActivityCheck.value,
        increasedScholarshipModel.fields.sportsAwardCheck.value,
        increasedScholarshipModel.fields.sportsParticipationCheck.value,
        increasedScholarshipModel.fields.gtoGoldBadgeCheck.value,
        increasedScholarshipModel.fields.files.value,
        increasedScholarshipModel.fields.bankDetails.value,
        increasedScholarshipModel.fields.criteria.value,
    ])

    const [dataConfirmed, setDataConfirmed] = useState(false)
    const [persDataConfirmed, setPersDataConfirmed] = useState(false)
    const [provisionConfirmed, setProvisionConfirmed] = useState(false)
    const isDone = completed ?? false
    return (
        <>
            <Checkbox
                checked={dataConfirmed}
                setChecked={setDataConfirmed}
                text="Подтверждаю достоверность указанных мной сведений"
            />
            <Checkbox
                checked={persDataConfirmed}
                setChecked={setPersDataConfirmed}
                text="Даю согласие на обработку персональных данных в соответствии с Федеральным законом «О персональных данных» от 27.07.2006 N 152-ФЗ"
            />
            <Checkbox
                checked={provisionConfirmed}
                setChecked={setProvisionConfirmed}
                text={
                    user?.finance === 'Бюджетное' ? (
                        <>
                            С{' '}
                            <a
                                href="https://e.mospolytech.ru/old/storage/files/Poryadok_priema_dokumentov_PGAS.pdf"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Порядком
                            </a>{' '}
                            приема документов на ПГАС ознакомлен
                        </>
                    ) : (
                        <>
                            С{' '}
                            <a
                                href="https://e.mospolytech.ru/old/storage/files/Polozhenie_o_Stipendii_Moskovskogo_Politeha_platnoe.pdf"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Положением
                            </a>{' '}
                            о стипендии Московского Политеха ознакомлен(а)
                        </>
                    )
                }
            />
            <SubmitButton
                text={!isDone ? 'Отправить' : 'Отправлено'}
                action={() => {
                    sendForm({
                        formId: ApplicationFormCodes.HIGH_SCHOLARSHIP,
                        args: {
                            fio,
                            tel,
                            email,
                            'type-of-activity': typeOfActivity?.title,
                            'list-of-achievements': listOfAchievements,

                            'consecutive-excellent-grades-check': consecutiveExcellentGradesCheck,
                            'project-award-check': projectAwardCheck,
                            'academic-competition-winner-check': academicCompetitionWinnerCheck,
                            'consecutive-excellent-assessments-check': consecutiveExcellentAssessmentsCheck,
                            'consecutive-excellent-assessments-amount': consecutiveExcellentAssessmentsAmount,

                            'research-award-or-grant-check': researchAwardOrGrantCheck,
                            'scientific-publication-check': scientificPublicationCheck,

                            'participation-check': participationCheck,
                            'info-support-check': infoSupportCheck,

                            'cultural-creative-award-check': culturalCreativeAwardCheck,
                            'public-work-presentation-check': publicWorkPresentationCheck,
                            'public-cultural-activity-check': publicCulturalActivityCheck,

                            'sports-award-check': sportsAwardCheck,
                            'sports-participation-check': sportsParticipationCheck,
                            'gto-gold-badge-check': gtoGoldBadgeCheck,

                            ...parseFilesToFormData([...files, ...bankDetails]),
                        },
                    })
                }}
                isLoading={loading}
                completed={completed}
                setCompleted={setCompleted}
                repeatable={false}
                buttonSuccessText="Отправлено"
                isDone={isDone}
                isActive={
                    dataConfirmed &&
                    provisionConfirmed &&
                    persDataConfirmed &&
                    !!tel &&
                    !!typeOfActivity &&
                    !!listOfAchievements &&
                    !!files.length &&
                    (!user?.finance || user.finance === 'Бюджетное' || !!bankDetails.length) &&
                    !!criteria
                }
                popUpFailureMessage="Для отправки формы необходимо, чтобы все поля были заполнены"
                popUpSuccessMessage="Данные формы успешно отправлены"
            />
        </>
    )
}

const Ul = styled.ul`
    margin-left: 1rem;
`

export default IncreasedStateAcademicScholarship
