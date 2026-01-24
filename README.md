# Poneglyph Labs

Applied research and engineering at the intersection of cryptography, artificial intelligence, and decentralized systems.

## Development Setup

This project uses Next.js 16 with Turbopack, TypeScript, and Tailwind CSS.

### Prerequisites

- Node.js 18+
- pnpm (recommended package manager)

### Getting Started

1. Install dependencies:

```bash
pnpm install
```

2. Run the development server:

```bash
pnpm dev
```

3. Open [http://localhost:3000](http://localhost:3000) to view the site.

### Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint
- `pnpm lint:fix` - Fix ESLint issues
- `pnpm format` - Format code with Prettier
- `pnpm format:check` - Check code formatting
- `pnpm type-check` - Run TypeScript type checking

### Code Quality

This project uses:

- **ESLint** for code linting
- **Prettier** for code formatting
- **Husky** for git hooks
- **lint-staged** for pre-commit checks

Git hooks will automatically:

- Format and lint code before commits
- Validate commit message format (conventional commits)

### Commit Message Format

Use conventional commit format:

```
type(scope): description

Examples:
feat(auth): add login functionality
fix(ui): resolve button styling issue
docs(readme): update setup instructions
```

### Project Structure

```
├── app/                 # Next.js app directory
├── components/          # React components
│   ├── layout/         # Layout components
│   ├── sections/       # Page sections
│   ├── seo/           # SEO components
│   └── ui/            # UI components
├── assets/             # Static assets
├── public/             # Public files
└── tailwind.config.ts  # Tailwind configuration
```

### SEO & Metadata

The site includes:

- Comprehensive meta tags
- Open Graph tags for social sharing
- Twitter Card support
- Structured data (JSON-LD)
- Sitemap generation
- Web app manifest

### Design System

Built with a custom Tailwind configuration featuring:

- Poneglyph Labs color palette
- Space Grotesk typography
- Responsive design tokens
- Dark theme optimized

## Deployment

The site is optimized for deployment on Vercel or any platform supporting Next.js.

For production deployment:

```bash
pnpm build
pnpm start
```
