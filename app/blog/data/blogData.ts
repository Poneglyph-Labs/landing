export interface BlogPost {
    id: string
    title: string
    slug: string
    excerpt: string
    content: string
    author: string
    date: string
    readTime: string
    category: 'technical' | 'research' | 'lab-update'
}

export const blogPosts: BlogPost[] = []

export function getBlogPosts(): BlogPost[] {
    return blogPosts.sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    )
}

export function getBlogPost(slug: string): BlogPost | undefined {
    return blogPosts.find((post) => post.slug === slug)
}

export function filterBlogPosts(
    posts: BlogPost[],
    searchQuery: string
): BlogPost[] {
    if (!searchQuery.trim()) return posts

    const query = searchQuery.toLowerCase()
    return posts.filter(
        (post) =>
            post.title.toLowerCase().includes(query) ||
            post.excerpt.toLowerCase().includes(query) ||
            post.author.toLowerCase().includes(query)
    )
}

export function sortBlogPosts(
    posts: BlogPost[],
    sortBy: 'Most Recent' | 'Oldest'
): BlogPost[] {
    return [...posts].sort((a, b) => {
        // Parse DD-MM-YYYY format more reliably
        const [dayA, monthA, yearA] = a.date.split('-').map(Number)
        const [dayB, monthB, yearB] = b.date.split('-').map(Number)

        // Create comparable date values (YYYYMMDD format)
        const dateValueA = yearA * 10000 + monthA * 100 + dayA
        const dateValueB = yearB * 10000 + monthB * 100 + dayB

        return sortBy === 'Most Recent'
            ? dateValueB - dateValueA
            : dateValueA - dateValueB
    })
}
