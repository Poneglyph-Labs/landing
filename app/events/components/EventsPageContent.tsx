'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Event, filterEvents } from '../data/eventsData'
import { Icon } from '../../../components/ui/Icon'

interface EventsPageContentProps {
    initialEvents: Event[]
}

export function EventsPageContent({ initialEvents }: EventsPageContentProps) {
    const [searchQuery, setSearchQuery] = useState('')
    const [typeFilter, setTypeFilter] = useState<'All' | 'IRL' | 'Virtual'>(
        'All'
    )
    const [dateFilter, setDateFilter] = useState('7 days ago')
    const [upcomingOpen, setUpcomingOpen] = useState(true)
    const [ongoingOpen, setOngoingOpen] = useState(true)
    const [pastOpen, setPastOpen] = useState(true)
    const [showTypeDropdown, setShowTypeDropdown] = useState(false)
    const [showDateDropdown, setShowDateDropdown] = useState(false)

    const filteredEvents = filterEvents(initialEvents, searchQuery)
    const upcomingEvents = filteredEvents.filter((e) => e.status === 'upcoming')
    const ongoingEvents = filteredEvents.filter((e) => e.status === 'ongoing')
    const pastEvents = filteredEvents.filter((e) => e.status === 'past')

    const typeOptions = ['All', 'IRL (in real life)', 'Virtual (online)']
    const dateOptions = [
        '7 days ago',
        '14 days ago',
        '1 month ago',
        '3 months ago',
        '6 months ago',
        '1 year ago',
    ]

    return (
        <div className="bg-primary-900 text-secondary-200 min-h-screen">
            <div className="mx-auto flex w-full flex-col items-start justify-start px-4 pb-20 md:gap-6 md:px-8 md:pt-10 lg:px-24">
                {/* Header */}
                <div className="border-tertiary-400 mb-6 flex flex-col items-start justify-start gap-2 self-stretch border-b pt-4 pb-4 md:mb-4 md:gap-4 md:pt-6">
                    <h1 className="font-space-grotesk text-secondary-200 self-stretch text-[18px] leading-tight font-medium md:text-[28px]">
                        Recent Events
                    </h1>
                    <p className="font-space-grotesk text-secondary-600 self-stretch text-[14px] leading-relaxed font-normal md:text-[18px]">
                        Public talks, workshops, and technical engagements.
                        Inventing, inspiring lab work.
                    </p>
                </div>

                {/* Divider */}
                {/* <div className="border-tertiary-400 h-px w-full border-t" /> */}

                {/* Search and Filters */}
                <div className="mb-10 flex w-full flex-col items-start gap-6 md:mb-14">
                    {/* Search Bar - Full Width */}
                    <div className="border-tertiary-600 flex h-12 w-full items-center gap-2.5 border p-4 md:h-16">
                        <Icon
                            name="search"
                            size={20}
                            className="text-secondary-600 md:h-6 md:w-6"
                        />
                        <input
                            type="text"
                            placeholder="Search events"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="md:text-body1 font-space-grotesk text-secondary-600 placeholder-secondary-600 flex-1 bg-transparent text-[14px] outline-none md:text-[16px]"
                        />
                    </div>

                    {/* Filter Buttons */}
                    <div className="flex w-full flex-col items-start gap-0 pl-0 md:flex-row md:gap-10 md:pl-6 lg:gap-20">
                        {/* Type Filter */}
                        <div className="relative w-full md:w-auto">
                            <div className="flex justify-center">
                                <button
                                    onClick={() => {
                                        setShowTypeDropdown(!showTypeDropdown)
                                        setShowDateDropdown(false)
                                    }}
                                    className="flex cursor-pointer items-center justify-center gap-2 py-3 transition-colors"
                                >
                                    <span className="md:text-subheading text-secondary-200 text-[14px] font-medium md:text-[20px]">
                                        <span className="text-primary-400">
                                            Type:
                                        </span>{' '}
                                        {typeFilter}
                                    </span>
                                    <Icon
                                        name="arrow-down"
                                        size={24}
                                        className="text-secondary-200"
                                    />
                                </button>
                            </div>

                            {showTypeDropdown && (
                                <div className="border-tertiary-600 absolute top-full left-0 z-[9999] mt-1 w-full border-[0.5px] bg-[#141414] md:w-64">
                                    {typeOptions.map((option, index) => (
                                        <div key={option}>
                                            <div className="flex flex-col items-start justify-center px-4 py-3">
                                                <button
                                                    onClick={() => {
                                                        setTypeFilter(
                                                            option as
                                                                | 'All'
                                                                | 'IRL'
                                                                | 'Virtual'
                                                        )
                                                        setShowTypeDropdown(
                                                            false
                                                        )
                                                    }}
                                                    className={`text-body1 font-regular cursor-pointer text-left transition-colors ${
                                                        option === typeFilter
                                                            ? 'text-secondary-200'
                                                            : 'text-secondary-600'
                                                    }`}
                                                >
                                                    {option}
                                                </button>
                                            </div>
                                            {index < typeOptions.length - 1 && (
                                                <div className="border-tertiary-600 h-0 w-full border-t-[0.5px]" />
                                            )}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Date Filter */}
                        <div className="relative w-full md:w-auto">
                            <div className="flex justify-center">
                                <button
                                    onClick={() => {
                                        setShowDateDropdown(!showDateDropdown)
                                        setShowTypeDropdown(false)
                                    }}
                                    className="flex cursor-pointer items-center justify-center gap-2 py-3 transition-colors"
                                >
                                    <span className="md:text-subheading text-secondary-200 text-[14px] font-medium md:text-[20px]">
                                        <span className="text-primary-400">
                                            Date:
                                        </span>{' '}
                                        {dateFilter}
                                    </span>
                                    <Icon
                                        name="arrow-down"
                                        size={24}
                                        className="text-secondary-200"
                                    />
                                </button>
                            </div>

                            {showDateDropdown && (
                                <div className="border-tertiary-600 absolute top-full left-0 z-[9999] mt-1 w-full border-[0.5px] bg-[#141414] md:w-64">
                                    {dateOptions.map((option, index) => (
                                        <div key={option}>
                                            <div className="flex flex-col items-start justify-center px-4 py-3">
                                                <button
                                                    onClick={() => {
                                                        setDateFilter(option)
                                                        setShowDateDropdown(
                                                            false
                                                        )
                                                    }}
                                                    className={`text-body1 font-regular cursor-pointer text-left transition-colors ${
                                                        option === dateFilter
                                                            ? 'text-secondary-200'
                                                            : 'text-secondary-600'
                                                    }`}
                                                >
                                                    {option}
                                                </button>
                                            </div>
                                            {index < dateOptions.length - 1 && (
                                                <div className="border-tertiary-600 h-0 w-full border-t-[0.5px]" />
                                            )}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Upcoming Events Section */}
                <div className="mb-6 flex flex-col gap-6 self-stretch md:mb-0">
                    <button
                        onClick={() => setUpcomingOpen(!upcomingOpen)}
                        className="border-tertiary-400 flex items-center justify-between border-b pb-4"
                    >
                        <h2 className="font-space-grotesk text-secondary-200 text-[18px] font-medium md:text-[28px]">
                            Upcoming Events
                        </h2>
                        <Icon
                            name={upcomingOpen ? 'arrow-up' : 'arrow-down'}
                            size={24}
                            className="text-secondary-200"
                        />
                    </button>
                    {upcomingOpen && (
                        <div className="flex min-h-[172px] items-center justify-center py-12 md:min-h-[400px]">
                            {upcomingEvents.length === 0 ? (
                                <div className="flex flex-col items-center gap-2">
                                    <p className="font-space-grotesk text-tertiary-400 text-center text-[16px] md:text-[28px]">
                                        There are no upcoming public events
                                        scheduled at this time.
                                    </p>
                                    <p className="font-space-grotesk text-tertiary-600 text-center text-[12px] md:text-[20px]">
                                        Events are announced as they are
                                        confirmed.
                                    </p>
                                </div>
                            ) : (
                                <div className="flex flex-col gap-0 self-stretch">
                                    {upcomingEvents.map((event, index) => (
                                        <div key={event.id}>
                                            <Link
                                                href={`/events/${event.slug}`}
                                                className="hover:bg-primary-800/20 block transition-colors"
                                            >
                                                <div className="flex flex-col items-start gap-4 py-4 md:flex-row md:items-center md:justify-between">
                                                    <div className="flex flex-1 flex-col gap-2">
                                                        <h3 className="font-space-grotesk text-secondary-200 text-[16px] font-medium md:text-[20px]">
                                                            {event.title}
                                                        </h3>
                                                        <p className="font-space-grotesk text-secondary-600 text-[14px]">
                                                            {event.venue} •{' '}
                                                            {event.type}
                                                        </p>
                                                    </div>
                                                    <span className="font-space-grotesk text-secondary-600 text-[12px] md:text-[14px]">
                                                        {event.time}
                                                    </span>
                                                </div>
                                            </Link>
                                            {index <
                                                upcomingEvents.length - 1 && (
                                                <div className="border-tertiary-400 border-b" />
                                            )}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    )}
                </div>

                {/* Ongoing Events Section */}
                <div className="mb-6 flex flex-col gap-6 self-stretch md:mb-0">
                    <button
                        onClick={() => setOngoingOpen(!ongoingOpen)}
                        className="border-tertiary-400 flex items-center justify-between border-b pb-4"
                    >
                        <h2 className="font-space-grotesk text-secondary-200 text-[18px] font-medium md:text-[28px]">
                            Ongoing Events
                        </h2>
                        <Icon
                            name={ongoingOpen ? 'arrow-up' : 'arrow-down'}
                            size={24}
                            className="text-secondary-200"
                        />
                    </button>
                    {ongoingOpen && (
                        <div className="flex min-h-[172px] items-center justify-center py-12 md:min-h-[400px]">
                            <p className="font-space-grotesk text-tertiary-400 text-center text-[16px] md:text-[28px]">
                                No event is currently ongoing
                            </p>
                        </div>
                    )}
                </div>

                {/* Past Events Section */}
                <div className="mb-6 flex flex-col gap-6 self-stretch md:mb-0">
                    <button
                        onClick={() => setPastOpen(!pastOpen)}
                        className="border-tertiary-400 flex items-center justify-between border-b pb-4"
                    >
                        <h2 className="font-space-grotesk text-secondary-200 text-[18px] font-medium md:text-[28px]">
                            Past Events
                        </h2>
                        <Icon
                            name={pastOpen ? 'arrow-up' : 'arrow-down'}
                            size={24}
                            className="text-secondary-200"
                        />
                    </button>
                    {pastOpen && (
                        <div className="flex min-h-[172px] items-center justify-center py-12 md:min-h-[400px]">
                            <p className="font-space-grotesk text-tertiary-400 text-center text-[16px] md:text-[28px]">
                                No past events are currently listed.
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
