export function StructuredData() {
    const structuredData = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'Poneglyph Labs',
        description:
            'Applied research and engineering at the intersection of cryptography, artificial intelligence, and decentralized systems.',
        url: 'https://poneglyphlabs.com',
        logo: 'https://poneglyphlabs.com/logo.png',
        foundingDate: '2024',
        sameAs: [
            'https://twitter.com/poneglyphlabs',
            'https://github.com/poneglyphlabs',
            'https://linkedin.com/company/poneglyphlabs',
        ],
        contactPoint: {
            '@type': 'ContactPoint',
            contactType: 'customer service',
            email: 'contact@poneglyphlabs.com',
        },
        areaServed: 'Worldwide',
        serviceType: [
            'Cryptographic Research',
            'Security Audits',
            'Protocol Design',
            'Smart Contract Development',
            'Blockchain Consulting',
        ],
    }

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
    )
}
