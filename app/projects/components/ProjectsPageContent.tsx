import { ProjectCard } from './ProjectCard'
import { getProjects } from '../data/projectsData'

export function ProjectsPageContent() {
    const projects = getProjects()

    return (
        <div className="flex flex-col items-start justify-center">
            <div className="bg-primary-900 flex w-[1440px] flex-col items-start justify-start gap-20 overflow-hidden px-24 pt-10 pb-20">
                {/* Header */}
                <div className="flex flex-col items-start justify-start gap-10 self-stretch">
                    <div className="border-tertiary-400 flex flex-col items-start justify-center gap-4 self-stretch border-b-[0.50px] py-6">
                        <h1 className="text-h4 font-space-grotesk text-secondary-200 font-medium tracking-[0.28px]">
                            OUR PROJECTS
                        </h1>
                        <p className="text-body2 text-secondary-600 font-medium tracking-[0.18px]">
                            End-to-end systems assembled from cryptographic,
                            decentralized, and verification research conducted
                            at Poneglyph Labs.
                        </p>
                    </div>
                </div>

                {/* Projects List */}
                <div className="flex flex-col items-start justify-start gap-12 self-stretch">
                    {projects.map((project, index) => (
                        <div key={project.id} className="w-full">
                            <ProjectCard
                                project={project}
                                showGoToSite={
                                    project.id === 'veravote' ||
                                    project.id === 'nexus-grid'
                                }
                            />
                            {index < projects.length - 1 && (
                                <div className="border-tertiary-600 mt-12 h-0 self-stretch border-t-[0.50px]" />
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
