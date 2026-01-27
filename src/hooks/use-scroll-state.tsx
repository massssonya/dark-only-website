import { useMotionValueEvent, useScroll } from "framer-motion"
import { useState } from "react"

export const useScrollState = () => {
    const [scrollDirection, setScrollDirection] = useState<"up" | "down">("up")
    const { scrollY, scrollYProgress } = useScroll()

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious()
        if (!previous) return
        latest > previous ? setScrollDirection("down") : setScrollDirection("up")
    })

    return { scrollDirection, setScrollDirection, scrollY, scrollYProgress }
}