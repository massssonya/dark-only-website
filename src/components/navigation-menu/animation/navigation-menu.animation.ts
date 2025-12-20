import type { Variants } from "framer-motion"

export const navMenuVariants: Variants = {
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

export const listVariants: Variants = {
    hidden: { opacity: 1, x: 1000, },
    show: {
        opacity: 1,
        x: 0,
        transition: {
            staggerChildren: .1,
            delayChildren: .9,
        }
    },
    exit: {
        opacity: 1,
        transition: {
            duration: 0.8,
            staggerChildren: 0
        }
    }
}

export const navLinkVariants: Variants = {
    hidden: {
        x: 40,
        opacity: 0
    },
    show: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 0.4
        }
    }
}