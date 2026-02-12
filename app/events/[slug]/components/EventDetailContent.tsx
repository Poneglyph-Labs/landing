import Link from 'next/link'
import { Event } from '../../data/eventsData'
import { Icon } from '../../../../components/ui/Icon'

interface EventDetailContentProps {
    event: Event
}

export function EventDetailContent({ event }: EventDetailContentProps) {
    return (
        <div className="bg-primary-900 text-secondary-200 min-h-screen">
            <div className="bg-primary-900 mx-auto flex w-full flex-col items-center justify-start gap-9 overflow-hidden px-4 pb-20 md:gap-20 md:px-12 md:pt-3 lg:px-24">
                {/* Back to Events */}
                <Link
                    href="/events"
                    className="hover:bg-primary-800/20 flex items-center justify-start gap-2 self-stretch py-3 pr-4 pl-3 transition-colors"
                >
                    <div className="flex h-[18px] w-[18px] items-center justify-center md:h-6 md:w-6">
                        <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            className="h-[18px] w-[18px] md:h-6 md:w-6"
                        >
                            <path
                                d="M19 12H5M5 12L12 19M5 12L12 5"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </div>
                    <span className="md:text-subheading font-space-grotesk text-secondary-400 text-[14px] font-medium md:text-[20px]">
                        BACK TO EVENTS
                    </span>
                </Link>

                {/* Event Content */}
                <div className="flex flex-col items-start justify-start gap-12 self-stretch px-0 md:gap-[80px] md:px-12">
                    {/* Header */}
                    <div className="flex flex-col items-start justify-start gap-6 self-stretch">
                        <h1 className="font-space-grotesk text-secondary-200 md:text-h1 self-stretch text-[20px] leading-tight font-normal md:text-[64px]">
                            {event.title}
                        </h1>
                        <div className="block items-start justify-start gap-6 self-stretch md:flex md:items-center md:gap-2.5">
                            <div className="flex flex-1 items-center justify-start gap-6">
                                {/* Date */}
                                <div className="flex items-center justify-start gap-4">
                                    <Icon
                                        name="calendar"
                                        size={24}
                                        className="text-secondary-600"
                                    />
                                    <span className="md:text-body2 font-space-grotesk text-secondary-400 font-regular text-[14px] md:text-[18px]">
                                        {event.date}
                                    </span>
                                </div>
                                <div className="border-tertiary-400 h-6 border-r" />

                                {/* Location */}
                                <div className="flex items-center justify-start gap-4">
                                    <Icon
                                        name="location"
                                        size={24}
                                        className="text-secondary-400"
                                    />
                                    <span className="md:text-subheading font-space-grotesk text-secondary-400 text-[14px] font-normal md:text-[20px]">
                                        {event.location}
                                    </span>
                                </div>
                            </div>

                            {/* Venue and Type */}
                            <div className="mt-4 flex items-center justify-start gap-6 md:mt-0">
                                <div className="border-secondary-600 border px-3 py-2">
                                    <span className="md:text-subheading text-secondary-600 text-[14px] font-medium md:text-[20px]">
                                        {event.venue}
                                    </span>
                                </div>
                                <div className="border-tertiary-600 h-6 border-r" />
                                <span className="md:text-subheading text-secondary-200 text-[14px] font-medium md:text-[20px]">
                                    {event.type}
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Divider */}
                    <div className="border-tertiary-400 h-px self-stretch border-t" />

                    {/* Event Details */}
                    <div className="flex flex-col items-start justify-start gap-10 self-stretch">
                        <div className="text-secondary-200 text-subheading font-space-grotesk self-stretch text-[20px] leading-7 font-normal">
                            {event.description}
                        </div>

                        <div className="text-secondary-200 text-subheading font-space-grotesk self-stretch text-[20px] leading-7 font-normal">
                            {event.excerpt}
                        </div>

                        {/* Event Info Grid */}
                        <div className="grid grid-cols-1 gap-8 self-stretch md:grid-cols-2">
                            <div className="flex flex-col gap-4">
                                <h3 className="md:text-h4 font-space-grotesk text-secondary-400 text-[16px] font-medium md:text-[28px]">
                                    ORGANIZER
                                </h3>
                                <p className="md:text-body1 font-space-grotesk text-secondary-200 text-[14px] font-normal md:text-[16px]">
                                    {event.organizer}
                                </p>
                            </div>

                            <div className="flex flex-col gap-4">
                                <h3 className="md:text-h4 font-space-grotesk text-secondary-400 text-[16px] font-medium md:text-[28px]">
                                    STATUS
                                </h3>
                                <p className="md:text-body1 font-space-grotesk text-secondary-200 text-[14px] font-normal capitalize md:text-[16px]">
                                    {event.status}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Divider */}
                    <div className="border-tertiary-400 h-px self-stretch border-t" />

                    {/* Share Section */}
                    <div className="flex items-center justify-start gap-6 self-stretch md:gap-10">
                        <h3 className="md:text-h4 font-space-grotesk text-secondary-400 text-[16px] font-medium md:text-[28px]">
                            SHARE EVENT
                        </h3>
                        <a
                            href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}&text=${encodeURIComponent(event.title)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="transition-opacity hover:opacity-70"
                        >
                            <Icon
                                name="mobiletwitter"
                                size={24}
                                className="text-secondary-200"
                            />
                        </a>
                        <a
                            href={`https://www.instagram.com/`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="transition-opacity hover:opacity-70"
                        >
                            <Icon
                                name="mobileinstagram"
                                size={24}
                                className="text-secondary-200"
                            />
                        </a>
                        <a
                            href={`https://github.com/`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="transition-opacity hover:opacity-70"
                        >
                            <Icon
                                name="github"
                                size={24}
                                className="text-secondary-200"
                            />
                        </a>
                    </div>
                </div>

                {/* Newsletter Subscription */}
                <div className="border-tertiary-600 items-center justify-start gap-10 space-y-8 self-stretch border bg-[#191919] px-0 px-8 py-10 md:flex md:space-y-0 md:px-12">
                    <div className="flex flex-1 flex-col items-start justify-start gap-4">
                        <div className="flex items-center justify-start gap-6">
                            <Icon
                                name="mail"
                                size={32}
                                className="text-secondary-600"
                            />
                            <h3 className="md:text-h4 font-space-grotesk text-secondary-200 text-[18px] font-medium md:text-[28px]">
                                Stay Updated
                            </h3>
                        </div>
                        <p className="md:text-body1 font-space-grotesk text-secondary-600 self-stretch text-[14px] leading-7 font-normal md:text-[16px]">
                            Get notified about upcoming events and dispatches.
                            No spam, only event updates.
                        </p>
                    </div>
                    <div className="flex w-full max-w-[412px] flex-col items-start justify-start gap-4">
                        <div className="bg-primary-900 border-tertiary-600 flex h-14 items-center justify-start gap-2.5 self-stretch border pl-4">
                            <input
                                type="email"
                                placeholder="your.email@example.com"
                                className="md:text-body1 font-space-grotesk text-secondary-600 placeholder-secondary-600 flex-1 bg-transparent text-[14px] outline-none md:text-[16px]"
                            />
                            <button className="border-tertiary-600 hover:bg-primary-800/20 flex items-center justify-center gap-2 self-stretch border bg-[#191919] px-8 py-3 transition-colors">
                                <span className="md:text-h3 text-14px font-space-grotesk text-secondary-200 font-medium md:text-[18px]">
                                    JOIN
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
