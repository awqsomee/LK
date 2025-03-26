import axios from 'axios'

export const MAINTENANCE_URL = 'https://mospoly.helpdeskeddy.com/api/v2'

export const $maintenanceApi = axios.create({ baseURL: MAINTENANCE_URL })

export type TechnicalMaintenance = {
    title: string
    description: string
    user_email: string
    custom_fields: string
    files: File[]
}

export const postMaintenance = async (req: TechnicalMaintenance) => {
    const formData = new FormData()
    formData.append('title', req.title)
    formData.append('description', req.description)
    formData.append('user_email', req.user_email)
    formData.append('custom_fields', req.custom_fields)
    req.files[0] && formData.append('files', req.files[0])
    const { data } = await $maintenanceApi.post<{ data: { id: string } }>(`/tickets/`, formData, {
        headers: {
            Authorization: import.meta.env.VITE_HELP_DESK_EDDY,
            'Content-Type': 'multipart/form-data',
        },
    })
    return data.data
}
