import type { ButtonHTMLAttributes, ReactNode } from "react"
import clsx from "clsx"

interface Props {
  children: ReactNode
}

type ButtonVariant = "primary" | "link"

const styles = {
  base: `
        font-medium text-nowrap text-black rounded-xl cursor-pointer 
        xl:px-18 xl:py-5 xl:text-md
        md:w-fit md:px-12 md:py-3 md:text-sm
        w-full py-3 px-6 text-sm
        transition-all duration-300 hover:rounded-4xl hover:scale-[1.07] 
        `,
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