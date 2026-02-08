'use client'

import { useState } from 'react'
import { Icon } from '../../../components/ui/Icon'
import { ArchiveDomain, ArchiveItemType } from '../data/archiveData'

interface ArchiveFiltersProps {
    searchQuery: string
    onSearchChange: (query: string) => void
    selectedDomain: ArchiveDomain | 'All'
    onDomainChange: (domain: ArchiveDomain | 'All') => void
    selectedType: ArchiveItemType | 'All'
    onTypeChange: (type: ArchiveItemType | 'All') => void
    sortBy: 'Most Recent' | 'Oldest'
    onSortChange: (sort: 'Most Recent' | 'Oldest') => void
    isMobile?: boolean
}

export function ArchiveFilters({
    searchQuery,
    onSearchChange,
    selectedDomain,
    onDomainChange,
    selectedType,
    onTypeChange,
    sortBy,
    onSortChange,
    isMobile = false,
}: ArchiveFiltersProps) {
    const [showDomainDropdown, setShowDomainDropdown] = useState(false)
    const [showTypeDropdown, setShowTypeDropdown] = useState(false)
    const [showSortDropdown, setShowSortDropdown] = useState(false)

    const domains: (ArchiveDomain | 'All')[] = [
        'All',
        'Cryptography',
        'Decentralized System',
        'Artificial Intelligence',
    ]
    // Type mapping for display vs actual values
    const typeDisplayMap = {
        All: 'All',
        Whitepaper: 'Paper',
        'Open Source': 'Repository',
        'Security Audit': 'Audit',
        'Proof of Concept': 'Proof of Concept',
    } as const

    const typeDisplayOptions = [
        'All',
        'Whitepaper',
        'Open Source',
        'Security Audit',
        'Proof of Concept',
    ] as const

    const getDisplayType = (actualType: ArchiveItemType | 'All'): string => {
        const entry = Object.entries(typeDisplayMap).find(
            ([_, actual]) => actual === actualType
        )
        return entry ? entry[0] : actualType
    }

    const getActualType = (displayType: string): ArchiveItemType | 'All' => {
        return (
            typeDisplayMap[displayType as keyof typeof typeDisplayMap] || 'All'
        )
    }
    const sortOptions: ('Most Recent' | 'Oldest')[] = ['Most Recent', 'Oldest']

    return (
        <div
            className={`flex w-full items-start ${isMobile ? 'flex-col gap-0' : 'flex-col gap-6'}`}
        >
            {/* Search Bar - Only show on desktop, mobile has its own */}
            {!isMobile && (
                <div className="border-tertiary-600 flex h-16 w-full items-center gap-2 border p-4">
                    <div className="flex h-6 w-6 items-center justify-center">
                        <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            className="h-6 w-6"
                        >
                            <path
                                d="M21 21L16.514 16.506L21 21ZM19 10.5C19 15.194 15.194 19 10.5 19C5.806 19 2 15.194 2 10.5C2 5.806 5.806 2 10.5 2C15.194 2 19 5.806 19 10.5Z"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </div>
                    <input
                        type="text"
                        placeholder="Search research artifacts"
                        value={searchQuery}
                        onChange={(e) => onSearchChange(e.target.value)}
                        className="text-body1 font-regular text-secondary-600 placeholder-secondary-600 flex-1 bg-transparent tracking-tight outline-none"
                    />
                </div>
            )}

            {/* Filter Buttons */}
            <div
                className={`flex items-start ${isMobile ? 'w-full flex-col' : 'gap-10 md:gap-20'} pl-6`}
            >
                {/* Domain Filter */}
                <div className={`relative ${isMobile ? 'w-full' : ''}`}>
                    <div className="flex justify-center">
                        <button
                            onClick={() => {
                                setShowDomainDropdown(!showDomainDropdown)
                                setShowTypeDropdown(false)
                                setShowSortDropdown(false)
                            }}
                            className="flex cursor-pointer items-center justify-center gap-2 py-3 transition-colors"
                        >
                            <span className="md:text-subheading text-secondary-200 text-[14px] font-medium md:text-[20px]">
                                <span className="text-primary-400">
                                    Domains:
                                </span>{' '}
                                {selectedDomain}
                            </span>
                            <Icon
                                name="arrow-down"
                                size={24}
                                className="text-secondary-200"
                            />
                        </button>
                    </div>

                    {showDomainDropdown && (
                        <div
                            className={`border-tertiary-600 absolute top-full left-0 z-[9999] mt-1 border-[0.5px] bg-[#141414] ${isMobile ? 'w-full' : 'w-64'}`}
                        >
                            {domains.map((domain, index) => (
                                <div key={domain}>
                                    <div className="flex flex-col items-start justify-center px-4 py-3">
                                        <button
                                            onClick={() => {
                                                onDomainChange(domain)
                                                setShowDomainDropdown(false)
                                            }}
                                            className={`text-body1 font-regular cursor-pointer text-left transition-colors ${
                                                domain === selectedDomain
                                                    ? 'text-secondary-200'
                                                    : 'text-secondary-600'
                                            }`}
                                        >
                                            {domain}
                                        </button>
                                    </div>
                                    {index < domains.length - 1 && (
                                        <div className="border-tertiary-600 h-0 w-full border-t-[0.5px]" />
                                    )}
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Type Filter */}
                <div className={`relative ${isMobile ? 'w-full' : ''}`}>
                    <button
                        onClick={() => {
                            setShowTypeDropdown(!showTypeDropdown)
                            setShowDomainDropdown(false)
                            setShowSortDropdown(false)
                        }}
                        className={`flex cursor-pointer items-center gap-2 py-3 transition-colors ${isMobile ? 'w-full justify-center' : 'justify-center'}`}
                    >
                        <span className="md:text-subheading text-secondary-200 text-[14px] font-medium md:text-[20px]">
                            <span className="text-primary-400"> Type:</span>
                            {getDisplayType(selectedType)}
                        </span>
                        <Icon
                            name="arrow-down"
                            size={24}
                            className="text-secondary-200"
                        />
                    </button>

                    {showTypeDropdown && (
                        <div
                            className={`border-tertiary-600 absolute top-full left-0 z-[9999] mt-1 border-[0.5px] bg-[#141414] ${isMobile ? 'w-full' : 'w-64'}`}
                        >
                            {typeDisplayOptions.map((displayType, index) => (
                                <div key={displayType}>
                                    <div className="flex flex-col items-start justify-center px-4 py-3">
                                        <button
                                            onClick={() => {
                                                onTypeChange(
                                                    getActualType(displayType)
                                                )
                                                setShowTypeDropdown(false)
                                            }}
                                            className={`text-body1 font-regular cursor-pointer text-left transition-colors ${
                                                getActualType(displayType) ===
                                                selectedType
                                                    ? 'text-secondary-200'
                                                    : 'text-secondary-600'
                                            }`}
                                        >
                                            {displayType}
                                        </button>
                                    </div>
                                    {index < typeDisplayOptions.length - 1 && (
                                        <div className="border-tertiary-600 h-0 w-full border-t-[0.5px]" />
                                    )}
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Sort Filter */}
                <div className={`relative ${isMobile ? 'w-full' : ''}`}>
                    <button
                        onClick={() => {
                            setShowSortDropdown(!showSortDropdown)
                            setShowDomainDropdown(false)
                            setShowTypeDropdown(false)
                        }}
                        className={`flex cursor-pointer items-center gap-2 py-3 transition-colors ${isMobile ? 'w-full justify-center' : 'justify-center'}`}
                    >
                        <span className="md:text-subheading text-secondary-200 text-[14px] font-medium md:text-[20px]">
                            <span className="text-primary-400">Sort:</span>{' '}
                            {sortBy}
                        </span>
                        <Icon
                            name="arrow-down"
                            size={24}
                            className="text-secondary-200"
                        />
                    </button>

                    {showSortDropdown && (
                        <div
                            className={`border-tertiary-600 absolute top-full left-0 z-[9999] mt-1 border-[0.5px] bg-[#141414] ${isMobile ? 'w-full' : 'w-64'}`}
                        >
                            {sortOptions.map((option, index) => (
                                <div key={option}>
                                    <div className="flex flex-col items-start justify-center px-4 py-3">
                                        <button
                                            onClick={() => {
                                                onSortChange(option)
                                                setShowSortDropdown(false)
                                            }}
                                            className={`text-body1 font-regular cursor-pointer text-left transition-colors ${
                                                option === sortBy
                                                    ? 'text-secondary-200'
                                                    : 'text-secondary-600'
                                            }`}
                                        >
                                            {option}
                                        </button>
                                    </div>
                                    {index < sortOptions.length - 1 && (
                                        <div className="border-tertiary-600 h-0 w-full border-t-[0.5px]" />
                                    )}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
