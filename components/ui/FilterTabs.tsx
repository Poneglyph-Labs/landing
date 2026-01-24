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

    const handleFilterChange = (filter: string) => {
        setActiveFilter(filter)
        onFilterChange?.(filter)
    }

    return (
        <div className={`flex flex-wrap gap-0 ${className}`}>
            {filterOptions.map((option, index) => (
                <button
                    key={option}
                    onClick={() => handleFilterChange(option)}
                    className={`text-subheading font-regular flex-1 px-4 py-3 text-center transition-colors ${
                        activeFilter === option
                            ? 'border-tertiary-400 text-secondary-200 bg-primary-900 border'
                            : 'text-secondary-600 hover:text-secondary-200'
                    } ${index === 0 ? 'border-r-0' : ''} ${index === filterOptions.length - 1 ? 'border-l-0' : 'border-r-0'}`}
                >
                    {option}
                </button>
            ))}
        </div>
    )
}
