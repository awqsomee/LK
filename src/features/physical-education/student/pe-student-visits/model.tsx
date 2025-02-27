import React from 'react'

import { differenceInDays } from 'date-fns'
import { combine } from 'effector'

import { pEStudentVisitModel } from '@entities/pe-student/model'
import { peTeacherModel } from '@entities/pe-teacher'

import { PEStudentProfile, PeTeacherPermission } from '@shared/api/physical-education'
import { Button } from '@shared/ui/button'
import { ColumnProps } from '@shared/ui/table/types'

export const $peStudentVisitsColumns = combine(
    peTeacherModel.stores.peTeacher,
    pEStudentVisitModel.stores.pendingRemoveVisit,
    (teacher, isLoading): ColumnProps[] => [
        {
            title: 'Дата',
            field: 'date',
            type: 'date',
            sort: true,
        },
        {
            title: 'Преподаватель',
            field: 'teacherFullName',
        },
        ...(teacher?.permissions?.length
            ? [
                  {
                      title: 'Действия',
                      field: 'actions',
                      onClick: () => null,
                      render: (_: unknown, data: unknown) => {
                          const history = data as PEStudentProfile['visitsHistory'][number]
                          const isExpired = differenceInDays(new Date(history.date), new Date()) < -7
                          const isAdmin = [PeTeacherPermission.AdminAccess, PeTeacherPermission.SuperUser].some(
                              (permission) => teacher?.permissions?.includes(permission),
                          )

                          if (!((history.teacherGuid === teacher?.id && !isExpired) || isAdmin)) return null

                          return (
                              <Button
                                  width="100%"
                                  text="Удалить"
                                  isActive={!isLoading}
                                  onClick={() => {
                                      pEStudentVisitModel.events.removeVisit({ id: history.id.toString() })
                                  }}
                              />
                          )
                      },
                  },
              ]
            : []),
    ],
)
