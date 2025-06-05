export type Changes = Record<
    string,
    Record<
        string,
        {
            old: object | null
            new: object | null
        }
    >
>
export type Article = {
    id: string
    doi: string
    authors: string
    articleTitle: string
    isWoS: boolean
    isScopus: boolean
    publisher: string
    pageNumber: string
    publicationType: string
    fundingSource: string
    publicationYear: string
    quotesCount: string
}
export type Sort = {
    field: string
    order: 'ASC' | 'DESC'
}

export type Filter = {
    field: string
    value: string | boolean | number
    operation: 'Eq' | 'Like'
}

export type Subdivision = {
    guid: string
    name: string
    headGuid: string | null
    parentGuid: string | null
    isActive: boolean
    isDepartment: boolean
    isFaculty: boolean
    childSubdivisions: Subdivision[]
}

export const ArticleApplicationStatuses = {
    HeadOfDepartmentReview: 'На рассмотрении заведующим кафедрой',
    DeanOrDeputyDeanReview: 'На рассмотрении деканом или заместителем декана',
    AdminReview: 'На рассмотрении администратором',
    Accepted: 'Принято',
    Declined: 'Отклонено',
}

export type ArticleApplicationStatus = keyof typeof ArticleApplicationStatuses

export type ArticleApplication = {
    id: string
    authorId: string
    articleId: string
    departmentId: string
    status: ArticleApplicationStatus
    createdAt: string
    article: {
        title: string
    }
}
