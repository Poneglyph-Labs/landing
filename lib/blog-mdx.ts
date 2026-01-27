import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export type BlogCategory = 'technical' | 'research' | 'lab-update'

export interface BlogPost {
    id: string
    title: string
    slug: string
    excerpt: string
    content: string
    author: string
    date: string
    readTime: string
    category: BlogCategory
}

export interface MDXBlogPost extends BlogPost {
    content: string
}

const contentDirectory = path.join(process.cwd(), 'content/blog')

export function getBlogMDXFiles(): string[] {
    if (!fs.existsSync(contentDirectory)) {
        return []
    }
    return fs
        .readdirSync(contentDirectory)
        .filter((file) => file.endsWith('.mdx'))
}

export function getBlogMDXBySlug(slug: string): MDXBlogPost | null {
    try {
        const filePath = path.join(contentDirectory, `${slug}.mdx`)

        if (!fs.existsSync(filePath)) {
            return null
        }

        const fileContents = fs.readFileSync(filePath, 'utf8')
        const { data, content } = matter(fileContents)

        // Validate required frontmatter fields
        const requiredFields = [
            'title',
            'excerpt',
            'author',
            'date',
            'readTime',
            'category',
        ]
        for (const field of requiredFields) {
            if (!data[field]) {
                throw new Error(
                    `Missing required field: ${field} in ${slug}.mdx`
                )
            }
        }

        return {
            id: data.id || slug,
            slug,
            title: data.title,
            excerpt: data.excerpt,
            content,
            author: data.author,
            date: data.date,
            readTime: data.readTime,
            category: data.category,
        }
    } catch (error) {
        console.error(`Error reading MDX file for slug ${slug}:`, error)
        return null
    }
}

export function getAllBlogMDX(): MDXBlogPost[] {
    const files = getBlogMDXFiles()
    const posts: MDXBlogPost[] = []

    for (const file of files) {
        const slug = file.replace(/\.mdx$/, '')
        const post = getBlogMDXBySlug(slug)
        if (post) {
            posts.push(post)
        }
    }

    return posts
}

export function blogMDXExists(slug: string): boolean {
    const filePath = path.join(contentDirectory, `${slug}.mdx`)
    return fs.existsSync(filePath)
}
