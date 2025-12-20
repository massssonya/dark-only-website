import { useLocation } from "@tanstack/react-router"
import { useState } from "react"

export function useHoveredLink() {
    const location = useLocation()
    const [hoveredLink, setHoveredLink] = useState<string | null>(null)

    const changeHoveredLink = (link: string) => setHoveredLink(link)

    const displayedLink = hoveredLink ?? location.pathname

    return {
        displayedLink,
        changeHoveredLink
    }
}