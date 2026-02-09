import clsx from "clsx"
import { type ReactNode, type HTMLAttributes } from "react"

interface Props extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode,
    className?: string
}

export function Card({ children, className, ...props }: Props) {
    return (
        <div
            {...props}
            className={clsx("", className)}>
            {children}
        </div>
    )
}