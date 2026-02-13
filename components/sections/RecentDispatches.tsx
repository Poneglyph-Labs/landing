import Link from 'next/link'
import { getEvents } from '../../app/events/data/eventsData'

export function RecentDispatches() {
    const allEvents = getEvents()
    // Get only upcoming events for the home page, limit to 3
    const dispatches = allEvents
        .filter((event) => event.status === 'upcoming')
        .slice(0, 3)

    return (
        <section className="bg-primary-900 border-tertiary-400 border-t py-20">
            <div className="mx-auto px-4 md:px-24">
                <div className="flex w-full flex-col gap-8">
                    {/* Section Title - Full Width */}
                    <div className="border-tertiary-400 w-full border-b pb-4">
                        <h2 className="md:text-h4 text-subheading font-space-grotesk text-secondary-200 text-[20px] font-medium md:text-[28px]">
                            RECENT EVENTS
                        </h2>
                    </div>

                    {/* Dispatches List */}
                    <div className="flex w-full flex-col gap-0">
                        <div className="space-y-0">
                            {dispatches.length === 0 ? (
                                <div className="flex min-h-[200px] items-center justify-center py-12">
                                    <p className="font-space-grotesk text-secondary-600 text-center text-[14px] md:text-[16px]">
                                        There are no upcoming events available
                                        at this time.
                                    </p>
                                </div>
                            ) : (
                                dispatches.map((dispatch, index) => (
                                    <div key={dispatch.id}>
                                        <Link
                                            href={`/events/${dispatch.slug}`}
                                            className="hover:bg-primary-800/20 block transition-colors"
                                        >
                                            <div className="flex flex-col items-start gap-6 py-6 md:flex-row md:gap-6">
                                                {/* Time and Title */}
                                                <div className="flex flex-1 items-center gap-4 md:flex-row md:gap-2">
                                                    <span className="md:text-body1 text-footer font-regular text-secondary-600 text-[12px] whitespace-nowrap md:text-[16px]">
                                                        {dispatch.time}
                                                    </span>
                                                    <h3 className="md:text-h4 font-space-grotesk text-secondary-200 flex-1 text-[16px] font-medium md:text-[28px]">
                                                        {dispatch.title}
                                                    </h3>
                                                </div>

                                                {/* Venue and Type */}
                                                <div className="flex w-full items-center justify-end gap-4 md:w-auto md:justify-start">
                                                    <div className="border-secondary-600 border px-3 py-2">
                                                        <span className="md:text-subheading text-secondary-600 text-[14px] font-medium md:text-[20px]">
                                                            {dispatch.venue}
                                                        </span>
                                                    </div>
                                                    <span className="md:text-subheading text-secondary-200 text-[18px] font-medium md:text-[20px]">
                                                        {dispatch.type}
                                                    </span>
                                                </div>
                                            </div>
                                        </Link>
                                        {index < dispatches.length - 1 && (
                                            <div className="border-tertiary-400 border-b" />
                                        )}
                                    </div>
                                ))
                            )}
                        </div>

                        {/* See More Events Button */}
                        {dispatches.length > 0 && (
                            <div className="mt-8 flex justify-end md:justify-end">
                                <Link
                                    href="/events"
                                    className="border-tertiary-600 hover:bg-primary-800/20 flex items-center gap-2 border px-6 py-3 transition-colors"
                                >
                                    <span className="font-space-grotesk text-secondary-200 text-[14px] font-medium md:text-[16px]">
                                        SEE MORE EVENTS
                                    </span>
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}
