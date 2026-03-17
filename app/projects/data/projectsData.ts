export interface Project {
    id: string
    title: string
    description: string
    status: string
    systemArchitecture: string
    technicalSummary: string[]
    siteUrl?: string
    links: {
        repository?: string
        documentation?: string
        research?: string
        archive?: string
        sdk?: string
        demo?: string
        architecture?: string
        spec?: string
        git?: string
        testnet?: string
    }
}

export const projects: Project[] = [
    {
        id: 'veravote',
        title: 'VeraVote',
        description: 'Secure voting for institutions and communities',
        status: 'Production — live governance for DAO coalition',
        systemArchitecture:
            'VeraVote is a privacy-preserving electronic voting protocol designed for high-stakes governance in hostile network environments. Built upon a custom zk-SNARK circuit, it allows voters to generate a validity proof of their ballot locally without revealing their vote choice to the coordinator or the public ledger. The system architecture separates the ballot casting layer from the tallying layer, utilizing a homomorphic tallying scheme that enables universal verifiability. This ensures that any observer can mathematically prove the election outcome is correct without decrypting individual votes. The implementation mitigates coercion vectors by allowing for infinite vote overwrites prior to the tallying phase, rendering the final key generation non-deterministic from the perspective of an external observer.',
        technicalSummary: [
            'Circom-based zk-SNARK circuits for vote validity',
            'P2P gossip layer for ballot propagation independent of L1 consensus',
            'Recursive proof aggregation to minimize on-chain verification gas costs',
        ],
        siteUrl: 'https://veravote.org',
        links: {
            // repository: 'https://github.com/veravote',
            documentation: 'https://github.com/veravote/documentation',
            sdk: '#',
        },
    },
]

export function getProjects(): Project[] {
    return projects
}

export function getProject(id: string): Project | undefined {
    return projects.find((project) => project.id === id)
}
