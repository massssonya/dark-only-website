import type { Variants } from 'framer-motion'

export const headerVariants: Variants = {
    hidden: {
      y: -100,
      transition: { duration: 0.3 }
    },
    visible: {
      y: 0,
      transition: { duration: 0.3 }
    }
  }

export const createHeaderListVariants = (
    hasAnimatedOnce: boolean
): Variants => ({
    hidden: { opacity: 1 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            staggerChildren: hasAnimatedOnce ? 0 : 0.1,
            delayChildren: hasAnimatedOnce ? 0 : 0.3
        }
    },
    exit: {
        opacity: 0,
        y: -20,
        transition: { duration: 0.8 }
    }
})

export const headerLinkVariants: Variants = {
    hidden: { opacity: 0, y: -20 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.3 }
    }
}

export const headerMenuVariants: Variants = {
    hidden: { y: '-100vh', zIndex: 900 },
    show: {
        y: 0,
        zIndex: 900,
        transition: { delay: 0.4, duration: 0.5 }
    },
    exit: {
        y: '-100vh',
        transition: { duration: 0.5 }
    }
}