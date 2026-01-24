import { ArchiveItem } from '../data/archiveData'
import { Icon } from '../../../components/ui/Icon'

interface ArchiveItemCardProps {
    item: ArchiveItem
}

export function ArchiveItemCard({ item }: ArchiveItemCardProps) {
    return (
        <div className="hover:bg-primary-800/20 flex w-full flex-col items-start gap-10 px-8 py-8 transition-colors">
            {/* Header with title, type tag, and date */}
            <div className="flex w-full flex-col items-start">
                <div className="flex w-full items-center justify-between">
                    <h2 className="text-h4 font-space-grotesk flex-1 pr-4 leading-none font-medium tracking-[-0.28px] text-white">
                        {item.title}
                    </h2>
                    <div className="flex shrink-0 items-center gap-4">
                        <div className="bg-primary-800 flex flex-col items-center justify-center p-2">
                            <span className="text-caption text-secondary-200 text-center font-medium">
                                {item.type}
                            </span>
                        </div>
                        <span className="text-body2 leading-none font-medium tracking-[-0.18px] text-[rgba(229,229,229,0.8)]">
                            {item.date}
                        </span>
                    </div>
                </div>
            </div>

            {/* Description */}
            <p className="text-body2 font-regular text-tertiary-400 w-full leading-none tracking-[-0.18px]">
                {item.description}
            </p>

            {/* Bottom row with domain tag and external links */}
            <div className="flex w-full items-center justify-between">
                <div className="flex items-center">
                    <div className="border-tertiary-400 border-opacity-50 flex flex-col items-center justify-center border px-3 py-2">
                        <span className="text-body1 font-regular text-secondary-200 text-center">
                            {item.domain}
                        </span>
                    </div>
                </div>

                <div className="flex items-center gap-8">
                    {item.links.code && (
                        <a
                            href={item.links.code}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-end gap-2 transition-opacity hover:opacity-80"
                        >
                            <Icon
                                name="code"
                                size={24}
                                className="text-secondary-600"
                            />
                            <span className="text-body2 font-regular text-secondary-600 leading-none">
                                Code
                            </span>
                        </a>
                    )}
                    {item.links.pdf && (
                        <a
                            href={item.links.pdf}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-end gap-2 transition-opacity hover:opacity-80"
                        >
                            <Icon
                                name="pdf"
                                size={24}
                                className="text-secondary-600"
                            />
                            <span className="text-body2 font-regular text-secondary-600 leading-none">
                                PDF
                            </span>
                        </a>
                    )}
                    {item.links.demo && (
                        <a
                            href={item.links.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-end gap-2 transition-opacity hover:opacity-80"
                        >
                            <Icon
                                name="demo"
                                size={24}
                                className="text-secondary-600"
                            />
                            <span className="text-body2 font-regular text-secondary-600 leading-none">
                                Demo
                            </span>
                        </a>
                    )}
                </div>
            </div>
        </div>
    )
}
