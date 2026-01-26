import { FormField, Input } from '../ui/FormField'
import { Button } from '../ui/Button'

const subjectOptions = [
    'Security Audits',
    'Custom Research and Development',
    'Strategy and Advisory',
    'Collaboration',
]

export function ContactSection() {
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

                    {/* Contact Form */}
                    <form className="space-y-6">
                        {/* Name and Email Row */}
                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                            <FormField label="Name" required>
                                <Input placeholder="Enter name here" />
                            </FormField>
                            <FormField label="Email" required>
                                <Input
                                    type="email"
                                    placeholder="Enter email here"
                                />
                            </FormField>
                        </div>

                        {/* Organization and Subject Row */}
                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                            <FormField label="Organization">
                                <Input placeholder="Enter organization here" />
                            </FormField>
                            <FormField label="Subject" required>
                                <Input
                                    type="custom-select"
                                    placeholder="Select Subject"
                                    options={subjectOptions}
                                />
                            </FormField>
                        </div>

                        {/* Message */}
                        <FormField label="Message" required>
                            <Input
                                type="textarea"
                                placeholder="Describe the nature of the collaboration......"
                            />
                        </FormField>

                        {/* Submit Button */}
                        <div className="pt-4">
                            <Button
                                variant="outline"
                                size="lg"
                                className="border-tertiary-600 text-secondary-600 hover:border-tertiary-400 hover:text-secondary-200 bg-transparent"
                                disabled
                            >
                                SEND MESSAGE
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}
