import { HeroSection } from '../components/sections/HeroSection'
import { EngagementModels } from '../components/sections/EngagementModels'
import { ResearchArchive } from '../components/sections/ResearchArchive'
import { ProjectsSection } from '../components/sections/ProjectsSection'
import { TechnicalPillars } from '../components/sections/TechnicalPillars'
import { RecentDispatches } from '../components/sections/RecentDispatches'
import { ContactSection } from '../components/sections/ContactSection'
import { StructuredData } from '../components/seo/StructuredData'
import { getArchiveItems } from '../lib/archive-server'

export default function Home() {
    // Get archive items from MDX files
    const archiveItems = getArchiveItems()

    return (
        <>
            <StructuredData />
            <div className="bg-primary-900 min-h-screen">
                <HeroSection />
                {/* <ActivitySignals /> */}
                <EngagementModels />
                <ResearchArchive items={archiveItems} />
                <ProjectsSection />
                <TechnicalPillars />
                <RecentDispatches />
                <ContactSection />
            </div>
        </>
    )
}
