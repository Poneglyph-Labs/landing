import { Logo } from '../ui/Logo'
import { Button } from '../ui/Button'
import { Icon, IconName } from '../ui/Icon'

const socialLinks: { name: string; href: string; icon: IconName }[] = [
    { name: 'Twitter', href: '#', icon: 'twitter' },
    { name: 'GitHub', href: '#', icon: 'github' },
    { name: 'LinkedIn', href: '#', icon: 'linkedin' },
    { name: 'Email', href: '#', icon: 'mail' },
]

const researchLinks = [
    'Whitepapers',
    'Open Source',
    'Security Audits',
    'Proofs of Concepts',
]

const connectLinks = ['Blog', 'PGP Public Key']

const footerLinks = ['Github', 'Research Archive', 'Legal']

export function Footer() {
    return (
        <footer className="bg-primary-800 border-tertiary-400 border-t">
            {/* Main Footer Content */}
            <div className="py-20">
                <div className="mx-auto max-w-6xl px-4 md:px-8">
                    <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
                        {/* Left Column - Logo and CTA */}
                        <div className="space-y-10">
                            <div className="space-y-6">
                                <div className="space-y-4">
                                    <Logo size="lg" />
                                    <p className="text-body2 font-regular text-secondary-600 max-w-lg leading-relaxed">
                                        Applied research and engineering at the
                                        intersection of cryptography, artificial
                                        intelligence, and decentralized systems.
                                    </p>
                                </div>

                                {/* Social Links */}
                                <div className="flex items-center gap-4">
                                    {socialLinks.map((link) => (
                                        <a
                                            key={link.name}
                                            href={link.href}
                                            className="p-2 transition-opacity hover:opacity-80"
                                            aria-label={link.name}
                                        >
                                            <Icon
                                                name={link.icon}
                                                size={24}
                                                className="text-secondary-200"
                                            />
                                        </a>
                                    ))}
                                </div>
                            </div>

                            <Button variant="outline" size="lg">
                                VIEW FULL ARCHIVE
                            </Button>
                        </div>

                        {/* Right Column - Links */}
                        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                            {/* Research Links */}
                            <div className="space-y-6">
                                <h3 className="text-subheading font-space-grotesk text-secondary-200 font-medium">
                                    Research
                                </h3>
                                <div className="space-y-4">
                                    {researchLinks.map((link) => (
                                        <a
                                            key={link}
                                            href="#"
                                            className="text-body1 font-regular text-secondary-600 hover:text-secondary-200 block transition-colors"
                                        >
                                            {link}
                                        </a>
                                    ))}
                                </div>
                            </div>

                            {/* Connect Links */}
                            <div className="space-y-6">
                                <h3 className="text-subheading font-space-grotesk text-secondary-200 font-medium">
                                    Connect
                                </h3>
                                <div className="space-y-4">
                                    {connectLinks.map((link) => (
                                        <a
                                            key={link}
                                            href="#"
                                            className="text-body1 font-regular text-secondary-600 hover:text-secondary-200 block transition-colors"
                                        >
                                            {link}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Footer */}
            <div className="border-tertiary-400 border-t py-8">
                <div className="mx-auto max-w-6xl px-4 md:px-8">
                    <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
                        {/* Copyright */}
                        <div className="space-y-2">
                            <h4 className="text-subheading font-space-grotesk font-medium text-white">
                                Poneglyph Labs
                            </h4>
                            <div className="text-body1 font-regular text-secondary-600 flex items-center gap-2">
                                <span>© 2026.</span>
                                <span>All artifacts preserved.</span>
                            </div>
                        </div>

                        {/* Footer Links */}
                        <div className="flex items-center gap-8">
                            {footerLinks.map((link, index) => (
                                <div
                                    key={link}
                                    className="flex items-center gap-8"
                                >
                                    <a
                                        href="#"
                                        className="text-body1 font-regular text-secondary-600 hover:text-secondary-200 transition-colors"
                                    >
                                        {link}
                                    </a>
                                    {index < footerLinks.length - 1 && (
                                        <div className="bg-secondary-600 h-6 w-px" />
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
