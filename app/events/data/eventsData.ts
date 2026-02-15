export interface Event {
    id: string
    title: string
    slug: string
    excerpt: string
    time: string
    venue: string
    type: 'Hackathon' | 'Speaker' | 'Workshop' | 'Conference'
    status: 'upcoming' | 'past' | 'ongoing'
    date: string
    location: string
    description: string
    organizer: string
}

export const events: Event[] = [
    // {
    //     id: '1',
    //     title: 'Optimizing SNARKs for Mobile',
    //     slug: 'optimizing-snarks-for-mobile',
    //     excerpt:
    //         'A hands-on hackathon focused on optimizing SNARK proving systems for mobile devices and constrained environments.',
    //     time: '[Upcoming]',
    //     venue: 'Poneglyph Space',
    //     type: 'Hackathon',
    //     status: 'upcoming',
    //     date: 'TBA 2025',
    //     location: 'Virtual & Lagos, Nigeria',
    //     description:
    //         'Join us for an intensive hackathon where we explore practical optimizations for zero-knowledge proof systems on mobile hardware.',
    //     organizer: 'Poneglyph Labs',
    // },
    // {
    //     id: '2',
    //     title: 'ZK Summit In Africa',
    //     slug: 'zk-summit-in-africa',
    //     excerpt:
    //         'Speaking at ZK Summit 12 about the state of zero-knowledge cryptography adoption in emerging markets.',
    //     time: '[Jul 2025]',
    //     venue: 'ZK Summit 12',
    //     type: 'Speaker',
    //     status: 'upcoming',
    //     date: 'July 2025',
    //     location: 'Accra, Ghana',
    //     description:
    //         'A keynote presentation on bridging the gap between cutting-edge ZK research and practical deployment in resource-constrained environments.',
    //     organizer: 'ZK Summit',
    // },
    // {
    //     id: '3',
    //     title: 'Breaking Consensus 101',
    //     slug: 'breaking-consensus-101',
    //     excerpt:
    //         'An interactive workshop on consensus mechanisms, Byzantine fault tolerance, and practical attack vectors.',
    //     time: '[Jul 2025]',
    //     venue: 'DevCon VIII',
    //     type: 'Workshop',
    //     status: 'upcoming',
    //     date: 'July 2025',
    //     location: 'Bangkok, Thailand',
    //     description:
    //         'Deep dive into consensus protocols with hands-on exercises exploring edge cases and failure modes.',
    //     organizer: 'Ethereum Foundation',
    // },
]

export function getEvents(): Event[] {
    return events.sort((a, b) => {
        if (a.status === 'upcoming' && b.status === 'past') return -1
        if (a.status === 'past' && b.status === 'upcoming') return 1
        return 0
    })
}

export function getEvent(slug: string): Event | undefined {
    return events.find((event) => event.slug === slug)
}

export function filterEvents(events: Event[], searchQuery: string): Event[] {
    if (!searchQuery.trim()) return events

    const query = searchQuery.toLowerCase()
    return events.filter(
        (event) =>
            event.title.toLowerCase().includes(query) ||
            event.excerpt.toLowerCase().includes(query) ||
            event.venue.toLowerCase().includes(query) ||
            event.type.toLowerCase().includes(query)
    )
}

export function filterEventsByStatus(
    events: Event[],
    status: 'all' | 'upcoming' | 'past'
): Event[] {
    if (status === 'all') return events
    return events.filter((event) => event.status === status)
}
