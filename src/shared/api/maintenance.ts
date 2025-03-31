import axios from 'axios'

export const MAINTENANCE_URL = 'https://docker.mospolytech.ru:5045/api/v1-test'

export const $maintenanceApi = axios.create({ baseURL: MAINTENANCE_URL })

export type TechnicalMaintenance = {
    applicantName: string // ФИО
    description: string // Описание проблемы
    serviceId: string // номер справочника, где конкретная услуга
    email?: string
    phone?: string
    location?: string
    room?: string
    files?: File[]
}

export const postMaintenance = async (req: TechnicalMaintenance) => {
    const formData = new FormData()
    formData.append('applicantName', req.applicantName)
    formData.append('description', req.description)
    formData.append('serviceId', req.serviceId)
    req.phone && formData.append('phone', req.phone)
    req.location && formData.append('location', req.location)
    req.email && formData.append('email', req.email)
    req.room && formData.append('room', req.room)
    req.files && req.files[0] && formData.append('files', req.files[0])
    const { data } = await $maintenanceApi.post<{ data: { id: string } }>(`/tickets`, formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    })
    return data.data
}
