import { APPLICATIONS_ROUTE } from './private'

export const ALLOWANCES = '/allowances'
export const ALLOWANCES_ROLE = ALLOWANCES + '/:role'
export const ALLOWANCES_INITIATOR = ALLOWANCES + '/initiator'
export const ALLOWANCES_APPROVER = ALLOWANCES + '/approver'
export const CREATE_ALLOWANCE = '/allowances-create'
export const ALLOWANCE_INFO_CUT = '/allowances-info'
export const ALLOWANCE_INFO = ALLOWANCE_INFO_CUT + '/:id'
export const ORDERS_ROUTE = '/staff_orders'
export const DOCUMENT_BLANKS_ROUTE = '/staff_blanks'
export const STUDENTS_LOGINS_ROUTE = '/ad_logins'
export const VAX_ROUTE = '/vaccination'
export const DOCLIST_ALLOWANCES = '/doclist/allowances'
export const PPS_VOTE_ROUTE = '/pps_vote2020'
export const CHILDREN_ROUTE = '/children'
export const PPS_CONTEST_ROUTE = '/pps_contest'
export const ElECTRONIC_STATEMENTS = '/electronic-statements'
export const ONBOARDING = '/onboarding'
export const STRUCTURE_OF_THE_UNIVERSITY = '/structure-of-the-university'
export const ADDRESSES_AND_CONTACTS = '/addresses-and-contacts'
export const BRANDBOOK = '/brandbook'
export const WIFI_AT_THE_UNIVERSITY = '/wifi-at-the-university'
export const HEALTH_CARE = '/health-care'
export const PSYCHOLOGICAL_HELP = '/psychological-help'
export const SOICAL_ENVIROMENT = '/social-environment'
export const VACATION_ROUTE = '/vacation'
export const KPI_PPS_ROUTE = '/kpi_pps'
export const KPI_ADMIN_ROUTE = '/kpi_admin'
export const SC_NEWS_ROUTE = '/sc_news'
export const OOP_ROUTE = '/oop'
export const CENTERS_ROUTE = '/centers'
export const PORTFOLIO_ROUTE = '/portfolio'
export const INFO_ROUTE = '/helpful-information'
export const HELP_SERVICE_ROUTE = '/help_service'
export const DOWNLOAD_AGREEMENTS_FILES_ROUTE = '/download-agreements'
export const PERSONAL_NOTIFICATIONS = '/personal-notifications'
export const PHYSICAL_EDUCATION = '/physical-education/main'
export const ALL_STAFF_ROUTE = '/all-staff'
export const PUBLICATION_ACTIVITY = '/publication-activity'
export const ARTICLE_LIST = '/article-list'
export const ARTICLES = '/articles'
export const ARTICLE = '/articles/:id'
export const OPEN_PUBLICATION = '/open-publication'
export const EXPORT_CONTROL = '/export-control'
export const KEDO_ROUTE = '/kedo'
export const COMPETENCE_CENTER = '/competence-center'
export const CC_PASSPORT_LOG = '/competence-center/passport-log'
export const CC_COMPLETED_CONSULTATIONS = '/competence-center/completed-consultations'

