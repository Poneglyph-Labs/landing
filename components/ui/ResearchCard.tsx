/* eslint-disable */

import Link from 'next/link'
import { ArchiveItemType } from '../../app/archive/data/archiveData'
import { Icon } from './Icon'

interface ResearchCardProps {
    type: ArchiveItemType
    title: string
    date: string
    slug: string
    className?: string
}

const typeColors = {
    Paper: 'border-blue-500',
    Audit: 'border-red-500',
    'Proof of Concept': 'border-yellow-500',
    Repository: 'border-green-500',
}

// Map actual types to display names
const getDisplayType = (type: ArchiveItemType): string => {
    const typeDisplayMap = {
        Paper: 'Whitepaper',
        Repository: 'Open Source',
        Audit: 'Security Audit',
        'Proof of Concept': 'Proof of Concept',
    }
    return typeDisplayMap[type] || type
}

export function ResearchCard({
    type,
    title,
    date,
    slug,
    className = '',
}: ResearchCardProps) {
    return (
        <Link href={`/archive/${slug}`} className="block h-full">
            <div
                className={`bg-primary-900 border-tertiary-400 hover:border-secondary-200 group flex h-full cursor-pointer flex-col p-4 transition-colors md:p-8 ${className}`}
            >
                {/* Header */}
                <div className="flex justify-between">
                    <div className="border-tertiary-400 mb-[38px] border px-3 py-2">
                        <span className="text-caption font-regular text-secondary-200 text-[14px] md:text-[16px]">
                            {getDisplayType(type)}
                        </span>
                    </div>
                    <Icon
                        name="arrow-up-right"
                        size={24}
                        className="text-secondary-200"
                    />
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col">
                    <h3 className="text-h4 font-space-grotesk text-secondary-200 text-[20px] leading-tight font-medium md:text-[28px]">
                        {title}
                    </h3>

                    <p className="text-body2 font-regular text-secondary-600 mt-auto">
                        {date}
                    </p>
                </div>
            </div>
        </Link>
    )
}
