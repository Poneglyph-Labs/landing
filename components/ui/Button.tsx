import { ReactNode, MouseEvent } from 'react'

interface ButtonProps {
    children: ReactNode
    variant?: 'primary' | 'secondary' | 'outline'
    size?: 'sm' | 'md' | 'lg'
    className?: string
    onClick?: (e?: MouseEvent<HTMLButtonElement>) => void
    disabled?: boolean
    icon?: ReactNode
    type?: 'button' | 'submit' | 'reset'
}

export function Button({
    children,
    variant = 'primary',
    size = 'md',
    className = '',
    onClick,
    disabled = false,
    icon,
    type = 'button',
}: ButtonProps) {
    const baseClasses =
        'font-space-grotesk font-medium transition-colors flex items-center gap-2'

    const variantClasses = {
        primary:
            'bg-primary-800 border border-tertiary-400 text-secondary-200 hover:bg-tertiary-400 hover:text-primary-900',
        secondary: 'bg-transparent text-secondary-200 hover:text-tertiary-400',
        outline:
            'border border-tertiary-400 text-secondary-200 hover:bg-tertiary-400 hover:text-primary-900',
    }

    const sizeClasses = {
        sm: 'px-3 py-3 text-caption text-[14px] medium',
        md: 'px-3 py-2 text-[16px]',
        lg: 'px-4 py-3 text-body2 text-[18px] medium',
    }

    const disabledClasses = disabled
        ? 'opacity-50 cursor-not-allowed'
        : 'cursor-pointer'

    return (
        <button
            type={type}
            className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${disabledClasses} ${className}`}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
            {icon && icon}
        </button>
    )
}
