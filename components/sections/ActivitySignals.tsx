const signals = [
    {
        time: '[1d ago]',
        message: 'Commit 8f3a21: Optimization of Merkle proofs',
    },
    {
        time: '[2d ago]',
        message: 'VeraVote zk-verifier benchmark complete (v2.1)',
    },
    {
        time: '[1d ago]',
        message: 'Commit 8f3a21: Optimization of Merkle proofs',
    },
    {
        time: '[1d ago]',
        message: 'Commit 8f3a21: Optimization of Merkle proofs',
    },
]

export function ActivitySignals() {
    return (
        <section className="border-tertiary-400 bg-primary-900 relative h-16 overflow-hidden border-t border-b md:h-20">
            {/* Scrolling container */}
            <div className="animate-scroll flex whitespace-nowrap">
                {/* Duplicate the signals for seamless loop */}
                {[...signals, ...signals, ...signals].map((signal, index) => (
                    <div
                        key={index}
                        className="flex items-center gap-4 px-6 py-4 whitespace-nowrap md:py-6"
                    >
                        <span className="text-body1 text-primary-500 font-regular text-sm md:text-base">
                            {signal.time}
                        </span>
                        <span className="text-body1 text-tertiary-400 text-sm font-medium md:text-base">
                            {signal.message}
                        </span>
                    </div>
                ))}
            </div>

            {/* Gradient overlays */}
            <div className="from-primary-900 pointer-events-none absolute top-0 bottom-0 left-0 z-10 w-16 bg-gradient-to-r to-transparent md:w-24" />
            <div className="from-primary-900 pointer-events-none absolute top-0 right-0 bottom-0 z-10 w-16 bg-gradient-to-l to-transparent md:w-24" />
        </section>
    )
}
