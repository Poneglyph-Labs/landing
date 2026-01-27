import {
    getAllBlogMDX,
    getBlogMDXBySlug as getMDXBySlug,
    blogMDXExists,
    BlogPost,
} from './blog-mdx'

export function getBlogPosts(): BlogPost[] {
    try {
        // Only get posts from MDX files
        const mdxPosts = getAllBlogMDX()
        return mdxPosts
    } catch (error) {
        console.error('Error loading blog posts:', error)
        return []
    }
}

export function getBlogPost(slug: string): BlogPost | undefined {
    try {
        // Only get from MDX
        const mdxPost = getMDXBySlug(slug)
        return mdxPost || undefined
    } catch (error) {
        console.error(`Error loading blog post ${slug}:`, error)
        return undefined
    }
}

export function hasBlogMDXContent(slug: string): boolean {
    try {
        return blogMDXExists(slug)
    } catch (error) {
        console.error(`Error checking MDX content for ${slug}:`, error)
        return false
    }
}

export function getBlogMDXBySlug(slug: string) {
    try {
        return getMDXBySlug(slug)
    } catch (error) {
        console.error(`Error loading MDX for ${slug}:`, error)
        return null
    }
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
