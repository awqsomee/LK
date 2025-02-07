import React from 'react'
import { Link } from 'react-router-dom'

<<<<<<<< HEAD:src/features/tutorials/link-tutorial.tsx
import { withTutorial } from '@shared/tutorial/lib/with-tutorial'
import { TutorialComponent } from '@shared/ui/types'
========
import { TutorialComponent, withTutorial } from 'widgets/tutorial/lib/with-tutorial'
>>>>>>>> master:src/widgets/tutorial/tutorials/link-tutorial.tsx

export const LinkTutoiral = withTutorial(
    ({ forwardedRef, to, children }: TutorialComponent & { to: string; children?: React.ReactNode }) => {
        return (
            <Link ref={forwardedRef} to={to}>
                {children}
            </Link>
        )
    },
)
