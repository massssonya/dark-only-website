import { Card } from "../ui/card";

interface Props {
    headerText?: string;
    title?: string;
    description?: string
}

export function DirectionCard({ headerText, title, description }: Props) {
    return (
        <Card $variant="directionCard">
            <div className="hidden xl:flex absolute inset-0 h-full w-full">
                <div className="bg-red-200 h-full w-full flex relative">
                    
                </div>
            </div>
            <p className="number">{headerText}</p>
            <div className="flex flex-col gap-[1.17188vw] xl:max-w-[40.234375vw]">
                <h3 className="h4">{title}</h3>
                <p className="text2 hidden md:block">{description}</p>
            </div>
        </Card>
    )
}