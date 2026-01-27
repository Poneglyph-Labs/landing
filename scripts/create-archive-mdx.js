#!/usr/bin/env node
/* eslint-disable @typescript-eslint/no-require-imports */

const fs = require('fs')
const path = require('path')

function createArchiveMDX(slug, options = {}) {
    const {
        title = 'New Archive Item',
        description = 'Description of the archive item',
        type = 'Paper',
        domain = 'Cryptography',
        abstract = '',
        technicalFocus = [],
        links = {},
    } = options

    const date = new Date().toLocaleDateString('en-GB', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
    })

    const frontmatter = `---
id: "${slug}"
title: "${title}"
description: "${description}"
date: "${date}"
type: "${type}"
domain: "${domain}"
abstract: "${abstract}"
technicalFocus: ${JSON.stringify(technicalFocus, null, 2)}
primaryOutput: "${type === 'Paper' ? 'PDF' : type}"
relatedResearch: []
links: ${JSON.stringify(links, null, 2)}
---

# ${title}

## Introduction

Write your introduction here...

## Methodology

Describe your methodology...

## Results

Present your results...

## Conclusion

Summarize your findings...
`

    const filePath = path.join(
        __dirname,
        '..',
        'content',
        'archive',
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
        console.log('Usage: node create-archive-mdx.js <slug> [options]')
        console.log('Example: node create-archive-mdx.js my-research-paper')
        process.exit(1)
    }

    const slug = args[0]
    createArchiveMDX(slug)
}

module.exports = { createArchiveMDX }
