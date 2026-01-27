#!/usr/bin/env node
/* eslint-disable @typescript-eslint/no-require-imports */

const fs = require('fs')
const path = require('path')

function createBlogMDX(slug, options = {}) {
    const {
        title = 'New Blog Post',
        excerpt = 'Brief description of the blog post',
        author = 'Poneglyph Labs',
        category = 'technical',
        readTime = '5 min read',
    } = options

    const date = new Date().toLocaleDateString('en-GB', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
    })

    const frontmatter = `---
id: "${slug}"
title: "${title}"
excerpt: "${excerpt}"
author: "${author}"
date: "${date}"
readTime: "${readTime}"
category: "${category}"
---

# ${title}

## Introduction

Write your introduction here...

## Main Content

Add your main content here...

## Conclusion

Summarize your thoughts...
`

    const filePath = path.join(
        __dirname,
        '..',
        'content',
        'blog',
        `${slug}.mdx`
    )

    if (fs.existsSync(filePath)) {
        console.error(`File ${slug}.mdx already exists!`)
        process.exit(1)
    }

    fs.writeFileSync(filePath, frontmatter)
    console.log(`Created ${slug}.mdx successfully!`)
    console.log(`File location: ${filePath}`)
}

// CLI usage
if (require.main === module) {
    const args = process.argv.slice(2)

    if (args.length === 0) {
        console.log('Usage: node create-blog-mdx.js <slug> [options]')
        console.log('Example: node create-blog-mdx.js my-blog-post')
        process.exit(1)
    }

    const slug = args[0]
    createBlogMDX(slug)
}

module.exports = { createBlogMDX }
