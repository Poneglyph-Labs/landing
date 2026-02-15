'use client'

import { useState } from 'react'
import Link from 'next/link'
import { filterBlogPosts, sortBlogPosts, BlogPost } from '../data/blogData'
import { Icon } from '../../../components/ui/Icon'

interface BlogPageContentProps {
    posts: BlogPost[]
}

export function BlogPageContent({ posts }: BlogPageContentProps) {
    const [searchQuery, setSearchQuery] = useState('')
    const [sortBy, setSortBy] = useState<'Most Recent' | 'Oldest'>(
        'Most Recent'
    )
    const [showSortDropdown, setShowSortDropdown] = useState(false)

    const allPosts = posts
    const filteredPosts = filterBlogPosts(allPosts, searchQuery)
    const sortedPosts = sortBlogPosts(filteredPosts, sortBy)

    const sortOptions: ('Most Recent' | 'Oldest')[] = ['Most Recent', 'Oldest']

    return (
        <>
            {/* Desktop Layout */}
            <div className="hidden w-full flex-col items-start justify-center md:flex">
                <div className="bg-primary-900 mx-auto flex w-full flex-col items-start justify-start overflow-hidden px-4 pt-10 pb-20 md:px-8 lg:px-24">
                    {/* Header */}
                    <div className="flex w-full flex-col items-start justify-start gap-10">
                        <div className="border-tertiary-400 flex w-full flex-col items-start justify-center gap-4 border-b-[0.50px] py-6">
                            <h1 className="text-h4 font-space-grotesk text-secondary-200 text-[28px] font-medium tracking-tight">
                                BLOG
                            </h1>
                            <p className="text-body2 font-space-grotesk text-secondary-600 text-[18px] font-medium tracking-tight">
                                Technical notes, research context, and lab
                                updates from Poneglyph Labs.
                            </p>
                        </div>
                    </div>

                    {/* Search and Sort */}
                    <div className="mt-12 flex w-full flex-col items-start justify-start gap-6">
                        {/* Search Bar */}
                        <div className="border-tertiary-600 flex h-16 w-full items-center justify-start gap-2.5 border p-4">
                            <Icon
                                name="search"
                                size={24}
                                className="text-secondary-200"
                            />
                            <input
                                type="text"
                                placeholder="Search blog"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="text-body1 font-space-grotesk text-secondary-600 placeholder-secondary-600 flex-1 bg-transparent leading-7 outline-none"
                            />
                        </div>

                        {/* Sort Dropdown */}
                        <div className="flex items-start justify-start gap-20">
                            <div className="relative">
                                <button
                                    onClick={() =>
                                        setShowSortDropdown(!showSortDropdown)
                                    }
                                    className="flex items-center gap-2 px-4 py-3 transition-colors"
                                >
                                    <span className="text-body2 font-space-grotesk text-primary-400 text-[18px] font-medium">
                                        Sort:{' '}
                                    </span>
                                    <span className="text-body2 font-space-grotesk text-secondary-200 text-[18px] font-medium">
                                        {sortBy}
                                    </span>
                                    <Icon
                                        name="arrow-down"
                                        size={24}
                                        className="text-secondary-200"
                                    />
                                </button>

                                {showSortDropdown && (
                                    <div className="border-tertiary-600 absolute top-full left-0 z-[9999] mt-1 w-64 border-[0.5px] bg-[#191919]">
                                        {sortOptions.map((option, index) => (
                                            <div key={option}>
                                                <div className="flex flex-col items-start justify-center px-4 py-3">
                                                    <button
                                                        onClick={() => {
                                                            setSortBy(option)
                                                            setShowSortDropdown(
                                                                false
                                                            )
                                                        }}
                                                        className={`text-body1 font-regular w-full text-left transition-colors ${
                                                            option === sortBy
                                                                ? 'text-secondary-200'
                                                                : 'text-secondary-600'
                                                        }`}
                                                    >
                                                        {option}
                                                    </button>
                                                </div>
                                                {index <
                                                    sortOptions.length - 1 && (
                                                    <div className="border-tertiary-600 h-0 w-full border-t-[0.5px]" />
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Blog Posts */}
                    <div className="flex w-full flex-col items-start justify-start">
                        {sortedPosts.map((post, index) => (
                            <div key={post.id} className="w-full">
                                <Link
                                    href={`/blog/${post.slug}`}
                                    className="block w-full"
                                >
                                    <div className="hover:bg-primary-800/10 flex flex-col items-start justify-start gap-6 py-10 transition-colors">
                                        {/* Post Header */}
                                        <div className="flex flex-col items-start justify-start gap-4">
                                            <h2 className="text-h4 font-space-grotesk text-secondary-200 text-[28px] font-medium">
                                                {post.title}
                                            </h2>
                                            <div className="flex items-center justify-center gap-6 p-2.5">
                                                <span className="text-body1 font-space-grotesk text-secondary-400 leading-7 font-normal">
                                                    {post.date}
                                                </span>
                                                <div className="border-tertiary-600 h-6 border-r" />
                                                <span className="text-body1 font-space-grotesk text-secondary-400 leading-7 font-normal">
                                                    {post.readTime}
                                                </span>
                                                <div className="border-tertiary-600 h-6 border-r" />
                                                <span className="text-body1 font-space-grotesk text-secondary-200 leading-7 font-normal">
                                                    Written by {post.author}
                                                </span>
                                            </div>
                                        </div>

                                        {/* Post Excerpt */}
                                        <p className="text-body2 font-space-grotesk text-secondary-200 w-full text-[18px] font-normal">
                                            {post.excerpt}
                                        </p>

                                        {/* Read More */}
                                        <div className="flex w-full items-center justify-start gap-2 py-3 pr-4 pl-3">
                                            <span className="text-body1 font-space-grotesk text-secondary-400 leading-7 font-normal">
                                                Read
                                            </span>
                                            <span className="text-secondary-400">
                                                <Icon
                                                    name="arrow-right"
                                                    size={24}
                                                    className="text-secondary-400"
                                                />
                                            </span>
                                        </div>
                                    </div>
                                </Link>

                                {/* Divider - Extends to container edges */}
                                {index < sortedPosts.length - 1 && (
                                    <div className="border-tertiary-600 h-px w-full border-t" />
                                )}
                            </div>
                        ))}

                        {/* No Results */}
                        {sortedPosts.length === 0 && (
                            <div className="flex w-full flex-col items-center justify-center gap-4 py-20">
                                <h3 className="text-h4 font-space-grotesk text-secondary-600 text-[28px] font-medium">
                                    No blog posts found
                                </h3>
                                <p className="text-body1 font-space-grotesk text-secondary-600 font-normal">
                                    Try adjusting your search query
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Mobile Layout */}
            <div className="bg-primary-900 flex flex-col items-start justify-start gap-6 overflow-hidden md:hidden md:pb-10">
                <div className="flex flex-col items-start justify-start gap-10 self-stretch px-4">
                    {/* Mobile Header */}
                    <div className="border-tertiary-400 flex flex-col items-start justify-center gap-2 self-stretch border-b-[0.50px] py-3 pb-4">
                        <h1 className="text-body2 font-space-grotesk text-secondary-200 text-[18px] font-medium">
                            BLOG
                        </h1>
                        <p className="text-caption font-space-grotesk self-stretch text-[14px] font-normal text-[#9E9E9E]">
                            Technical notes, research context, and lab updates
                            from Poneglyph Labs.
                        </p>
                    </div>

                    {/* Mobile Search */}
                    <div className="border-tertiary-600 flex h-12 w-full items-center gap-2.5 border p-4">
                        <Icon
                            name="search"
                            size={18}
                            className="text-secondary-600"
                        />
                        <input
                            type="text"
                            placeholder="Search blog"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="text-caption font-regular text-secondary-600 placeholder-secondary-600 flex-1 bg-transparent text-[14px] outline-none"
                        />
                    </div>

                    {/* Mobile Sort */}
                    <div className="relative">
                        <button
                            onClick={() =>
                                setShowSortDropdown(!showSortDropdown)
                            }
                            className="flex items-center gap-2"
                        >
                            <span className="text-caption font-space-grotesk text-secondary-600 text-[14px] font-medium">
                                Sort:{' '}
                            </span>
                            <span className="text-caption font-space-grotesk text-secondary-200 text-[14px] font-medium">
                                {sortBy}
                            </span>
                            <Icon
                                name="arrow-down"
                                size={16}
                                className="text-secondary-200"
                            />
                        </button>

                        {showSortDropdown && (
                            <div className="border-tertiary-600 absolute top-full left-0 z-[9999] mt-1 w-[calc(100vw-32px)] min-w-48 border-[0.5px] bg-[#191919]">
                                {sortOptions.map((option, index) => (
                                    <div key={option}>
                                        <div className="flex flex-col items-start justify-center px-4 py-3">
                                            <button
                                                onClick={() => {
                                                    setSortBy(option)
                                                    setShowSortDropdown(false)
                                                }}
                                                className={`text-caption font-regular w-full text-left text-[14px] transition-colors ${
                                                    option === sortBy
                                                        ? 'text-secondary-200'
                                                        : 'text-secondary-600'
                                                }`}
                                            >
                                                {option}
                                            </button>
                                        </div>
                                        {index < sortOptions.length - 1 && (
                                            <div className="border-tertiary-600 h-0 w-full border-t-[0.5px]" />
                                        )}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>

                {/* Mobile Blog Posts */}
                <div className="border-tertiary-400 flex w-full flex-col items-start">
                    {sortedPosts.map((post, index) => (
                        <div key={post.id} className="w-full">
                            <Link
                                href={`/blog/${post.slug}`}
                                className="block w-full"
                            >
                                <div className="hover:bg-primary-800/20 flex w-full flex-col items-start gap-6 p-6 transition-colors">
                                    <div className="flex w-full flex-col items-start gap-4">
                                        <h2 className="text-subheading font-space-grotesk text-secondary-200 w-full text-[20px] font-medium">
                                            {post.title}
                                        </h2>
                                        <div className="flex items-center gap-4">
                                            <span className="text-caption text-secondary-600 text-[14px] font-medium">
                                                {post.date}
                                            </span>
                                            <div className="border-tertiary-400 h-4 border-r" />
                                            <span className="text-caption text-secondary-600 text-[14px] font-medium">
                                                {post.readTime}
                                            </span>
                                            <div className="border-tertiary-400 h-4 border-r" />
                                            <span className="text-caption text-secondary-200 text-[14px] font-medium">
                                                {post.author}
                                            </span>
                                        </div>
                                    </div>

                                    <p className="text-body1 font-regular text-secondary-200 w-full leading-7">
                                        {post.excerpt}
                                    </p>

                                    <div className="flex items-center gap-2">
                                        <span className="text-caption font-regular text-secondary-400 text-[14px]">
                                            Read
                                        </span>
                                        <Icon
                                            name="mobilearrow-right"
                                            size={16}
                                            className="text-secondary-400"
                                        />
                                    </div>
                                </div>
                            </Link>
                            {index < sortedPosts.length - 1 && (
                                <div className="border-tertiary-400 h-0 w-full border-t-[0.5px]" />
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
