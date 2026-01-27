import { Metadata } from 'next'
import { BlogPageContent } from './components/BlogPageContent'
import { getBlogPosts } from '../../lib/blog-server'

export const metadata: Metadata = {
    title: 'Blog | Poneglyph Labs',
    description:
        'Technical notes, research context, and lab updates from Poneglyph Labs.',
}

export default async function BlogPage() {
    const blogPosts = getBlogPosts()

    return <BlogPageContent posts={blogPosts} />
}
