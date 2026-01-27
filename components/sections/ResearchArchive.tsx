'use client'

import { useState } from 'react'
import { ResearchCard } from '../ui/ResearchCard'
import { FilterTabs } from '../ui/FilterTabs'
import { Button } from '../ui/Button'

const researchItems = [
    {
        type: 'Whitepaper' as const,
        title: 'Zero-Knowledge Rollup Efficiency in Low-Bandwidth Environments',
        date: '15-10-2025',
    },
    {
        type: 'Security Audit' as const,
        title: 'Helios Protocol: Smart Contract Security Audit',
        date: '15-10-2025',
    },
    {
        type: 'Proof of Concept' as const,
        title: 'Deterministic Randomness Beacon (Drand) Integration',
        date: '15-10-2025',
    },
    {
        type: 'Whitepaper' as const,
        title: 'Byzantine Fault Tolerance in Asynchronous Networks',
        date: '15-10-2025',
    },
    {
        type: 'Open Source' as const,
        title: 'Layer-3 Privacy Scaling Solutions',
        date: '15-10-2025',
    },
    {
        type: 'Security Audit' as const,
        title: 'Post-Quantum Cryptography Standards Review',
        date: '15-10-2025',
    },
]

export function ResearchArchive() {
    const [activeFilter, setActiveFilter] = useState('All')

    const filteredItems =
        activeFilter === 'All'
            ? researchItems
            : researchItems.filter((item) => item.type === activeFilter)

    return (
        <section className="bg-primary-900 border-tertiary-400 border-t py-20">
            <div className="mx-auto max-w-6xl px-4 md:px-8">
                <div className="space-y-20">
                    {/* Section Header */}
                    <div className="space-y-10">
                        <div className="border-tertiary-400 border-b pb-6">
                            <h2 className="text-h3 font-space-grotesk text-secondary-200 font-medium">
                                RESEARCH ARCHIVE
                            </h2>
                        </div>

                        {/* Filter Tabs */}
                        <FilterTabs onFilterChange={setActiveFilter} />
                    </div>

                    {/* Research Grid */}
                    <div className="border-tertiary-400 border">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                            {filteredItems.map((item, index) => (
                                <ResearchCard
                                    key={index}
                                    type={item.type}
                                    title={item.title}
                                    date={item.date}
                                    className="border-tertiary-400 border-0 border-r border-b last:border-b-0 md:even:border-r-0 lg:even:border-r lg:[&:nth-child(3n)]:border-r-0"
                                />
                            ))}
                        </div>
                    </div>

                    {/* View More Button */}
                    <div className="flex justify-end">
                        <Button variant="outline" size="lg">
                            VIEW FULL ARCHIVE
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}
