import { Metadata } from 'next'
import { Suspense } from 'react'
import { ProjectsPageContent } from './components/ProjectsPageContent'

export const metadata: Metadata = {
    title: 'Projects | Poneglyph Labs',
    description:
        'End-to-end systems assembled from cryptographic, decentralized, and verification research conducted at Poneglyph Labs.',
}

function ProjectsLoading() {
    return (
        <div className="bg-primary-900 text-secondary-200 flex min-h-screen items-center justify-center">
            <div className="text-center">
                <div className="text-h4 font-space-grotesk text-secondary-200 text-[28px] font-medium">
                    Loading projects...
                </div>
            </div>
        </div>
    )
}

export default function ProjectsPage() {
    return (
        <Suspense fallback={<ProjectsLoading />}>
            <ProjectsPageContent />
        </Suspense>
    )
}
