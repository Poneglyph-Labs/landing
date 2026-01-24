import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { ArchiveDetailContent } from '../components/ArchiveDetailContent'
import { getArchiveItem } from '../data/archiveData'

interface ArchiveDetailPageProps {
    params: {
        slug: string
    }
}

export async function generateMetadata({ params }: ArchiveDetailPageProps): Promise<Metadata> {
    const item = getArchiveItem(params.slug)
    
    if (!item) {
        return {
            title: 'Archive Item Not Found | Poneglyph Labs'
        }
    }

    return {
        title: `${item.title} | Poneglyph Labs`,
        description: item.description,
    }
}

export default function ArchiveDetailPage({ params }: ArchiveDetailPageProps) {
    const item = getArchiveItem(params.slug)
    
    if (!item) {
        notFound()
    }

    return <ArchiveDetailContent item={item} />
}