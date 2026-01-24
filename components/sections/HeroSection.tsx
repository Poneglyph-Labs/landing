import { Button } from '../ui/Button'
import { LogoNoText } from '../ui/LogoNoText'

const quickLinks = [
    { label: 'Github', href: '#' },
    { label: 'Research', href: '#' },
    { label: 'Projects', href: '#' },
]

export function HeroSection() {
    return (
        <section className="bg-primary-900 py-16 md:py-20">
            <div className="mx-auto max-w-6xl px-4 md:px-8">
                <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
                    {/* Content */}
                    <div className="space-y-8">
                        <div className="space-y-6">
                            <h1 className="text-h1 font-space-grotesk text-secondary-200 leading-tight font-medium md:text-[64px]">
                                Poneglyph Labs
                            </h1>
                            <h2 className="text-h3 font-space-grotesk text-tertiary-400 leading-tight font-medium md:text-[32px]">
                                Researching and Shipping Verifiable
                                Infrastructure
                            </h2>
                        </div>

                        {/* Description */}
                        <p className="text-body1 text-secondary-400 max-w-2xl leading-relaxed">
                            Applied research and engineering at the intersection
                            of cryptography, artificial intelligence, and
                            decentralized systems.
                        </p>

                        {/* Quick Links */}
                        <div className="flex items-center gap-8 py-4">
                            {quickLinks.map((link, index) => (
                                <div
                                    key={link.label}
                                    className="flex items-center gap-8"
                                >
                                    <a
                                        href={link.href}
                                        className="text-body2 text-secondary-500 hover:text-secondary-200 font-medium transition-colors"
                                    >
                                        {link.label}
                                    </a>
                                    {index < quickLinks.length - 1 && (
                                        <div className="bg-secondary-500 h-6 w-px" />
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-col gap-4 pt-4 sm:flex-row">
                            <Button
                                variant="primary"
                                size="lg"
                                icon={
                                    <svg
                                        className="h-5 w-5"
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
                                }
                            >
                                VIEW RESEARCH OUTPUT
                            </Button>
                            <Button variant="outline" size="lg">
                                VIEW FULL ARCHIVE
                            </Button>
                        </div>
                    </div>

                    {/* Animation/Visual */}
                    <div className="hidden items-center justify-center lg:flex">
                        <div className="relative h-96 w-96">
                            {/* Animated logo or visual element */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="translate-x-[50%] rotate-[-40deg] transform">
                                    <LogoNoText
                                        size="lg"
                                        className="scale-[3]"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
