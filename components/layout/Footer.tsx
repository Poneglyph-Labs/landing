'use client'

import { Logo } from '../ui/Logo'
import { Icon, IconName } from '../ui/Icon'
import Link from 'next/link'

const socialLinks: {
    name: string
    href: string
    icon: IconName
    mobileicon: IconName
}[] = [
    {
        name: 'Twitter',
        href: 'htpps://twitter.com/poneglyph_labs',
        icon: 'twitter',
        mobileicon: 'mobiletwitter',
    },
    {
        name: 'GitHub',
        href: 'https://github.com/Poneglyph-Labs',
        icon: 'github-circle',
        mobileicon: 'mobilegithub-circle',
    },
    {
        name: 'LinkedIn',
        href: 'https://www.linkedin.com/company/poneglyph-labs',
        icon: 'linkedin',
        mobileicon: 'mobilelinkedin',
    },
    {
        name: 'Email',
        href: 'mailto:hello@poneglyph-labs.xyz',
        icon: 'mail',
        mobileicon: 'mobilemail',
    },
]

const researchLinks = [
    { name: 'Whitepapers', href: '/archive?type=Paper' },
    { name: 'Open Source', href: '/archive?type=Repository' },
    { name: 'Security Audits', href: '/archive?type=Audit' },
    { name: 'Proofs of Concepts', href: '/archive?type=Proof of Concept' },
]

const connectLinks = [
    { name: 'Blog', href: '/blog' },
    { name: 'PGP Public Key', href: '#' },
]

const footerLinks = [
    {
        name: 'Github',
        href: 'https://github.com/Poneglyph-Labs',
        type: 'external',
    },
    { name: 'Research Archive', href: '/archive', type: 'internal' },
]

