'use client'

import { useState } from 'react'
import { Project } from '../data/projectsData'
import { Icon } from '../../../components/ui/Icon'

interface ProjectCardProps {
    project: Project
    showGoToSite?: boolean
}

export function ProjectCard({
    project,
    showGoToSite = false,
}: ProjectCardProps) {
    const [showTechnicalSummary, setShowTechnicalSummary] = useState(true)

    return (
        <div className="flex w-[1248px] flex-col items-start gap-10">
            {/* Main Content Row */}
            <div className="flex w-full items-start gap-10">
                {/* About Project - 436px */}
                <div className="flex w-[436px] shrink-0 flex-col items-start gap-4">
                    <h2 className="text-h3 font-space-grotesk font-bold text-white">
                        {project.title}
                    </h2>
                    <p className="text-body2 font-regular text-white">
                        {project.description}
                    </p>
                    <div className="flex items-center gap-4">
                        <div className="border-tertiary-400 h-0 w-7 origin-left rotate-90 border-t"></div>
                        <p className="text-body1 font-regular text-secondary-400 leading-7 tracking-[-0.16px]">
                            <span>Status: </span>
                            <span className="text-secondary-200 font-medium">
                                {project.status}
                            </span>
                        </p>
                    </div>
                </div>

                {/* System Architecture - flex-1 */}
                <div className="flex flex-1 flex-col items-start gap-4 overflow-hidden">
                    <p className="text-body1 font-regular text-secondary-600 w-full truncate leading-7 tracking-[-0.16px] uppercase">
                        SYSTEM ARCHITECTURE
                    </p>
                    <div className="text-body2 font-regular text-secondary-200 h-[384px] w-full leading-7">
                        {project.systemArchitecture}
                    </div>
                    <div className="bg-primary-900 flex w-full items-center gap-2 py-3">
                        <a
                            href="#"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-subheading text-secondary-200 font-medium underline"
                        >
                            See more
                        </a>
                    </div>
                </div>

                {/* External Links - 244px */}
                <div className="flex w-[244px] shrink-0 flex-col items-end gap-20">
                    <div className="flex w-full flex-1 flex-col items-start gap-4">
                        {project.links.repository && (
                            <div className="flex w-full items-center justify-end px-4 py-3">
                                <a
                                    href={project.links.repository}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-subheading text-tertiary-200 font-medium underline"
                                >
                                    VIEW REPOSITORY
                                </a>
                            </div>
                        )}
                        {project.links.documentation && (
                            <div className="flex w-full items-center justify-end px-4 py-3">
                                <a
                                    href={project.links.documentation}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-subheading text-tertiary-200 font-medium underline"
                                >
                                    VIEW DOCUMENTATION
                                </a>
                            </div>
                        )}
                        {project.links.research && (
                            <div className="flex w-full items-center justify-end px-4 py-3">
                                <a
                                    href={project.links.research}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-subheading text-tertiary-200 font-medium underline"
                                >
                                    VIEW DEPLOYMENT
                                </a>
                            </div>
                        )}
                    </div>

                    {showGoToSite && (
                        <a
                            href="#"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="border-tertiary-400 flex items-center justify-center gap-2 border px-4 py-3"
                        >
                            <span className="text-subheading text-secondary-200 font-medium">
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
                    <span className="text-subheading text-secondary-600 font-medium">
                        TECHNICAL SUMMARY
                    </span>
                    <Icon
                        name="arrow-down"
                        size={24}
                        className={`text-secondary-400 transition-transform ${
                            !showTechnicalSummary ? 'rotate-180' : ''
                        }`}
                    />
                </button>

                {showTechnicalSummary && (
                    <div className="flex w-full flex-col items-start gap-4">
                        {project.technicalSummary.map((item, index) => (
                            <div
                                key={index}
                                className="text-subheading text-secondary-400 w-full font-medium"
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
