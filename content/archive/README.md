# Archive MDX Content

This directory contains MDX files for archive items. Each MDX file represents a detailed archive item that will be displayed on the archive detail pages.

## File Structure

Each MDX file should be named with the slug of the archive item (e.g., `my-research-paper.mdx`) and contain:

1. **Frontmatter**: YAML metadata at the top of the file
2. **Content**: Markdown/MDX content below the frontmatter

## Frontmatter Schema

```yaml
---
id: "unique-identifier"
title: "Title of the Archive Item"
description: "Brief description for listings"
date: "DD-MM-YYYY"
type: "Paper" | "Audit" | "Repository" | "Proof of Concept"
domain: "Cryptography" | "Decentralized System" | "Artificial Intelligence"
abstract: "Optional abstract for the item"
technicalFocus: ["Array", "of", "technical", "focus", "areas"]
primaryOutput: "PDF" | "Repository" | "Demo"
relatedResearch:
  - title: "Related Item Title"
    type: "Paper"
    date: "DD-MM-YYYY"
    slug: "related-item-slug"
links:
  code: "https://github.com/..."
  demo: "https://demo.example.com"
  pdf: "https://example.com/paper.pdf"
---
```

## Required Fields

- `id`: Unique identifier (usually the same as the filename without .mdx)
- `title`: Display title
- `description`: Brief description for archive listings
- `date`: Publication date in DD-MM-YYYY format
- `type`: One of the allowed types
- `domain`: One of the allowed domains

## Optional Fields

- `abstract`: Longer description shown on detail page
- `technicalFocus`: Array of technical focus areas
- `primaryOutput`: What the main deliverable is
- `relatedResearch`: Array of related items
- `links`: Object with code, demo, and pdf URLs

## Creating New MDX Files

### Method 1: Using the Script

```bash
node scripts/create-archive-mdx.js my-new-research-paper
```

or

pnpm create-archive my-new-research-paper

### Method 2: Manual Creation

1. Create a new `.mdx` file in this directory
2. Add the required frontmatter
3. Write your content using Markdown/MDX syntax

## MDX Features

You can use all standard Markdown features plus:

- **Custom components**: Import and use React components
- **Code blocks**: Syntax highlighted code
- **Tables**: Markdown tables with custom styling
- **Links**: Both internal and external links
- **Images**: Standard markdown image syntax

## Example

````mdx
---
id: 'example-paper'
title: 'Example Research Paper'
description: 'An example of how to structure archive content'
date: '27-01-2026'
type: 'Paper'
domain: 'Cryptography'
abstract: 'This is an example paper showing the MDX structure'
technicalFocus: ['Zero-Knowledge', 'Cryptography']
links:
    pdf: '#'
---

# Introduction

This is the main content of your archive item...

## Methodology

Describe your approach...

```typescript
// You can include code blocks
function example() {
    return 'Hello, world!'
}
```
````

## Results

Present your findings...

```

## Integration

The MDX files are automatically:

1. **Parsed** by the `lib/mdx.ts` utilities
2. **Integrated** with the existing archive data
3. **Rendered** on archive detail pages using custom components
4. **Styled** with the design system colors and typography

If an MDX file exists for a slug, it takes precedence over the static data in `archiveData.ts`.
```