export function Footer() {
    return (
        <footer className="border-tertiary-400 border-t-[0.5px] bg-[#191919]">
            {/* Desktop Layout */}
            <div className="hidden lg:block">
                <div className="flex flex-col items-start gap-[120px] overflow-hidden px-24 py-20">
                    <div className="flex w-full items-start justify-between">
                        {/* Left Column - Logo and CTA */}
                        <div className="flex w-[623px] flex-col items-start gap-10">
                            <div className="flex w-full flex-col items-start gap-6">
                                <div className="flex w-full flex-col items-start gap-4">
                                    <div className="h-20 w-[355px]">
                                        <Logo size="xl" />
                                    </div>
                                    <p className="text-body2 font-regular w-full text-[18px] text-[rgba(229,229,229,0.8)]">
                                        Applied research and engineering at the
                                        intersection of cryptography, artificial
                                        intelligence, and decentralized systems.
                                    </p>
                                </div>

                                {/* Social Links */}
                                <div className="flex items-center gap-4">
                                    {socialLinks.map((link) => (
                                        <Link
                                            key={link.name}
                                            href={link.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center p-1 transition-opacity hover:opacity-80"
                                            aria-label={link.name}
                                        >
                                            <Icon
                                                name={link.icon}
                                                size={32}
                                                className="text-tertiary-400"
                                            />
                                        </Link>
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
                                className="border-tertiary-400 flex cursor-pointer items-center justify-center gap-2 border px-4 py-3 transition-opacity hover:opacity-80"
                            >
                                <span className="text-subheading text-secondary-200 text-[20px] font-medium">
                                    BACK TO THE TOP
                                </span>
                            </button>
                        </div>

                        {/* Right Column - Links */}
                        <div className="flex w-[538px] items-start gap-4">
                            {/* Research Links */}
                            <div className="flex flex-1 flex-col items-start gap-6">
                                <h3 className="text-subheading font-space-grotesk text-secondary-200 w-full text-[20px] font-medium">
                                    Research
                                </h3>
                                <div className="flex w-full flex-col items-start gap-4">
                                    {researchLinks.map((link) => (
                                        <a
                                            key={link.name}
                                            href={link.href}
                                            className="text-body1 font-regular hover:text-secondary-200 w-full text-[14px] leading-7 tracking-[-0.16px] text-[rgba(229,229,229,0.8)] transition-colors md:text-[16px]"
                                        >
                                            {link.name}
                                        </a>
                                    ))}
                                </div>
                            </div>

                            {/* Connect Links */}
                            <div className="flex flex-1 flex-col items-start gap-6">
                                <h3 className="text-subheading font-space-grotesk text-secondary-200 w-full text-[20px] font-medium">
                                    Connect
                                </h3>
                                <div className="flex w-full flex-col items-start gap-4">
                                    {connectLinks.map((link) => (
                                        <a
                                            key={link.name}
                                            href={link.href}
                                            className="text-body1 font-regular hover:text-secondary-200 w-full text-[14px] leading-7 tracking-[-0.16px] text-[rgba(229,229,229,0.8)] transition-colors md:text-[16px]"
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
                            <h4 className="text-subheading font-space-grotesk text-secondary-200 w-full text-[20px] font-medium">
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
                                    key={link.name}
                                    className="flex items-center gap-8"
                                >
                                    {link.type === 'external' ? (
                                        <Link
                                            href={link.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-body1 font-regular hover:text-secondary-200 text-center leading-7 tracking-[-0.16px] text-[rgba(229,229,229,0.6)] transition-colors"
                                        >
                                            {link.name}
                                        </Link>
                                    ) : (
                                        <Link
                                            href={link.href}
                                            className="text-body1 font-regular hover:text-secondary-200 text-center leading-7 tracking-[-0.16px] text-[rgba(229,229,229,0.6)] transition-colors"
                                        >
                                            {link.name}
                                        </Link>
                                    )}
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
            <div className="block lg:hidden">
                <div className="flex flex-col items-start px-4 py-10 md:px-8">
                    <div className="flex w-full flex-col items-end">
                        <div className="flex w-full flex-col items-start gap-10">
                            <div className="flex w-full flex-col items-start gap-10">
                                <div className="flex w-full flex-col items-start gap-6">
                                    <div className="flex w-full flex-col items-start gap-4">
                                        <div className="h-9 w-40">
                                            <Logo size="lg" />
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
                                            <Link
                                                key={link.name}
                                                href={link.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center p-1 transition-opacity hover:opacity-80"
                                                aria-label={link.name}
                                            >
                                                <Icon
                                                    name={link.mobileicon}
                                                    size={24}
                                                    className="text-tertiary-400 h-6 w-6"
                                                />
                                            </Link>
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
                                    className="border-tertiary-400 flex cursor-pointer items-center justify-center gap-2 border px-3 py-3 transition-opacity hover:opacity-80 md:px-2 md:py-3"
                                >
                                    <span className="text-caption text-secondary-200 text-[14px] font-medium">
                                        BACK TO THE TOP
                                    </span>
                                </button>
                            </div>

                            {/* Links Section */}
                            <div className="flex w-full items-start gap-4">
                                {/* Research Links */}
                                <div className="flex max-w-[261px] flex-1 flex-col items-start gap-6">
                                    <h3 className="text-subheading font-space-grotesk text-secondary-200 w-full text-[20px] font-medium">
                                        Research
                                    </h3>
                                    <div className="flex w-full flex-col items-start gap-4">
                                        {researchLinks.map((link) => (
                                            <a
                                                key={link.name}
                                                href={link.href}
                                                className="text-body1 font-regular hover:text-secondary-200 w-full text-[14px] leading-7 tracking-[-0.16px] text-[rgba(229,229,229,0.8)] transition-colors md:text-[16px]"
                                            >
                                                {link.name}
                                            </a>
                                        ))}
                                    </div>
                                </div>

                                {/* Connect Links */}
                                <div className="flex flex-1 flex-col items-start gap-6">
                                    <h3 className="text-subheading font-space-grotesk text-secondary-200 w-full text-[20px] font-medium">
                                        Connect
                                    </h3>
                                    <div className="flex w-full flex-col items-start gap-4">
                                        {connectLinks.map((link) => (
                                            <a
                                                key={link.name}
                                                href={link.href}
                                                className="text-body1 font-regular hover:text-secondary-200 w-full text-[14px] leading-7 tracking-[-0.16px] text-[rgba(229,229,229,0.8)] transition-colors md:text-[16px]"
                                            >
                                                {link.name}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Bottom Section */}
                            <div className="flex w-full flex-col items-start gap-6">
                                <div className="flex flex-col items-start gap-2 md:w-60">
                                    <h4 className="text-body2 font-space-grotesk text-secondary-200 w-full text-[18px] font-medium">
                                        Poneglyph Labs
                                    </h4>
                                    <div className="text-caption font-regular flex w-full items-center gap-2 text-[14px] text-[rgba(229,229,229,0.6)]">
                                        <span>© 2026.</span>
                                        <span>All artifacts preserved.</span>
                                    </div>
                                </div>

                                {/* Footer Links */}
                                <div className="flex items-center justify-center gap-[32px] md:gap-8">
                                    {footerLinks.map((link, index) => (
                                        <div
                                            key={link.name}
                                            className="flex items-center gap-[32px] md:gap-8"
                                        >
                                            {link.type === 'external' ? (
                                                <Link
                                                    href={link.href}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-caption font-regular hover:text-secondary-200 text-center text-[14px] text-[rgba(229,229,229,0.6)] transition-colors"
                                                >
                                                    {link.name}
                                                </Link>
                                            ) : (
                                                <Link
                                                    href={link.href}
                                                    className="text-caption font-regular hover:text-secondary-200 text-center text-[14px] text-[rgba(229,229,229,0.6)] transition-colors"
                                                >
                                                    {link.name}
                                                </Link>
                                            )}

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