//hidden routes
export const PHYSICAL_EDUCATION_STUDENT_ID = '/physical-education/student/:studentId'
export const CONTACT_INFO_ACTUALIZATION = APPLICATIONS_ROUTE + '/contact-info-actualization'
export const DATA_VERIFICATION_ROUTE = APPLICATIONS_ROUTE + '/data-verification'
export const ISSUANCE_OF_LICENSES = APPLICATIONS_ROUTE + '/issuance-of-licenses'
export const GETTING_COMPUTER_EQUIPMENT = APPLICATIONS_ROUTE + '/getting-computer-equipment'
export const CONNECTING_COMPUTER = APPLICATIONS_ROUTE + '/connecting-computer'
export const PRINTER_MAINTENANCE = APPLICATIONS_ROUTE + '/printer-maintenance'
export const QUESTION_SED = APPLICATIONS_ROUTE + '/question-sed'
export const QUESTION_PERSONAL_ACCOUNT = APPLICATIONS_ROUTE + '/question-personal-account'
export const OTHER_IT_SERVICES = APPLICATIONS_ROUTE + '/other-it-services'
export const CERTIFICATE_FROM_PLACE_OF_WORK = APPLICATIONS_ROUTE + '/certificate-from-the-place-of-work'
export const VISA_CERTIFICATE = APPLICATIONS_ROUTE + '/visa-certificate'
export const CERTIFICATE_OF_WORK_EXPERIENCE = APPLICATIONS_ROUTE + '/certificate-of-work-experience'
export const NUMBER_OF_UNUSED_VACATION_DAYS = APPLICATIONS_ROUTE + '/number-of-unused-vacation-days'
export const INCREASE_ANTIPLAGIAT_LIMITS = APPLICATIONS_ROUTE + '/increase-antiplagiat-limits'

export const CONTACT_DETAILS = APPLICATIONS_ROUTE + '/contact-details'
export const CONTACT_DETAILS_FORM = APPLICATIONS_ROUTE + '/contact-details/:guid'

export const EDIT_PHONEBOOK_SUBDIVISION = APPLICATIONS_ROUTE + '/edit-phonebook-subdivision'
export const EDIT_PHONEBOOK_INNER_PHONE = APPLICATIONS_ROUTE + '/edit-phonebook-inner-phone'
export const EDIT_PHONEBOOK_EMAIL = APPLICATIONS_ROUTE + '/edit-phonebook-email'

export const COPY_OF_EMPLOYMENT_RECORD = APPLICATIONS_ROUTE + '/copy-of-the-employment-record'
export const COPIES_OF_DOCUMENTS_FROM_PERSONAL_FILE = APPLICATIONS_ROUTE + '/copies-of-documents-from-the-personal-file'
export const WORK_ON_TERMS_OF_EXTERNAL_CONCURRENCY = APPLICATIONS_ROUTE + '/work-on-the-terms-of-external-concurrency'
export const CERTIFICATE_TIME_PARENTAL_LEAVE = APPLICATIONS_ROUTE + '/certificate-time-parental-leave'
export const ARBITRARY_REQUEST = APPLICATIONS_ROUTE + '/arbitrary-request'
export const COURIER = APPLICATIONS_ROUTE + '/courier'
export const PERSONA_INCOME_TAX_REFERENCE = APPLICATIONS_ROUTE + '/persona-income-tax-reference'
export const PAYMENT_OF_CHILD_BIRTH_ALLOWANCE = APPLICATIONS_ROUTE + '/payment-of-child-birth-allowance'
export const PAYMENT_FOR_CHILD_CARE = APPLICATIONS_ROUTE + '/payment-for-child-care'

export const LIVING_IN_RESIDENTIAL_PREMISES = APPLICATIONS_ROUTE + '/living-in-residential-premises'
export const GUESTS_ACCOMMODATION_ON_CAMPUS = APPLICATIONS_ROUTE + '/guests-accommodation-on-campus'
export const GUESTS_PASSAGE_TO_CAMPUS = APPLICATIONS_ROUTE + '/guests-passage-to-campus'
export const RELOCATION = APPLICATIONS_ROUTE + '/relocation'
export const TERMINATION_OF_AGREEMENT = APPLICATIONS_ROUTE + '/termination-of-agreement'

export const ISSUANCE_OF_PASS = APPLICATIONS_ROUTE + '/issuance-of-pass'
export const GUEST_PASS = APPLICATIONS_ROUTE + '/guest-pass'

export const CERTIFICATION_AND_ISSUANCE_OF_DOCS = APPLICATIONS_ROUTE + '/certification-and-issuance-of-docs'

export const DEFERMENT_FROM_CONSCRIPTION = APPLICATIONS_ROUTE + '/deferment-from-conscription'
export const CERTIFIED_COPIES_OF_MILITARY_DOCS = APPLICATIONS_ROUTE + '/certified-copies-of-military-docs'
