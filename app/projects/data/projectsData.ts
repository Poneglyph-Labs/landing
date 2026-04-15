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
        description: 'Secure voting for institutions and organizations',
        status: 'Production — live decision making for multiple organizations',
        systemArchitecture:
            'VeraVote is a privacy-preserving electronic voting protocol designed for high-stakes governance in hostile network environments. Built upon a custom zk-SNARK circuit, it allows voters to generate a validity proof of their ballot locally without revealing their vote choice to the coordinator or the public ledger. The system architecture separates the ballot casting layer from the tallying layer, utilizing a homomorphic tallying scheme that enables universal verifiability. This ensures that any observer can mathematically prove the election outcome is correct without decrypting individual votes. The implementation mitigates coercion vectors by allowing for infinite vote overwrites prior to the tallying phase, rendering the final key generation non-deterministic from the perspective of an external observer.',
        technicalSummary: [
            'Circom-based zk-SNARK circuits for vote validity',
            'Semaphore based zero-knowledge identity management for voter authentication',
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
        status: 'Demo — triple-lock privacy architecture',
        systemArchitecture:
            'Calyx Protocol is a privacy-first intent execution system designed to enable fully encrypted and trust-minimized automation in adversarial blockchain environments. The architecture employs a Triple-Lock model combining Fully Homomorphic Encryption (FHE), Zero-Knowledge Proofs (ZK), and Trusted Execution Environments (TEE). User-defined conditions, such as price triggers, are encrypted client-side and evaluated blindly by solver nodes without revealing sensitive parameters. Upon trigger satisfaction, the solver generates a zk-SNARK proof to attest to the correctness of execution conditions without exposing underlying data. This proof is verified by an external verifier, after which a secure enclave decrypts the execution payload and submits the transaction via a private RPC channel. By bypassing the public mempool and isolating decryption within hardware-protected environments, the system eliminates front-running vectors and ensures end-to-end confidentiality of user intent and execution.',
        technicalSummary: [
            'tfhe-rs powered FHE engine for encrypted trigger evaluation',
            'Groth16 zk-SNARK proofs with Circom/SnarkJS verified via zkVerify',
            'TEE-based secure execution with private RPC submission via Flashbots Protect',
        ],
        siteUrl: 'https://github.com/Calyx-Protocol/demo',
        links: {
            documentation: 'https://github.com/Calyx-Protocol/demo',
            sdk: 'https://github.com/Calyx-Protocol/demo',
        },
    },

    {
        id: 'wraith-protocol',
        title: 'Wraith Protocol',
        description: 'Multichain stealth address protocol for private payments with AI agent infrastructure',
        status: 'Live on Horizen and Stellar testnets. SDK published on npm.',
        systemArchitecture: 'Wraith Protocol enables unlinkable payments across multiple blockchains through stealth address cryptography and a managed AI agent platform. The protocol uses chain-specific elliptic curve math (secp256k1 for EVM chains, ed25519 for Stellar) to generate one-time stealth addresses for every payment. On-chain, each transaction appears as a transfer to a random fresh wallet with no link between sender and recipient. The SDK provides developers with stealth address generation, announcement scanning with view tag filtering, transaction builders that return chain-agnostic calldata, human-readable .wraith name registration, and built-in announcement fetching from indexed data sources. Beyond the core protocol, a managed AI agent platform runs inside Phala TEE hardware (Intel TDX) where agent keys are derived deterministically in the enclave and never stored on disk. Agents handle stealth payments, scanning, withdrawals, invoicing, scheduled transfers, and privacy analysis through natural language. The architecture uses pluggable chain connectors so adding a new EVM chain requires only configuration and contract deployment, while new chain families require a single connector implementation. The agent core, AI engine, storage, and all 17 tools remain chain-agnostic.',
        technicalSummary: [
          'Stealth address generation using secp256k1 (EVM) and ed25519 (Stellar) with view tag filtering for efficient scanning',
          'TEE-based deterministic key derivation using Intel TDX enclaves via Phala DStack, keys never stored on disk',
          'Pluggable chain connector architecture where EVM chains are config-only and new chain families are a single interface implementation',
          'AI agent platform with 17 tools for payments, scanning, withdrawals, invoicing, scheduling, and privacy scoring',
          'Transaction builders that return chain-agnostic calldata, compatible with any EVM library (viem, ethers, wagmi)',
        ],
        siteUrl: 'https://usewraith.xyz/',
        links: {
            documentation: 'https://docs.usewraith.xyz/',
            sdk: 'https://www.npmjs.com/package/@wraith-protocol/sdk',
            demo: 'https://demo.usewraith.xyz/',
            repository: 'https://github.com/wraith-protocol',
        },
    }
]

export function getProjects(): Project[] {
    return projects
}

export function getProject(id: string): Project | undefined {
    return projects.find((project) => project.id === id)
}
