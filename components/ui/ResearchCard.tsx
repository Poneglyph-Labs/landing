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
        <Link href={`/archive/${slug}`} className="block">
            <div
                className={`bg-primary-900 border-tertiary-400 hover:border-secondary-200 group cursor-pointer space-y-10 p-8 transition-colors ${className}`}
            >
                {/* Header */}
                <div className="flex items-center justify-between">
                    <div className="border-tertiary-400 border px-3 py-2">
                        <span className="text-caption font-regular text-secondary-200">
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
                <div className="space-y-10">
                    <h3 className="text-h4 font-space-grotesk text-secondary-200 leading-tight font-medium">
                        {title}
                    </h3>
                    <p className="text-body2 font-regular text-secondary-600">
                        {date}
                    </p>
                </div>
            </div>
        </Link>
    )
}
