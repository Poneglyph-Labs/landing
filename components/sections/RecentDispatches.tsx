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
            <div className="mx-auto max-w-6xl px-4 md:px-8">
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
                    {/* Section Title */}
                    <div className="lg:col-span-1">
                        <h2 className="text-h4 font-space-grotesk text-secondary-200 py-4 font-medium">
                            RECENT DISPATCHES
                        </h2>
                    </div>

                    {/* Dispatches List */}
                    <div className="space-y-0 lg:col-span-2">
                        {dispatches.map((dispatch, index) => (
                            <div key={index}>
                                <div className="flex flex-col items-start gap-6 py-6 md:flex-row md:gap-10">
                                    {/* Time and Title */}
                                    <div className="flex flex-1 flex-col items-start gap-4 md:flex-row md:gap-6">
                                        <span className="text-body1 font-regular text-secondary-600 whitespace-nowrap">
                                            {dispatch.time}
                                        </span>
                                        <h3 className="text-h4 font-space-grotesk text-secondary-200 flex-1 font-medium">
                                            {dispatch.title}
                                        </h3>
                                    </div>

                                    {/* Venue and Type */}
                                    <div className="flex items-center gap-4">
                                        <div className="border-secondary-600 border px-3 py-2">
                                            <span className="text-subheading text-secondary-600 font-medium">
                                                {dispatch.venue}
                                            </span>
                                        </div>
                                        <span className="text-subheading text-secondary-200 font-medium">
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
