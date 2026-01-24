'use client'

import { usePathname } from 'next/navigation'
import { Navigation } from './Navigation'

export function NavigationWrapper() {
    const pathname = usePathname()
    
    const getCurrentPage = () => {
        if (pathname === '/') return 'Home'
        if (pathname.startsWith('/archive')) return 'Archive'
        if (pathname.startsWith('/projects')) return 'Projects'
        return 'Home'
    }

    return <Navigation currentPage={getCurrentPage()} />
}