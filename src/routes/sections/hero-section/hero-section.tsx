import { useState } from 'react'
import { motion } from "framer-motion"
import { useScrollSection } from "./use-scroll-section"
import { Video } from "./video"
import { DesktopHeroSectionBottom, MobileHeroSectionBottom, TabletHeroSectionBottom } from "./hero-section-bottom"
import { HeroSectionTop } from "./hero-section-top"
import { Container } from '../../../components/ui/layout'


export function HeroSection() {
  const [isHoverVideo, setHoverVideo] = useState(false)
  const {
    handleScroll,
    sectionRef,
    translateY,
    videoHeight,
    videoWidth,
    isTablet,
    isMobile,
    isDesktop
  } = useScrollSection()


  return (
    <section ref={sectionRef}>
      <Container>
        <div className='relative'>
          <div className="
                      absolute top-0 left-1/2 w-px hidden h-full bg-white/50
                      md:block md:h-[172px]
                      xl:block xl:h-[13.194vw]
                      "
          />
          <div className="
                      h-[max(700px,100vh)] max-w-full
                      md:h-[max(970px,100vh)]
                      xl:h-[200vh]
                      ">
            <div className='
                        absolute top-0 left-0 w-full h-full
                        xl:sticky xl:h-[100dvh]'>
              <div className='
                        w-full xl:min-h-screen h-full flex flex-col justify-between 
                        pt-[82px]
                        md:pt-[102px]
                        xl:absolute xl:inset-0 xl:pt-[calc(3.90625vw+4.0625vw)]
                        '>
                <HeroSectionTop translateY={translateY} />
                <div className='
                            flex justify-center items-center w-full
                            xl:absolute xl:inset-0
                            '>
                  <Video
                    isVisibleCursor={isHoverVideo && isDesktop}
                    handleScroll={handleScroll}
                    setVisibleCursor={setHoverVideo}
                    videoHeight={videoHeight}
                    videoWidth={videoWidth}
                  />
                </div>
                <motion.div
                  initial={{
                    opacity: 0,
                    filter: "blur(6px)"
                  }}
                  animate={{
                    opacity: 1,
                    filter: "blur(0px)"
                  }}
                  transition={{
                    delay: 0.3,
                    duration: 0.8
                  }}
                >
                  {isMobile
                    ? <MobileHeroSectionBottom translateY={translateY} />
                    : isTablet
                      ? <TabletHeroSectionBottom translateY={translateY} />
                      : <DesktopHeroSectionBottom translateY={translateY} />
                  }
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}