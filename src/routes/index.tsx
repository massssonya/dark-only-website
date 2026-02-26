import { createFileRoute } from '@tanstack/react-router'
import { HeroSection } from './sections/hero-section'
import { ProjectSection } from './sections/project-section'
import { ClientSection } from './sections/client-section/client-section'
import { LargeProjectSection } from './sections/large-project-section'
import { WorkDirectionsSection } from './sections/work-directions-section'
import { AwardsSection } from './sections/awards-section'
import { BannerSection } from './sections/banner-section'
import { useMediaQueryState } from '../providers/media-query-provider'

export const Route = createFileRoute('/')({
  component: Index
})

function Index() {
  const { isMobile } = useMediaQueryState()


  return (
    <>
      <HeroSection />
      <ProjectSection isMobile={isMobile} />
      <ClientSection />
      <LargeProjectSection isMobile={isMobile} />
      <WorkDirectionsSection />
      {!isMobile && <BannerSection />}
      <AwardsSection />
    </>
  )
}

