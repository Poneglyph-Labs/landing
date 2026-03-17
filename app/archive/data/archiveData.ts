// Client-side types and interfaces for archive data
export type ArchiveItemType =
    | 'Paper'
    | 'Audit'
    | 'Repository'
    | 'Proof of Concept'
export type ArchiveDomain =
    | 'Cryptography'
    | 'Decentralized System'
    | 'Artificial Intelligence'

export interface ArchiveItem {
    id: string
    slug: string
    title: string
    description: string
    date: string
    type: ArchiveItemType
    domain: ArchiveDomain
    abstract?: string
    technicalFocus?: string[]
    primaryOutput?: string
    relatedResearch?: {
        title: string
        type: ArchiveItemType
        date: string
        slug: string
    }[]
    links: {
        code?: string
        demo?: string
        pdf?: string
    }
}

// Static archive data for client-side filtering and display
export const archiveItems: ArchiveItem[] = []

export function filterArchiveItems(
    items: ArchiveItem[],
    filters: {
        domain?: ArchiveDomain | 'All'
        type?: ArchiveItemType | 'All'
        search?: string
    }
): ArchiveItem[] {
    return items.filter((item) => {
        if (
            filters.domain &&
            filters.domain !== 'All' &&
            item.domain !== filters.domain
        ) {
            return false
        }

        if (
            filters.type &&
            filters.type !== 'All' &&
            item.type !== filters.type
        ) {
            return false
        }

        if (filters.search) {
            const searchLower = filters.search.toLowerCase()
            return (
                item.title.toLowerCase().includes(searchLower) ||
                item.description.toLowerCase().includes(searchLower)
            )
        }

        return true
    })
}

export function sortArchiveItems(
    items: ArchiveItem[],
    sortBy: 'Most Recent' | 'Oldest'
): ArchiveItem[] {
    return [...items].sort((a, b) => {
        // Parse DD-MM-YYYY format more reliably
        const [dayA, monthA, yearA] = a.date.split('-').map(Number)
        const [dayB, monthB, yearB] = b.date.split('-').map(Number)

        // Create comparable date values (YYYYMMDD format)
        const dateValueA = yearA * 10000 + monthA * 100 + dayA
        const dateValueB = yearB * 10000 + monthB * 100 + dayB

        return sortBy === 'Most Recent'
            ? dateValueB - dateValueA
            : dateValueA - dateValueB
    })
}
