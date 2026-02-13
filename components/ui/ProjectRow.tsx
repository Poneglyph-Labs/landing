import { MouseEvent } from 'react'
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
    const handleLinkClick = (
        e: MouseEvent<HTMLButtonElement>,
        href: string
    ) => {
        e.preventDefault()
        e.stopPropagation()
        if (href !== '#') {
            window.open(href, '_blank', 'noopener,noreferrer')
        }
    }

    return (
        <div
            className={`flex flex-col items-start gap-6 py-10 md:flex-row lg:gap-16 ${className}`}
        >
            {/* Project Name */}
            <div className="flex items-center gap-4 md:flex-[0.5] lg:flex-[0.4]">
                <span className="md:text-h4 text-secondary-600 text-[20px] font-medium md:text-[28px]">
                    &gt;_
                </span>
                <h3 className="md:text-h4 font-space-grotesk text-secondary-200 text-[20px] font-medium md:text-[28px]">
                    {name}
                </h3>
            </div>

            {/* Description */}
            <div className="md:flex-[0.6] lg:flex-[0.6]">
                <p className="text-subheading text-secondary-400 text-[18px] font-medium md:text-[20px]">
                    {description}
                </p>
            </div>

            {/* Links */}
            <div className="hidden flex-wrap gap-4 md:flex md:flex-[0.9] md:justify-end lg:flex-1">
                {links.map((link, index) => (
                    <Button
                        key={index}
                        variant="secondary"
                        size="lg"
                        className="font-regular hover:text-secondary-200"
                        onClick={(e) => handleLinkClick(e!, link.href)}
                    >
                        {link.label}
                    </Button>
                ))}
            </div>

            {/* mobile link */}
            <div className="flex flex-wrap md:hidden md:gap-4 lg:flex-1 lg:justify-end">
                {links.map((link, index) => (
                    <Button
                        key={index}
                        variant="secondary"
                        size="sm"
                        className="font-regular hover:text-secondary-200"
                        onClick={(e) => handleLinkClick(e!, link.href)}
                    >
                        {link.label}
                    </Button>
                ))}
            </div>
        </div>
    )
}
