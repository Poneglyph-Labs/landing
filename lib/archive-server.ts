import {
    getAllArchiveMDX,
    getArchiveMDXBySlug as getMDXBySlug,
    archiveMDXExists,
    ArchiveItem,
} from './mdx'

export function getArchiveItems(): ArchiveItem[] {
    try {
        // Only get items from MDX files
        const mdxItems = getAllArchiveMDX()
        return mdxItems
    } catch (error) {
        console.error('Error loading archive items:', error)
        return []
    }
}

export function getArchiveItem(slug: string): ArchiveItem | undefined {
    try {
        // Only get from MDX
        const mdxItem = getMDXBySlug(slug)
        return mdxItem || undefined
    } catch (error) {
        console.error(`Error loading archive item ${slug}:`, error)
        return undefined
    }
}

export function hasArchiveMDXContent(slug: string): boolean {
    try {
        return archiveMDXExists(slug)
    } catch (error) {
        console.error(`Error checking MDX content for ${slug}:`, error)
        return false
    }
}

export function filterArchiveItems(
    items: ArchiveItem[],
    filters: {
        domain?: ArchiveItem['domain'] | 'All'
        type?: ArchiveItem['type'] | 'All'
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

export function getArchiveMDXBySlug(slug: string) {
    try {
        return getMDXBySlug(slug)
    } catch (error) {
        console.error(`Error loading MDX for ${slug}:`, error)
        return null
    }
}
