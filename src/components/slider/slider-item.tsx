import clsx from "clsx";
import type { ReactNode } from "react";

interface SliderItemProps {
    children: ReactNode;
    className?: string;
    width?: number
}

export function SliderItem({ children, className }: SliderItemProps) {
    return (
        <div className={clsx(className)}>
            {children}
        </div>
    );
}