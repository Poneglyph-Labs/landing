/* eslint-disable */

'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { validationData, ValidationItem } from './data/externalValidationData'

interface ValidationCardProps {
    item: ValidationItem
}

function ValidationCard({ item }: ValidationCardProps) {
    return (
        <div className="inline-flex flex-col items-start justify-start gap-10 self-stretch p-6 outline outline-[0.50px] outline-offset-[-0.50px] outline-neutral-200">
            <div className="flex flex-col items-start justify-start gap-10 self-stretch">
                <div className="flex flex-col items-start justify-start gap-6 self-stretch">
                    <div className="font-space-grotesk justify-start self-stretch text-base leading-7 font-normal text-neutral-400">
                        "{item.quote}"
                    </div>
                </div>
            </div>
            <div className="inline-flex items-center justify-start gap-6 self-stretch">
                <div className="inline-flex flex-1 flex-col items-start justify-start gap-2">
                    <div className="font-space-grotesk justify-start self-stretch text-base leading-7 font-medium text-neutral-200">
                        {item.author.name}
                    </div>
                    <div className="flex flex-col items-start justify-start gap-1 self-stretch">
                        <div className="font-space-grotesk justify-start self-stretch text-xs leading-4 font-normal text-neutral-400">
                            {item.author.title}
                        </div>
                        <div className="font-space-grotesk justify-start self-stretch text-sm leading-5 font-normal text-zinc-300">
                            {item.author.organization}
                        </div>
                    </div>
                </div>
                <div className="relative h-12 w-12 overflow-hidden rounded-full">
                    <Image
                        src={item.author.avatar}
                        alt={item.author.name}
                        fill
                        className="object-cover"
                        onError={(e) => {
                            // Fallback to a placeholder if image fails to load
                            const target = e.target as HTMLImageElement
                            target.src = 'https://placehold.co/48x48'
                        }}
                    />
                </div>
            </div>
        </div>
    )
}

export function ExternalValidation() {
    const [currentPage, setCurrentPage] = useState(0)

    // Get current screen info
    const getScreenInfo = () => {
        if (typeof window === 'undefined')
            return { maxItems: 9, itemsPerPage: 3, screenType: 'desktop' }

        if (window.innerWidth < 768) {
            return { maxItems: 6, itemsPerPage: 1, screenType: 'mobile' }
        } else if (window.innerWidth < 1024) {
            return { maxItems: 8, itemsPerPage: 2, screenType: 'tablet' }
        } else {
            return { maxItems: 9, itemsPerPage: 3, screenType: 'desktop' }
        }
    }

    const [screenInfo, setScreenInfo] = useState(getScreenInfo())

    useEffect(() => {
        const handleResize = () => {
            setScreenInfo(getScreenInfo())
            setCurrentPage(0) // Reset to first page on screen change
        }

        handleResize() // Set initial value
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    // Check if we need navigation
    const needsNavigation = validationData.length > screenInfo.maxItems

    // Get items to display
    const getItemsToShow = () => {
        if (!needsNavigation) {
            // Show all available items up to the max limit
            return validationData.slice(0, screenInfo.maxItems)
        } else {
            // When navigation is needed, show max items per page
            const startIndex = currentPage * screenInfo.maxItems
            const endIndex = startIndex + screenInfo.maxItems
            return validationData.slice(startIndex, endIndex)
        }
    }

    // Calculate total pages
    const totalPages = needsNavigation
        ? Math.ceil(validationData.length / screenInfo.maxItems)
        : 1

    const nextPage = () => {
        setCurrentPage((prev) => (prev + 1) % totalPages)
    }

    const prevPage = () => {
        setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages)
    }

    return (
        <section className="bg-primary-900 border-tertiary-400 w-full border-t px-4 py-16 md:px-12 md:py-20 lg:px-24 lg:py-24">
            <div className="flex flex-col items-start justify-start gap-12 md:gap-16">
                {/* Header */}
                <div className="flex flex-col items-start justify-start gap-4 self-stretch">
                    <h2 className="font-space-grotesk text-secondary-200 text-[18px] leading-tight font-medium md:text-[32px] lg:text-[32px]">
                        EXTERNAL VALIDATION
                    </h2>
                    <div className="border-tertiary-400 h-px w-full border-t" />
                    <p className="text-secondary-600 font-space-grotesk text-[16px] leading-7 font-normal md:text-[20px]">
                        Independent assessments from researchers, auditors, and
                        engineering collaborators.
                    </p>
                </div>

                {/* Validation Cards Grid */}
                {validationData.length > 0 ? (
                    <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {getItemsToShow().map((item) => (
                            <ValidationCard key={item.id} item={item} />
                        ))}
                    </div>
                ) : (
                    <div className="flex flex-col items-center justify-center gap-4 self-stretch py-16">
                        <div className="text-secondary-600 font-space-grotesk text-[14px] font-normal md:text-[16px]">
                            No external validation at the moment
                        </div>
                    </div>
                )}

                {/* Navigation Controls */}
                {needsNavigation && totalPages > 1 && (
                    <div className="flex items-center justify-end gap-16 self-stretch">
                        <button
                            onClick={prevPage}
                            className="border-tertiary-600 hover:bg-primary-800/20 flex h-12 w-12 items-center justify-center border transition-colors"
                            aria-label="Previous page"
                        >
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                className="text-secondary-200"
                            >
                                <path
                                    d="M15 18L9 12L15 6"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </button>

                        <button
                            onClick={nextPage}
                            className="border-tertiary-600 hover:bg-primary-800/20 flex h-12 w-12 items-center justify-center border transition-colors"
                            aria-label="Next page"
                        >
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                className="text-secondary-200"
                            >
                                <path
                                    d="M9 18L15 12L9 6"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </button>
                    </div>
                )}
            </div>
        </section>
    )
}
