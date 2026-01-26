'use client'

import { useState } from 'react'

const filterOptions = [
    'All',
    'Whitepaper',
    'Open Source',
    'Security Audit',
    'Proof of Concept',
]

interface FilterTabsProps {
    onFilterChange?: (filter: string) => void
    className?: string
}

export function FilterTabs({
    onFilterChange,
    className = '',
}: FilterTabsProps) {
    const [activeFilter, setActiveFilter] = useState('All')
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)

    const handleFilterChange = (filter: string) => {
        setActiveFilter(filter)
        onFilterChange?.(filter)
        setIsDropdownOpen(false)
    }

    return (
        <>
            {/* Mobile Dropdown */}
            <div className={`md:hidden ${className}`}>
                <button
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="flex w-full items-center space-x-3 py-3 text-left"
                >
                    <div>
                        <span className="text-secondary-600 text-xl font-medium">
                            Domain:{' '}
                        </span>
                        <span className="text-secondary-200 text-xl font-medium">
                            {activeFilter}
                        </span>
                    </div>
                    <svg
                        className={`text-secondary-200 h-5 w-5 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                        />
                    </svg>
                </button>

                {isDropdownOpen && (
                    <div className="border-tertiary-400 rounded-sm border bg-neutral-900">
                        {filterOptions.map((option, index) => (
                            <button
                                key={option}
                                onClick={() => handleFilterChange(option)}
                                className={`border-tertiary-400 w-full border-b px-4 py-3 text-left text-lg transition-colors last:border-b-0 ${
                                    activeFilter === option
                                        ? 'bg-primary-800 text-secondary-200'
                                        : 'text-secondary-600 hover:text-secondary-200 hover:bg-primary-800'
                                }`}
                            >
                                {option}
                            </button>
                        ))}
                    </div>
                )}
            </div>

            {/* Desktop Tabs */}
            <div className={`hidden flex-wrap gap-0 md:flex ${className}`}>
                {filterOptions.map((option) => (
                    <button
                        key={option}
                        onClick={() => handleFilterChange(option)}
                        className={`text-subheading font-regular flex-1 px-4 py-3 text-center transition-colors ${
                            activeFilter === option
                                ? 'border-tertiary-400 text-secondary-200 bg-primary-900 border'
                                : 'text-secondary-600 hover:text-secondary-200'
                        }`}
                    >
                        {option}
                    </button>
                ))}
            </div>
        </>
    )
}
