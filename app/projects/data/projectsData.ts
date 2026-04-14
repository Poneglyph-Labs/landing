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
            documentation: 'https://github.com/veravote/documentation',
            sdk: '#',
        },
    },

    {
        id: 'calyx-protocol',
        title: 'Calyx Protocol',
        description:
            'Private intent-based automation with encrypted triggers and MEV-resistant execution',
        status: 'Demo — triple-layer privacy architecture',
        systemArchitecture:
            'Calyx Protocol is a privacy-first intent execution system designed to enable fully encrypted and trust-minimized automation in adversarial blockchain environments. The architecture employs a Triple-Lock model combining Fully Homomorphic Encryption (FHE), Zero-Knowledge Proofs (ZK), and Trusted Execution Environments (TEE). User-defined conditions, such as price triggers, are encrypted client-side and evaluated blindly by solver nodes without revealing sensitive parameters. Upon trigger satisfaction, the solver generates a zk-SNARK proof to attest to the correctness of execution conditions without exposing underlying data. This proof is verified by an external verifier, after which a secure enclave decrypts the execution payload and submits the transaction via a private RPC channel. By bypassing the public mempool and isolating decryption within hardware-protected environments, the system eliminates front-running vectors and ensures end-to-end confidentiality of user intent and execution.',
        technicalSummary: [
            'tfhe-rs powered FHE engine for encrypted trigger evaluation',
            'Groth16 zk-SNARK proofs with Circom/SnarkJS verified via zkVerify',
            'TEE-based secure execution with private RPC submission via Flashbots Protect',
        ],
        siteUrl: '#',
        links: {
            documentation: 'https://github.com/Calyx-Protocol/demo',
            sdk: '#',
        },
    },

    {
        id: 'wraith-protocol',
        title: 'Wraith Protocol',
        description:
            'Multichain stealth address platform for private payments with AI-powered execution',
        status: 'Live — SDK-based private payments on EVM and Stellar',
        systemArchitecture:
            'Wraith is a multichain privacy infrastructure that enables unlinkable payments through stealth address derivation and AI-driven execution. The system abstracts chain-specific cryptography and wallet management into a unified SDK, where an intelligent agent operates within a Trusted Execution Environment (TEE) to securely derive keys, manage identities, and route transactions across heterogeneous blockchain networks. Each payment generates a unique one-time stealth address using chain-specific primitives (secp256k1 for EVM and ed25519 for Stellar), eliminating on-chain linkability between sender and receiver. The agent processes natural language commands to orchestrate payment flows, scan for incoming transfers, and perform privacy analysis, while maintaining strict isolation of sensitive key material inside enclave hardware. By combining multichain connectors, enclave-based key derivation, and AI-assisted transaction routing, Wraith provides a seamless and privacy-preserving payment layer without requiring developers to manage infrastructure or cryptographic complexity.',
        technicalSummary: [
            'Stealth address generation using secp256k1 (EVM) and ed25519 (Stellar) primitives',
            'TEE-based key derivation and agent execution using Intel TDX enclaves',
            'AI-powered SDK interface for multichain transaction routing and privacy analysis',
        ],
        siteUrl: 'https://demo.usewraith.xyz/',
        links: {
            documentation: 'https://docs.usewraith.xyz/',
            sdk: 'https://docs.usewraith.xyz/sdk/overview',
        },
    },
]

export function getProjects(): Project[] {
    return projects
}

export function getProject(id: string): Project | undefined {
    return projects.find((project) => project.id === id)
}
