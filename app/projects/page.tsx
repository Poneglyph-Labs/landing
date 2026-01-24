import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Projects | Poneglyph Labs',
    description: 'Explore our current and past projects in cryptography, AI, and decentralized systems.',
}

export default function ProjectsPage() {
    return (
        <div className="min-h-screen bg-primary-900 text-secondary-200">
            <div className="bg-primary-900 flex flex-col gap-20 items-start overflow-hidden pb-20 pt-10 px-4 md:px-24">
                <div className="flex flex-col gap-10 w-full max-w-6xl mx-auto">
                    <div className="border-b border-tertiary-400 pb-6 w-full">
                        <div className="flex flex-col gap-4 items-start justify-center py-6">
                            <h1 className="text-h4 font-medium font-space-grotesk text-secondary-200 tracking-wide">
                                PROJECTS
                            </h1>
                            <p className="text-body2 font-regular text-secondary-600 tracking-wide">
                                Explore our current and past projects in cryptography, AI, and decentralized systems.
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col items-center justify-center py-20">
                        <h2 className="text-h4 font-medium text-secondary-600 mb-4">
                            Coming Soon
                        </h2>
                        <p className="text-body1 font-regular text-secondary-600 text-center max-w-lg">
                            We're currently working on showcasing our projects. Check back soon for updates on our latest work.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}