import Link from 'next/link'
import { ArchiveItem } from '../data/archiveData'
import { Button } from '../../../components/ui/Button'
import { MDXContent } from '../../../components/mdx/MDXContent'
import { MDXArchiveItem } from '../../../lib/mdx'

interface ArchiveDetailContentProps {
    item: ArchiveItem
    mdxItem: MDXArchiveItem | null
}

export function ArchiveDetailContent({
    item,
    mdxItem,
}: ArchiveDetailContentProps) {
    const getTypeColor = () => {
        return 'bg-primary-800 text-secondary-200'
    }

    return (
        <div className="bg-primary-900 text-secondary-200 min-h-screen">
            <div className="bg-primary-900 flex flex-col items-center gap-8 overflow-hidden px-4 pt-10 pb-20 md:gap-20 md:px-8 lg:px-24">
                <Link
                    href="/archive"
                    className="hover:bg-primary-800/20 flex w-full items-center gap-2 py-3 pr-4 pl-3 transition-colors"
                >
                    <div className="flex h-6 w-6 items-center justify-center">
                        <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            className="h-6 w-6"
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
                    <span className="md:text-subheading text-secondary-400 text-[14px] font-medium md:text-[20px]">
                        BACK TO ARCHIVE
                    </span>
                </Link>

                <div className="flex w-full flex-col items-start gap-6 px-0 md:gap-20 lg:px-12">
                    {/* Title Section */}
                    <div className="flex w-full flex-col items-start gap-6">
                        <h1 className="text-h1 font-regular font-space-grotesk text-secondary-200 text-xl leading-tight tracking-tight md:text-[64px]">
                            {item.title}
                        </h1>
                        <div className="flex items-center justify-center gap-4 md:gap-10">
                            <div
                                className={`flex flex-col items-center justify-center px-2 ${getTypeColor()}`}
                            >
                                <span className="md:text-h4 font-regular text-secondary-200 text-center text-[14px] md:text-[28px]">
                                    {item.type}
                                </span>
                            </div>
                            <div className="bg-tertiary-400 h-6 w-px border md:h-12" />
                            <span className="md:text-h4 font-regular text-secondary-200 text-center text-[14px] md:text-[28px]">
                                {item.domain}
                            </span>
                            <div className="bg-tertiary-400 h-6 w-px border md:h-12" />
                            <span className="md:text-h4 font-regular text-secondary-400 text-center text-[14px] md:text-[28px]">
                                {item.date}
                            </span>
                        </div>
                    </div>

                    <div className="border-tertiary-400 h-px w-full border-b" />

                    {/* Abstract Section */}
                    {item.abstract && (
                        <>
                            <div className="flex w-full flex-col items-start gap-6">
                                <h2 className="md:text-subheading text-secondary-600 text-[18px] font-medium md:text-[20px]">
                                    ABSTRACT
                                </h2>
                                <p className="md:text-subheading text-secondary-200 text-[16px] leading-8 font-medium md:text-[20px]">
                                    {item.abstract}
                                </p>
                            </div>
                        </>
                    )}

                    {/* <div className="border-tertiary-400 h-px w-full border-b" /> */}

                    {/* Details Section */}
                    <div className="flex w-full flex-col items-start gap-10">
                        <div className="border-tertiary-400 w-full overflow-hidden border border-x-0">
                            <table className="w-full table-fixed">
                                <tbody>
                                    <tr className="border-tertiary-400 border-b last:border-b-0">
                                        <td className="md:text-body2 font-regular text-secondary-400 border-tertiary-400 bg-primary-800/20 w-1/2 border-r py-6 pr-6 text-[14px] md:text-[18px]">
                                            TECHNICAL FOCUS
                                        </td>
                                        <td className="md:text-subheading text-secondary-200 w-1/2 py-6 pl-6 text-[14px] font-medium md:text-[20px]">
                                            {item.technicalFocus?.join(', ') ||
                                                'Not specified'}
                                        </td>
                                    </tr>
                                    <tr className="border-tertiary-400 border-b last:border-b-0">
                                        <td className="md:text-body2 font-regular text-secondary-400 border-tertiary-400 bg-primary-800/20 w-1/2 border-r py-6 pr-6 text-[14px] md:text-[18px]">
                                            RESEARCH CATEGORY
                                        </td>
                                        <td className="md:text-subheading text-secondary-200 w-1/2 py-6 pl-6 text-[14px] font-medium md:text-[20px]">
                                            {item.domain}
                                        </td>
                                    </tr>
                                    <tr className="border-tertiary-400 border-b last:border-b-0">
                                        <td className="md:text-body2 font-regular text-secondary-400 border-tertiary-400 bg-primary-800/20 w-1/2 border-r py-6 pr-6 text-[14px] md:text-[18px]">
                                            PRIMARY OUTPUT
                                        </td>
                                        <td className="md:text-subheading text-secondary-200 w-1/2 py-6 pl-6 text-[14px] font-medium md:text-[20px]">
                                            {item.primaryOutput || item.type}
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="flex w-full items-center justify-between md:w-auto md:items-start md:gap-6">
                            {item.links.pdf && (
                                <Link
                                    href={item.links.pdf}
                                    download={item.title}
                                >
                                    <Button
                                        variant="outline"
                                        size="lg"
                                        className="hidden md:block"
                                    >
                                        DOWNLOAD PDF
                                    </Button>
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        className="w-[calc(50vw-24px)] justify-center md:hidden"
                                    >
                                        DOWNLOAD PDF
                                    </Button>
                                </Link>
                            )}

                            {item.links.code && (
                                <Link href={item.links.code}>
                                    <Button
                                        variant="outline"
                                        size="lg"
                                        className="hidden md:block"
                                    >
                                        VIEW REPOSITORY
                                    </Button>
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        className="w-[calc(50vw-24px)] justify-center md:hidden"
                                    >
                                        VIEW REPOSITORY
                                    </Button>
                                </Link>
                            )}
                        </div>
                    </div>

                    <div className="border-tertiary-400 h-px w-full border-b" />

                    {/* MDX Content Section */}
                    {mdxItem?.content && (
                        <>
                            <div className="flex w-full flex-col items-start gap-6">
                                <h2 className="text-subheading text-secondary-600 text-[20px] font-medium">
                                    CONTENT
                                </h2>
                                <div className="w-full">
                                    <MDXContent content={mdxItem.content} />
                                </div>
                            </div>
                            <div className="border-tertiary-400 h-px w-full border-b" />
                        </>
                    )}

                    {/* Related Research */}
                    {item.relatedResearch &&
                        item.relatedResearch.length > 0 && (
                            <div className="flex w-full flex-col items-start gap-8">
                                <h2 className="md:text-subheading text-secondary-600 text-[18px] font-medium md:text-[20px]">
                                    RELATED RESEARCH
                                </h2>
                                <div className="flex w-full flex-col items-start gap-6">
                                    {item.relatedResearch.map(
                                        (related, index) => (
                                            <div
                                                key={index}
                                                className="flex w-full flex-col items-start gap-4"
                                            >
                                                <Link
                                                    href={`/archive/${related.slug}`}
                                                    className="md:text-subheading text-secondary-400 hover:text-secondary-200 text-[16px] font-medium transition-colors md:text-[20px]"
                                                >
                                                    {related.title}
                                                </Link>
                                                <div className="flex items-center justify-center gap-4">
                                                    <span className="text-caption font-regular text-secondary-600 text-center text-[14px]">
                                                        {related.type}
                                                    </span>
                                                    <div className="bg-tertiary-400 h-4 w-px" />
                                                    <span className="text-caption font-regular text-secondary-600 text-center text-[14px]">
                                                        {related.date}
                                                    </span>
                                                </div>
                                            </div>
                                        )
                                    )}
                                </div>
                            </div>
                        )}
                </div>
            </div>
        </div>
    )
}
