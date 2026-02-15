import { MetadataRoute } from 'next'
import { getArchiveItems } from '../lib/archive-server'
import { getEvents } from './events/data/eventsData'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://poneglyph-labs.xyz'
    const archiveItems = getArchiveItems()
    const events = getEvents()

    const staticPages = [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 1,
        },
        {
            url: `${baseUrl}/archive`,
            lastModified: new Date(),
            changeFrequency: 'weekly' as const,
            priority: 0.9,
        },
        {
            url: `${baseUrl}/projects`,
            lastModified: new Date(),
            changeFrequency: 'weekly' as const,
            priority: 0.8,
        },
        {
            url: `${baseUrl}/events`,
            lastModified: new Date(),
            changeFrequency: 'weekly' as const,
            priority: 0.8,
        },
    ]

    const archivePages = archiveItems.map((item) => ({
        url: `${baseUrl}/archive/${item.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }))

    const eventPages = events.map((event) => ({
        url: `${baseUrl}/events/${event.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }))

    return [...staticPages, ...archivePages, ...eventPages]
}
