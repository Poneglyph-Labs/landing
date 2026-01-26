import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { ArchiveDetailContent } from '../components/ArchiveDetailContent'
import { getArchiveItem } from '../data/archiveData'

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

    return <ArchiveDetailContent item={item} />
}
