'use client'

import { useState } from 'react'
import { Project } from '../data/projectsData'
import { Icon } from '../../../components/ui/Icon'

interface ProjectCardProps {
    project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
    const [showTechnicalSummary, setShowTechnicalSummary] = useState(true)
    const [showFullArchitecture, setShowFullArchitecture] = useState(false)

    // Truncate system architecture to approximately 3 lines
    const truncatedArchitecture =
        project.systemArchitecture.length > 450
            ? project.systemArchitecture.substring(0, 450) + '...'
            : project.systemArchitecture

    return (
        <div className="flex w-full flex-col items-start gap-10">
            {/* Main Content Row */}
            <div className="flex w-full items-start gap-4 lg:gap-8">
                {/* About Project - Responsive width */}
                <div className="flex w-full flex-[1.1] shrink-0 flex-col items-start gap-4">
                    <h2 className="text-h3 font-space-grotesk text-secondary-200 text-[32px] font-bold">
                        {project.title}
                    </h2>
                    <p className="text-body2 font-regular text-secondary-200 text-[18px]">
                        {project.description}
                    </p>
                    <div className="border-tertiary-400 flex items-center gap-4 space-x-[0.5] border-l">
                        <p></p>
                        <p className="text-body1 font-regular text-secondary-400 leading-7 tracking-[-0.16px]">
                            <span>Status: </span>
                            <span className="text-secondary-200 font-medium">
                                {project.status}
                            </span>
                        </p>
                    </div>
                </div>

                {/* System Architecture - flex-1 */}
                <div className="flex min-w-0 flex-[1.3] flex-col items-start gap-4 overflow-hidden">
                    <p className="text-body1 font-regular text-secondary-600 w-full truncate leading-7 tracking-[-0.16px] uppercase">
                        SYSTEM ARCHITECTURE
                    </p>
                    <div className="text-body2 font-regular text-secondary-200 w-full text-[18px] leading-7">
                        {showFullArchitecture
                            ? project.systemArchitecture
                            : truncatedArchitecture}
                    </div>
                    <div className="bg-primary-900 flex w-full items-center gap-2 py-3">
                        <button
                            onClick={() =>
                                setShowFullArchitecture(!showFullArchitecture)
                            }
                            className="text-subheading text-secondary-200 cursor-pointer text-[20px] font-medium underline transition-opacity hover:opacity-80"
                        >
                            {showFullArchitecture ? 'See less' : 'See more'}
                        </button>
                    </div>
                </div>

                {/* External Links - Responsive width */}
                <div className="flex w-full flex-[0.7] shrink-0 flex-col items-end gap-20">
                    <div className="flex w-full flex-1 flex-col items-start gap-4">
                        {project.links.architecture && (
                            <div className="flex w-full items-center justify-end px-2 py-3 lg:px-0">
                                <a
                                    href={project.links.architecture}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-subheading text-tertiary-200 text-right text-[20px] font-medium underline"
                                >
                                    VIEW ARCHITECTURE
                                </a>
                            </div>
                        )}
                        {project.links.repository && (
                            <div className="flex w-full items-center justify-end px-2 py-3 lg:px-0">
                                <a
                                    href={project.links.repository}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-subheading text-tertiary-200 text-right text-[20px] font-medium underline"
                                >
                                    VIEW REPOSITORY
                                </a>
                            </div>
                        )}
                        {project.links.documentation && (
                            <div className="flex w-full items-center justify-end px-2 py-3 lg:px-0">
                                <a
                                    href={project.links.documentation}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-subheading text-tertiary-200 text-right text-[20px] font-medium underline"
                                >
                                    VIEW DOCUMENTATION
                                </a>
                            </div>
                        )}
                        {project.links.sdk && (
                            <div className="flex w-full items-center justify-end px-2 py-3 lg:px-0">
                                <a
                                    href={project.links.sdk}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-subheading text-tertiary-200 text-right text-[20px] font-medium underline"
                                >
                                    VIEW DEPLOYMENT
                                </a>
                            </div>
                        )}
                        {project.links.demo && (
                            <div className="flex w-full items-center justify-end px-2 py-3 lg:px-0">
                                <a
                                    href={project.links.demo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-subheading text-tertiary-200 text-right text-[20px] font-medium underline"
                                >
                                    VIEW DEMO
                                </a>
                            </div>
                        )}
                        {project.links.spec && (
                            <div className="flex w-full items-center justify-end px-2 py-3 lg:px-0">
                                <a
                                    href={project.links.spec}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-subheading text-tertiary-200 text-right text-[20px] font-medium underline"
                                >
                                    VIEW SPECS
                                </a>
                            </div>
                        )}
                        {project.links.git && (
                            <div className="flex w-full items-center justify-end px-2 py-3 lg:px-0">
                                <a
                                    href={project.links.git}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-subheading text-tertiary-200 text-right text-[20px] font-medium underline"
                                >
                                    VIEW GIT
                                </a>
                            </div>
                        )}
                        {project.links.testnet && (
                            <div className="flex w-full items-center justify-end px-2 py-3 lg:px-0">
                                <a
                                    href={project.links.testnet}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-subheading text-tertiary-200 text-right text-[20px] font-medium underline"
                                >
                                    VIEW TESTNET
                                </a>
                            </div>
                        )}
                    </div>

                    {project.siteUrl && (
                        <a
                            href={project.siteUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="border-tertiary-400 flex items-center justify-center gap-2 border px-2 py-3 lg:px-4"
                        >
                            <span className="text-subheading text-secondary-200 text-[20px] font-medium">
                                GO TO SITE
                            </span>
                            <Icon
                                name="arrow-up-right"
                                size={24}
                                className="text-secondary-200"
                            />
                        </a>
                    )}
                </div>
            </div>

            {/* Technical Summary */}
            <div className="flex w-full flex-col items-start gap-6">
                <button
                    onClick={() =>
                        setShowTechnicalSummary(!showTechnicalSummary)
                    }
                    className="flex items-center gap-2 transition-opacity hover:opacity-80"
                >
                    <span className="text-subheading text-secondary-600 text-[20px] font-medium">
                        TECHNICAL SUMMARY
                    </span>
                    <Icon
                        name={showTechnicalSummary ? 'arrow-down' : 'arrow-up'}
                        size={24}
                        className={`text-secondary-400 transition-transform'' }`}
                    />
                </button>

                {showTechnicalSummary && (
                    <div className="flex w-full flex-col items-start gap-4">
                        {project.technicalSummary.map((item, index) => (
                            <div
                                key={index}
                                className="text-subheading text-secondary-400 w-full text-[20px] font-medium"
                            >
                                • {item}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}
