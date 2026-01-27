import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getBlogPost } from '../data/blogData'
import { BlogPostContent } from './components/BlogPostContent'

interface BlogPostPageProps {
    params: Promise<{
        slug: string
    }>
}

export async function generateMetadata({
    params,
}: BlogPostPageProps): Promise<Metadata> {
    const { slug } = await params
    const post = getBlogPost(slug)

    if (!post) {
        return {
            title: 'Blog Post Not Found | Poneglyph Labs',
        }
    }

    return {
        title: `${post.title} | Poneglyph Labs Blog`,
        description: post.excerpt,
    }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
    const { slug } = await params
    const post = getBlogPost(slug)

    if (!post) {
        notFound()
    }

    return <BlogPostContent post={post} />
}
