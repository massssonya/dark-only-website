import clsx from "clsx"
import type { ReactNode } from "react"
import { Container } from "../ui/layout"

interface Props {
    title: ReactNode,
    description: ReactNode,
    content: ReactNode,
    className?: string
}

function SectionLayout({ title, description, content, className }: Props) {
    return (
        <div className={clsx("relative md:flex md:flex-col md:gap-[5.5vw]", className)}>
            <div className="relative grid md:grid-cols-2">
                <Container className="absolute">
                    <hr className="h-px w-full bg-white" />
                </Container>
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
        <Container className="mb-[24px] pt-[20px] md:pt-[2.78vw]">
            <h2 className="h6 lowercase text-[1rem]">{children}</h2>
        </Container>
    )
}

const Description = ({ children }: { children: ReactNode }) => {
    return (
        <Container className="pt-[2.78vw] md:border-l">
            {children}
        </Container>
    )
}

const Content = ({ children }: { children: ReactNode }) => {
    return (
        <div className="">
            {children}
        </div>
    )
}

SectionLayout.Title = Title;
SectionLayout.Description = Description;
SectionLayout.Content = Content;

export default SectionLayout;