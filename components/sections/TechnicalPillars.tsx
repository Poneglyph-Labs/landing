const pillars = [
    {
        title: 'Cryptography',
        items: [
            'Zero-Knowledge Proofs',
            'Multiparty Computation',
            'Homomorphic Encryption',
        ],
    },
    {
        title: 'Decentralized System',
        items: [
            'Consensus mechanism design',
            'MEV (Maximal Extractable Value) research',
            'Cross-chain communication',
        ],
    },
    {
        title: 'Artificial Intelligence',
        items: [
            'Verifiable machine learning',
            'Decentralized inference networks',
            'AI-driven protocol security',
        ],
    },
]

export function TechnicalPillars() {
    return (
        <section className="bg-primary-900 border-tertiary-400 border-t py-20">
            <div className="mx-auto max-w-6xl px-4 md:px-8">
                <div className="space-y-10">
                    {/* Section Header */}
                    <div className="border-tertiary-400 border-b pb-6">
                        <h2 className="text-h3 font-space-grotesk text-secondary-200 font-medium">
                            TECHNICAL PILLARS
                        </h2>
                    </div>

                    {/* Pillars Grid */}
                    <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
                        {pillars.map((pillar, index) => (
                            <div key={index} className="space-y-6">
                                {/* Pillar Title */}
                                <div className="border-secondary-200 border-l-2 py-3 pl-8">
                                    <h3 className="text-h4 font-space-grotesk text-secondary-200 font-medium">
                                        {pillar.title}
                                    </h3>
                                </div>

                                {/* Pillar Items */}
                                <div className="space-y-4 pl-4">
                                    {pillar.items.map((item, itemIndex) => (
                                        <p
                                            key={itemIndex}
                                            className="text-subheading font-regular text-secondary-600"
                                        >
                                            &gt; {item}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
