import { clientsConfig, type ClientKey } from "../../config/clients.config";
import { Card, HoverTarget } from "../ui/card";
import { Container, Grid } from "../ui/layout";

type Props = {
    id: string;
    img: string;
    sector: string;
    client: string;
}

export function ClientWithProjectsCard({ projects, clientId }: { projects: Props[], clientId: string }) {
    return (
        <Card
            $variant="clientWithProjectsCard"
            $hover="increaseRounded"
            className="relative"
        >
            <HoverTarget className="h-full">
                <Container className="h-full py-[25px]">
                    <div className="h-full flex flex-col justify-between">
                        <Grid base={{ columns: "repeat(4, 1fr)", gap: ".390625vw" }}>
                            {projects.slice(0, 4).map((project, i) => {
                                const isLastVisible = i === 3;
                                const remainingCount = projects.length - 4;

                                return (
                                    <Image
                                        key={project.id || i}
                                        src={project.img}
                                        numberLastProjects={isLastVisible && remainingCount > 0 ? remainingCount : undefined}
                                    />
                                );
                            })}
                        </Grid>
                        <Description
                            sector={projects[0].sector}
                            client={projects[0].client}
                        />
                    </div>
                </Container>
            </HoverTarget>
            <div className="absolute inset-0 -z-1 h-full w-full">
                <img
                    className="object-cover w-full h-full"
                    alt=""
                    src={clientsConfig[clientId as ClientKey].bg ?? clientsConfig.default.bg}
                />
            </div>
        </Card>
    );
}


const Image = ({
    src,
    numberLastProjects }:
    {
        src: string,
        numberLastProjects?: number
    }) => {
    return (
        <span className="relative aspect-square rounded-[.9375vw] overflow-hidden border">
            <img
                draggable={false}
                className="object-cover w-full h-full"
                src={src}
                alt=""
            />
            {
                numberLastProjects &&
                <div className="absolute inset-0 bg-black/30 flex justify-center items-center">
                    <span className="buttons">+ {numberLastProjects}</span>
                </div>
            }

        </span>
    );
};

const Description = ({ sector, client }: { sector: string; client: string }) => {
    return (
        <div className="text-[#0e0e0e99]">
            <span className="text4">{sector}</span>
            <div className="text-[#0e0e0e]">
                <h3 className="h4">{client}</h3>
                <p className="text2"></p>
            </div>
        </div>
    )
}