import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    200: '#E6E6E6',
                    500: '#7A7A7A',
                    800: '#141414',
                    900: '#0A0A0A',
                },
                secondary: {
                    200: '#FAFAFA',
                    400: '#DADADA',
                    500: '#BFBFBF',
                    600: '#9E9E9E',
                },
                tertiary: {
                    200: '#F5F5F5',
                    400: '#E5E5E5',
                    600: '#B8B8B8',
                },
                neutral: {
                    900: '#171717',
                },
                red: {
                    500: '#FF0000',
                },
                black: '#000000',
            },
            fontFamily: {
                'space-grotesk': ['Space Grotesk', 'sans-serif'],
            },
            fontSize: {
                // Headers
                h1: ['64px', { lineHeight: '100%', letterSpacing: '-1px' }],
                h2: ['48px', { lineHeight: '100%', letterSpacing: '1px' }],
                h3: ['32px', { lineHeight: '100%', letterSpacing: '0px' }],
                h4: ['28px', { lineHeight: '100%', letterSpacing: '0px' }],
                // Subheadings
                subheading: [
                    '20px',
                    { lineHeight: '100%', letterSpacing: '0px' },
                ],
                // Body
                body1: ['16px', { lineHeight: '28px', letterSpacing: '-1px' }],
                body2: ['18px', { lineHeight: '100%', letterSpacing: '0px' }],
                // Caption
                caption: ['14px', { lineHeight: '100%', letterSpacing: '0px' }],
                // Footer
                footer: ['12px', { lineHeight: '100%', letterSpacing: '0px' }],
            },
            fontWeight: {
                regular: '400',
                medium: '500',
                bold: '700',
            },
            letterSpacing: {
                h1: '-1px',
                h2: '1px',
                'h3-medium': '-1px',
                body1: '-1px',
            },
        },
    },
    plugins: [],
}

export default config
