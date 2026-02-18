import clsx from "clsx";
import { motion } from "framer-motion";
import { type ReactNode } from "react";
import type { SliderControlsType } from "./types";


interface SliderProps {
    children: ReactNode;
    controls: SliderControlsType
    className?: string;
    gap?: number;
}

export function Slider({ children, controls, className }: SliderProps) {
    const { snapToNearest, trackRef, x } = controls;

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

