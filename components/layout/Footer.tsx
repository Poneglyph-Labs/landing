'use client'

import { Logo } from '../ui/Logo'
import { Icon, IconName } from '../ui/Icon'

const socialLinks: { name: string; href: string; icon: IconName }[] = [
    { name: 'Twitter', href: '#', icon: 'twitter' },
    { name: 'GitHub', href: '#', icon: 'github' },
    { name: 'LinkedIn', href: '#', icon: 'linkedin' },
    { name: 'Email', href: '#', icon: 'mail' },
]

const researchLinks = [
    'Whitepapers',
    'Open Source',
    'Security Audits',
    'Proofs of Concepts',
]

const connectLinks = [
    { name: 'Blog', href: '/blog' },
    { name: 'PGP Public Key', href: '#' },
]

const footerLinks = ['Github', 'Research Archive', 'Legal']

export function Footer() {
    return (
        <footer className="border-tertiary-400 border-t-[0.5px] bg-[#191919]">
            {/* Desktop Layout */}
            <div className="hidden md:block">
                <div className="flex flex-col items-start gap-[120px] overflow-hidden px-24 py-20">
                    <div className="flex w-full items-start justify-between">
                        {/* Left Column - Logo and CTA */}
                        <div className="flex w-[623px] flex-col items-start gap-10">
                            <div className="flex w-full flex-col items-start gap-6">
                                <div className="flex w-full flex-col items-start gap-4">
                                    <div className="h-20 w-[355px]">
                                        <Logo size="xl" />
                                    </div>
                                    <p className="text-body2 font-regular w-full text-[rgba(229,229,229,0.8)]">
                                        Applied research and engineering at the
                                        intersection of cryptography, artificial
                                        intelligence, and decentralized systems.
                                    </p>
                                </div>

                                {/* Social Links */}
                                <div className="flex items-center gap-4">
                                    {socialLinks.map((link) => (
                                        <a
                                            key={link.name}
                                            href={link.href}
                                            className="flex items-center p-1 transition-opacity hover:opacity-80"
                                            aria-label={link.name}
                                        >
                                            <Icon
                                                name={link.icon}
                                                size={32}
                                                className="text-tertiary-400"
                                            />
                                        </a>
                                    ))}
                                </div>
                            </div>

                            <button
                                onClick={() =>
                                    window.scrollTo({
                                        top: 0,
                                        behavior: 'smooth',
                                    })
                                }
                                className="border-tertiary-400 flex items-center justify-center gap-2 border px-4 py-3 transition-opacity hover:opacity-80"
                            >
                                <span className="text-subheading text-secondary-200 font-medium">
                                    BACK TO THE TOP
                                </span>
                            </button>
                        </div>

                        {/* Right Column - Links */}
                        <div className="flex w-[538px] items-start gap-4">
                            {/* Research Links */}
                            <div className="flex flex-1 flex-col items-start gap-6">
                                <h3 className="text-subheading font-space-grotesk text-secondary-200 w-full font-medium">
                                    Research
                                </h3>
                                <div className="flex w-full flex-col items-start gap-4">
                                    {researchLinks.map((link) => (
                                        <a
                                            key={link}
                                            href="#"
                                            className="text-body1 font-regular hover:text-secondary-200 w-full leading-7 tracking-[-0.16px] text-[rgba(229,229,229,0.8)] transition-colors"
                                        >
                                            {link}
                                        </a>
                                    ))}
                                </div>
                            </div>

                            {/* Connect Links */}
                            <div className="flex flex-1 flex-col items-start gap-6">
                                <h3 className="text-subheading font-space-grotesk text-secondary-200 w-full font-medium">
                                    Connect
                                </h3>
                                <div className="flex w-full flex-col items-start gap-4">
                                    {connectLinks.map((link) => (
                                        <a
                                            key={link.name}
                                            href={link.href}
                                            className="text-body1 font-regular hover:text-secondary-200 w-full leading-7 tracking-[-0.16px] text-[rgba(229,229,229,0.8)] transition-colors"
                                        >
                                            {link.name}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Footer */}
                    <div className="flex w-full items-center justify-between">
                        {/* Copyright */}
                        <div className="flex w-60 flex-col items-start gap-2">
                            <h4 className="text-subheading font-space-grotesk w-full font-medium text-white">
                                Poneglyph Labs
                            </h4>
                            <div className="text-body1 font-regular flex w-full items-center gap-2 leading-7 tracking-[-0.16px] text-[rgba(229,229,229,0.6)]">
                                <span>© 2026.</span>
                                <span>All artifacts preserved.</span>
                            </div>
                        </div>

                        {/* Footer Links */}
                        <div className="flex items-center justify-center gap-8 p-2.5">
                            {footerLinks.map((link, index) => (
                                <div
                                    key={link}
                                    className="flex items-center gap-8"
                                >
                                    <a
                                        href="#"
                                        className="text-body1 font-regular hover:text-secondary-200 text-center leading-7 tracking-[-0.16px] text-[rgba(229,229,229,0.6)] transition-colors"
                                    >
                                        {link}
                                    </a>
                                    {index < footerLinks.length - 1 && (
                                        <div className="border-tertiary-400 h-0 w-7 origin-center rotate-90 border-t" />
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Layout */}
            <div className="block md:hidden">
                <div className="flex flex-col items-start px-4 py-10">
                    <div className="flex w-full flex-col items-end">
                        <div className="flex w-full flex-col items-start gap-10">
                            <div className="flex w-full flex-col items-start gap-10">
                                <div className="flex w-full flex-col items-start gap-6">
                                    <div className="flex w-full flex-col items-start gap-4">
                                        <div className="h-9 w-40">
                                            <Logo size="md" />
                                        </div>
                                        <p className="text-body1 font-regular w-full leading-7 tracking-[-0.16px] text-[rgba(229,229,229,0.8)]">
                                            Applied research and engineering at
                                            the intersection of cryptography,
                                            artificial intelligence, and
                                            decentralized systems.
                                        </p>
                                    </div>

                                    {/* Social Links */}
                                    <div className="flex items-center gap-4">
                                        {socialLinks.map((link) => (
                                            <a
                                                key={link.name}
                                                href={link.href}
                                                className="flex items-center p-1 transition-opacity hover:opacity-80"
                                                aria-label={link.name}
                                            >
                                                <Icon
                                                    name={link.icon}
                                                    size={24}
                                                    className="text-tertiary-400"
                                                />
                                            </a>
                                        ))}
                                    </div>
                                </div>

                                <button
                                    onClick={() =>
                                        window.scrollTo({
                                            top: 0,
                                            behavior: 'smooth',
                                        })
                                    }
                                    className="border-tertiary-400 flex items-center justify-center gap-2 border px-2 py-3 transition-opacity hover:opacity-80"
                                >
                                    <span className="text-caption text-secondary-200 font-medium">
                                        BACK TO THE TOP
                                    </span>
                                </button>
                            </div>

                            {/* Links Section */}
                            <div className="flex w-full items-start gap-4">
                                {/* Research Links */}
                                <div className="flex flex-1 flex-col items-start gap-6">
                                    <h3 className="text-subheading font-space-grotesk text-secondary-200 w-full font-medium">
                                        Research
                                    </h3>
                                    <div className="flex w-full flex-col items-start gap-4">
                                        {researchLinks.map((link) => (
                                            <a
                                                key={link}
                                                href="#"
                                                className="text-body1 font-regular hover:text-secondary-200 w-full leading-7 tracking-[-0.16px] text-[rgba(229,229,229,0.8)] transition-colors"
                                            >
                                                {link}
                                            </a>
                                        ))}
                                    </div>
                                </div>

                                {/* Connect Links */}
                                <div className="flex flex-1 flex-col items-start gap-6">
                                    <h3 className="text-subheading font-space-grotesk text-secondary-200 w-full font-medium">
                                        Connect
                                    </h3>
                                    <div className="flex w-full flex-col items-start gap-4">
                                        {connectLinks.map((link) => (
                                            <a
                                                key={link.name}
                                                href={link.href}
                                                className="text-body1 font-regular hover:text-secondary-200 w-full leading-7 tracking-[-0.16px] text-[rgba(229,229,229,0.8)] transition-colors"
                                            >
                                                {link.name}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Bottom Section */}
                            <div className="flex w-full flex-col items-start gap-6">
                                <div className="flex w-60 flex-col items-start gap-2">
                                    <h4 className="text-body2 font-space-grotesk w-full font-medium text-white">
                                        Poneglyph Labs
                                    </h4>
                                    <div className="text-caption font-regular flex w-full items-center gap-2 text-[rgba(229,229,229,0.6)]">
                                        <span>© 2026.</span>
                                        <span>All artifacts preserved.</span>
                                    </div>
                                </div>

                                {/* Footer Links */}
                                <div className="flex items-center justify-center gap-8">
                                    {footerLinks.map((link, index) => (
                                        <div
                                            key={link}
                                            className="flex items-center gap-8"
                                        >
                                            <a
                                                href="#"
                                                className="text-caption font-regular hover:text-secondary-200 text-center text-[rgba(229,229,229,0.6)] transition-colors"
                                            >
                                                {link}
                                            </a>
                                            {index < footerLinks.length - 1 && (
                                                <div className="border-tertiary-400 h-0 w-[18px] origin-center rotate-90 border-t" />
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
