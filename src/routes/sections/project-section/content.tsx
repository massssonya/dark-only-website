import { Container, Grid } from "../../../components/ui/layout";
import { Button } from "../../../components/ui/button";
import { useProjects } from "../../../entities/projects/hooks/use-projects";
import { ProjectCard } from "../../../components/cards";
import { MobileCardSliders } from "./card-sliders";


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
                        : projects?.map(card => (
                            <ProjectCard key={card.id} {...card} />
                        ))
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

