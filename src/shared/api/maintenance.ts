import axios from 'axios'

export const MAINTENANCE_URL = 'https://api.mospolytech.ru/ticketsservice'

export const $maintenanceApi = axios.create({ baseURL: MAINTENANCE_URL })

export type TechnicalMaintenance = {
    applicantName: string
    description: string
    email?: string
    phone?: string
    location?: string
    room?: string
    serviceAreaId: string
    serviceId: string
    serviceCategoryId: string
    files?: File[]
}

export const postMaintenance = async (req: TechnicalMaintenance) => {
    const formData = new FormData()
    formData.append('ApplicantName', req.applicantName)
    formData.append('Description', req.description)
    formData.append('ServiceAreaId', req.serviceAreaId)
    formData.append('ServiceId', req.serviceId)
    formData.append('ServiceCategoryId', req.serviceCategoryId)
    formData.append('Phone', req.phone ?? '')
    formData.append('Location', req.location ?? '')
    formData.append('Room', req.room ?? '')
    formData.append('Email', req.email ?? '')
    if (req.files) {
        for (let i = 0; i < req.files.length; i++) {
            formData.append('Files', req.files[i])
        }
    }
    const { data } = await $maintenanceApi.post<{ ticketId: string }>(`/tickets`, formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    })
    return data
}

export const getLocations = async () => {
    const { data } = await $maintenanceApi.get<{ name: string }[]>('/handbooks/locations')
    return data
}

export const getServiceAreas = async () => {
    const { data } = await $maintenanceApi.get<{ id: string; title: string }[]>('/handbooks/service-areas')
    return data
}

export const getServices = async ({ serviceArea }: { serviceArea: string }) => {
    const { data } = await $maintenanceApi.get<{ id: string; title: string; items: { id: string; title: string }[] }[]>(
        `/handbooks/${serviceArea}`,
    )
    return data
}
