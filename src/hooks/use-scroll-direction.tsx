import { useMotionValueEvent, useScroll } from "framer-motion"
import { useState } from "react"

export const useScrollDirection = () => {
    const [scrollDirection, setScrollDirection] = useState<"up" | "down">("up")
    const { scrollY } = useScroll()

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious()
        if (!previous) return
        latest > previous ? setScrollDirection("down") : setScrollDirection("up")
    })

    return { scrollDirection, setScrollDirection }
}