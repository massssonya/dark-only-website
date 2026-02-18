import { Container, Grid } from "../../../components/ui/layout";
import { Button } from "../../../components/ui/button";
import { useProjects } from "../../../entities/projects/hooks/use-projects";
import { ProjectCard } from "../../../components/cards";
import { MobileCardSliders } from "./card-sliders";
import type { Project } from "../../../entities/projects/model/types";


export function Content({ isMobile }: { isMobile: boolean }) {
    const { projects, groupedProjectsByFilter } = useProjects()

    return (
        <div className="flex flex-col items-center">
            <Container>
                <Grid
                    className="w-full"
                    base={{ columns: "1fr", rowGap: "50px", columnGap: "20px" }}
                    md={{ columns: "1fr 1fr" }}
                    xl={{ columns: "1fr 1fr 1fr" }}
                >
                    {isMobile
                        ? <MobileCardSliders groupedCards={groupedProjectsByFilter} />
                        : <DesktopGrid cards={projects} />
                    }
                </Grid>
            </Container>
            <Container
                $variant="contain"
                className="mt-[70px] flex justify-center"
            >
                <Button
                    $width={isMobile ? "full" : "fit"}
                    className="buttons"
                >
                    все проекты
                </Button>
            </Container>
        </div>
    )
}

function DesktopGrid({ cards = [] }: { cards?: Project[] }) {
    return (
        <>
            {cards.map(card => (
                <ProjectCard key={card.id} {...card} />
            ))}
        </>
    );
}

