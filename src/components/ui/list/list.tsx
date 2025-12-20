import { motion, type Variants } from 'framer-motion'
import type { ReactNode } from 'react'

interface Props {
    children: ReactNode,
    variants: Variants,
    isOpen?: boolean,
    className?: string
}

export const List = ({ children, variants, isOpen = true, className }: Props) => {
    return (
        <motion.ul
            variants={variants}
            initial="hidden"
            animate={isOpen ? "exit" : "show"}
            className={className ?? "hidden xl:flex justify-center gap-8 pl-10"}
        >
            {children}
        </motion.ul>
    )
}