import { MetadataRoute } from 'next'
import { getArchiveItems } from './archive/data/archiveData'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://poneglyph-labs.xyz'
    const archiveItems = getArchiveItems()

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
    ]

    const archivePages = archiveItems.map((item) => ({
        url: `${baseUrl}/archive/${item.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }))

    return [...staticPages, ...archivePages]
}
