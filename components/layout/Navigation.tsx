'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Logo } from '../ui/Logo'
import { X } from 'lucide-react'

export function Navigation() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const pathname = usePathname()

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }

        // Cleanup on unmount
        return () => {
            document.body.style.overflow = 'unset'
        }
    }, [isMobileMenuOpen])

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
        <nav className="bg-primary-900 relative flex w-full items-center justify-between px-4 py-6 md:px-24">
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
                                ? 'text-secondary-200'
                                : 'hover:text-secondary-200 text-[#7B7A7A]'
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
                    onClick={(e) => {
                        if (pathname === '/') {
                            e.preventDefault()
                            document.getElementById('contact')?.scrollIntoView({
                                behavior: 'smooth',
                            })
                        }
                    }}
                    className="border-tertiary-400 flex items-center justify-center gap-2 border px-4 py-3 transition-opacity hover:opacity-80"
                >
                    <span className="text-body2 text-secondary-200 text-[18px] font-medium">
                        CONTACT US
                    </span>
                </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
                className="cursor-pointer p-2 md:hidden"
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
                <div className="absolute top-0 left-0 z-50 flex h-screen w-full flex-col items-start justify-start gap-6 bg-black px-4 py-6 md:hidden">
                    {/* Header with Logo and Close */}
                    <div className="flex items-center justify-between self-stretch">
                        <Link href="/" className="shrink-0">
                            <div className="h-9 w-40">
                                <Logo
                                    size="lg"
                                    className="h-full w-full object-contain"
                                />
                            </div>
                        </Link>
                        <X
                            className="h-8 w-8 cursor-pointer"
                            onClick={() => setIsMobileMenuOpen(false)}
                        />
                    </div>

                    {/* Navigation Items */}
                    <div className="flex flex-col items-start justify-start gap-4 self-stretch">
                        {navigationItems.map((item) => (
                            <Link
                                key={item.label}
                                href={item.href}
                                className="flex items-center justify-start gap-1 self-stretch"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                <div
                                    className={`font-space-grotesk justify-start font-medium ${
                                        item.active
                                            ? 'text-secondary-200 text-lg'
                                            : 'text-secondary-600 text-base leading-7'
                                    }`}
                                >
                                    —
                                </div>
                                <div
                                    className={`font-space-grotesk justify-start ${
                                        item.active
                                            ? 'text-secondary-200 text-lg font-medium'
                                            : 'text-secondary-600 text-base leading-7 font-normal'
                                    }`}
                                >
                                    {item.label}
                                </div>
                            </Link>
                        ))}
                    </div>

                    {/* Contact Button */}
                    <Link
                        href="/#contact"
                        onClick={(e) => {
                            setIsMobileMenuOpen(false)
                            if (pathname === '/') {
                                e.preventDefault()
                                setTimeout(() => {
                                    document
                                        .getElementById('contact')
                                        ?.scrollIntoView({
                                            behavior: 'smooth',
                                        })
                                }, 100)
                            }
                        }}
                        className="border-secondary-200 flex items-center justify-center gap-2 self-stretch border px-2 py-3"
                    >
                        <div className="text-secondary-200 font-space-grotesk justify-start text-sm font-medium">
                            CONTACT US
                        </div>
                    </Link>
                </div>
            )}
        </nav>
    )
}
