'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Logo } from '../ui/Logo'

export function Navigation() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const pathname = usePathname()

    const navigationItems = [
        { label: 'Home', href: '/', active: pathname === '/' },
        {
            label: 'Archive',
            href: '/archive',
            active: pathname.startsWith('/archive'),
        },
        {
            label: 'Projects',
            href: '/projects',
            active: pathname.startsWith('/projects'),
        },
    ]

    return (
        <nav className="bg-primary-900 flex w-full items-center justify-between px-4 py-6 md:px-12">
            {/* Logo */}
            <Link href="/" className="shrink-0">
                <div className="h-9 w-40 md:h-16 md:w-[284px]">
                    <Logo
                        size="lg"
                        className="h-full w-full object-contain md:hidden"
                    />
                    <Logo
                        size="xl"
                        className="hidden h-full w-full object-contain md:block"
                    />
                </div>
            </Link>

            {/* Desktop Navigation - Centered */}
            <div className="absolute left-1/2 hidden -translate-x-1/2 transform items-center gap-6 md:flex">
                {navigationItems.map((item) => (
                    <Link
                        key={item.label}
                        href={item.href}
                        className={`font-space-grotesk text-2xl font-medium transition-colors ${
                            item.active
                                ? 'text-white'
                                : 'text-[#7B7A7A] hover:text-white'
                        }`}
                    >
                        {item.label}
                    </Link>
                ))}
            </div>

            {/* Right side button - Desktop */}
            <div className="hidden shrink-0 md:block">
                <Link
                    href="/#contact"
                    className="border-tertiary-400 flex items-center justify-center gap-2 border px-4 py-3 transition-opacity hover:opacity-80"
                >
                    <span className="text-subheading text-secondary-200 font-medium">
                        CONTACT US
                    </span>
                </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
                className="p-2 md:hidden"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle menu"
            >
                <svg
                    className="text-secondary-200 h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16M4 18h16"
                    />
                </svg>
            </button>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="bg-primary-900 border-tertiary-400 absolute top-full right-0 left-0 z-50 border-b md:hidden">
                    <div className="flex flex-col space-y-4 p-4">
                        {navigationItems.map((item) => (
                            <Link
                                key={item.label}
                                href={item.href}
                                className={`font-space-grotesk text-2xl font-medium transition-colors ${
                                    item.active
                                        ? 'text-white'
                                        : 'text-[#7B7A7A] hover:text-white'
                                }`}
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {item.label}
                            </Link>
                        ))}
                        <Link
                            href="/#contact"
                            className="border-tertiary-400 flex items-center justify-center gap-2 self-start border px-4 py-3"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            <span className="text-subheading text-secondary-200 font-medium">
                                CONTACT US
                            </span>
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    )
}
