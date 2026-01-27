# Blog MDX Content

This directory contains MDX files for blog posts. Each MDX file represents a blog post that will be displayed on the blog listing and detail pages.

## File Structure

Each MDX file should be named with the slug of the blog post (e.g., `my-blog-post.mdx`) and contain:

1. **Frontmatter**: YAML metadata at the top of the file
2. **Content**: Markdown/MDX content below the frontmatter

## Frontmatter Schema

```yaml
---
id: "unique-identifier"
title: "Title of the Blog Post"
excerpt: "Brief excerpt for blog listing"
author: "Author Name"
date: "DD-MM-YYYY"
readTime: "X min read"
category: "technical" | "research" | "lab-update"
---
```

## Required Fields

- `id`: Unique identifier (usually the same as the filename without .mdx)
- `title`: Display title
- `excerpt`: Brief description for blog listings
- `author`: Author name
- `date`: Publication date in DD-MM-YYYY format
- `readTime`: Estimated reading time (e.g., "5 min read")
- `category`: One of the allowed categories

## Categories

- `technical`: Technical deep-dives and implementation details
- `research`: Research findings and academic work
- `lab-update`: Lab news, team updates, and announcements

## Creating New Blog Posts

### Method 1: Manual Creation

1. Create a new `.mdx` file in this directory
2. Add the required frontmatter
3. Write your content using Markdown/MDX syntax

### Method 2: Using the Script (if available)

```bash
pnpm create-blog my-new-blog-post
```

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
id: 'example-post'
title: 'Example Blog Post'
excerpt: 'This is an example of how to structure blog content'
author: 'John Doe'
date: '27-01-2026'
readTime: '3 min read'
category: 'technical'
---

# Introduction

This is the main content of your blog post...

## Technical Details

You can include code blocks:

```javascript
function example() {
    return 'Hello, world!'
}
```
````

## Conclusion

Wrap up your thoughts...

```

## Integration

The MDX files are automatically:

1. **Parsed** by the `lib/blog-mdx.ts` utilities
2. **Integrated** with the existing blog data
3. **Rendered** on blog detail pages using custom components
4. **Styled** with the design system colors and typography

If an MDX file exists for a slug, it takes precedence over any static data.
```
