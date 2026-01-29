'use client'

import Link from 'next/link'
import { ProjectRow } from '../ui/ProjectRow'
import { Button } from '../ui/Button'
import { getProjects } from '../../app/projects/data/projectsData'

export function ProjectsSection() {
    // Get first 3 projects from the projects data
    const allProjects = getProjects()
    const displayProjects = allProjects.slice(0, 3)

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
                        {displayProjects.map((project, index) => (
                            <div key={project.id}>
                                <Link href={`/projects?project=${project.id}`}>
                                    <ProjectRow
                                        name={project.title}
                                        description={project.description}
                                        links={[
                                            ...(project.links.repository
                                                ? [
                                                      {
                                                          label: 'REPOSITORY',
                                                          href: project.links
                                                              .repository,
                                                      },
                                                  ]
                                                : []),
                                            ...(project.links.documentation
                                                ? [
                                                      {
                                                          label: 'DOCUMENTATION',
                                                          href: project.links
                                                              .documentation,
                                                      },
                                                  ]
                                                : []),
                                            ...(project.links.research
                                                ? [
                                                      {
                                                          label: 'RESEARCH',
                                                          href: project.links
                                                              .research,
                                                      },
                                                  ]
                                                : []),
                                        ]}
                                        className="hover:bg-primary-800/20 cursor-pointer transition-colors"
                                    />
                                </Link>
                                {index < displayProjects.length - 1 && (
                                    <div className="border-tertiary-400 border-b" />
                                )}
                            </div>
                        ))}
                    </div>

                    {/* View More Button */}
                    <div className="flex justify-end pt-10">
                        <Link href="/projects">
                            <Button variant="outline" size="lg">
                                VIEW FULL PROJECTS
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
