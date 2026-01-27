import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

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

const contentDirectory = path.join(process.cwd(), 'content/archive')

export interface MDXArchiveItem extends ArchiveItem {
    content: string
}

export function getArchiveMDXFiles(): string[] {
    if (!fs.existsSync(contentDirectory)) {
        return []
    }
    return fs
        .readdirSync(contentDirectory)
        .filter((file) => file.endsWith('.mdx'))
}

export function getArchiveMDXBySlug(slug: string): MDXArchiveItem | null {
    try {
        const filePath = path.join(contentDirectory, `${slug}.mdx`)

        if (!fs.existsSync(filePath)) {
            return null
        }

        const fileContents = fs.readFileSync(filePath, 'utf8')
        const { data, content } = matter(fileContents)

        // Validate required frontmatter fields
        const requiredFields = [
            'title',
            'description',
            'date',
            'type',
            'domain',
        ]
        for (const field of requiredFields) {
            if (!data[field]) {
                throw new Error(
                    `Missing required field: ${field} in ${slug}.mdx`
                )
            }
        }

        return {
            id: data.id || slug,
            slug,
            title: data.title,
            description: data.description,
            date: data.date,
            type: data.type,
            domain: data.domain,
            abstract: data.abstract,
            technicalFocus: data.technicalFocus || [],
            primaryOutput: data.primaryOutput,
            relatedResearch: data.relatedResearch || [],
            links: data.links || {},
            content,
        }
    } catch (error) {
        console.error(`Error reading MDX file for slug ${slug}:`, error)
        return null
    }
}

export function getAllArchiveMDX(): MDXArchiveItem[] {
    const files = getArchiveMDXFiles()
    const items: MDXArchiveItem[] = []

    for (const file of files) {
        const slug = file.replace(/\.mdx$/, '')
        const item = getArchiveMDXBySlug(slug)
        if (item) {
            items.push(item)
        }
    }

    return items
}

export function archiveMDXExists(slug: string): boolean {
    const filePath = path.join(contentDirectory, `${slug}.mdx`)
    return fs.existsSync(filePath)
}
