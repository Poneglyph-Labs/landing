import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import {
    getBlogPost,
    hasBlogMDXContent,
    getBlogMDXBySlug,
} from '../../../lib/blog-server'
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

    // Get MDX content if available
    const hasMDXContent = hasBlogMDXContent(slug)
    const mdxPost = hasMDXContent ? getBlogMDXBySlug(slug) : null

    return <BlogPostContent post={post} mdxPost={mdxPost} />
}
