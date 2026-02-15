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
            <div className="mx-auto px-4 md:px-8 lg:px-24">
                <div className="space-y-10">
                    {/* Section Header */}
                    <div className="border-tertiary-400 border-b pb-6">
                        <h2 className="md:text-h4 text-body2 font-space-grotesk text-secondary-200 text-[18px] font-medium md:text-[28px]">
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
                                            ...(project.links.architecture
                                                ? [
                                                      {
                                                          label: 'ARCHITECTURE',
                                                          href: project.links
                                                              .architecture,
                                                      },
                                                  ]
                                                : []),
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
                                            ...(project.links.sdk
                                                ? [
                                                      {
                                                          label: 'SDK',
                                                          href: project.links
                                                              .sdk,
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
                                            ...(project.links.demo
                                                ? [
                                                      {
                                                          label: 'DEMO',
                                                          href: project.links
                                                              .demo,
                                                      },
                                                  ]
                                                : []),
                                            ...(project.links.spec
                                                ? [
                                                      {
                                                          label: 'SPECS',
                                                          href: project.links
                                                              .spec,
                                                      },
                                                  ]
                                                : []),
                                            ...(project.links.git
                                                ? [
                                                      {
                                                          label: 'GIT',
                                                          href: project.links
                                                              .git,
                                                      },
                                                  ]
                                                : []),
                                            ...(project.links.testnet
                                                ? [
                                                      {
                                                          label: 'TESTNET',
                                                          href: project.links
                                                              .testnet,
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
                    <div className="hidden justify-end md:flex">
                        <Link href="/projects">
                            <Button variant="outline" size="lg">
                                VIEW FULL PROJECTS
                            </Button>
                        </Link>
                    </div>
                    {/* View More Button Mobile*/}
                    <div className="flex justify-end md:hidden">
                        <Link href="/projects">
                            <Button variant="outline" size="sm">
                                VIEW FULL PROJECTS
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
