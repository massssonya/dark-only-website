import { Link } from "@tanstack/react-router"
import type { ReactNode } from "react"

const defaultStyleLinkButton = `
                                min-w-12 h-12 flex justify-center items-center p-4 rounded-2xl bg-black hover:bg-emerald-300 hover:scale-[1.05]
                                font-bold text-[calc(0.4rem+0.5vw)] text-white hover:text-black  
                                cursor-pointer transition duration-300
                                `

export const LinkHrefButton = ({ children, href, className = defaultStyleLinkButton }: {
    children: ReactNode,
    href: string,
    className?: string
}) => {
    return (
        <a
            target="_blank"
            href={href}
            className={className}>
            {children}
        </a>
    )
}

export const LinkButton = ({ children, to, className = defaultStyleLinkButton }: {
    children: ReactNode,
    to: string,
    className?: string
}) => {
    return (
        <Link
            to={to}
            className={className}>
            {children}
        </Link>
    )
}

