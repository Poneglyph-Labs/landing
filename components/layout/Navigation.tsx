'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Logo } from '../ui/Logo'
import { Button } from '../ui/Button'

interface NavigationProps {
    currentPage?: 'Home' | 'Archive' | 'Projects'
}

export function Navigation({ currentPage = 'Home' }: NavigationProps) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    const navigationItems = [
        { label: 'Home', href: '/', active: currentPage === 'Home' },
        { label: 'Archive', href: '/archive', active: currentPage === 'Archive' },
        { label: 'Projects', href: '/projects', active: currentPage === 'Projects' },
    ]

    return (
        <nav className="border-tertiary-400 bg-primary-900 flex items-center justify-between border-b px-4 py-6 md:px-8">
            <Link href="/">
                <Logo size="lg" />
            </Link>

            {/* Desktop Navigation - Centered */}
            <div className="hidden items-center gap-6 md:flex absolute left-1/2 transform -translate-x-1/2">
                {navigationItems.map((item) => (
                    <Link
                        key={item.label}
                        href={item.href}
                        className={`text-subheading font-medium transition-colors ${
                            item.active
                                ? 'text-secondary-200'
                                : 'text-primary-500 hover:text-secondary-200'
                        }`}
                    >
                        {item.label}
                    </Link>
                ))}
            </div>

            {/* Right side button - Desktop */}
            <div className="hidden md:block">
                <Button variant="outline" size="md">
                    CONTACT US
                </Button>
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
                <div className="bg-primary-900 border-tertiary-400 absolute top-full right-0 left-0 border-b md:hidden">
                    <div className="flex flex-col space-y-4 p-4">
                        {navigationItems.map((item) => (
                            <Link
                                key={item.label}
                                href={item.href}
                                className={`text-subheading font-medium transition-colors ${
                                    item.active
                                        ? 'text-secondary-200'
                                        : 'text-primary-500 hover:text-secondary-200'
                                }`}
                            >
                                {item.label}
                            </Link>
                        ))}
                        <Button
                            variant="outline"
                            size="sm"
                            className="self-start"
                        >
                            CONTACT US
                        </Button>
                    </div>
                </div>
            )}
        </nav>
    )
}
