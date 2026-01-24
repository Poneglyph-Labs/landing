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
}

export function ArchiveFilters({
    searchQuery,
    onSearchChange,
    selectedDomain,
    onDomainChange,
    selectedType,
    onTypeChange,
    sortBy,
    onSortChange
}: ArchiveFiltersProps) {
    const [showDomainDropdown, setShowDomainDropdown] = useState(false)
    const [showTypeDropdown, setShowTypeDropdown] = useState(false)
    const [showSortDropdown, setShowSortDropdown] = useState(false)

    const domains: (ArchiveDomain | 'All')[] = ['All', 'Cryptography', 'Decentralized System', 'Artificial Intelligence']
    const types: (ArchiveItemType | 'All')[] = ['All', 'Paper', 'Audit', 'Repository', 'Proof of Concept']
    const sortOptions: ('Most Recent' | 'Oldest')[] = ['Most Recent', 'Oldest']

    return (
        <div className="flex flex-col gap-6 items-start w-full">
            {/* Search Bar */}
            <div className="border border-tertiary-600 flex gap-2 h-16 items-center p-4 w-full">
                <div className="w-6 h-6 flex items-center justify-center">
                    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
                        <path d="M21 21L16.514 16.506L21 21ZM19 10.5C19 15.194 15.194 19 10.5 19C5.806 19 2 15.194 2 10.5C2 5.806 5.806 2 10.5 2C15.194 2 19 5.806 19 10.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </div>
                <input
                    type="text"
                    placeholder="Search research artifacts"
                    value={searchQuery}
                    onChange={(e) => onSearchChange(e.target.value)}
                    className="flex-1 bg-transparent text-body1 font-regular text-secondary-600 placeholder-secondary-600 outline-none tracking-tight"
                />
            </div>

            {/* Filter Buttons */}
            <div className="flex gap-10 md:gap-20 items-start">
                {/* Domain Filter */}
                <div className="relative">
                    <button
                        onClick={() => setShowDomainDropdown(!showDomainDropdown)}
                        className="border border-tertiary-400 flex gap-2 items-center justify-center px-4 py-3 hover:border-secondary-200 transition-colors"
                    >
                        <span className="text-subheading font-medium text-secondary-200">
                            Domains: {selectedDomain}
                        </span>
                        <Icon name="strategy" size={24} className="text-secondary-200" />
                    </button>
                    
                    {showDomainDropdown && (
                        <div className="absolute top-full left-0 mt-1 bg-primary-800 border border-tertiary-600 w-52 z-10">
                            {domains.map((domain, index) => (
                                <div key={domain}>
                                    <button
                                        onClick={() => {
                                            onDomainChange(domain)
                                            setShowDomainDropdown(false)
                                        }}
                                        className={`w-full text-left px-4 py-3 text-body1 font-regular hover:bg-primary-500 transition-colors ${
                                            domain === selectedDomain ? 'text-secondary-200' : 'text-secondary-600'
                                        }`}
                                    >
                                        {domain}
                                    </button>
                                    {index < domains.length - 1 && (
                                        <div className="h-px bg-tertiary-600" />
                                    )}
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Type Filter */}
                <div className="relative">
                    <button
                        onClick={() => setShowTypeDropdown(!showTypeDropdown)}
                        className="border border-tertiary-400 flex gap-2 items-center justify-center px-4 py-3 hover:border-secondary-200 transition-colors"
                    >
                        <span className="text-subheading font-medium text-secondary-200">
                            Type: {selectedType}
                        </span>
                        <Icon name="strategy" size={24} className="text-secondary-200" />
                    </button>
                    
                    {showTypeDropdown && (
                        <div className="absolute top-full left-0 mt-1 bg-primary-800 border border-tertiary-600 w-52 z-10">
                            {types.map((type, index) => (
                                <div key={type}>
                                    <button
                                        onClick={() => {
                                            onTypeChange(type)
                                            setShowTypeDropdown(false)
                                        }}
                                        className={`w-full text-left px-4 py-3 text-body1 font-regular hover:bg-primary-500 transition-colors ${
                                            type === selectedType ? 'text-secondary-200' : 'text-secondary-600'
                                        }`}
                                    >
                                        {type}
                                    </button>
                                    {index < types.length - 1 && (
                                        <div className="h-px bg-tertiary-600" />
                                    )}
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Sort Filter */}
                <div className="relative">
                    <button
                        onClick={() => setShowSortDropdown(!showSortDropdown)}
                        className="border border-tertiary-400 flex gap-2 items-center justify-center px-4 py-3 hover:border-secondary-200 transition-colors"
                    >
                        <span className="text-subheading font-medium text-secondary-200">
                            Sort: {sortBy}
                        </span>
                        <Icon name="strategy" size={24} className="text-secondary-200" />
                    </button>
                    
                    {showSortDropdown && (
                        <div className="absolute top-full left-0 mt-1 bg-primary-800 border border-tertiary-600 w-52 z-10">
                            {sortOptions.map((option, index) => (
                                <div key={option}>
                                    <button
                                        onClick={() => {
                                            onSortChange(option)
                                            setShowSortDropdown(false)
                                        }}
                                        className={`w-full text-left px-4 py-3 text-body1 font-regular hover:bg-primary-500 transition-colors ${
                                            option === sortBy ? 'text-secondary-200' : 'text-secondary-600'
                                        }`}
                                    >
                                        {option}
                                    </button>
                                    {index < sortOptions.length - 1 && (
                                        <div className="h-px bg-tertiary-600" />
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