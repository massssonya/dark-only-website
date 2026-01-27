import { createContext, useContext, type ReactNode } from "react";
import { useMediaQuery } from "../hooks/use-media-query";

type MediaQueryState = {
    isTablet: boolean,
    isMobile: boolean
}

const MediaQueryContext = createContext<MediaQueryState | undefined>(undefined)

export function MediaQueryStateProvider({ children }: { children: ReactNode }) {
    const isMobile = useMediaQuery('(max-width: 768px)')
    const isTablet = useMediaQuery('(max-width: 1280px)')

    return (
        <MediaQueryContext.Provider value={{ isMobile, isTablet }}>
            {children}
        </MediaQueryContext.Provider>
    )
}

export function useMediaQueryState() {
    const context = useContext(MediaQueryContext)
    if (context === undefined) {
        throw new Error('useMediaQueryState must be used within a MediaQueryStateProvider')
    }
    return context
}