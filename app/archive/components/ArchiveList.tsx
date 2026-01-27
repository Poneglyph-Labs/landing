import { ArchiveItem } from '../data/archiveData'
import { ArchiveItemCard } from './ArchiveItemCard'

interface ArchiveListProps {
    items: ArchiveItem[]
}

export function ArchiveList({ items }: ArchiveListProps) {
    if (items.length === 0) {
        return (
            <div className="border-tertiary-400 flex w-full flex-col items-center justify-center border py-20">
                <p className="text-h4 text-secondary-600 font-medium">
                    No research artifacts found
                </p>
                <p className="text-body1 font-regular text-secondary-600 mt-4">
                    Try adjusting your search criteria or filters
                </p>
            </div>
        )
    }

    return (
        <div className="border-tertiary-400 flex w-full flex-col items-start border">
            {items.map((item) => (
                <div
                    key={item.id}
                    className="border-tertiary-400 w-full border-b last:border-b-0"
                >
                    <ArchiveItemCard item={item} />
                </div>
            ))}
        </div>
    )
}
