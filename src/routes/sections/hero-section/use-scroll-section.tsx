import { animate, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { useMediaQueryState } from "../../../providers/media-query-provider";

export function useScrollSection() {
  const { isMobile, isTablet, isDesktop } = useMediaQueryState()
  const sectionRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
    axis: "y"
  })

  const smoothProgress = useSpring(
    scrollYProgress,
    {
      stiffness: 60,
      damping: 20,
      mass: 0.5
    }
  )

  const translateYTransform = useTransform(smoothProgress, [0, 1], ["0%", "-150%"])
  const videoWidthTransform = useTransform(scrollYProgress, [0, 1], ["30%", "100%"])
  const videoHeightTransform = useTransform(scrollYProgress, [0, 1], ["30%", "90%"])

  const translateY = (isTablet || isMobile) ? "0px" : translateYTransform
  const videoWidth = isMobile ? "100%" : isTablet ? "416px" : videoWidthTransform
  const videoHeight = isMobile ? "235px" : isTablet ? "auto" : videoHeightTransform

  const handleScroll = () => {
    if (sectionRef.current) {
      const elementTop = sectionRef.current.offsetTop;
      const elementHeight = sectionRef.current.offsetHeight;
      const targetPosition = elementTop + elementHeight - window.innerHeight;

      animate(
        window.scrollY,
        targetPosition, {
        type: "spring",
        stiffness: 100,
        damping: 20,
        onUpdate: (latest) => window.scrollTo(0, latest),
      });
    }
  };

  return {
    sectionRef, handleScroll, translateY, videoWidth, videoHeight, isTablet, isMobile, isDesktop
  }
}