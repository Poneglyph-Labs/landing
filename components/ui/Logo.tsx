import Image from 'next/image'
import logo from '../../assets/images/logo.png'

interface LogoProps {
    size?: 'sm' | 'md' | 'lg' | 'xl'
    className?: string
}

export function Logo({ size = 'md', className = '' }: LogoProps) {
    const sizeMap = {
        sm: { width: 80, height: 32 },
        md: { width: 120, height: 48 },
        lg: { width: 160, height: 64 },
        xl: { width: 355, height: 80 },
    }

    const { width, height } = sizeMap[size]

    return (
        <Image
            src={logo}
            alt="Poneglyph Labs"
            width={width}
            height={height}
            className={`object-contain ${className}`}
            priority
        />
    )
}
