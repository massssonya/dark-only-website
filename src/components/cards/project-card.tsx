import { Card, HoverTarget } from "../ui/card";
import { TextComponent } from "../ui/text";


interface Props {
    title: string;
    client: string;
    description: string;
    img: string;
    tags: string[]
}

export function ProjectCard({ img, client, title, description, tags }: Props) {
    return (
        <Card
            $variant="projectCard"
            $onlyHoverTarget={true}
            draggable={false}
            onDragStart={(e) => e.preventDefault()}
            className="select-none"
        >
            <div className="flex flex-col gap-[20px]">
                <HoverTarget className="aspect-square">
                    <img
                        draggable={false}
                        onDragStart={(e) => e.preventDefault()}
                        className="object-cover w-full h-full select-none pointer-events-none"
                        src={img}
                        alt="" />
                </HoverTarget>
                <div className="
                                flex flex-col pl-[10px]
                                md:pl-[15px]
                                xl:pl-[1.171875vw]
                                "
                >
                    <TextComponent as="span" className="text4 mb-[8px] text-gray-300" >{client}</TextComponent>
                    <TextComponent as="h3" className="h4" >{title}</TextComponent>
                    <TextComponent as="p" className="text3 pt-[8px] text-gray-300" >{description}</TextComponent>
                    <div className="
                                    flex flex-wrap gap-2 mt-[12px]
                                    md:mt-[15px]
                                    xl:mt-[1.171875vw]
                                    "
                    >
                        {tags.map(tag => (
                            <Tag description={tag} key={tag} />
                        ))}
                    </div>
                </div>

            </div>
        </Card>
    )
}

const Tag = ({ description }: { description: string }) => {
    return (
        <div className="
                        border rounded-full  text-nowrap px-2 py-1
                        md:px-[1.09375vw] md:py-[0.390625vw]
                        ">
            <TextComponent className="text4">{description}</TextComponent>
        </div>
    )
}