import Link from 'next/link'
import Image from 'next/image'
import { BlogPost } from '../../data/blogData'
import { MDXBlogPost } from '../../../../lib/blog-mdx'
import { Icon } from '../../../../components/ui/Icon'
import { MDXContent } from '../../../../components/mdx/MDXContent'
import BlogImage from '../../../../assets/images/blog-image.png'

interface BlogPostContentProps {
    post: BlogPost
    mdxPost: MDXBlogPost | null
}

export function BlogPostContent({ post, mdxPost }: BlogPostContentProps) {
    return (
        <div className="bg-primary-900 text-secondary-200 min-h-screen">
            <div className="bg-primary-900 mx-auto flex w-full flex-col items-center justify-start gap-9 overflow-hidden px-4 pb-20 md:gap-20 md:px-8 md:pt-3 lg:px-24">
                {/* Back to Blog */}
                <Link
                    href="/blog"
                    className="hover:bg-primary-800/20 flex items-center justify-start gap-2 self-stretch py-3 pr-4 pl-3 transition-colors"
                >
                    <div className="flex h-[18px] w-[18px] items-center justify-center md:h-6 md:w-6">
                        <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            className="h-[18px] w-[18px] md:h-6 md:w-6"
                        >
                            <path
                                d="M19 12H5M5 12L12 19M5 12L12 5"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </div>
                    <span className="md:text-subheading font-space-grotesk text-secondary-400 text-[14px] font-medium md:text-[20px]">
                        BACK TO BLOG
                    </span>
                </Link>

                {/* Article Content */}
                <div className="flex flex-col items-start justify-start gap-12 self-stretch px-0 md:gap-[80px] lg:px-12">
                    {/* Header */}
                    <div className="flex flex-col items-start justify-start gap-6 self-stretch">
                        <h1 className="font-space-grotesk text-secondary-200 md:text-h1 self-stretch text-[20px] leading-tight font-normal md:text-[64px]">
                            {post.title}
                        </h1>
                        <div className="block items-start justify-start gap-6 self-stretch md:flex md:items-center md:gap-2.5">
                            <div className="flex flex-1 items-center justify-start gap-6">
                                {/* Date */}
                                <div className="flex items-center justify-start gap-4">
                                    <Icon
                                        name="clock"
                                        size={24}
                                        className="text-secondary-600"
                                    />
                                    <span className="md:text-body2 font-space-grotesk text-secondary-400 font-regular text-[14px] md:text-[18px]">
                                        {post.date}
                                    </span>
                                </div>
                                <div className="border-tertiary-400 h-6 border-r" />

                                {/* Read Time */}
                                <div className="flex items-center justify-start gap-6">
                                    <Icon
                                        name="calendar"
                                        size={24}
                                        className="text-secondary-400"
                                    />
                                    <span className="md:text-subheading font-space-grotesk text-secondary-400 text-[14px] font-normal md:text-[20px]">
                                        {post.readTime}
                                    </span>
                                </div>
                            </div>

                            {/* Author and Social */}
                            <div className="mt-4 flex items-center justify-start gap-6 md:mt-0">
                                <div className="text-center">
                                    <span className="md:text-subheading font-space-grotesk text-secondary-400 text-[14px] font-normal md:text-[20px]">
                                        Written by{' '}
                                    </span>
                                    <span className="md:text-subheading font-space-grotesk text-secondary-200 text-[14px] font-medium md:text-[20px]">
                                        {post.author}
                                    </span>
                                </div>
                                <div className="border-tertiary-600 h-6 border-r" />
                                <Icon
                                    name="twitter"
                                    size={24}
                                    className="text-secondary-200"
                                />
                                <Icon
                                    name="instagram"
                                    size={24}
                                    className="text-secondary-200"
                                />
                                <Icon
                                    name="github"
                                    size={24}
                                    className="text-secondary-200"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Divider */}
                    <div className="border-tertiary-400 h-px self-stretch border-t" />

                    {/* Article Body */}
                    <div className="flex flex-col items-start justify-start gap-10 self-stretch">
                        {mdxPost?.content ? (
                            <div className="w-full">
                                <MDXContent content={mdxPost.content} />
                            </div>
                        ) : (
                            <>
                                <div className="text-secondary-200 text-subheading font-space-grotesk self-stretch text-[20px] leading-7 font-normal">
                                    The recent proliferation of mobile-first ZK
                                    rollups relies heavily on the assumption
                                    that client-side proving is feasible on
                                    consumer hardware. While theoretical models
                                    suggest that modern recursive composition
                                    (specifically Plonky2 and Nova) should
                                    render proving times negligible, our recent
                                    benchmarks paint a more nuanced picture.
                                </div>
                                <div className="text-secondary-200 text-subheading font-space-grotesk self-stretch text-[20px] leading-7 font-normal">
                                    In controlled environments, the math holds
                                    up. However, thermal throttling on mobile
                                    devices introduces a non-deterministic
                                    variable that most academic papers abstract
                                    away. When a device is under sustained
                                    load—common during the sync phase of a light
                                    client—the CPU governor aggressively
                                    downclocks, causing proving times to spike
                                    by factors of 3x to 5x.
                                </div>
                                <div className="text-secondary-200 text-subheading font-space-grotesk self-stretch text-[20px] leading-7 font-normal">
                                    We are currently exploring a hybrid approach
                                    for Nexus Grid that offloads the heavy
                                    lifting to a localized &apos;helper&apos;
                                    node while keeping the witness generation
                                    strictly local. This preserves privacy while
                                    respecting the thermal constraints of mobile
                                    silicon.
                                </div>

                                {/* Image Section */}
                                <div className="flex flex-col items-start justify-start gap-6 self-stretch">
                                    <Image
                                        src={BlogImage}
                                        width={1152}
                                        height={600}
                                        alt="Performance degradation chart"
                                        className="h-[400px] w-full rounded object-cover md:h-[600px]"
                                        priority
                                    />
                                    <div className="text-subheading font-space-grotesk text-secondary-200 self-stretch text-[20px] font-normal">
                                        Fig 1. Performance degradation of Apple
                                        A17 Pro during 120s of sustained MSM
                                        operations
                                    </div>
                                </div>

                                <div className="text-secondary-200 text-subheading font-space-grotesk self-stretch text-[20px] leading-7 font-normal">
                                    As illustrated above, performance degrades
                                    rapidly after the 30-second mark. This
                                    &apos;thermal wall&apos; effectively creates
                                    a hard cap on the complexity of circuits
                                    that can be proven locally without
                                    significantly degrading the user experience.
                                    A wallet app that freezes for 45 seconds
                                    while generating a proof is effectively
                                    broken, regardless of the underlying
                                    cryptographic soundness.
                                </div>
                                <div className="text-secondary-200 text-subheading font-space-grotesk self-stretch text-[20px] leading-7 font-normal">
                                    Beyond raw speed, the battery impact is
                                    non-trivial. Our telemetry indicates that a
                                    single complex proof generation cycle
                                    consumes roughly 2-3% of battery life on a
                                    standard iPhone 15. For a high-frequency
                                    trading use case, this is unacceptable.
                                </div>
                                <div className="text-secondary-200 text-subheading font-space-grotesk self-stretch text-[20px] leading-7 font-normal">
                                    This divergence serves as a reminder that
                                    cryptography does not exist in a vacuum. The
                                    physical reality of the hardware is just as
                                    much a constraint as the soundness of the
                                    proof system.
                                </div>
                            </>
                        )}
                    </div>

                    {/* Divider */}
                    <div className="border-tertiary-400 h-px self-stretch border-t" />

                    {/* Share Section */}
                    <div className="flex items-center justify-start gap-6 self-stretch md:gap-10">
                        <h3 className="md:text-h4 font-space-grotesk text-secondary-400 text-[16px] font-medium md:text-[28px]">
                            SHARE POST
                        </h3>
                        <a
                            href="#"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="transition-opacity hover:opacity-70"
                        >
                            <Icon
                                name="mobiletwitter"
                                size={24}
                                className="text-secondary-200"
                            />
                        </a>
                        <a
                            href="#"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="transition-opacity hover:opacity-70"
                        >
                            <Icon
                                name="mobileinstagram"
                                size={24}
                                className="text-secondary-200"
                            />
                        </a>
                        <a
                            href="#"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="transition-opacity hover:opacity-70"
                        >
                            <Icon
                                name="github"
                                size={24}
                                className="text-secondary-200"
                            />
                        </a>
                    </div>
                </div>

                {/* Newsletter Subscription */}
                <div className="border-tertiary-600 items-center justify-start gap-10 space-y-8 self-stretch border bg-[#191919] px-0 px-8 py-10 md:flex md:space-y-0 md:px-12">
                    <div className="flex flex-1 flex-col items-start justify-start gap-4">
                        <div className="flex items-center justify-start gap-6">
                            <Icon
                                name="mail"
                                size={32}
                                className="text-secondary-600"
                            />
                            <h3 className="md:text-h4 font-space-grotesk text-secondary-200 text-[18px] font-medium md:text-[28px]">
                                Poneglyph Blog
                            </h3>
                        </div>
                        <p className="md:text-body1 font-space-grotesk text-secondary-600 self-stretch text-[14px] leading-7 font-normal md:text-[16px]">
                            Subscribe for more updates like this. No marketing
                            spam, only technical dispatches and research
                            artifacts.
                        </p>
                    </div>
                    <div className="flex w-full max-w-[412px] flex-col items-start justify-start gap-4">
                        <div className="bg-primary-900 border-tertiary-600 flex h-14 items-center justify-start gap-2.5 self-stretch border pl-4">
                            <input
                                type="email"
                                placeholder="your.email@example.com"
                                className="md:text-body1 font-space-grotesk text-secondary-600 placeholder-secondary-600 flex-1 bg-transparent text-[14px] outline-none md:text-[16px]"
                            />
                            <button className="border-tertiary-600 hover:bg-primary-800/20 flex items-center justify-center gap-2 self-stretch border bg-[#191919] px-8 py-3 transition-colors">
                                <span className="md:text-h3 text-14px font-space-grotesk text-secondary-200 font-medium md:text-[18px]">
                                    JOIN
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
