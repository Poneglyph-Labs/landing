import { ProjectRow } from '../ui/ProjectRow'
import { Button } from '../ui/Button'

const projects = [
    {
        name: 'VeraVote',
        description: 'Secure voting for institutions and communities',
        links: [
            { label: 'DOCUMENTATION', href: '#' },
            { label: 'SDK', href: '#' },
        ],
    },
    {
        name: 'Aegis-7',
        description:
            'A formal verification framework for solidity contracts using symbolic execution.',
        links: [
            { label: 'ARCHITECTURE', href: '#' },
            { label: 'REPOSITORY', href: '#' },
            { label: 'DEMO', href: '#' },
        ],
    },
    {
        name: 'Nexus Grid',
        description:
            'Decentralized compute coordination layer for non-deterministic workloads.',
        links: [
            { label: 'SPECS', href: '#' },
            { label: 'GIT', href: '#' },
            { label: 'TESTNET', href: '#' },
        ],
    },
]

export function ProjectsSection() {
    return (
        <section className="bg-primary-900 border-tertiary-400 border-t py-20">
            <div className="mx-auto max-w-6xl px-4 md:px-8">
                <div className="space-y-10">
                    {/* Section Header */}
                    <div className="border-tertiary-400 border-b pb-6">
                        <h2 className="text-h4 font-space-grotesk text-secondary-200 font-medium">
                            OUR PROJECTS
                        </h2>
                    </div>

                    {/* Projects List */}
                    <div className="space-y-0">
                        {projects.map((project, index) => (
                            <div key={project.name}>
                                <ProjectRow
                                    name={project.name}
                                    description={project.description}
                                    links={project.links}
                                />
                                {index < projects.length - 1 && (
                                    <div className="border-tertiary-400 border-b" />
                                )}
                            </div>
                        ))}
                    </div>

                    {/* View More Button */}
                    <div className="flex justify-end pt-10">
                        <Button variant="outline" size="lg">
                            VIEW FULL ARCHIVE
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}
