<<<<<<<< HEAD:src/shared/api/physical-education/pe-api.ts
import { $peApi } from '../config/pe-config'
import {
    AddStudentAdditionalPoints,
    AddStudentRegulationPoints,
    AddStudentVisits,
    Group,
    PEStudent,
    PEStudentProfile,
    PETeacher,
    SetHealthGroup,
    SetSpecialization,
} from './types'

export const STUDENT_PAGE_SIZE = 40
========
import { Group } from '@pages/teacher-physical-education/my-groups/model'

import { AddStudentAdditionalPoints } from '@entities/pe-student-additional-points/types'
import { AddStudentRegulationPoints } from '@entities/pe-student-regulation-points/types'
import { STUDENT_PAGE_SIZE } from '@entities/pe-student/constants'
import { PEStudent, PEStudentProfile } from '@entities/pe-student/types'
import { AddStudentVisits } from '@entities/pe-student/types/add-student-visits'
import { SetHealthGroup } from '@entities/pe-student/types/set-health-group'
import { SetSpecialization } from '@entities/pe-student/types/set-specialization'
import { PETeacher } from '@entities/pe-teacher/types'

import { $peApi } from './config/pe-config'
>>>>>>>> master:src/shared/api/pe-api.ts

const extractStudentFilters = (filters: Record<string, { value: string | number }>) => {
    const studentFilters: Record<string, string | number> = {}

    if (filters['group.groupName']) {
        studentFilters['groupNumber'] = filters['group.groupName'].value
    }

    if (filters['group']) {
        studentFilters['groupNumber'] = filters['group'].value
    }

    if (filters['fullName']) {
        studentFilters['fullName'] = filters['fullName'].value
    }

    if (filters['course']) {
        studentFilters['course'] = filters['course'].value
    }

    return studentFilters
}

export const getStudents = (
    page: number,
    filters: Record<string, { value: string | number }>,
    pageSize = STUDENT_PAGE_SIZE,
) => {
    return $peApi.get<{ data: { students: PEStudent[]; totalCount: number } }>('/student', {
        params: { page: page + 1, pageSize, ...extractStudentFilters(filters) },
    })
}

export const getStudent = (studentId: string) => {
    return $peApi.get<{ data: PEStudentProfile }>(`/student/${studentId}`)
}

export const addVisit = (data: AddStudentVisits) => {
    return $peApi.post('/points/visit', data)
}

export const removeVisit = (id: string) => {
    return $peApi.delete(`/points/visit/${id}`)
}

export const addAdditionalPoints = (data: AddStudentAdditionalPoints) => {
    return $peApi.post('/points/other', data)
}

export const removeAdditionalPoints = (id: string) => {
    return $peApi.delete(`/points/other/${id}`)
}

export const addRegulationPoints = (data: AddStudentRegulationPoints) => {
    return $peApi.post('/points/standard', data)
}

export const removeRegulationPoints = (id: string) => {
    return $peApi.delete(`/points/standard/${id}`)
}

export const createCompetition = (compName: string) => {
    return $peApi.post('/competition', { competitionName: compName })
}

export const removeCompetition = (compName: string) => {
    return $peApi.delete('/competition', { params: { competitionName: compName } })
}

export const getCompetitions = () => {
    return $peApi.get<{ competitions: string[] }>('/competition')
}

export const getTeacher = (guid: string) => {
    return $peApi.get<{ data: PETeacher }>(`/teacher/${guid}`)
}

export const getCuratorGroups = (curatorGuid: string) => {
    return $peApi.get<{ data: Group[] }>('/group', { params: { curatorGuid } })
}

export const endSemesterForStudent = (guid: string) => {
    return $peApi.post('/student/archive', { studentGuid: guid })
}

export const setHealthGroup = (data: SetHealthGroup) => {
    return $peApi.post('/student/health-group', data)
}

export const setSpecialization = (data: SetSpecialization) => {
    return $peApi.post('/student/specialization', data)
}
