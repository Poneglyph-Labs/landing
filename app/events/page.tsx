import { Metadata } from 'next'
import { EventsPageContent } from './components/EventsPageContent'
import { getEvents } from './data/eventsData'

export const metadata: Metadata = {
    title: 'Recent Dispatches | Poneglyph Labs',
    description:
        'Upcoming talks, workshops, and community engagements from Poneglyph Labs.',
}

export default function EventsPage() {
    const events = getEvents()

    return <EventsPageContent initialEvents={events} />
}
