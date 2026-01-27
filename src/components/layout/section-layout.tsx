import clsx from "clsx"
import type { ReactNode } from "react"

interface Props {
    title: ReactNode,
    description: ReactNode,
    content: ReactNode,
    className?: string
}

function SectionLayout({ title, description, content, className }: Props) {
    return (
        <div className={clsx("relative ", className)}>
            <div className="
                            border-t grid md:grid-cols-2 
                            ">
                
                <SectionLayout.Title>
                    {title}
                </SectionLayout.Title>
                <SectionLayout.Description>
                    {description}
                </SectionLayout.Description>
            </div>
            <SectionLayout.Content>
                {content}
            </SectionLayout.Content>
        </div>
    )
}

const Title = ({ children }: { children: ReactNode }) => {
    return (
        <div className="pt-[2.78vw]">
            <h2 className="h6 lowercase text-[1rem]">{children}</h2>
        </div>
    )
}

const Description = ({ children }: { children: ReactNode }) => {
    return (
        <div className="pt-[2.78vw] md:pl-[2.78vw] md:border-l">
            {children}
        </div>
    )
}

const Content = ({ children }: { children: ReactNode }) => {
    return (
        <div className="">
            <h2>{children}</h2>
        </div>
    )
}

SectionLayout.Title = Title;
SectionLayout.Description = Description;
SectionLayout.Content = Content;

export default SectionLayout;