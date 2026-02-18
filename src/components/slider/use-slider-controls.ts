import { animate, useMotionValue, useMotionValueEvent } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const SPRING_CONFIG = {
    type: "spring" as const,
    stiffness: 300,
    damping: 30,
};

export function useSliderControls() {
    const trackRef = useRef<HTMLDivElement | null>(null);
    const x = useMotionValue(0);
    
    const [isFirst, setIsFirst] = useState(true);
    const [isLast, setIsLast] = useState(false);

    const getSnapPoints = () => {
        const track = trackRef.current;
        if (!track) return [];

        const items = Array.from(track.children) as HTMLElement[];
        const trackWidth = track.clientWidth;
        const maxScroll = Math.max(0, track.scrollWidth - trackWidth);

        const points = items.map((item, index) => {
            const itemLeft = item.offsetLeft;
            const target = index === items.length - 1
                ? itemLeft - (trackWidth - item.offsetWidth)
                : itemLeft;

            return Math.max(0, Math.min(target, maxScroll));
        });

        return Array.from(new Set(points)).sort((a, b) => a - b);
    };

    const updateFlags = (latestX: number) => {
        const points = getSnapPoints();
        if (points.length === 0) return;

        const current = -latestX;
        
        const closestIndex = points.reduce((bestIdx, curr, idx) => {
            return Math.abs(curr - current) < Math.abs(points[bestIdx] - current) ? idx : bestIdx;
        }, 0);

        setIsFirst(closestIndex === 0);
        setIsLast(closestIndex === points.length - 1);
    };

    useMotionValueEvent(x, "change", (latest) => {
        updateFlags(latest);
    });

    useEffect(() => {
        updateFlags(x.get());
    }, []);

    const scrollTo = (target: number) => {
        animate(x, -target, SPRING_CONFIG);
    };

    const snapToNearest = () => {
        const points = getSnapPoints();
        if (points.length === 0) return;

        const current = -x.get();
        const closest = points.reduce((prev, curr) =>
            Math.abs(curr - current) < Math.abs(prev - current) ? curr : prev
        );

        scrollTo(closest);
    };

    const next = () => {
        const points = getSnapPoints();
        const current = -x.get();
        const closestIndex = points.reduce((bestIdx, curr, idx) => {
            return Math.abs(curr - current) < Math.abs(points[bestIdx] - current) ? idx : bestIdx;
        }, 0);

        if (closestIndex < points.length - 1) {
            scrollTo(points[closestIndex + 1]);
        }
    };

    const prev = () => {
        const points = getSnapPoints();
        const current = -x.get();
        const closestIndex = points.reduce((bestIdx, curr, idx) => {
            return Math.abs(curr - current) < Math.abs(points[bestIdx] - current) ? idx : bestIdx;
        }, 0);

        if (closestIndex > 0) {
            scrollTo(points[closestIndex - 1]);
        }
    };

    return { trackRef, x, snapToNearest, prev, next, isFirst, isLast };
}
