import { UserApplication } from '@shared/api/model'
import { IInputArea } from '@shared/ui/input-area/model'

const ReasonsSocialScholarshipOptions = [
    {
        id: 0,
        title: 'Являющиеся детьми-сиротами и детьми, оставшимися без попечения родителей, лицами из числа детей-сирот и детей, оставшихся без попечения родителей, лицами, потерявшими в период обучения обоих родителей или единственного родителя, детьми-инвалидами',
    },
    { id: 1, title: 'Являющиеся инвалидами I и II групп, инвалидами с детства' },
    {
        id: 2,
        title: 'Подвергшиеся воздействию радиации вследствие катастрофы на Чернобыльской АЭС и иных радиационных катастроф, вследствие ядерных испытаний на Семипалатинском полигоне',
    },
    {
        id: 3,
        title: 'Являющиеся инвалидами вследствие военной травмы или заболевания, полученных в период прохождения военной службы, и ветеранами боевых действий, а также студентам из числа граждан, проходивших в течение не менее трех лет военную службу по контракту на воинских должностях, подлежащих замещению солдатами, матросами, сержантами, старшинами, и уволенных с военной службы по основаниям, предусмотренным подпунктами «б» - «г» пункта 1, подпунктом «а» пункта 2 и подпунктами «а» - «в» пункта 3 статьи 51 Федерального закона от 28 марта 1998 года N 53-ФЗ «О воинской обязанности и военной службе»',
    },
    { id: 4, title: 'Получившие государственную социальную помощь' },
]

const getForm = (dataUserApplication: UserApplication): IInputArea => {
    return {
        title: 'Оформление социальной стипендии',
        data: [
            {
                title: 'Телефон',
                type: 'tel',
                mask: true,
                fieldName: 'phone',
                editable: true,
                required: true,
                value: dataUserApplication.phone,
            },

            {
                title: 'Email',
                type: 'email',
                fieldName: 'email',
                value: dataUserApplication.email,
                editable: true,
                required: true,
            },
            {
                title: 'Основание для получения социальной стипендии:',
                type: 'select',
                fieldName: 'reason',
                value: null,
                width: '100',
                items: ReasonsSocialScholarshipOptions,
                editable: true,
                required: true,
            },
        ],
        hint: 'После получения положительного решения необходимо прийти в Профком за распечатанным заявлением и принести с собой все необходимые документы',
        documents: { files: [], fieldName: 'docs', required: true, maxFiles: 4 },
    }
}

export default getForm
