import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { ArchiveDetailContent } from '../components/ArchiveDetailContent'
import {
    getArchiveItem,
    hasArchiveMDXContent,
    getArchiveMDXBySlug,
} from '../../../lib/archive-server'

interface ArchiveDetailPageProps {
    params: Promise<{
        slug: string
    }>
}

export async function generateMetadata({
    params,
}: ArchiveDetailPageProps): Promise<Metadata> {
    const { slug } = await params
    const item = getArchiveItem(slug)

    if (!item) {
        return {
            title: 'Archive Item Not Found | Poneglyph Labs',
        }
    }

    return {
        title: `${item.title} | Poneglyph Labs`,
        description: item.description,
    }
}

export default async function ArchiveDetailPage({
    params,
}: ArchiveDetailPageProps) {
    const { slug } = await params
    const item = getArchiveItem(slug)

    if (!item) {
        notFound()
    }

    // Get MDX content if available
    const hasMDXContent = hasArchiveMDXContent(slug)
    const mdxItem = hasMDXContent ? getArchiveMDXBySlug(slug) : null

    return <ArchiveDetailContent item={item} mdxItem={mdxItem} />
}
