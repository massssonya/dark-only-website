import clsx from "clsx";
import { createElement, type ReactNode, type ElementType, type ComponentPropsWithoutRef } from "react";

interface Props<T extends ElementType> {
    as?: T;
    children?: ReactNode;
}

export function TextComponent<T extends ElementType = 'p'>({
    as,
    children,
    ...props
}: Props<T> & Omit<ComponentPropsWithoutRef<T>, keyof Props<T>>) {
    const Component = as || 'p';

    return createElement(Component, props, children);
}

export function CaptionText({ children, className }: { children: ReactNode, className?: string }) {
    return (
        <TextComponent className={clsx('captions', className)} as="span">
            {children}
        </TextComponent>
    )
}

export function AdditionalText({ children }: { children: ReactNode }) {
    return (
        <TextComponent className="
                                min-h-[22px] px-[12px] py-[3px] 
                                flex justify-center items-center 
                                bg-[#00FFA9] rounded-xl
                                text-black captions leading-[110%] text-nowrap
                                ">
            {children}
        </TextComponent>
    )
}

export function LinkText({ children, href }: { children: ReactNode, href: string }) {
    return (
        <TextComponent
            as="a"
            href={href}
            className="
                        border-b border-white w-fit 
                        transition duration-300 hover:text-gray-400 hover:border-gray-400 
                        text-[1rem] 
                        xl:text-[calc(0.6rem+0.5vw)]
                        ">
            {children}
        </TextComponent>
    )
}