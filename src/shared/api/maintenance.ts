import axios from 'axios'

export const MAINTENANCE_URL = 'https://docker.mospolytech.ru:5045/api/v1'

export const $maintenanceApi = axios.create({ baseURL: MAINTENANCE_URL })

export type TechnicalMaintenance = {
    applicantName: string
    description: string
    serviceId: string
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
    req.room && formData.append('location', req.room)
    req.email && formData.append('email', req.email)
    req.room && formData.append('room', req.room)
    req.files && req.files[0] && formData.append('files', req.files[0])
    const { data } = await $maintenanceApi.post<{ ticketId: string }>(`/tickets`, formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    })
    return data
}

export const getLocations = async () => {
    const { data } = await $maintenanceApi.get<{ name: string }[]>('/tickets/locations')
    return data
}
