import { createContext, useContext, type ReactNode } from "react";
import { useMediaQuery } from "../hooks/use-media-query";

type MediaQueryState = {
    isTablet: boolean,
    isMobile: boolean,
    isDesktop: boolean
}

const MediaQueryContext = createContext<MediaQueryState | undefined>(undefined)

export function MediaQueryStateProvider({ children }: { children: ReactNode }) {
    const isMobile = useMediaQuery('(max-width: 767px)');
    const isTablet = useMediaQuery('(min-width: 768px) and (max-width: 1279px)');
    const isDesktop = useMediaQuery('(min-width: 1280px)');

    return (
        <MediaQueryContext.Provider value={{ isMobile, isTablet, isDesktop }}>
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