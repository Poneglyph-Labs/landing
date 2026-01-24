import type { Metadata } from 'next'
import { Space_Grotesk } from 'next/font/google'
import './globals.css'
import { NavigationWrapper } from '../components/layout/NavigationWrapper'
import { Footer } from '../components/layout/Footer'

const spaceGrotesk = Space_Grotesk({
    variable: '--font-space-grotesk',
    subsets: ['latin'],
    weight: ['300', '400', '500', '600', '700'],
})

const siteConfig = {
    name: 'Poneglyph Labs',
    description:
        'Applied research and engineering at the intersection of cryptography, artificial intelligence, and decentralized systems.',
    url: 'https://poneglyph-labs.xyz',
    ogImage: 'https://poneglyph-labs.xyz/logo.png',
    creator: '@poneglyph-labs',
    keywords: [
        'cryptography',
        'blockchain',
        'decentralized systems',
        'artificial intelligence',
        'security audits',
        'research',
        'engineering',
        'smart contracts',
        'protocol design',
        'zero knowledge',
        'consensus algorithms',
        'applied cryptography',
    ],
}

export const metadata: Metadata = {
    title: {
        default: siteConfig.name,
        template: `%s | ${siteConfig.name}`,
    },
    description: siteConfig.description,
    keywords: siteConfig.keywords,
    authors: [
        {
            name: 'Poneglyph Labs',
            url: siteConfig.url,
        },
    ],
    creator: siteConfig.creator,
    metadataBase: new URL(siteConfig.url),
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: siteConfig.url,
        title: siteConfig.name,
        description: siteConfig.description,
        siteName: siteConfig.name,
        images: [
            {
                url: siteConfig.ogImage,
                width: 1200,
                height: 630,
                alt: siteConfig.name,
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: siteConfig.name,
        description: siteConfig.description,
        images: [siteConfig.ogImage],
        creator: siteConfig.creator,
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    verification: {
        google: 'your-google-verification-code',
        yandex: 'your-yandex-verification-code',
    },
    alternates: {
        canonical: siteConfig.url,
    },
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en" className="dark">
            <head>
                <link rel="icon" href="/favicon.ico" sizes="32x32" />
                <link
                    rel="icon"
                    href="/favicon-16x16.png"
                    sizes="16x16"
                    type="image/png"
                />
                <link
                    rel="icon"
                    href="/favicon-32x32.png"
                    sizes="32x32"
                    type="image/png"
                />
                <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
                <link rel="manifest" href="/site.webmanifest" />
                <meta name="theme-color" content="#0a0a0a" />
                <meta name="color-scheme" content="dark" />
            </head>
            <body
                className={`${spaceGrotesk.variable} font-space-grotesk bg-primary-900 text-secondary-200 antialiased`}
            >
                <NavigationWrapper />
                {children}
                <Footer />
            </body>
        </html>
    )
}
