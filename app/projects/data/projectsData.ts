export interface Project {
    id: string
    title: string
    description: string
    status: string
    systemArchitecture: string
    technicalSummary: string[]
    links: {
        repository?: string
        documentation?: string
        research?: string
        archive?: string
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
        links: {
            repository: '#',
            documentation: '#',
            research: '#',
        },
    },
    {
        id: 'aegis-7',
        title: 'Aegis-7',
        description:
            'Cryptographic verification and integrity tooling for trust-critical decentralized systems.',
        status: 'Testnet — strictly internal beta',
        systemArchitecture:
            'Aegis-7 is a formal verification framework and symbolic execution engine specifically tuned for EVM bytecode analysis. Unlike static analysis tools that rely on pattern matching, Aegis-7 constructs a control flow graph of the target contract and attempts to mathematically disprove safety invariants across all possible input states. The engine utilizes a custom constraint solver optimized for the 256-bit word size of the Ethereum Virtual Machine, allowing it to detect complex reentrancy and logic errors that escape standard fuzzing campaigns. The system is currently deployed as a CI/CD integration middleware, automatically rejecting commits that violate defined formal specifications.',
        technicalSummary: [
            'Symbolic execution engine written in Rust',
            'Custom SMT solver heuristics for EVM opcodes',
            'Automated invariant generation based on ERC standards',
        ],
        links: {
            repository: '#',
            documentation: '#',
        },
    },
    {
        id: 'nexus-grid',
        title: 'Nexus Grid',
        description:
            'Infrastructure for cross-domain coordination and data exchange across decentralized networks.',
        status: 'Experimental — limited partner access',
        systemArchitecture:
            "Nexus Grid is a decentralized compute coordination layer designed to handle non-deterministic workloads that cannot be processed by standard consensus environments. It employs a 'proof of useful work' model where compute nodes (workers) cryptographically commit to execution traces. The architecture focuses on verifiable off-chain computation, utilizing a game-theoretic challenge-response mechanism to slash malicious nodes. This system serves as the backbone for our AI inference experiments, allowing lightweight clients to request heavy model executions and receive a succinct proof of correctness alongside the result, eliminating the need for trust in the compute provider...",
        technicalSummary: [
            'Optimistic verification game for compute tasks',
            'WASM-based sandboxed execution environment',
            'Economic finality gadget for asynchronous task completion',
        ],
        links: {
            repository: '#',
            documentation: '#',
            research: '#',
        },
    },
]

export function getProjects(): Project[] {
    return projects
}

export function getProject(id: string): Project | undefined {
    return projects.find((project) => project.id === id)
}
