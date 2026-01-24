import { Button } from './Button'

interface ProjectRowProps {
    name: string
    description: string
    links: Array<{
        label: string
        href: string
    }>
    className?: string
}

export function ProjectRow({
    name,
    description,
    links,
    className = '',
}: ProjectRowProps) {
    return (
        <div
            className={`flex flex-col items-start gap-6 py-10 lg:flex-row lg:gap-16 ${className}`}
        >
            {/* Project Name */}
            <div className="flex items-center gap-4 lg:flex-1">
                <span className="text-h4 text-secondary-600 font-medium">
                    &gt;_
                </span>
                <h3 className="text-h4 font-space-grotesk text-secondary-200 font-medium">
                    {name}
                </h3>
            </div>

            {/* Description */}
            <div className="lg:flex-1">
                <p className="text-subheading text-secondary-400 font-medium">
                    {description}
                </p>
            </div>

            {/* Links */}
            <div className="flex flex-wrap gap-4 lg:flex-1 lg:justify-end">
                {links.map((link, index) => (
                    <Button
                        key={index}
                        variant="secondary"
                        size="md"
                        className="text-subheading font-regular hover:text-secondary-200"
                    >
                        {link.label}
                    </Button>
                ))}
            </div>
        </div>
    )
}
