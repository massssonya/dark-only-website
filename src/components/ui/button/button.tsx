import type { ButtonHTMLAttributes, ReactNode } from "react"
import clsx from "clsx"

interface Props {
    children: ReactNode
}

type ButtonVariant = "primary" | "link"

const styles = {
  base: "w-[300px] px-22 py-5 font-medium text-nowrap text-md text-black rounded-xl hover:rounded-4xl cursor-pointer transition-all duration-300 hover:scale-[1.07]",
  primary: "bg-white hover:bg-black hover:text-white",
  link: "bg-emerald-300 text-black",
}

export const Button = ({
  children,
  variant = "primary",
  className,
  ...props
}: Props & ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant
}) => (
  <button
    {...props}
    className={clsx(styles.base, styles[variant], className)}
  >
    {children}
  </button>
)