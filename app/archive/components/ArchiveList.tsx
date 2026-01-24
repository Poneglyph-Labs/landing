import Link from 'next/link'
import { ArchiveItem } from '../data/archiveData'
import { ArchiveItemCard } from './ArchiveItemCard'

interface ArchiveListProps {
    items: ArchiveItem[]
}

export function ArchiveList({ items }: ArchiveListProps) {
    if (items.length === 0) {
        return (
            <div className="border border-tertiary-400 flex flex-col items-center justify-center py-20 w-full">
                <p className="text-h4 font-medium text-secondary-600">
                    No research artifacts found
                </p>
                <p className="text-body1 font-regular text-secondary-600 mt-4">
                    Try adjusting your search criteria or filters
                </p>
            </div>
        )
    }

    return (
        <div className="border border-tertiary-400 flex flex-col items-start w-full">
            {items.map((item, index) => (
                <div key={item.id}>
                    <Link href={`/archive/${item.slug}`} className="block w-full">
                        <ArchiveItemCard item={item} />
                    </Link>
                    {index < items.length - 1 && (
                        <div className="h-px bg-tertiary-400 w-full" />
                    )}
                </div>
            ))}
        </div>
    )
}