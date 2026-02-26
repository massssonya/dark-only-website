import { type Variants, type MotionProps } from "framer-motion";

// --- ГРУППА: ВАРИАНТЫ (для каскадных анимаций) ---
export const VARIANTS = {
    STAGGER_CONTAINER: {
        hidden: {},
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.1,
            },
        },
    } as Variants,
    FADE_UP_ITEM: {
        hidden: {
            opacity: 0,
            y: 100
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.4,
                ease: "easeOut",
            },
        },
    } as Variants,
} satisfies Record<string, Variants>;

// --- ГРУППА: ПРЕСЕТЫ (для одиночных элементов) ---
export const PRESETS = {
    fadeUp: (delay = 0): MotionProps => ({
        initial: { opacity: 0, y: 50 },
        animate: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.6, delay }
    }),
    scaleInLeft: (delay = 0): MotionProps => ({
        initial: { scale: 0, marginLeft: -20 },
        animate: { scale: 1, marginLeft: 0 },
        viewport: { once: true },
        transition: { duration: 0.7, delay }
    }),
    fadeIn: (delay = 0): MotionProps => ({
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { duration: .7, delay }
    }),
    scaleFlyUp: (delay = 0): MotionProps => ({
        initial: { opacity: 0, scale: 0, y: 200 },
        animate: { opacity: 1, scale: 1, y: 0  },
        transition: { duration: .7, delay }
    }),

} satisfies Record<string, MotionProps | ((...args: any[]) => MotionProps)>;