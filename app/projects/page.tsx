import { Metadata } from 'next'
import { ProjectsPageContent } from './components/ProjectsPageContent'

export const metadata: Metadata = {
    title: 'Projects | Poneglyph Labs',
    description:
        'End-to-end systems assembled from cryptographic, decentralized, and verification research conducted at Poneglyph Labs.',
}

export default function ProjectsPage() {
    return <ProjectsPageContent />
}
