import { BiBookReader, BiBrain, BiCheckCircle, BiIdCard, BiInfoCircle, BiRuble, BiStar } from 'react-icons/bi'
import { BsFileMedical } from 'react-icons/bs'
import { FaRegLightbulb } from 'react-icons/fa6'
import { FiBriefcase, FiFileText } from 'react-icons/fi'
import { MdOutlineBedroomChild } from 'react-icons/md'

import { isProduction } from '@shared/consts'

import { IRoutes } from '../consts'
import {
    ACADEMIC_LEAVE_ACCOMMODATION,
    ACAD_PERFORMANCE_ROUTE,
    ACCOMMODATION_CORRESPONDENCE_FORM,
    ACCOMMODATION_FOR_GRADUATES,
    ALL_TEACHERS_ROUTE,
    APPLICATIONS_ROUTE,
    APPLICATION_FOR_SUPERIOR_ROOM_ROUTE,
    ARBITRARY_REQUEST_ROUTE,
    CERTIFICATE_OF_ATTENDANCE,
    CHANGING_PERSONAL_DATA,
    CLARIFICATION_OF_PASSPORT_DATA_ROUTE,
    DORMITORY,
    EXIT_ACADEMIC_LEAVE,
    EXTENSION_ATTESTATION,
    FAMILY_CONTACTS,
    FAMILY_ROOM,
    FINANCIAL_ASSISTANCE,
    FINANCIAL_SUPPORT,
    FULL_TIME_PART_TIME_FORM,
    HOLIDAYS_AFTER_TRAINING,
    INCREASED_STATE_ACADEMIC_SCHOLARSHIP,
    INDEPENDENTLY_DEDUCTED,
    MEDICAL_CERTIFICATE,
    MEDICAL_CERTIFICATES_086,
    MILITARY_COPIES,
    MILITARY_FORM_4,
    MILITARY_FORM_5,
    MILITARY_REGISTRATION,
    MILITARY_REGISTRATION_DOCUMENTS,
    PAPER_CALL,
    PAYMENTS_ROUTE,
    PAYMENT_RECIPIENT,
    PHYSICAL_EDUCATION_STUDENT,
    PREFERENTIAL_ACCOMMODATION,
    PROJECT_ACTIVITIES_ROUTE,
    PROVISION_ACADEMIC_LEAVE,
    REGULAR_ACCOMMODATION,
    RELOCATION_INSIDE_HOSTEL,
    RELOCATION_TO_ANOTHER_HOSTEL,
    RESTORING_THE_MAGNETIC_PASS,
    RETAKE_FOR_DIPLOMA,
    SOCIAL_AGENCIES,
    SOCIAL_SCOLLARSHIP,
    SOFTSKILLS_ROUTE,
    STATE_ACCREDITATION,
    STUDENT_EMPLOYMENT_APPLICATION_ROUTE,
    STUDENT_EMPLOYMENT_TYPE,
    STUDENT_STATUS,
    TAX_CERTIFICATES_ROUTE,
    TAX_CERTIFICATE_ROUTE,
    TERMINATION_OF_EMPLOYMENT_CONTRACT,
    USEFUL_INFO_ROUTE,
} from '../paths'
import { generalHiddenRoutes, generalRoutes } from './private'

export const StartDateSuperiorRoom = 'Jun 26 2024 12:00:00 GMT+0300'
export const EndDateSuperiorRoom = 'Jun 28 2024 12:00:00 GMT+0300'

