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

export const blogPosts: BlogPost[] = [
    {
        id: '1',
        title: 'On the Divergence of Theory and Practice in Mobile ZK-Proving',
        slug: 'divergence-theory-practice-mobile-zk-proving',
        excerpt:
            'Reflections from recent benchmarks comparing theoretical proving times against real-world performance on constrained ARM architectures.',
        content: 'Full blog post content would go here...',
        author: 'Dan Brown',
        date: '15-10-2025',
        readTime: '6 min read',
        category: 'technical',
    },
    {
        id: '2',
        title: 'Why We Chose Rust for Aegis-7',
        slug: 'why-we-chose-rust-for-aegis-7',
        excerpt:
            'Technical decisions and trade-offs in building our formal verification framework.',
        content: 'Full blog post content would go here...',
        author: 'Bello Tunde',
        date: '12-10-2025',
        readTime: '8 min read',
        category: 'technical',
    },
    {
        id: '3',
        title: 'Lab Update: Q3 2025 Research Focus',
        slug: 'lab-update-q3-2025-research-focus',
        excerpt:
            'Overview of our current research directions and upcoming publications.',
        content: 'Full blog post content would go here...',
        author: 'Poneglyph Core',
        date: '01-10-2025',
        readTime: '4 min read',
        category: 'lab-update',
    },
    {
        id: '4',
        title: 'Benchmarking ZK-SNARK Performance Across Hardware',
        slug: 'benchmarking-zk-snark-performance-hardware',
        excerpt:
            'Comprehensive analysis of proving performance across different hardware configurations.',
        content: 'Full blog post content would go here...',
        author: 'Dan Brown',
        date: '28-09-2025',
        readTime: '10 min read',
        category: 'research',
    },
    {
        id: '5',
        title: 'Building Verifiable Compute Networks',
        slug: 'building-verifiable-compute-networks',
        excerpt:
            'Architectural considerations for decentralized computation with cryptographic guarantees.',
        content: 'Full blog post content would go here...',
        author: 'Bello Tunde',
        date: '20-09-2025',
        readTime: '7 min read',
        category: 'research',
    },
]

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
