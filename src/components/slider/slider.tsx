import clsx from "clsx";
import { motion, useMotionValue, animate } from "framer-motion";
import { type ReactNode, useRef } from "react";

interface SliderProps {
    children: ReactNode;
    className?: string;
    gap?: number;
}

export function Slider({ children, gap = 16, className }: SliderProps) {
    const trackRef = useRef<HTMLDivElement | null>(null);
    const x = useMotionValue(0);

    const snapToNearest = () => {
        if (!trackRef.current) return;

        const track = trackRef.current;
        const items = Array.from(track.children) as HTMLElement[];

        const current = -x.get();

        const trackWidth = track.clientWidth;
        const maxScroll = track.scrollWidth - trackWidth;

        let closestTarget = 0;
        let minDistance = Infinity;

        items.forEach((item, index) => {
            const itemLeft = item.offsetLeft;

            const target =
                index === items.length - 1
                    ? itemLeft - (trackWidth - item.offsetWidth)
                    : itemLeft;

            const distance = Math.abs(current - target);

            if (distance < minDistance) {
                minDistance = distance;
                closestTarget = target;
            }
        });

        const clamped = Math.max(0, Math.min(closestTarget, maxScroll));

        animate(x, -clamped, {
            type: "spring",
            stiffness: 300,
            damping: 30,
        });
    };

    return (
        <div className={clsx("overflow-hidden", className)}>
            <motion.div
                ref={trackRef}
                drag="x"
                dragElastic={0.5}
                onDragEnd={snapToNearest}
                style={{ x }}
                className={clsx("flex gap-3 cursor-grab active:cursor-grabbing")}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
                {children}
            </motion.div>
        </div>
    );
}

