import { Metadata } from 'next'
import { ArchivePageContent } from './components/ArchivePageContent'
import { getArchiveItems } from '../../lib/archive-server'

export const metadata: Metadata = {
    title: 'Research Archive | Poneglyph Labs',
    description:
        'A public record of published research, audits, and experimental systems developed at Poneglyph Labs.',
}

export default async function ArchivePage() {
    const archiveItems = getArchiveItems()

    return <ArchivePageContent items={archiveItems} />
}
