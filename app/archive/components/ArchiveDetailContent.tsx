import Link from 'next/link'
import { Footer } from '../../../components/layout/Footer'
import { ArchiveItem } from '../data/archiveData'
import { Button } from '../../../components/ui/Button'

interface ArchiveDetailContentProps {
    item: ArchiveItem
}

export function ArchiveDetailContent({ item }: ArchiveDetailContentProps) {
    const getTypeColor = () => {
        return 'bg-primary-800 text-secondary-200'
    }

    return (
        <div className="bg-primary-900 text-secondary-200 min-h-screen">
            <div className="bg-primary-900 flex flex-col items-center gap-8 overflow-hidden px-4 pt-10 pb-20 md:gap-20 md:px-24">
                <Link
                    href="/archive"
                    className="hover:bg-primary-800/20 flex w-full max-w-6xl items-center gap-2 py-3 pr-4 pl-3 transition-colors"
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
                    <span className="text-subheading text-secondary-400 font-medium">
                        BACK TO ARCHIVE
                    </span>
                </Link>

                <div className="flex w-full max-w-6xl flex-col items-start gap-6 px-0 md:gap-20 md:px-12">
                    {/* Title Section */}
                    <div className="flex w-full flex-col items-start gap-6">
                        <h1 className="font-regular font-space-grotesk text-xl leading-tight tracking-tight text-white md:text-6xl">
                            {item.title}
                        </h1>
                        <div className="flex items-center justify-center gap-4 md:gap-10">
                            <div
                                className={`flex flex-col items-center justify-center p-2 ${getTypeColor()}`}
                            >
                                <span className="text-caption text-center font-medium">
                                    {item.type}
                                </span>
                            </div>
                            <div className="bg-tertiary-400 h-12 w-px border" />
                            <span className="text-h4 font-regular text-secondary-200 text-center">
                                {item.domain}
                            </span>
                            <div className="bg-tertiary-400 h-12 w-px border" />
                            <span className="text-h4 font-regular text-secondary-400 text-center">
                                {item.date}
                            </span>
                        </div>
                    </div>

                    <div className="border-tertiary-400 h-px w-full border-b" />

                    {/* Abstract Section */}
                    {item.abstract && (
                        <>
                            <div className="flex w-full flex-col items-start gap-6">
                                <h2 className="text-subheading text-secondary-600 font-medium">
                                    ABSTRACT
                                </h2>
                                <p className="text-subheading leading-8 font-medium text-white">
                                    {item.abstract}
                                </p>
                            </div>
                        </>
                    )}

                    {/* Details Section */}
                    <div className="flex w-full flex-col items-start gap-10">
                        <div className="border-tertiary-400 w-full overflow-hidden border border-x-0">
                            <table className="w-full table-fixed">
                                <tbody>
                                    <tr className="border-tertiary-400 border-b last:border-b-0">
                                        <td className="text-body2 font-regular text-secondary-400 border-tertiary-400 bg-primary-800/20 w-1/2 border-r px-6 py-6">
                                            TECHNICAL FOCUS
                                        </td>
                                        <td className="text-subheading text-secondary-200 w-1/2 px-6 py-6 font-medium">
                                            {item.technicalFocus?.join(', ') ||
                                                'Not specified'}
                                        </td>
                                    </tr>
                                    <tr className="border-tertiary-400 border-b last:border-b-0">
                                        <td className="text-body2 font-regular text-secondary-400 border-tertiary-400 bg-primary-800/20 w-1/2 border-r px-6 py-6">
                                            RESEARCH CATEGORY
                                        </td>
                                        <td className="text-subheading text-secondary-200 w-1/2 px-6 py-6 font-medium">
                                            {item.domain}
                                        </td>
                                    </tr>
                                    <tr className="border-tertiary-400 border-b last:border-b-0">
                                        <td className="text-body2 font-regular text-secondary-400 border-tertiary-400 bg-primary-800/20 w-1/2 border-r px-6 py-6">
                                            PRIMARY OUTPUT
                                        </td>
                                        <td className="text-subheading text-secondary-200 w-1/2 px-6 py-6 font-medium">
                                            {item.primaryOutput || item.type}
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="flex items-start gap-6">
                            {item.links.code && (
                                <Button variant="outline" size="lg">
                                    VIEW CODE
                                </Button>
                            )}
                            {item.links.pdf && (
                                <Button variant="outline" size="lg">
                                    DOWNLOAD PDF
                                </Button>
                            )}
                        </div>
                    </div>

                    <div className="border-tertiary-400 h-px w-full border-b" />

                    {/* Related Research */}
                    {item.relatedResearch &&
                        item.relatedResearch.length > 0 && (
                            <div className="flex w-full flex-col items-start gap-8">
                                <h2 className="text-subheading text-secondary-600 font-medium">
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
                                                    className="text-subheading text-secondary-400 hover:text-secondary-200 font-medium transition-colors"
                                                >
                                                    {related.title}
                                                </Link>
                                                <div className="flex items-center justify-center gap-4">
                                                    <span className="text-caption font-regular text-secondary-600 text-center">
                                                        {related.type}
                                                    </span>
                                                    <div className="bg-tertiary-400 h-4 w-px" />
                                                    <span className="text-caption font-regular text-secondary-600 text-center">
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
