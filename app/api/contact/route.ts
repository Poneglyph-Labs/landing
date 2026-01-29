import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
    try {
        const body = await request.json()
        const { name, email, company, subject, message } = body

        // Validate required fields
        if (!name || !email || !subject || !message) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            )
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(email)) {
            return NextResponse.json(
                { error: 'Invalid email format' },
                { status: 400 }
            )
        }

        // Send email using Resend
        const { data, error } = await resend.emails.send({
            from:
                process.env.CONTACT_FROM_EMAIL ||
                'Contact Form <noreply@yourdomain.com>',
            to: [process.env.CONTACT_TO_EMAIL || 'contact@yourdomain.com'],
            subject: `New Contact Form Submission: ${subject}`,
            html: `
                <!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Contact Form Submission</title>
                    <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap" rel="stylesheet">
                </head>
                <body style="margin: 0; padding: 0; background-color: #0A0A0A; color: #FAFAFA; font-family: 'Space Grotesk', sans-serif;">
                    <div style="max-width: 600px; margin: 0 auto; background-color: #141414; border: 1px solid #E5E5E5;">
                        <!-- Header -->
                        <div style="background-color: #0A0A0A; padding: 32px; border-bottom: 1px solid #E5E5E5;">
                            <h1 style="margin: 0; font-size: 28px; font-weight: 500; color: #FAFAFA; font-family: 'Space Grotesk', sans-serif; letter-spacing: 0px; line-height: 100%;">
                                NEW CONTACT SUBMISSION
                            </h1>
                            <p style="margin: 16px 0 0 0; font-size: 16px; font-weight: 400; color: #9E9E9E; line-height: 28px; letter-spacing: -1px;">
                                A new inquiry has been received through your contact form.
                            </p>
                        </div>

                        <!-- Contact Details Section -->
                        <div style="padding: 32px; border-bottom: 1px solid #E5E5E5;">
                            <h2 style="margin: 0 0 24px 0; font-size: 20px; font-weight: 500; color: #FAFAFA; font-family: 'Space Grotesk', sans-serif; letter-spacing: 0px; line-height: 100%;">
                                CONTACT DETAILS
                            </h2>
                            
                            <div style="margin-bottom: 16px;">
                                <span style="display: inline-block; font-size: 14px; font-weight: 500; color: #9E9E9E; letter-spacing: 0px; line-height: 100%; margin-bottom: 4px;">NAME</span>
                                <p style="margin: 4px 0 0 0; font-size: 16px; font-weight: 400; color: #FAFAFA; line-height: 28px; letter-spacing: -1px;">
                                    ${name}
                                </p>
                            </div>

                            <div style="margin-bottom: 16px;">
                                <span style="display: inline-block; font-size: 14px; font-weight: 500; color: #9E9E9E; letter-spacing: 0px; line-height: 100%; margin-bottom: 4px;">EMAIL</span>
                                <p style="margin: 4px 0 0 0; font-size: 16px; font-weight: 400; color: #FAFAFA; line-height: 28px; letter-spacing: -1px;">
                                    <a href="mailto:${email}" style="color: #FAFAFA; text-decoration: none;">${email}</a>
                                </p>
                            </div>

                            ${
                                company
                                    ? `
                            <div style="margin-bottom: 16px;">
                                <span style="display: inline-block; font-size: 14px; font-weight: 500; color: #9E9E9E; letter-spacing: 0px; line-height: 100%; margin-bottom: 4px;">COMPANY</span>
                                <p style="margin: 4px 0 0 0; font-size: 16px; font-weight: 400; color: #FAFAFA; line-height: 28px; letter-spacing: -1px;">
                                    ${company}
                                </p>
                            </div>
                            `
                                    : ''
                            }

                            <div style="margin-bottom: 0;">
                                <span style="display: inline-block; font-size: 14px; font-weight: 500; color: #9E9E9E; letter-spacing: 0px; line-height: 100%; margin-bottom: 4px;">SUBJECT</span>
                                <div style="margin-top: 8px; display: inline-block; background-color: #141414; border: 1px solid #E5E5E5; padding: 8px 12px;">
                                    <span style="font-size: 14px; font-weight: 500; color: #FAFAFA; letter-spacing: 0px; line-height: 100%;">
                                        ${subject}
                                    </span>
                                </div>
                            </div>
                        </div>

                        <!-- Message Section -->
                        <div style="padding: 32px; border-bottom: 1px solid #E5E5E5;">
                            <h2 style="margin: 0 0 24px 0; font-size: 20px; font-weight: 500; color: #FAFAFA; font-family: 'Space Grotesk', sans-serif; letter-spacing: 0px; line-height: 100%;">
                                MESSAGE
                            </h2>
                            <div style="background-color: #0A0A0A; border: 1px solid #E5E5E5; padding: 24px;">
                                <p style="margin: 0; font-size: 16px; font-weight: 400; color: #E5E5E5; line-height: 28px; letter-spacing: -1px;">
                                    ${message}
                                </p>
                            </div>
                        </div>

                        <!-- Footer -->
                        <div style="padding: 24px 32px; background-color: #0A0A0A;">
                            <div style="border-top: 1px solid #E5E5E5; padding-top: 16px;">
                                <p style="margin: 0; font-size: 12px; font-weight: 400; color: #9E9E9E; letter-spacing: 0px; line-height: 100%;">
                                    Submitted via contact form • ${new Date().toLocaleString()}
                                </p>
                            </div>
                        </div>
                    </div>
                </body>
                </html>
            `,
            text: `
NEW CONTACT SUBMISSION

CONTACT DETAILS:
Name: ${name}
Email: ${email}
${company ? `Company: ${company}` : ''}
Subject: ${subject}

MESSAGE:
${message}

---
Submitted via contact form at ${new Date().toLocaleString()}
            `,
        })

        if (error) {
            console.error('Resend error:', error)
            return NextResponse.json(
                { error: 'Failed to send email' },
                { status: 500 }
            )
        }

        return NextResponse.json(
            {
                success: true,
                message: 'Email sent successfully',
                id: data?.id,
            },
            { status: 200 }
        )
    } catch (error) {
        console.error('Contact form error:', error)
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        )
    }
}
