import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { EventDetailContent } from './components/EventDetailContent'
import { getEvent, getEvents } from '../data/eventsData'

interface EventPageProps {
    params: {
        slug: string
    }
}

export async function generateStaticParams() {
    const events = getEvents()
    return events.map((event) => ({
        slug: event.slug,
    }))
}

export async function generateMetadata({
    params,
}: EventPageProps): Promise<Metadata> {
    const event = getEvent(params.slug)

    if (!event) {
        return {
            title: 'Event Not Found | Poneglyph Labs',
        }
    }

    return {
        title: `${event.title} | Poneglyph Labs`,
        description: event.excerpt,
    }
}

export default function EventPage({ params }: EventPageProps) {
    const event = getEvent(params.slug)

    if (!event) {
        notFound()
    }

    return <EventDetailContent event={event} />
}
