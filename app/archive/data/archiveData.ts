// Client-side types and interfaces for archive data
export type ArchiveItemType =
    | 'Paper'
    | 'Audit'
    | 'Repository'
    | 'Proof of Concept'
export type ArchiveDomain =
    | 'Cryptography'
    | 'Decentralized System'
    | 'Artificial Intelligence'

export interface ArchiveItem {
    id: string
    slug: string
    title: string
    description: string
    date: string
    type: ArchiveItemType
    domain: ArchiveDomain
    abstract?: string
    technicalFocus?: string[]
    primaryOutput?: string
    relatedResearch?: {
        title: string
        type: ArchiveItemType
        date: string
        slug: string
    }[]
    links: {
        code?: string
        demo?: string
        pdf?: string
    }
}

// Static archive data for client-side filtering and display
export const archiveItems: ArchiveItem[] = [
    {
        id: '1',
        slug: 'zero-knowledge-rollup-efficiency',
        title: 'Zero-Knowledge Rollup Efficiency in Low-Bandwidth Environments',
        description:
            'Optimizing zk-SNARK proof generation and transmission for constrained IoT networks using recursive composition.',
        date: '15-10-2025',
        type: 'Paper',
        domain: 'Cryptography',
        abstract:
            'This paper presents a novel approach to optimizing zk-SNARK proof generation and transmission specifically tailored for constrained IoT networks. By utilizing recursive proof composition and a custom transport layer, we demonstrate a 40% reduction in latency compared to standard Groth16 implementations. The research focuses on minimizing the on-wire footprint of validity proofs without compromising cryptographic security guarantees.',
        technicalFocus: [
            'zk-SNARKs',
            'Recursive Composition',
            'IoT Networking',
        ],
        primaryOutput: 'PDF',
        relatedResearch: [
            {
                title: 'Layer-3 Privacy Scaling Solutions',
                type: 'Repository',
                date: '15-10-2025',
                slug: 'layer-3-privacy-scaling',
            },
            {
                title: 'Verifiable Inference for Edge Computer',
                type: 'Proof of Concept',
                date: '15-10-2025',
                slug: 'verifiable-inference-edge',
            },
        ],
        links: {
            code: '#',
            pdf: '#',
        },
    },
    {
        id: '2',
        slug: 'helios-protocol-audit',
        title: 'Helios Protocol: Smart Contract Security Audit',
        description:
            'Comprehensive security analysis of the Helios Protocol smart contract system.',
        date: '15-10-2025',
        type: 'Audit',
        domain: 'Decentralized System',
        links: {
            pdf: '#',
        },
    },
    {
        id: '3',
        slug: 'deterministic-randomness-beacon',
        title: 'Deterministic Randomness Beacon (Drand) Integration',
        description:
            'Implementation details for verifying distributed randomness beacons within EVM-compatible execution layers.',
        date: '15-10-2025',
        type: 'Repository',
        domain: 'Decentralized System',
        links: {
            code: '#',
            demo: '#',
        },
    },
    {
        id: '4',
        slug: 'byzantine-fault-tolerance',
        title: 'Byzantine Fault Tolerance in Asynchronous Networks',
        description:
            'Establishing theoretical upper bounds for consensus finality in partially synchronous mesh networks.',
        date: '15-10-2025',
        type: 'Paper',
        domain: 'Decentralized System',
        links: {
            code: '#',
            demo: '#',
            pdf: '#',
        },
    },
    {
        id: '5',
        slug: 'layer-3-privacy-scaling',
        title: 'Layer-3 Privacy Scaling Solutions',
        description:
            'A modular library for deploying privacy-preserving application chains on top of optimistic rollups.',
        date: '15-10-2025',
        type: 'Repository',
        domain: 'Cryptography',
        links: {
            pdf: '#',
        },
    },
    {
        id: '6',
        slug: 'post-quantum-cryptography-review',
        title: 'Post-Quantum Cryptography Standards Review',
        description:
            'Benchmarking lattice-based signature schemes against current NIST finalists for mobile hardware.',
        date: '15-10-2025',
        type: 'Paper',
        domain: 'Cryptography',
        links: {
            code: '#',
        },
    },
    {
        id: '7',
        slug: 'adversarial-robustness-llm',
        title: 'Adversarial Robustness in LLM Agents',
        description:
            'Developing formal verification methods to detect and prevent prompt injection attacks in autonomous agents.',
        date: '15-10-2025',
        type: 'Paper',
        domain: 'Artificial Intelligence',
        links: {
            pdf: '#',
        },
    },
    {
        id: '8',
        slug: 'verifiable-inference-edge',
        title: 'Verifiable Inference for Edge Compute',
        description:
            'Lightweight cryptographic proofs for ensuring integrity of ML model inference on untrusted edge nodes.',
        date: '15-10-2025',
        type: 'Paper',
        domain: 'Artificial Intelligence',
        links: {
            code: '#',
            demo: '#',
        },
    },
]

export function filterArchiveItems(
    items: ArchiveItem[],
    filters: {
        domain?: ArchiveDomain | 'All'
        type?: ArchiveItemType | 'All'
        search?: string
    }
): ArchiveItem[] {
    return items.filter((item) => {
        if (
            filters.domain &&
            filters.domain !== 'All' &&
            item.domain !== filters.domain
        ) {
            return false
        }

        if (
            filters.type &&
            filters.type !== 'All' &&
            item.type !== filters.type
        ) {
            return false
        }

        if (filters.search) {
            const searchLower = filters.search.toLowerCase()
            return (
                item.title.toLowerCase().includes(searchLower) ||
                item.description.toLowerCase().includes(searchLower)
            )
        }

        return true
    })
}

export function sortArchiveItems(
    items: ArchiveItem[],
    sortBy: 'Most Recent' | 'Oldest'
): ArchiveItem[] {
    return [...items].sort((a, b) => {
        // Parse DD-MM-YYYY format more reliably
        const [dayA, monthA, yearA] = a.date.split('-').map(Number)
        const [dayB, monthB, yearB] = b.date.split('-').map(Number)

        // Create comparable date values (YYYYMMDD format)
        const dateValueA = yearA * 10000 + monthA * 100 + dayA
        const dateValueB = yearB * 10000 + monthB * 100 + dayB

        return sortBy === 'Most Recent'
            ? dateValueB - dateValueA
            : dateValueA - dateValueB
    })
}
