import { createContext, useContext, type ReactNode } from "react";
import { useScrollState } from "../hooks/use-scroll-state";

type ScrollState = ReturnType<typeof useScrollState>

const ScrollContext = createContext<ScrollState | undefined>(undefined)

export function ScrollStateProvider({ children }: { children: ReactNode }) {
    const scrollState = useScrollState()

    return (
        <ScrollContext.Provider value={scrollState}>
            {children}
        </ScrollContext.Provider>
    )
}

export function useSharedScrollState() {
    const context = useContext(ScrollContext)
    if (context === undefined) {
        throw new Error('useSharedScrollState must be used within a ScrollStateProvider')
    }
    return context
}