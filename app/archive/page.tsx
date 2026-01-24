import { Metadata } from 'next'
import { ArchivePageContent } from './components/ArchivePageContent'

export const metadata: Metadata = {
    title: 'Research Archive | Poneglyph Labs',
    description: 'A public record of published research, audits, and experimental systems developed at Poneglyph Labs.',
}

export default function ArchivePage() {
    return <ArchivePageContent />
}