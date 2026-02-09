import styled from "@emotion/styled"
import clsx from "clsx"
import type { ReactNode } from "react"

const defaultStyleLinkButton = `
                                relative 
                                min-w-12 h-12 flex justify-center items-center p-1 rounded-2xl bg-black 
                                font-bold text-white text-[.8125rem]
                                cursor-pointer transition duration-300 hover:text-black hover:bg-emerald-300 hover:scale-[1.05]
                                xl:text-[calc(0.4rem+0.5vw)]
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

export const LinkHrefWithUnderlineButton = ({ children, icon, href, className }: {
    children: ReactNode,
    href: string,
    icon?: ReactNode,
    className?: string
}) => {
    return (
        <a
            target="_blank"
            href={href}
            className={clsx("text-nowrap border-b border-white w-fit transition duration-300 hover:text-gray-400 hover:border-gray-400", className)}>
            {icon}
            {children}
        </a>
    )
}

export const LinkHrefWithoutUnderlineButton = ({ children, href, className }: {
    children: ReactNode,
    href: string,
    className?: string
}) => {
    return (
        <a
            target="_blank"
            href={href}
            className={clsx('w-fit transition duration-300 hover:text-gray-400 hover:border-gray-400', className)}>
            {children}
        </a>
    )
}

// export const LinkButton = ({ children, to, leftText, className }: {
//     children: ReactNode,
//     to: string,
//     leftText?: string | number,
//     className?: string
// }) => {
//     return (
//         <Link
//             to={to}
//             className={clsx(defaultStyleLinkButton, className)}>
//             {leftText &&
//                 <p className="h7 absolute top-1/2 -translate-y-1/2 left-0 -translate-x-full pr-2 text-white">
//                     {leftText}
//                 </p>
//             }

//             {children}
//         </Link>
//     )
// }

const variants = {
    base: ``,
    changeColor: `
        color: oklch(87.2% 0.01 258.338);
    `,
    scale: `
        color: oklch(87.2% 0.01 258.338);
        :hover {
            color: white;
            span:has(svg){
                scale: 1.1;
            }
        }
        
    `
}

interface Props {
    $variant?: keyof typeof variants;
}

export const LinkButton = styled.a<Props>`
${({ $variant = 'base' }) => {
        const v = variants[$variant]
        return `
      ${v}
      display: flex;
      align-items: center;
      cursor: pointer;
      transition: all 0.3s ease;
  `
    }
    }
`