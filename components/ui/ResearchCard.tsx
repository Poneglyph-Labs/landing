interface ResearchCardProps {
    type: 'Whitepaper' | 'Security Audit' | 'Proof of Concept' | 'Open Source'
    title: string
    date: string
    className?: string
}

const typeColors = {
    Whitepaper: 'border-blue-500',
    'Security Audit': 'border-red-500',
    'Proof of Concept': 'border-yellow-500',
    'Open Source': 'border-green-500',
}

export function ResearchCard({
    type,
    title,
    date,
    className = '',
}: ResearchCardProps) {
    return (
        <div
            className={`bg-primary-900 border-tertiary-400 hover:border-secondary-200 group space-y-10 p-8 transition-colors ${className}`}
        >
            {/* Header */}
            <div className="flex items-center justify-between">
                <div className="border-tertiary-400 border px-3 py-2">
                    <span className="text-caption font-regular text-secondary-200">
                        {type}
                    </span>
                </div>
                <svg
                    className="text-secondary-600 group-hover:text-secondary-200 h-8 w-8 transition-colors"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                </svg>
            </div>

            {/* Content */}
            <div className="space-y-10">
                <h3 className="text-h4 font-space-grotesk text-secondary-200 leading-tight font-medium">
                    {title}
                </h3>
                <p className="text-body2 font-regular text-secondary-600">
                    {date}
                </p>
            </div>
        </div>
    )
}
