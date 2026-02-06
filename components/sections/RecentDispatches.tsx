const dispatches = [
    {
        time: '[Upcoming]',
        title: 'Optimizing SNARKs for Mobile',
        venue: 'Poneglyph Space',
        type: 'Hackathon',
    },
    {
        time: '[Jul 2025]',
        title: 'ZK Summit In Africa',
        venue: 'ZK Summit 12',
        type: 'Speaker',
    },
    {
        time: '[Jul 2025]',
        title: 'Breaking Consensus 101',
        venue: 'DevCon VIII',
        type: 'Workshop',
    },
]

export function RecentDispatches() {
    return (
        <section className="bg-primary-900 border-tertiary-400 border-t py-20">
            <div className="mx-auto px-4 md:px-24">
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-4">
                    {/* Section Title */}
                    <div className="lg:col-span-1">
                        <h2 className="md:text-h4 text-subheading md:justify-left font-space-grotesk text-secondary-200 flex justify-center py-4 text-[20px] font-medium md:block md:text-[28px]">
                            RECENT DISPATCHES
                        </h2>
                    </div>

                    {/* Dispatches List */}
                    <div className="space-y-0 lg:col-span-3">
                        {dispatches.map((dispatch, index) => (
                            <div key={index}>
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
                                {index < dispatches.length - 1 && (
                                    <div className="border-tertiary-400 border-b" />
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
