import { Link } from '@tanstack/react-router'
import type { ReactNode } from 'react'

interface Props {
    to: string
    children: (params: { isActive: boolean }) => ReactNode
    className?: string
}

const defaultClassName = "group text-[calc(0.3rem+0.5vw)] lowercase inline-block"

export const SimpleLink = ({ to, children, className = defaultClassName }: Props) => {
    return (
        <Link
            to={to}
            className={className}
            // activeProps={{ className: "active pointer-events-none" }}
            activeOptions={{ exact: false }}
        >
             {({ isActive }) => children({ isActive })}
        </Link>
    )
}

export const LinkUnderline = ({
    label,
    isActive
  }: {
    label: string
    isActive: boolean
  }) => (
    <>
      <span>{label}</span>
      <div
        className={`
          h-[0.5px] bg-white mt-0
          origin-left
          transition-transform duration-500 ease-in-out
          ${isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}
        `}
      />
    </>
  )

  