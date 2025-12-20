import { useState } from 'react'

export const useHeaderAnimationState = () => {
    const [hasAnimatedOnce, setHasAnimatedOnce] = useState(false)

    const markAnimated = () => {
        if (!hasAnimatedOnce) {
            setHasAnimatedOnce(true)
        }
    }

    return {
        hasAnimatedOnce,
        markAnimated
    }
}