export const studentRoutes: () => IRoutes = () => ({
    // On this position just to make necessary order
    applications: {
        id: 'applications',
        title: 'Цифровые сервисы',
        icon: FiFileText,
        path: APPLICATIONS_ROUTE,
        color: 'red',
        isTemplate: false,
        group: 'FINANCES_DOCS',
        pageSize: 'big',
        keywords: ['справки', 'справка', 'заявления', 'заявление'],
    },
    ...generalRoutes,
    payments: {
        id: 'payments',
        title: 'Договоры и оплаты',
        icon: BiRuble,
        path: PAYMENTS_ROUTE,
        color: 'green',
        isTemplate: false,
        group: 'FINANCES_DOCS',
        keywords: ['оплата'],
    },
    dormitory: {
        id: 'dormitory',
        title: 'Список ожидания на заселение в общежитие',
        icon: MdOutlineBedroomChild,
        path: DORMITORY,
        color: 'blue',
        isTemplate: false,
        group: 'FINANCES_DOCS',
        show: true,
    },
    softskills: {
        id: 'softskills',
        title: 'Паспорт компетенций',
        icon: BiBrain,
        path: SOFTSKILLS_ROUTE,
        color: 'orange',
        isTemplate: true,
        show: true,
        group: 'LEARNING_ACTIVITIES',
        isExternal: true,
        keywords: ['рсв', 'россия страна возможностей', 'софтскиллс', 'навыки'],
    },
    'acad-performance': {
        id: 'acad-performance',
        title: 'Успеваемость',
        icon: BiCheckCircle,
        path: ACAD_PERFORMANCE_ROUTE,
        color: 'green',
        isTemplate: false,
        group: 'LEARNING_ACTIVITIES',
        keywords: ['оценки', 'экзамены', 'зачеты'],
    },
    'physical-education': {
        id: 'physical-education',
        title: 'Физическая культура',
        icon: FiFileText,
        color: 'lightGreen',
        path: PHYSICAL_EDUCATION_STUDENT,
        pageSize: 'big',
        isTemplate: false,
        group: 'LEARNING_ACTIVITIES',
        keywords: ['физра', 'физическая культура'],
    },
    'project-activity': {
        id: 'project-activity',
        title: 'Проектная деятельность',
        icon: FaRegLightbulb,
        path: PROJECT_ACTIVITIES_ROUTE,
        color: 'orange',
        isTemplate: false,
        group: 'LEARNING_ACTIVITIES',
        keywords: ['пд'],
    },

    'helpful-information': {
        id: 'helpful-information',
        title: 'Полезная информация',
        icon: BiInfoCircle,
        path: USEFUL_INFO_ROUTE,
        color: 'blue',
        isTemplate: true,
        group: 'GENERAL',
    },
    'application-for-superior-room': {
        id: 'application-for-superior-room',
        title: 'Заявка на комнату повышенной комфортности',
        icon: MdOutlineBedroomChild,
        path: APPLICATION_FOR_SUPERIOR_ROOM_ROUTE,
        color: 'blue',
        isTemplate: false,
        group: 'GENERAL',
        show: isProduction ? (new Date() > new Date(EndDateSuperiorRoom) ? false : true) : true,
    },
    'all-teachers': {
        id: 'all-teachers',
        title: 'Сотрудники',
        icon: BiBookReader,
        path: ALL_TEACHERS_ROUTE,
        color: 'orange',
        isTemplate: false,
        group: 'COMMUNICATION',
        keywords: ['преподаватели', 'преподы'],
    },
})

