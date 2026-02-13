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
            <div className="mx-auto px-4 md:px-8 lg:px-24">
                <div className="space-y-10">
                    {/* Section Header */}
                    <div className="border-tertiary-400 border-b pb-4 md:pb-6">
                        <h2 className="md:text-h3 text-body2 font-space-grotesk text-secondary-200 text-[18px] font-medium md:text-[32px]">
                            TECHNICAL PILLARS
                        </h2>
                    </div>

                    {/* Pillars Grid */}
                    <div className="grid grid-cols-1 gap-6 md:gap-6 lg:grid-cols-3">
                        {pillars.map((pillar, index) => (
                            <div key={index} className="space-y-6">
                                {/* Pillar Title */}
                                <div className="border-secondary-200 border-l-2 py-1 pl-6 md:py-3 md:pl-8">
                                    <h3 className="md:text-h4 text-subheading font-space-grotesk text-secondary-200 text-[20px] font-medium md:text-[28px]">
                                        {pillar.title}
                                    </h3>
                                </div>

                                {/* Pillar Items */}
                                <div className="space-y-4 pl-4">
                                    {pillar.items.map((item, itemIndex) => (
                                        <p
                                            key={itemIndex}
                                            className="md:text-subheading text-body1 font-regular text-secondary-600 text-[16px] md:text-[20px]"
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
