import { MDXRemote } from 'next-mdx-remote/rsc'
import { mdxComponents } from './MDXComponents'

interface MDXContentProps {
    content: string
}

export function MDXContent({ content }: MDXContentProps) {
    return (
        <div className="prose prose-invert max-w-none">
            <MDXRemote source={content} components={mdxComponents} />
        </div>
    )
}
