import Link from 'next/link'
import { Button } from '../ui/Button'
import { Icon } from '../ui/Icon'
import { LogoNoText } from '../ui/LogoNoText'
import { ActivitySignals } from './ActivitySignals'
const quickLinks = [
    {
        label: 'Github',
        href: 'https://github.com/Poneglyph-Labs',
        type: 'external',
    },
    { label: 'Research', href: '/archive', type: 'internal' },
    { label: 'Projects', href: '/projects', type: 'internal' },
]

export function HeroSection() {
    return (
        <section className="bg-primary-900 pt-4 pb-10 md:px-8 md:py-16 lg:px-24 lg:py-20">
            <div className="mx-auto px-4 md:px-0">
                <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
                    {/* Content */}
                    <div className="space-y-8">
                        <div className="space-y-6">
                            <h1 className="md:text-h1 text-h3 font-space-grotesk text-secondary-200 text-[32px] leading-tight font-medium md:text-[64px]">
                                Poneglyph Labs
                            </h1>
                            <h2 className="md:text-h3 text-subheading font-space-grotesk text-tertiary-400 text-[20px] leading-tight font-medium md:text-[32px]">
                                Researching and Shipping Verifiable
                                Infrastructure
                            </h2>
                        </div>

                        {/* Description */}
                        <p className="text-body1 text-secondary-400 hidden max-w-2xl leading-relaxed md:block">
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
                                    {link.type === 'external' ? (
                                        <Link
                                            href={link.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-secondary-500 hover:text-secondary-200 text-[14px] font-medium transition-colors md:text-[18px]"
                                        >
                                            {link.label}
                                        </Link>
                                    ) : (
                                        <Link
                                            href={link.href}
                                            className="text-secondary-500 hover:text-secondary-200 text-[14px] font-medium transition-colors md:text-[18px]"
                                        >
                                            {link.label}
                                        </Link>
                                    )}
                                    {index < quickLinks.length - 1 && (
                                        <div className="border-secondary-500 h-6 border-r" />
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* CTA Buttons */}
                        <div className="hidden flex-col gap-4 sm:flex-row md:flex md:pt-4">
                            <Button
                                variant="secondary"
                                size="md"
                                icon={
                                    <Icon
                                        name="arrow-up-right"
                                        size={24}
                                        className="text-secondary-200 text-[20px]"
                                    />
                                }
                            >
                                VIEW RESEARCH OUTPUT
                            </Button>
                        </div>
                        <div className="flex flex-col gap-4 sm:flex-row md:hidden md:pt-4">
                            <Button
                                variant="secondary"
                                size="sm"
                                icon={
                                    <Icon
                                        name="arrow-up-right"
                                        size={24}
                                        className="text-secondary-200 text-[14px]"
                                    />
                                }
                            >
                                VIEW RESEARCH OUTPUT
                            </Button>
                        </div>
                    </div>

                    {/* Animation/Visual */}
                    <div className="hidden items-center justify-center lg:flex">
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
