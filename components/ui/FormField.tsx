'use client'

import { ReactNode, useState } from 'react'

interface FormFieldProps {
    label: string
    required?: boolean
    children: ReactNode
    className?: string
}

export function FormField({
    label,
    required = false,
    children,
    className = '',
}: FormFieldProps) {
    return (
        <div className={`space-y-4 ${className}`}>
            <label className="text-body2 font-regular text-secondary-200 flex items-center gap-1">
                {label}
                {required && (
                    <span className="font-medium text-red-500">*</span>
                )}
            </label>
            {children}
        </div>
    )
}

interface InputProps {
    placeholder: string
    type?: 'text' | 'email' | 'textarea' | 'select' | 'custom-select'
    options?: string[]
    className?: string
}

export function Input({
    placeholder,
    type = 'text',
    options,
    className = '',
}: InputProps) {
    const [selectedValue, setSelectedValue] = useState('')
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)

    const baseClasses =
        'w-full p-4 border border-tertiary-600 bg-transparent text-secondary-200 placeholder-secondary-600 font-space-grotesk font-regular text-body1 focus:border-tertiary-400 focus:outline-none transition-colors'

    if (type === 'textarea') {
        return (
            <textarea
                placeholder={placeholder}
                rows={6}
                className={`${baseClasses} resize-none ${className}`}
            />
        )
    }

    if (type === 'custom-select') {
        return (
            <div className="relative">
                <button
                    type="button"
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className={`${baseClasses} flex items-center justify-between ${className}`}
                >
                    <span
                        className={
                            selectedValue
                                ? 'text-secondary-200'
                                : 'text-secondary-600'
                        }
                    >
                        {selectedValue || placeholder}
                    </span>
                    <svg
                        className={`text-secondary-600 h-6 w-6 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                        />
                    </svg>
                </button>

                {isDropdownOpen && (
                    <div className="border-tertiary-600 absolute top-full right-0 left-0 z-10 mt-1 border bg-neutral-900">
                        {options?.map((option) => (
                            <button
                                key={option}
                                type="button"
                                onClick={() => {
                                    setSelectedValue(option)
                                    setIsDropdownOpen(false)
                                }}
                                className="text-body1 border-tertiary-600 text-secondary-200 hover:bg-primary-800 w-full border-b px-4 py-3 text-left transition-colors last:border-b-0"
                            >
                                {option}
                            </button>
                        ))}
                    </div>
                )}
            </div>
        )
    }

    if (type === 'select') {
        return (
            <div className="relative">
                <select
                    className={`${baseClasses} appearance-none pr-12 ${className}`}
                >
                    <option value="">{placeholder}</option>
                    {options?.map((option, index) => (
                        <option key={index} value={option}>
                            {option}
                        </option>
                    ))}
                </select>
                <svg
                    className="text-secondary-600 pointer-events-none absolute top-1/2 right-4 h-6 w-6 -translate-y-1/2 transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                    />
                </svg>
            </div>
        )
    }

    return (
        <input
            type={type}
            placeholder={placeholder}
            className={`${baseClasses} ${className}`}
        />
    )
}
