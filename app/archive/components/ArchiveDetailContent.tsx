import Link from 'next/link'
import { Navigation } from '../../../components/layout/Navigation'
import { Footer } from '../../../components/layout/Footer'
import { ArchiveItem } from '../data/archiveData'
import { Icon } from '../../../components/ui/Icon'
import { Button } from '../../../components/ui/Button'

interface ArchiveDetailContentProps {
    item: ArchiveItem
}

export function ArchiveDetailContent({ item }: ArchiveDetailContentProps) {
    const getTypeColor = (type: string) => {
        return 'bg-primary-800 text-secondary-200'
    }

    return (
        <div className="min-h-screen bg-primary-900 text-secondary-200">
            <div className="bg-primary-900 flex flex-col gap-20 items-center overflow-hidden pb-20 pt-10 px-4 md:px-24">
                <Navigation currentPage="Archive" />
                
                <Link 
                    href="/archive"
                    className="flex gap-2 items-center pl-3 pr-4 py-3 w-full max-w-6xl hover:bg-primary-800/20 transition-colors"
                >
                    <div className="w-6 h-6 flex items-center justify-center">
                        <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
                            <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </div>
                    <span className="text-subheading font-medium text-secondary-400">
                        BACK TO ARCHIVE
                    </span>
                </Link>

                <div className="flex flex-col gap-20 items-start px-0 md:px-12 w-full max-w-6xl">
                    {/* Title Section */}
                    <div className="flex flex-col gap-6 items-start w-full">
                        <h1 className="text-6xl font-regular font-space-grotesk text-white tracking-tight leading-tight">
                            {item.title}
                        </h1>
                        <div className="flex gap-10 items-center justify-center">
                            <div className={`flex flex-col items-center justify-center p-2 ${getTypeColor(item.type)}`}>
                                <span className="text-caption font-medium text-center">
                                    {item.type}
                                </span>
                            </div>
                            <div className="w-px h-12 bg-tertiary-400" />
                            <span className="text-h4 font-regular text-secondary-200 text-center">
                                {item.domain}
                            </span>
                            <div className="w-px h-12 bg-tertiary-400" />
                            <span className="text-h4 font-regular text-secondary-400 text-center">
                                {item.date}
                            </span>
                        </div>
                    </div>

                    <div className="h-px bg-tertiary-400 w-full" />

                    {/* Abstract Section */}
                    {item.abstract && (
                        <>
                            <div className="flex flex-col gap-6 items-start w-full">
                                <h2 className="text-subheading font-medium text-secondary-600">
                                    ABSTRACT
                                </h2>
                                <p className="text-subheading font-medium text-white leading-8">
                                    {item.abstract}
                                </p>
                            </div>
                            <div className="h-px bg-tertiary-400 w-full" />
                        </>
                    )}

                    {/* Details Section */}
                    <div className="flex flex-col gap-10 items-start w-full">
                        <div className="border-t border-b border-tertiary-400 flex items-center w-full">
                            <div className="flex flex-1 flex-col gap-2 items-start">
                                <div className="flex h-24 items-center py-6 w-full">
                                    <span className="flex-1 text-body2 font-regular text-secondary-400">
                                        TECHNICAL FOCUS
                                    </span>
                                </div>
                                <div className="h-px bg-tertiary-400 w-full" />
                                <div className="flex h-24 items-center py-6 w-full">
                                    <span className="flex-1 text-body2 font-regular text-secondary-400">
                                        RESEARCH CATEGORY
                                    </span>
                                </div>
                                <div className="h-px bg-tertiary-400 w-full" />
                                <div className="flex h-24 items-center py-6 w-full">
                                    <span className="flex-1 text-body2 font-regular text-secondary-400">
                                        PRIMARY OUTPUT
                                    </span>
                                </div>
                            </div>
                            
                            <div className="w-px h-80 bg-tertiary-400" />
                            
                            <div className="flex flex-1 flex-col gap-2 items-start">
                                <div className="flex h-24 items-center pl-6 py-6 w-full">
                                    <span className="flex-1 text-subheading font-medium text-secondary-200">
                                        {item.technicalFocus?.join(', ') || 'Not specified'}
                                    </span>
                                </div>
                                <div className="h-px bg-tertiary-400 w-full" />
                                <div className="flex h-24 items-center pl-6 py-6 w-full">
                                    <span className="flex-1 text-subheading font-medium text-secondary-200">
                                        {item.domain}
                                    </span>
                                </div>
                                <div className="h-px bg-tertiary-400 w-full" />
                                <div className="flex h-24 items-center pl-6 py-6 w-full">
                                    <span className="flex-1 text-subheading font-medium text-secondary-200">
                                        {item.primaryOutput || item.type}
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-6 items-start">
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

                    <div className="h-px bg-tertiary-400 w-full" />

                    {/* Related Research */}
                    {item.relatedResearch && item.relatedResearch.length > 0 && (
                        <div className="flex flex-col gap-8 items-start w-full">
                            <h2 className="text-subheading font-medium text-secondary-600">
                                RELATED RESEARCH
                            </h2>
                            <div className="flex flex-col gap-6 items-start w-full">
                                {item.relatedResearch.map((related, index) => (
                                    <div key={index} className="flex flex-col gap-4 items-start w-full">
                                        <Link 
                                            href={`/archive/${related.slug}`}
                                            className="text-subheading font-medium text-secondary-400 hover:text-secondary-200 transition-colors"
                                        >
                                            {related.title}
                                        </Link>
                                        <div className="flex gap-4 items-center justify-center">
                                            <span className="text-caption font-regular text-secondary-600 text-center">
                                                {related.type}
                                            </span>
                                            <div className="w-px h-4 bg-tertiary-400" />
                                            <span className="text-caption font-regular text-secondary-600 text-center">
                                                {related.date}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>

            <Footer />
        </div>
    )
}