export const studentHiddenRoutes: () => IRoutes = () => ({
    ...generalHiddenRoutes,
    'student-employment-type': {
        id: 'student-employment-type',
        title: 'Практика и трудоустройство',
        icon: BiInfoCircle,
        path: STUDENT_EMPLOYMENT_TYPE,
        color: 'blue',
        isTemplate: false,
        group: 'LEARNING_ACTIVITIES',
        keywords: ['работа'],
    },
    'clarification-of-passport-data': {
        id: 'clarification-of-passport-data',
        title: 'Уточнение паспортных данных',
        icon: FiBriefcase,
        path: CLARIFICATION_OF_PASSPORT_DATA_ROUTE,
        color: 'blue',
        isTemplate: false,
        group: 'FINANCES_DOCS',
        isSubPage: true,
        backButtonText: 'Назад к цифровым сервисам',
        subPageHeaderTitle: '',
        fallbackPrevPage: APPLICATIONS_ROUTE,
    },
    'arbitrary-request': {
        id: 'arbitrary-request',
        title: 'Произвольный запрос',
        icon: FiBriefcase,
        path: ARBITRARY_REQUEST_ROUTE,
        color: 'blue',
        isTemplate: false,
        group: 'FINANCES_DOCS',
        isSubPage: true,
        backButtonText: 'Назад к цифровым сервисам',
        subPageHeaderTitle: '',
        fallbackPrevPage: APPLICATIONS_ROUTE,
    },
    'student-employment-app': {
        id: 'student-employment-app',
        title: 'Трудоустройство студентов',
        icon: FiBriefcase,
        path: STUDENT_EMPLOYMENT_APPLICATION_ROUTE,
        color: 'blue',
        isTemplate: false,
        group: 'FINANCES_DOCS',
        isSubPage: true,
        backButtonText: 'Назад к цифровым сервисам',
        subPageHeaderTitle: '',
        fallbackPrevPage: APPLICATIONS_ROUTE,
    },
    'social-scollarship': {
        id: 'social-scollarship',
        title: 'Социальная стипендия',
        icon: BiIdCard,
        path: SOCIAL_SCOLLARSHIP,
        color: 'blue',
        isTemplate: false,
        group: 'FINANCES_DOCS',
        isSubPage: true,
        backButtonText: 'Назад к цифровым сервисам',
        subPageHeaderTitle: '',
        fallbackPrevPage: APPLICATIONS_ROUTE,
    },
    'certificate-of-attendance': {
        id: 'certificate-of-attendance',
        title: 'Сертификат об обучении',
        icon: BiIdCard,
        path: CERTIFICATE_OF_ATTENDANCE,
        color: 'blue',
        isTemplate: false,
        group: 'FINANCES_DOCS',
        isSubPage: true,
        backButtonText: 'Назад к цифровым сервисам',
        subPageHeaderTitle: '',
        fallbackPrevPage: APPLICATIONS_ROUTE,
    },
    'social-agencies': {
        id: 'social-agencies',
        title: 'Справка в социальные учреждения',
        icon: BiIdCard,
        path: SOCIAL_AGENCIES,
        color: 'blue',
        isTemplate: false,
        group: 'FINANCES_DOCS',
        isSubPage: true,
        backButtonText: 'Назад к цифровым сервисам',
        subPageHeaderTitle: '',
        fallbackPrevPage: APPLICATIONS_ROUTE,
    },
    'paper-call': {
        id: 'paper-call',
        title: 'Справка-вызов',
        icon: BiIdCard,
        path: PAPER_CALL,
        color: 'blue',
        isTemplate: false,
        group: 'FINANCES_DOCS',
        isSubPage: true,
        backButtonText: 'Назад к цифровым сервисам',
        subPageHeaderTitle: '',
        fallbackPrevPage: APPLICATIONS_ROUTE,
    },
    'medical-certificate': {
        id: 'medical-certificate',
        title: 'Предоставление медицинских справок для проживающих в общежитии',
        icon: BsFileMedical,
        path: MEDICAL_CERTIFICATE,
        color: 'blue',
        isTemplate: false,
        isSubPage: true,
        backButtonText: 'Назад к цифровым сервисам',
        subPageHeaderTitle: '',
        fallbackPrevPage: APPLICATIONS_ROUTE,
    },
    'regular-accommodation': {
        id: 'regular-accommodation',
        title: 'Предоставление права проживания (очная форма)',
        icon: BiIdCard,
        path: REGULAR_ACCOMMODATION,
        color: 'blue',
        isTemplate: false,
        isSubPage: true,
        backButtonText: 'Назад к цифровым сервисам',
        subPageHeaderTitle: '',
        fallbackPrevPage: APPLICATIONS_ROUTE,
    },
    'full-time-part-time-form': {
        id: 'full-time-part-time-form',
        title: 'Предоставление права проживания (очно-заочная форма)',
        icon: BiIdCard,
        path: FULL_TIME_PART_TIME_FORM,
        color: 'blue',
        isTemplate: false,
        isSubPage: true,
        backButtonText: 'Назад к цифровым сервисам',
        subPageHeaderTitle: '',
        fallbackPrevPage: APPLICATIONS_ROUTE,
    },
    'accommodation-correspondence-form': {
        id: 'accommodation-correspondence-form',
        title: 'Предоставление права проживания (заочная форма)',
        icon: BiIdCard,
        path: ACCOMMODATION_CORRESPONDENCE_FORM,
        color: 'blue',
        isTemplate: false,
        isSubPage: true,
        backButtonText: 'Назад к цифровым сервисам',
        subPageHeaderTitle: '',
        fallbackPrevPage: APPLICATIONS_ROUTE,
    },
    'academic-leave-accommodation': {
        id: 'academic-leave-accommodation',
        title: 'Предоставление права проживания в период академического отпуска',
        icon: BiIdCard,
        path: ACADEMIC_LEAVE_ACCOMMODATION,
        color: 'blue',
        isTemplate: false,
        isSubPage: true,
        backButtonText: 'Назад к цифровым сервисам',
        subPageHeaderTitle: '',
        fallbackPrevPage: APPLICATIONS_ROUTE,
    },
    'preferential-accommodation': {
        id: 'preferential-accommodation',
        title: 'Предоставление права проживания льготной категории граждан',
        icon: BiIdCard,
        path: PREFERENTIAL_ACCOMMODATION,
        color: 'blue',
        isTemplate: false,
        isSubPage: true,
        backButtonText: 'Назад к цифровым сервисам',
        subPageHeaderTitle: '',
        fallbackPrevPage: APPLICATIONS_ROUTE,
    },
    'family-room': {
        id: 'family-room',
        title: 'Предоставление права проживания в семейной комнате',
        icon: BiIdCard,
        path: FAMILY_ROOM,
        color: 'blue',
        isTemplate: false,
        isSubPage: true,
        backButtonText: 'Назад к цифровым сервисам',
        subPageHeaderTitle: '',
        fallbackPrevPage: APPLICATIONS_ROUTE,
    },
    'termination-of-employment-contract': {
        id: 'termination-of-employment-contract',
        title: 'Расторжение договора найма',
        icon: BiIdCard,
        path: TERMINATION_OF_EMPLOYMENT_CONTRACT,
        color: 'blue',
        isTemplate: false,
        isSubPage: true,
        backButtonText: 'Назад к цифровым сервисам',
        subPageHeaderTitle: '',
        fallbackPrevPage: APPLICATIONS_ROUTE,
    },
    'relocation-inside-hostel': {
        id: 'relocation-inside-hostel',
        title: 'Переселение внутри общежития',
        icon: BiIdCard,
        path: RELOCATION_INSIDE_HOSTEL,
        color: 'blue',
        isTemplate: false,
        isSubPage: true,
        backButtonText: 'Назад к цифровым сервисам',
        subPageHeaderTitle: '',
        fallbackPrevPage: APPLICATIONS_ROUTE,
    },
    'relocation-to-another-hostel': {
        id: 'relocation-to-another-hostel',
        title: 'Переселение в другое общежитие',
        icon: BiIdCard,
        path: RELOCATION_TO_ANOTHER_HOSTEL,
        color: 'blue',
        isTemplate: false,
        isSubPage: true,
        backButtonText: 'Назад к цифровым сервисам',
        subPageHeaderTitle: '',
        fallbackPrevPage: APPLICATIONS_ROUTE,
    },
    'accommodation-for-graduates': {
        id: 'accommodation-for-graduates',
        title: 'Предоставление права проживания в каникулярный период',
        icon: BiIdCard,
        path: ACCOMMODATION_FOR_GRADUATES,
        color: 'blue',
        isTemplate: false,
        isSubPage: true,
        hiddenTitle: true,
        backButtonText: 'Назад к цифровым сервисам',
        subPageHeaderTitle: '',
        fallbackPrevPage: APPLICATIONS_ROUTE,
        show: true,
    },
    'payment-recipient': {
        id: 'payment-recipient',
        title: 'Отправка квитанции об оплате',
        icon: BiIdCard,
        path: PAYMENT_RECIPIENT,
        color: 'blue',
        isTemplate: false,
        isSubPage: true,
        backButtonText: 'Назад к заявлениям',
        subPageHeaderTitle: '',
        fallbackPrevPage: APPLICATIONS_ROUTE,
    },
    'restoring-the-magnetic-pass': {
        id: 'restoring-the-magnetic-pass',
        title: 'Запрос на восстановление магнитного пропуска',
        icon: BiIdCard,
        path: RESTORING_THE_MAGNETIC_PASS,
        color: 'blue',
        isTemplate: false,
        isSubPage: true,
        backButtonText: 'Назад к заявлениям',
        subPageHeaderTitle: '',
        fallbackPrevPage: APPLICATIONS_ROUTE,
    },
    'military-registration-documents': {
        id: 'military-registration-documents',
        title: 'Отправить документы воинского учета',
        icon: BiIdCard,
        path: MILITARY_REGISTRATION_DOCUMENTS,
        color: 'blue',
        isTemplate: false,
        isSubPage: true,
        backButtonText: 'Назад к заявлениям',
        subPageHeaderTitle: '',
        fallbackPrevPage: APPLICATIONS_ROUTE,
        hiddenTitle: true,
    },
    'military-registration': {
        id: 'military-registration',
        title: 'Заполнить личную карточку обучающегося по воинскому учету для получения отсрочки от призыва на военную службу (форма 10)',
        icon: BiStar,
        path: MILITARY_REGISTRATION,
        color: 'red',
        isTemplate: false,
        isSubPage: true,
        backButtonText: 'Назад к заявлениям',
        fallbackPrevPage: APPLICATIONS_ROUTE,
        hiddenTitle: true,
    },
    'military-form-4': {
        id: 'military-form-4',
        title: 'Заказать справку об обучении для студентов в военкомат (форма 4)',
        icon: BiStar,
        path: MILITARY_FORM_4,
        color: 'red',
        isTemplate: false,
        isSubPage: true,
        backButtonText: 'Назад к заявлениям',
        fallbackPrevPage: APPLICATIONS_ROUTE,
        hiddenTitle: true,
    },
    'military-form-5': {
        id: 'military-form-5',
        title: 'Заказать справку об обучении для аспирантов в военкомат (форма 5)',
        icon: BiStar,
        path: MILITARY_FORM_5,
        color: 'red',
        isTemplate: false,
        isSubPage: true,
        backButtonText: 'Назад к заявлениям',
        fallbackPrevPage: APPLICATIONS_ROUTE,
        hiddenTitle: true,
    },
    'military-copies': {
        id: 'military-copies',
        title: 'Заверенные копии документов по воинскому учету из личного дела',
        icon: BiStar,
        path: MILITARY_COPIES,
        color: 'red',
        isTemplate: false,
        isSubPage: true,
        backButtonText: 'Назад к заявлениям',
        fallbackPrevPage: APPLICATIONS_ROUTE,
        hiddenTitle: true,
    },
    'retake-for-diploma': {
        id: 'retake-for-diploma',
        title: 'Заявление на пересдачу для получения диплома с отличием',
        icon: BiIdCard,
        path: RETAKE_FOR_DIPLOMA,
        color: 'blue',
        isTemplate: false,
        isSubPage: true,
        backButtonText: 'Назад к заявлениям',
        subPageHeaderTitle: '',
        fallbackPrevPage: APPLICATIONS_ROUTE,
    },
    'increased-state-academic-scholarship': {
        id: 'increased-state-academic-scholarship',
        title: 'Отправка документов на получение стипендии Московского Политеха',
        icon: BiIdCard,
        path: INCREASED_STATE_ACADEMIC_SCHOLARSHIP,
        color: 'blue',
        isTemplate: false,
        isSubPage: true,
        backButtonText: 'Назад к заявлениям',
        subPageHeaderTitle: '',
        fallbackPrevPage: APPLICATIONS_ROUTE,
        hiddenTitle: true,
    },
    'financial-support': {
        id: 'financial-support',
        title: 'Оформить материальную поддержку остронуждающимся студентам (Дотацию)',
        icon: BiIdCard,
        path: FINANCIAL_SUPPORT,
        color: 'blue',
        isTemplate: false,
        isSubPage: true,
        backButtonText: 'Назад к заявлениям',
        subPageHeaderTitle: '',
        fallbackPrevPage: APPLICATIONS_ROUTE,
    },
    'financial-assistance': {
        id: 'financial-assistance',
        title: 'Финансовая поддержка',
        icon: BiIdCard,
        path: FINANCIAL_ASSISTANCE,
        color: 'blue',
        isTemplate: false,
        isSubPage: true,
        backButtonText: 'Назад к заявлениям',
        subPageHeaderTitle: '',
        fallbackPrevPage: APPLICATIONS_ROUTE,
    },
    'changing-personal-data': {
        id: 'changing-personal-data',
        title: 'Запрос на изменение персональных данных',
        icon: BiIdCard,
        path: CHANGING_PERSONAL_DATA,
        color: 'blue',
        isTemplate: false,
        isSubPage: true,
        backButtonText: 'Назад к заявлениям',
        subPageHeaderTitle: '',
        fallbackPrevPage: APPLICATIONS_ROUTE,
    },
    'student-status': {
        id: 'student-status',
        title: 'Справка о прохождении обучения в университете (о статусе обучающегося) по месту требования',
        icon: BiIdCard,
        path: STUDENT_STATUS,
        color: 'blue',
        isTemplate: false,
        isSubPage: true,
        backButtonText: 'Назад к заявлениям',
        subPageHeaderTitle: '',
        fallbackPrevPage: APPLICATIONS_ROUTE,
    },
    'family-contacts': {
        id: 'family-contacts',
        title: 'Контактные данные родителей',
        icon: BiIdCard,
        path: FAMILY_CONTACTS,
        color: 'blue',
        isTemplate: false,
        isSubPage: true,
        backButtonText: 'Назад к заявлениям',
        subPageHeaderTitle: '',
        fallbackPrevPage: APPLICATIONS_ROUTE,
        hiddenTitle: true,
    },
    'medical-certificates-086': {
        id: 'medical-certificates-086',
        title: 'Предоставление справок о группе здоровья',
        icon: BiIdCard,
        path: MEDICAL_CERTIFICATES_086,
        color: 'blue',
        isTemplate: false,
        isSubPage: true,
        backButtonText: 'Назад к заявлениям',
        subPageHeaderTitle: '',
        fallbackPrevPage: APPLICATIONS_ROUTE,
        hiddenTitle: true,
        keywords: ['086/у', '086 у'],
    },
    'state-accreditation': {
        id: 'state-accreditation',
        title: 'Выдача лицензий и свидетельств о государственной аккредитации',
        icon: BiIdCard,
        path: STATE_ACCREDITATION,
        color: 'blue',
        isTemplate: false,
        isSubPage: true,
        backButtonText: 'Назад к заявлениям',
        subPageHeaderTitle: '',
        fallbackPrevPage: APPLICATIONS_ROUTE,
    },
    'holidays-after-training': {
        id: 'holidays-after-training',
        title: 'Предоставление каникул',
        icon: BiIdCard,
        path: HOLIDAYS_AFTER_TRAINING,
        color: 'blue',
        isTemplate: false,
        group: 'FINANCES_DOCS',
        isSubPage: true,
        backButtonText: 'Назад к цифровым сервисам',
        subPageHeaderTitle: '',
        fallbackPrevPage: APPLICATIONS_ROUTE,
    },
    'provision-academic-leave': {
        id: 'provision-academic-leave',
        title: 'Предоставление академического отпуска',
        icon: BiIdCard,
        path: PROVISION_ACADEMIC_LEAVE,
        color: 'blue',
        isTemplate: false,
        group: 'FINANCES_DOCS',
        isSubPage: true,
        backButtonText: 'Назад к цифровым сервисам',
        subPageHeaderTitle: '',
        fallbackPrevPage: APPLICATIONS_ROUTE,
    },
    'exit-academic-leave': {
        id: 'exit-academic-leave',
        title: 'Выход из академического отпуска',
        icon: BiIdCard,
        path: EXIT_ACADEMIC_LEAVE,
        color: 'blue',
        isTemplate: false,
        group: 'FINANCES_DOCS',
        isSubPage: true,
        backButtonText: 'Назад к цифровым сервисам',
        subPageHeaderTitle: '',
        fallbackPrevPage: APPLICATIONS_ROUTE,
    },
    'independently-deducted': {
        id: 'independently-deducted',
        title: 'Отчисление по инициативе обучающегося',
        icon: BiIdCard,
        path: INDEPENDENTLY_DEDUCTED,
        color: 'blue',
        isTemplate: false,
        group: 'FINANCES_DOCS',
        isSubPage: true,
        backButtonText: 'Назад к цифровым сервисам',
        subPageHeaderTitle: '',
        fallbackPrevPage: APPLICATIONS_ROUTE,
    },
    'extension-attestation': {
        id: 'extension-attestation',
        title: 'Продление промежуточной аттестации ',
        icon: BiIdCard,
        path: EXTENSION_ATTESTATION,
        color: 'blue',
        isTemplate: false,
        group: 'FINANCES_DOCS',
        isSubPage: true,
        backButtonText: 'Назад к цифровым сервисам',
        subPageHeaderTitle: '',
        fallbackPrevPage: APPLICATIONS_ROUTE,
    },
    'tax-certificate': {
        id: 'tax-certificate',
        title: 'Заказать справку по оплате образовательных услуг для представления в налоговый орган',
        icon: FiBriefcase,
        path: TAX_CERTIFICATES_ROUTE,
        color: 'green',
        isTemplate: false,
        group: 'FINANCES_DOCS',
        isSubPage: true,
        backButtonText: 'Назад к договорам и оплатам',
        subPageHeaderTitle: '',
        fallbackPrevPage: PAYMENTS_ROUTE,
        isNew: true,
        pageSize: 'big',
        hiddenTitle: true,
    },
    'tax-certificate-form': {
        id: 'tax-certificate-form',
        title: 'Справка по оплате образовательных услуг для представления в налоговый орган',
        icon: FiBriefcase,
        path: TAX_CERTIFICATE_ROUTE,
        color: 'green',
        isTemplate: false,
        group: 'FINANCES_DOCS',
        isSubPage: true,
        backButtonText: 'Назад к списку справок',
        subPageHeaderTitle: '',
        fallbackPrevPage: TAX_CERTIFICATES_ROUTE,
        isNew: true,
        pageSize: 'big',
        hiddenTitle: true,
    },
})
