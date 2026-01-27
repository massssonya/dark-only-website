import { createFileRoute } from '@tanstack/react-router'
import { HeroSection } from './sections/hero-section'
import { ProjectSection } from './sections/project-section'
import { ClientSection } from './sections/client-section'
import { LargeProjectSection } from './sections/large-project-section'
import { WorkDirectionsSection } from './sections/work-directions-section'
import { AwardsSection } from './sections/awards-section'


export const Route = createFileRoute('/')({
  component: Index
})

function Index() {

  return (
    <>
      <HeroSection />
      <ProjectSection />
      <ClientSection />
      <LargeProjectSection />
      <WorkDirectionsSection />
      <AwardsSection />
    </>
  )
}

