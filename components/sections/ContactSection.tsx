'use client'

import { useState } from 'react'
import { FormField, Input } from '../ui/FormField'
import { Button } from '../ui/Button'

const subjectOptions = [
    'Security Audits',
    'Custom Research and Development',
    'Strategy and Advisory',
    'Collaboration',
]

interface FormData {
    name: string
    email: string
    company: string
    subject: string
    message: string
}

export function ContactSection() {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        company: '',
        subject: '',
        message: '',
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitStatus, setSubmitStatus] = useState<{
        type: 'success' | 'error' | null
        message: string
    }>({ type: null, message: '' })

    const handleInputChange = (field: keyof FormData, value: string) => {
        setFormData((prev) => ({ ...prev, [field]: value }))
        // Clear status when user starts typing
        if (submitStatus.type) {
            setSubmitStatus({ type: null, message: '' })
        }
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        // Validate required fields
        if (
            !formData.name ||
            !formData.email ||
            !formData.subject ||
            !formData.message
        ) {
            setSubmitStatus({
                type: 'error',
                message: 'Please fill in all required fields.',
            })
            return
        }

        setIsSubmitting(true)
        setSubmitStatus({ type: null, message: '' })

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            })

            const result = await response.json()

            if (response.ok) {
                setSubmitStatus({
                    type: 'success',
                    message:
                        "Message sent successfully! We'll get back to you soon.",
                })
                // Reset form
                setFormData({
                    name: '',
                    email: '',
                    company: '',
                    subject: '',
                    message: '',
                })
            } else {
                setSubmitStatus({
                    type: 'error',
                    message:
                        result.error ||
                        'Failed to send message. Please try again.',
                })
            }
        } catch (error) {
            console.error('Contact form error:', error)
            setSubmitStatus({
                type: 'error',
                message:
                    'Network error. Please check your connection and try again.',
            })
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <section
            id="contact"
            className="bg-primary-900 border-tertiary-400 border-t py-20"
        >
            <div className="mx-auto max-w-4xl px-4 md:px-8">
                <div className="space-y-10">
                    {/* Section Header */}
                    <div className="border-tertiary-400 border-b pb-6">
                        <h2 className="text-h4 font-space-grotesk text-secondary-200 font-medium">
                            CONTACT
                        </h2>
                    </div>

                    {/* Contact Info */}
                    <div className="max-w-2xl space-y-6">
                        <h3 className="text-subheading font-space-grotesk text-secondary-200 font-medium">
                            INITIALIZE HANDSHAKE
                        </h3>
                        <p className="text-body1 font-regular text-secondary-600 leading-relaxed">
                            Secure communication channels are open for research
                            inquiries.
                        </p>
                    </div>

                    {/* Status Message */}
                    {submitStatus.type && (
                        <div
                            className={`rounded border p-4 ${
                                submitStatus.type === 'success'
                                    ? 'border-green-500 bg-green-500/10 text-green-400'
                                    : 'border-red-500 bg-red-500/10 text-red-400'
                            }`}
                        >
                            {submitStatus.message}
                        </div>
                    )}

                    {/* Contact Form */}
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Name and Email Row */}
                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                            <FormField label="Name" required>
                                <Input
                                    placeholder="Enter name here"
                                    value={formData.name}
                                    onChange={(value) =>
                                        handleInputChange('name', value)
                                    }
                                />
                            </FormField>
                            <FormField label="Email" required>
                                <Input
                                    type="email"
                                    placeholder="Enter email here"
                                    value={formData.email}
                                    onChange={(value) =>
                                        handleInputChange('email', value)
                                    }
                                />
                            </FormField>
                        </div>

                        {/* company and Subject Row */}
                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                            <FormField label="Company Name">
                                <Input
                                    placeholder="Enter company here"
                                    value={formData.company}
                                    onChange={(value) =>
                                        handleInputChange('company', value)
                                    }
                                />
                            </FormField>
                            <FormField label="Subject" required>
                                <Input
                                    type="custom-select"
                                    placeholder="Select Subject"
                                    options={subjectOptions}
                                    value={formData.subject}
                                    onChange={(value) =>
                                        handleInputChange('subject', value)
                                    }
                                />
                            </FormField>
                        </div>

                        {/* Message */}
                        <FormField label="Message" required>
                            <Input
                                type="textarea"
                                placeholder="Describe the nature of the collaboration......"
                                value={formData.message}
                                onChange={(value) =>
                                    handleInputChange('message', value)
                                }
                            />
                        </FormField>

                        {/* Submit Button */}
                        <div className="pt-4">
                            <Button
                                type="submit"
                                variant="outline"
                                size="lg"
                                className="border-tertiary-600 text-secondary-600 hover:border-tertiary-400 hover:text-secondary-200 bg-transparent disabled:cursor-not-allowed disabled:opacity-50"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}
