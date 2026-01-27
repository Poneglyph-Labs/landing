import { Metadata } from 'next'
import { BlogPageContent } from './components/BlogPageContent'

export const metadata: Metadata = {
    title: 'Blog | Poneglyph Labs',
    description:
        'Technical notes, research context, and lab updates from Poneglyph Labs.',
}

export default function BlogPage() {
    return <BlogPageContent />
}
