import type { ReactNode } from "react";
import { Card } from "../ui/card";

interface Props {
    headerText?: string;
    title?: string;
    description?: string;
    children?: ReactNode;
}

export function DirectionCard({ headerText, title, description, children }: Props) {
    return (
        <Card $variant="directionCard">
            {children && <div className="hidden xl:flex absolute inset-0 h-full w-full">
                <div className="h-full w-full flex relative">
                    {children}
                </div>
            </div>}
            <p className="number">{headerText}</p>
            <div className="flex flex-col gap-[1.17188vw] xl:max-w-[40.234375vw]">
                <h3 className="h4">{title}</h3>
                <p className="text2 hidden md:block">{description}</p>
            </div>
        </Card>
    )
}