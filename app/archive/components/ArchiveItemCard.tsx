import { ArchiveItem } from '../data/archiveData'
import { Icon } from '../../../components/ui/Icon'

interface ArchiveItemCardProps {
    item: ArchiveItem
}

export function ArchiveItemCard({ item }: ArchiveItemCardProps) {
    const getDomainColor = (domain: string) => {
        switch (domain) {
            case 'Cryptography':
                return 'border-tertiary-400 text-secondary-200'
            case 'Decentralized System':
                return 'border-tertiary-400 text-secondary-200'
            case 'Artificial Intelligence':
                return 'border-tertiary-400 text-secondary-200'
            default:
                return 'border-tertiary-400 text-secondary-200'
        }
    }

    const getTypeColor = (type: string) => {
        switch (type) {
            case 'Paper':
                return 'bg-primary-800 text-secondary-200'
            case 'Audit':
                return 'bg-primary-800 text-secondary-200'
            case 'Repository':
                return 'bg-primary-800 text-secondary-200'
            case 'Proof of Concept':
                return 'bg-primary-800 text-secondary-200'
            default:
                return 'bg-primary-800 text-secondary-200'
        }
    }

    return (
        <div className="flex flex-col gap-10 items-start p-8 w-full hover:bg-primary-800/20 transition-colors">
            <div className="flex flex-col items-start w-full">
                <div className="flex items-center justify-between w-full">
                    <h2 className="flex-1 text-h4 font-medium font-space-grotesk text-white tracking-tight">
                        {item.title}
                    </h2>
                    <div className="flex gap-4 items-center">
                        <div className={`flex flex-col items-center justify-center p-2 ${getTypeColor(item.type)}`}>
                            <span className="text-caption font-medium text-center">
                                {item.type}
                            </span>
                        </div>
                        <span className="text-body2 font-medium text-secondary-400 tracking-tight">
                            {item.date}
                        </span>
                    </div>
                </div>
            </div>

            <p className="text-body2 font-regular text-tertiary-400 tracking-tight w-full">
                {item.description}
            </p>

            <div className="flex items-center w-full">
                <div className="flex flex-1 gap-28 items-center">
                    <div className={`border border-tertiary-400 flex flex-col items-center justify-center px-3 py-2 ${getDomainColor(item.domain)}`}>
                        <span className="text-body1 font-regular text-center">
                            {item.domain}
                        </span>
                    </div>
                </div>

                <div className="flex gap-8 items-center">
                    {item.links.code && (
                        <div className="flex gap-2 items-end">
                            <Icon name="github" size={24} className="text-secondary-600" />
                            <span className="text-body2 font-regular text-secondary-600">
                                Code
                            </span>
                        </div>
                    )}
                    {item.links.demo && (
                        <div className="flex gap-2 items-end">
                            <span className="text-subheading font-medium text-secondary-600">
                            </span>
                            <span className="text-body2 font-regular text-secondary-600">
                                Demo
                            </span>
                        </div>
                    )}
                    {item.links.pdf && (
                        <div className="flex gap-2 items-end">
                            <Icon name="mail" size={24} className="text-secondary-600" />
                            <span className="text-body2 font-regular text-secondary-600">
                                PDF
                            </span>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}