'use client'

import { useState } from 'react'
import { ArchiveHeader } from './ArchiveHeader'
import { ArchiveFilters } from './ArchiveFilters'
import { ArchiveList } from './ArchiveList'
import { Icon } from '../../../components/ui/Icon'
import {
    getArchiveItems,
    filterArchiveItems,
    sortArchiveItems,
    ArchiveDomain,
    ArchiveItemType,
} from '../data/archiveData'

export function ArchivePageContent() {
    const [searchQuery, setSearchQuery] = useState('')
    const [selectedDomain, setSelectedDomain] = useState<ArchiveDomain | 'All'>(
        'All'
    )
    const [selectedType, setSelectedType] = useState<ArchiveItemType | 'All'>(
        'All'
    )
    const [sortBy, setSortBy] = useState<'Most Recent' | 'Oldest'>(
        'Most Recent'
    )

    const allItems = getArchiveItems()
    const filteredItems = filterArchiveItems(allItems, {
        domain: selectedDomain,
        type: selectedType,
        search: searchQuery,
    })
    const sortedItems = sortArchiveItems(filteredItems, sortBy)

    return (
        <>
            {/* Desktop Layout */}
            <div className="bg-primary-900 text-secondary-200 mx-auto hidden min-h-screen max-w-6xl px-4 md:block md:px-24">
                <div className="bg-primary-900 flex flex-col items-start gap-20 overflow-hidden pt-10 pb-32">
                    <div className="flex w-full flex-col gap-10">
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

                    <ArchiveList items={sortedItems} />
                </div>
            </div>

            {/* Mobile Layout */}
            <div className="bg-primary-900 text-secondary-200 block md:hidden">
                <div className="bg-primary-900 flex flex-col items-start gap-6 overflow-hidden py-10">
                    <div className="flex w-full flex-col items-start gap-6 px-4">
                        {/* Mobile Header */}
                        <div className="border-tertiary-400 flex w-full flex-col items-start justify-center gap-2 border-b-[0.5px] py-4">
                            <h1 className="text-body2 font-space-grotesk text-secondary-200 font-medium">
                                RESEARCH ARCHIVE
                            </h1>
                            <p className="text-caption font-regular text-secondary-600 w-full">
                                A public record of published research, audits,
                                and experimental systems developed at Poneglyph
                                Labs.
                            </p>
                        </div>

                        {/* Mobile Search and Filters */}
                        <div className="flex w-full flex-col items-start gap-4">
                            {/* Search Bar */}
                            <div className="border-tertiary-600 flex h-12 w-full items-center gap-2.5 border p-4">
                                <Icon
                                    name="search"
                                    size={18}
                                    className="text-secondary-600"
                                />
                                <input
                                    type="text"
                                    placeholder="Search research artifacts"
                                    value={searchQuery}
                                    onChange={(e) =>
                                        setSearchQuery(e.target.value)
                                    }
                                    className="text-caption font-regular text-secondary-600 placeholder-secondary-600 flex-1 bg-transparent outline-none"
                                />
                            </div>

                            {/* Mobile Filters */}
                            <ArchiveFilters
                                searchQuery={searchQuery}
                                onSearchChange={setSearchQuery}
                                selectedDomain={selectedDomain}
                                onDomainChange={setSelectedDomain}
                                selectedType={selectedType}
                                onTypeChange={setSelectedType}
                                sortBy={sortBy}
                                onSortChange={setSortBy}
                                isMobile={true}
                            />
                        </div>
                    </div>

                    {/* Mobile Archive List */}
                    <div className="border-tertiary-400 flex w-full flex-col items-start border-[0.5px]">
                        {sortedItems.map((item, index) => (
                            <div key={item.id} className="w-full">
                                <div className="flex w-full flex-col items-start gap-6 p-6">
                                    <div className="flex w-full flex-col items-start gap-4">
                                        <h2 className="text-subheading font-space-grotesk w-full font-medium text-white">
                                            {item.title}
                                        </h2>
                                        <div className="flex items-center gap-4">
                                            <div className="bg-primary-800 flex flex-col items-center justify-center p-2">
                                                <span className="text-caption text-secondary-200 text-center font-medium">
                                                    {item.type}
                                                </span>
                                            </div>
                                            <span className="text-caption font-medium text-[rgba(229,229,229,0.8)]">
                                                {item.date}
                                            </span>
                                        </div>
                                    </div>

                                    <p className="text-body1 font-regular text-tertiary-400 w-full leading-7 tracking-[-0.16px]">
                                        {item.description}
                                    </p>

                                    <div className="flex w-full items-start">
                                        <div className="flex flex-1 items-center">
                                            <div className="border-tertiary-400 flex flex-col items-center justify-center border-[0.5px] px-3 py-2">
                                                <span className="text-body1 font-regular text-secondary-200 text-center">
                                                    {item.domain}
                                                </span>
                                            </div>
                                        </div>

                                        <div className="flex flex-col items-start justify-center gap-4">
                                            {item.links.code && (
                                                <a
                                                    href={item.links.code}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-end gap-2"
                                                >
                                                    <Icon
                                                        name="github"
                                                        size={18}
                                                        className="text-secondary-600"
                                                    />
                                                    <span className="text-caption font-regular text-secondary-600">
                                                        Code
                                                    </span>
                                                </a>
                                            )}
                                            {item.links.pdf && (
                                                <a
                                                    href={item.links.pdf}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-end gap-2"
                                                >
                                                    <Icon
                                                        name="pdf"
                                                        size={18}
                                                        className="text-secondary-600"
                                                    />
                                                    <span className="text-caption font-regular text-secondary-600">
                                                        PDF
                                                    </span>
                                                </a>
                                            )}
                                            {item.links.demo && (
                                                <a
                                                    href={item.links.demo}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-end gap-2"
                                                >
                                                    <span className="text-subheading text-secondary-600 font-medium">
                                                        {'>_'}
                                                    </span>
                                                    <span className="text-caption font-regular text-secondary-600">
                                                        Demo
                                                    </span>
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                {index < sortedItems.length - 1 && (
                                    <div className="border-tertiary-400 h-0 w-full border-t-[0.5px]" />
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}
