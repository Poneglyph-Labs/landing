'use client'
/* eslint-disable */

import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { ProjectCard } from './ProjectCard'
import { getProjects } from '../data/projectsData'
import { Icon } from '../../../components/ui/Icon'

export function ProjectsPageContent() {
    const projects = getProjects()
    const searchParams = useSearchParams()
    const projectParam = searchParams.get('project')

    const [expandedProjects, setExpandedProjects] = useState<string[]>([])

    // Auto-expand project from URL parameter
    useEffect(() => {
        if (projectParam && projects.find((p) => p.id === projectParam)) {
            setExpandedProjects([projectParam])

            // Scroll to the project after a short delay to ensure rendering
            setTimeout(() => {
                const projectElement = document.getElementById(
                    `project-${projectParam}`
                )
                if (projectElement) {
                    projectElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start',
                        inline: 'nearest',
                    })
                }
            }, 100)
        }
    }, [projectParam, projects])

    const toggleExpanded = (projectId: string) => {
        setExpandedProjects((prev) =>
            prev.includes(projectId)
                ? prev.filter((id) => id !== projectId)
                : [...prev, projectId]
        )
    }

    const isExpanded = (projectId: string) =>
        expandedProjects.includes(projectId)

    return (
        <>
            {/* Desktop Layout */}
            <div className="hidden flex-col items-start justify-center md:flex">
                <div className="bg-primary-900 mx-auto flex w-full flex-col items-start justify-start gap-20 overflow-hidden px-4 pt-10 pb-20 md:px-12 lg:px-24">
                    {/* Header */}
                    <div className="flex flex-col items-start justify-start gap-10 self-stretch">
                        <div className="border-tertiary-400 flex flex-col items-start justify-center gap-4 self-stretch border-b-[0.50px] py-6">
                            <h1 className="text-h4 font-space-grotesk text-secondary-200 font-medium tracking-[0.28px]">
                                OUR PROJECTS
                            </h1>
                            <p className="text-body2 text-secondary-600 font-medium tracking-[0.18px]">
                                End-to-end systems assembled from cryptographic,
                                decentralized, and verification research
                                conducted at Poneglyph Labs.
                            </p>
                        </div>
                    </div>

                    {/* Projects List */}
                    <div className="flex flex-col items-start justify-start gap-12 self-stretch">
                        {projects.map((project, projectIndex) => (
                            <div
                                key={project.id}
                                id={`project-${project.id}`}
                                className="w-full"
                            >
                                <ProjectCard
                                    project={project}
                                    showGoToSite={
                                        project.id === 'veravote' ||
                                        project.id === 'nexus-grid'
                                    }
                                />
                                {projectIndex < projects.length - 1 && (
                                    <div className="border-tertiary-600 mt-12 h-0 self-stretch border-t-[0.50px]" />
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Mobile Layout */}
            <div className="bg-primary-900 flex flex-col items-start justify-start gap-6 overflow-hidden py-10 md:hidden">
                <div className="flex flex-col items-start justify-start gap-10 self-stretch px-4">
                    {/* Mobile Header */}
                    <div className="border-tertiary-400 flex flex-col items-start justify-center gap-2 self-stretch border-b-[0.50px] py-4">
                        <h1 className="text-body2 font-space-grotesk text-secondary-200 font-medium">
                            PROJECTS
                        </h1>
                        <p className="text-caption font-space-grotesk text-secondary-600 self-stretch font-normal">
                            End-to-end systems assembled from cryptographic,
                            decentralized, and verification research conducted
                            at Poneglyph Labs.
                        </p>
                    </div>

                    {/* Mobile Projects List */}
                    <div className="flex flex-col items-start justify-start gap-6">
                        {projects.map((project) => (
                            <div
                                key={project.id}
                                id={`project-${project.id}`}
                                className="flex w-full flex-col items-start justify-start gap-6"
                            >
                                <div className="flex flex-col items-start justify-start gap-6 self-stretch">
                                    {/* Project Header */}
                                    <div className="flex flex-col items-start justify-start gap-4 self-stretch">
                                        <h2 className="text-subheading font-space-grotesk font-medium text-white">
                                            {project.title}
                                        </h2>
                                        <p className="text-caption font-space-grotesk self-stretch font-normal text-white">
                                            {project.description}
                                        </p>

                                        {/* Status */}
                                        <div className="flex items-center justify-center gap-4 self-stretch">
                                            <div className="border-tertiary-400 h-8 border-r" />
                                            <div className="flex flex-1 justify-start">
                                                <span className="text-caption font-space-grotesk text-secondary-600 font-normal">
                                                    Status:
                                                    <span className="text-caption font-space-grotesk text-secondary-200 font-medium">
                                                        {' '}
                                                        {project.status}
                                                    </span>
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* System Architecture */}
                                    <div className="flex flex-col items-start justify-start gap-4 self-stretch overflow-hidden">
                                        <div className="text-caption font-space-grotesk text-secondary-600 self-stretch font-normal">
                                            SYSTEM ARCHITECTURE
                                        </div>
                                        <div
                                            className={`text-caption font-space-grotesk text-secondary-200 self-stretch font-normal ${
                                                isExpanded(project.id)
                                                    ? ''
                                                    : 'line-clamp-5'
                                            }`}
                                        >
                                            {project.systemArchitecture}
                                        </div>

                                        {/* See More Button */}
                                        <button
                                            onClick={() =>
                                                toggleExpanded(project.id)
                                            }
                                            className="bg-primary-900 border-tertiary-400 flex items-center justify-start gap-2 self-stretch py-3 md:border-b"
                                        >
                                            <span className="text-caption font-space-grotesk text-secondary-200 font-medium underline">
                                                {isExpanded(project.id)
                                                    ? 'See less'
                                                    : 'See more'}
                                            </span>
                                        </button>
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="flex items-start justify-end self-stretch">
                                        <div className="flex flex-1 flex-col items-start justify-start gap-2 self-stretch">
                                            {project.links.repository && (
                                                <a
                                                    href={
                                                        project.links.repository
                                                    }
                                                    className="flex items-center justify-start gap-2 self-stretch py-2"
                                                >
                                                    <span className="text-caption font-space-grotesk text-secondary-400 font-medium underline">
                                                        VIEW REPOSITORY
                                                    </span>
                                                </a>
                                            )}
                                            {project.links.documentation && (
                                                <a
                                                    href={
                                                        project.links
                                                            .documentation
                                                    }
                                                    className="flex items-center justify-start gap-2 self-stretch py-2"
                                                >
                                                    <span className="text-caption font-space-grotesk text-secondary-400 font-medium underline">
                                                        VIEW DOCUMENTATION
                                                    </span>
                                                </a>
                                            )}
                                            {project.links.research && (
                                                <a
                                                    href={
                                                        project.links.research
                                                    }
                                                    className="flex items-center justify-start gap-2 self-stretch py-2"
                                                >
                                                    <span className="text-caption font-space-grotesk text-secondary-400 font-medium underline">
                                                        VIEW RESEARCH
                                                    </span>
                                                </a>
                                            )}
                                        </div>

                                        {/* Go to Site Button - Only for specific projects */}
                                        {(project.id === 'veravote' ||
                                            project.id === 'nexus-grid') && (
                                            <button className="border-tertiary-400 flex items-center justify-center gap-2 border px-2 py-3">
                                                <span className="text-caption font-space-grotesk text-secondary-200 font-medium">
                                                    GO TO SITE
                                                </span>
                                                <Icon
                                                    name="arrow-up-right"
                                                    size={16}
                                                    className="text-secondary-200"
                                                />
                                            </button>
                                        )}
                                    </div>
                                </div>

                                {/* Technical Summary */}
                                <div className="flex flex-col items-start justify-start gap-4 self-stretch">
                                    <div className="flex items-center justify-start gap-2">
                                        <span className="text-caption font-space-grotesk text-secondary-600 font-medium">
                                            TECHNICAL SUMMARY
                                        </span>
                                        <Icon
                                            name="arrow-down"
                                            size={16}
                                            className="text-secondary-600"
                                        />
                                    </div>

                                    {/* Technical Points - Only show for Nexus Grid as per design */}
                                    {project.id === 'nexus-grid' && (
                                        <div className="flex flex-col items-start justify-start gap-2 self-stretch">
                                            {project.technicalSummary.map(
                                                (point, pointIndex) => (
                                                    <div
                                                        key={pointIndex}
                                                        className="text-caption font-space-grotesk text-secondary-600 flex items-start gap-2 self-stretch leading-7 font-medium"
                                                    >
                                                        <span className="text-secondary-600 flex-shrink-0">
                                                            •
                                                        </span>
                                                        <span className="flex-1">
                                                            {point}
                                                        </span>
                                                    </div>
                                                )
                                            )}
                                        </div>
                                    )}
                                </div>

                                {/* Divider - except for last item */}
                                {/* {index < projects.length - 1 && (
                                    <div className="self-stretch h-px border-t border-tertiary-400" />
                                )} */}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}
