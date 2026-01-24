'use client'

import { useState } from 'react'
import { Navigation } from '../../../components/layout/Navigation'
import { Footer } from '../../../components/layout/Footer'
import { ArchiveHeader } from './ArchiveHeader'
import { ArchiveFilters } from './ArchiveFilters'
import { ArchiveList } from './ArchiveList'
import { getArchiveItems, filterArchiveItems, sortArchiveItems, ArchiveDomain, ArchiveItemType } from '../data/archiveData'

export function ArchivePageContent() {
    const [searchQuery, setSearchQuery] = useState('')
    const [selectedDomain, setSelectedDomain] = useState<ArchiveDomain | 'All'>('All')
    const [selectedType, setSelectedType] = useState<ArchiveItemType | 'All'>('All')
    const [sortBy, setSortBy] = useState<'Most Recent' | 'Oldest'>('Most Recent')

    const allItems = getArchiveItems()
    const filteredItems = filterArchiveItems(allItems, {
        domain: selectedDomain,
        type: selectedType,
        search: searchQuery
    })
    const sortedItems = sortArchiveItems(filteredItems, sortBy)

    return (
        <div className="min-h-screen bg-primary-900 text-secondary-200 px-4 md:px-24 mx-auto">
            <div className="bg-primary-900 flex flex-col gap-20 items-start overflow-hidden pb-20 pt-10">
                <div className="flex flex-col gap-10 w-full max-w-6xl mx-auto">
                    <ArchiveHeader />
                    
                    <ArchiveFilters
                        searchQuery={searchQuery}
                        onSearchChange={setSearchQuery}
                        selectedDomain={selectedDomain}
                        onDomainChange={setSelectedDomain}
                        selectedType={selectedType}
                        onTypeChange={setSelectedType}
                        sortBy={sortBy}
                        onSortChange={setSortBy}
                    />
                </div>
            </div>

            <ArchiveList items={sortedItems} />
        </div>
    )
}