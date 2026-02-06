/* eslint-disable */

'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ResearchCard } from '../ui/ResearchCard'
import { FilterTabs } from '../ui/FilterTabs'
import { Button } from '../ui/Button'
import {
    filterArchiveItems,
    sortArchiveItems,
    ArchiveItem,
} from '../../app/archive/data/archiveData'

interface ResearchArchiveProps {
    items: ArchiveItem[]
}

export function ResearchArchive({ items }: ResearchArchiveProps) {
    const [activeFilter, setActiveFilter] = useState('All')

    // Get all archive items, filter them, sort by most recent, and take first 12
    const allItems = sortArchiveItems(items, 'Most Recent')
    const filteredItems = filterArchiveItems(allItems, {
        type: activeFilter === 'All' ? undefined : (activeFilter as any),
    }).slice(0, 12) // Limit to 12 items

    return (
        <section className="bg-primary-900 border-tertiary-400 border-t py-20">
            <div className="mx-auto px-4 md:px-24">
                <div className="space-y-20">
                    {/* Section Header */}
                    <div className="space-y-10">
                        <div className="border-tertiary-400 border-b pb-6">
                            <h2 className="md:text-h3 text-body2 font-space-grotesk text-secondary-200 text-[18px] font-medium md:text-[32px]">
                                RESEARCH ARCHIVE
                            </h2>
                        </div>

                        {/* Filter Tabs */}
                        <FilterTabs onFilterChange={setActiveFilter} />
                    </div>

                    {/* Research Grid */}
                    <div className="border-tertiary-400 overflow-hidden border">
                        <div className="divide-tertiary-400 grid grid-cols-1 divide-y md:grid-cols-2 md:divide-y-0 lg:grid-cols-3 lg:divide-y-0">
                            {filteredItems.map((item, index) => (
                                <div
                                    key={item.id}
                                    className={`border-tertiary-400 ${index % 2 === 0 ? 'md:border-r' : ''} ${index % 3 === 0 || index % 3 === 1 ? 'lg:border-r' : ''} ${Math.floor(index / 2) < Math.floor((filteredItems.length - 1) / 2) ? 'md:border-b' : ''} ${Math.floor(index / 3) < Math.floor((filteredItems.length - 1) / 3) ? 'lg:border-b' : ''} `}
                                >
                                    <ResearchCard
                                        type={item.type}
                                        title={item.title}
                                        date={item.date}
                                        slug={item.slug}
                                        className="border-0"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* View More Button */}
                    <div className="flex justify-end">
                        <Link href="/archive">
                            <Button
                                className="hidden md:block"
                                variant="outline"
                                size="lg"
                            >
                                VIEW FULL ARCHIVE
                            </Button>
                            <Button
                                className="block md:hidden"
                                variant="outline"
                                size="sm"
                            >
                                VIEW FULL ARCHIVE
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
