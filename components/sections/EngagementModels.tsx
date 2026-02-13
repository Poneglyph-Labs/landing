import { Icon, IconName } from '../ui/Icon'

const engagementModels: {
    icon: IconName
    title: string
    description: string
}[] = [
    {
        icon: 'shield',
        title: 'Security Audits',
        description:
            'Cryptographic protocol and smart contract reviews focused on correctness, adversarial models, and failure modes.',
    },
    {
        icon: 'chip',
        title: 'Custom R&D',
        description:
            'Applied research and engineering for unresolved problems in cryptography, consensus, and decentralized systems.',
    },
    {
        icon: 'strategy',
        title: 'Strategy & Advisory',
        description:
            'Technical architecture review and roadmap design for trust-critical decentralized systems under real-world security and constraints.',
    },
]

export function EngagementModels() {
    return (
        <section className="bg-primary-900 border-tertiary-400 border-t py-20">
            <div className="mx-auto px-4 md:px-8 lg:px-24">
                <div className="space-y-10">
                    {/* Section Header */}
                    <div className="border-tertiary-400 border-b pb-6">
                        <h2 className="md:text-h3 text-body2 font-space-grotesk text-secondary-200 text-[18px] font-medium md:text-[32px]">
                            ENGAGEMENT MODELS
                        </h2>
                    </div>

                    {/* Description */}
                    <p className="md:text-subheading text-body1 font-regular text-secondary-200 text-[16px] leading-relaxed md:text-[20px]">
                        Poneglyph Labs is an independent research and
                        engineering studio focused on trust-critical systems. We
                        conduct applied research, build production
                        infrastructure, and audit protocols operating under
                        adversarial conditions.
                    </p>

                    {/* Models Grid */}
                    <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                        {engagementModels.map((model, index) => (
                            <div
                                key={index}
                                className="border-tertiary-500 hover:border-secondary-200 group space-y-6 border p-4 transition-colors md:p-8"
                            >
                                <div className="space-y-4">
                                    <Icon
                                        name={model.icon}
                                        size={32}
                                        className="text-secondary-200"
                                    />
                                    <h3 className="text-subheading font-space-grotesk text-secondary-200 text-[20px] font-bold">
                                        {model.title}
                                    </h3>
                                </div>
                                <p className="text-body1 font-regular text-secondary-200 leading-relaxed">
                                    {model.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
