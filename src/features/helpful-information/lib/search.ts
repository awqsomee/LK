import normalizeString from '@shared/lib/normalize-string'

import { HelpfulPage } from '../types'

const search = (value: string, pages: HelpfulPage[]) => {
    return pages.reduce((acc, page) => {
        const foundLinks = page.links.filter((link) => normalizeString(link.title).includes(normalizeString(value)))

        if (!!foundLinks.length) acc.push({ title: page.title, links: foundLinks })

        return acc
    }, [] as HelpfulPage[])
}

export default search
