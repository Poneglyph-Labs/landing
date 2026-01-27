import { MDXComponents } from 'mdx/types'
import Link from 'next/link'

export const mdxComponents: MDXComponents = {
    h1: ({ children }) => (
        <h1 className="text-h2 font-space-grotesk mb-6 font-medium text-white">
            {children}
        </h1>
    ),
    h2: ({ children }) => (
        <h2 className="text-h3 font-space-grotesk mb-4 font-medium text-white">
            {children}
        </h2>
    ),
    h3: ({ children }) => (
        <h3 className="text-subheading mb-4 font-medium text-white">
            {children}
        </h3>
    ),
    h4: ({ children }) => (
        <h4 className="text-body1 mb-3 font-medium text-white">{children}</h4>
    ),
    p: ({ children }) => (
        <p className="text-body1 text-secondary-200 mb-6 leading-7">
            {children}
        </p>
    ),
    ul: ({ children }) => (
        <ul className="text-body1 text-secondary-200 mb-6 list-disc pl-6 leading-7">
            {children}
        </ul>
    ),
    ol: ({ children }) => (
        <ol className="text-body1 text-secondary-200 mb-6 list-decimal pl-6 leading-7">
            {children}
        </ol>
    ),
    li: ({ children }) => <li className="mb-2">{children}</li>,
    blockquote: ({ children }) => (
        <blockquote className="border-tertiary-400 text-secondary-400 mb-6 border-l-4 pl-6 italic">
            {children}
        </blockquote>
    ),
    code: ({ children }) => (
        <code className="bg-primary-800 text-secondary-200 rounded px-2 py-1 text-sm">
            {children}
        </code>
    ),
    pre: ({ children }) => (
        <pre className="bg-primary-800 text-secondary-200 mb-6 overflow-x-auto rounded p-4">
            {children}
        </pre>
    ),
    a: ({ href, children }) => {
        if (href?.startsWith('http')) {
            return (
                <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-secondary-400 hover:text-secondary-200 underline transition-colors"
                >
                    {children}
                </a>
            )
        }
        return (
            <Link
                href={href || '#'}
                className="text-secondary-400 hover:text-secondary-200 underline transition-colors"
            >
                {children}
            </Link>
        )
    },
    table: ({ children }) => (
        <div className="mb-6 overflow-x-auto">
            <table className="border-tertiary-400 w-full border">
                {children}
            </table>
        </div>
    ),
    thead: ({ children }) => (
        <thead className="bg-primary-800/20">{children}</thead>
    ),
    tbody: ({ children }) => <tbody>{children}</tbody>,
    tr: ({ children }) => (
        <tr className="border-tertiary-400 border-b">{children}</tr>
    ),
    th: ({ children }) => (
        <th className="text-body2 text-secondary-400 px-6 py-4 text-left font-medium">
            {children}
        </th>
    ),
    td: ({ children }) => (
        <td className="text-body1 text-secondary-200 px-6 py-4">{children}</td>
    ),
    hr: () => <hr className="border-tertiary-400 my-8 border-t" />,
    strong: ({ children }) => (
        <strong className="font-medium text-white">{children}</strong>
    ),
    em: ({ children }) => <em className="italic">{children}</em>,
}
