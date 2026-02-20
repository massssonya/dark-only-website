import { DirectionCard } from "../../../components/cards";
import { Container, Grid, GridItem } from "../../../components/ui/layout";
import { directionCards } from "./direction-cards";

export function Content() {
    return (
        <Container className="mt-[40px]">
            <Grid
                base={{
                    gap: "15px",
                    columns: "1fr 1fr",
                    areas: ['dir01 dir02', 'dir03 dir04']
                }}
                xl={{
                    gap: "1.5625vw",
                    columns: "1fr 1fr 1fr 1fr",
                    areas: ['dir01 dir01 dir02 img', 'dir03 dir03 dir04 dir04']
                }}
            >
                {
                    directionCards.map(card => (
                        <GridItem area={card.id} key={card.id} >
                            <DirectionCard
                                headerText={card.headerText}
                                title={card.title}
                                description={card.description}
                            />
                        </GridItem>
                    ))
                }
                <GridItem area="img" className="hidden xl:block">
                    <DirectionCard />
                </GridItem>
            </Grid>
        </Container>
    )
}
