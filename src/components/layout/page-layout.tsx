import clsx from "clsx";
import { forwardRef, type ReactNode } from "react";

const baseStyleComponent = 'px-[15px] md:px-[25px] xl:px-7'

interface PageLayoutBaseProps<T = HTMLDivElement>
    extends React.HTMLAttributes<T> {
    children: ReactNode;
    className?: string;
}


export const PageLayout = forwardRef<HTMLDivElement, PageLayoutBaseProps>(
    ({ className, children, ...props }, ref) => (
        <div
            ref={ref}
            {...props}
            className={clsx(className, baseStyleComponent)}
        >
            {children}
        </div>
    )
);