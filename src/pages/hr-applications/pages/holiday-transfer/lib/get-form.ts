import getDelayInDays from '@features/medical-certificate/lib/get-delay-in-days'

import { UserApplication, WorkerApplication } from '@shared/api/model'
import { IInputArea } from '@shared/ui/input-area/model'

const getForm = (
    dataUserApplication: UserApplication,
    dataWorkerApplication: WorkerApplication[],
    currentIndex: number,
): IInputArea => {
    const { surname, name, patronymic } = dataUserApplication
    return {
        title: 'Заявление о переносе отпуска',
        data: [
            {
                title: 'ФИО',
                type: 'simple-text',
                value: surname + ' ' + name + ' ' + patronymic,
                fieldName: 'fio',
                visible: true,
            },
            {
                title: 'Должность',
                type: 'simple-text',
                fieldName: 'post',
                value: dataWorkerApplication[currentIndex].jobTitle.toString(),
                visible: true,
            },
            {
                title: 'Подразделение',
                type: 'simple-text',
                value: dataWorkerApplication[currentIndex].subDivision.toString(),
                fieldName: 'subDivision',
                visible: true,
            },
            {
                title: 'Начало отпуска до переноса:',
                type: 'date',
                value: '',
                fieldName: 'holiday_old_start',
                editable: true,
                mask: true,
                required: true,
                minValueInput: getDelayInDays(0),
            },
            {
                title: '',
                type: 'simple-text',
                value: dataWorkerApplication[currentIndex].jobGuid.toString(),
                fieldName: 'jobGuid',
            },
            {
                title: 'Окончание отпуска до переноса:',
                type: 'date',
                value: '',
                fieldName: 'holiday_old_end',
                editable: true,
                mask: true,
                required: true,
                minValueInput: getDelayInDays(0),
            },
            {
                title: 'Начало отпуска после переноса:',
                type: 'date',
                value: '',
                fieldName: 'holiday_new_start',
                editable: true,
                mask: true,
                required: true,
                minValueInput: getDelayInDays(5),
            },
            {
                title: 'Окончание отпуска после переноса:',
                type: 'date',
                value: '',
                fieldName: 'holiday_new_end',
                editable: true,
                mask: true,
                required: true,
                minValueInput: getDelayInDays(5),
            },
            {
                title: 'Причина',
                type: 'select',
                fieldName: 'reason',
                value: '',
                editable: true,
                required: true,
                width: '100%',
                items: [
                    {
                        id: 0,
                        title: 'Семейные обстоятельства',
                    },
                    {
                        id: 1,
                        title: 'Рабочая необходимость',
                    },
                ],
            },
            // {
            //     title: 'Окончание отпуска после переноса:',
            //     type: 'date-interval',
            //     value: ['', ''],
            //     fieldName: 'holiday_new_end_test',
            //     editable: true,
            //     required: false,
            //     //minValueInput: getDelayInDays(5),
            // },
        ],
    }
}

export default getForm
