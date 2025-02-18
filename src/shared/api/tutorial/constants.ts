import * as z from 'zod'

export const commonTutorialIds = [
    'home',
    'settings',
    'chat',
    'applications',
    'payments',
    'stud-project-activity',
    // 'schedule',
    // 'medical-certificate',
    // 'stud-physical-education',
] as const

export const TutorialIdSchema = z.enum(commonTutorialIds)

export const TutorialStepSchema = z.object({
    title: z.string(),
    description: z.string(),
})

export const ModuleSchema = z.object({
    id: TutorialIdSchema,
    index: z.number(),
    name: z.string(),
    completed: z.boolean(),
    steps: z.array(TutorialStepSchema),
    path: z.string(),
    roles: z.array(z.string()),
})

// export const TutorialsSchema = z.object({
//     tutorialState: z.boolean(),
//     interactions: z.number(),
//     tutorials: z.record(TutorialIdSchema, ModuleSchema),
// })
