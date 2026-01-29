import { Button } from '../ui/Button'
import { Icon } from '../ui/Icon'
import { LogoNoText } from '../ui/LogoNoText'
import { ActivitySignals } from './ActivitySignals'
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
                                        <div className="border-secondary-500 h-6 border-r" />
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-col gap-4 sm:flex-row md:pt-4">
                            <Button
                                variant="secondary"
                                size="md"
                                icon={
                                    <Icon
                                        name="arrow-up-right"
                                        size={24}
                                        className="text-secondary-200"
                                    />
                                }
                            >
                                VIEW RESEARCH OUTPUT
                            </Button>
                            {/* <Button variant="outline" size="lg">
                                VIEW FULL ARCHIVE
                            </Button> */}
                        </div>
                    </div>

                    {/* Animation/Visual */}
                    <div className="justify-left hidden items-center lg:flex">
                        <div className="relative h-96 w-96">
                            {/* Animated logo or visual element */}
                            <div className="absolute inset-0 left-0 flex items-center justify-center">
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
                <ActivitySignals />
            </div>
        </section>
    )
}
