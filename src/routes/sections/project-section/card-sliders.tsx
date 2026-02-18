
import { ProjectCard } from "../../../components/cards";
import { MaybeSliderItem, Slider, useSliderControls } from "../../../components/slider";
import { Container } from "../../../components/ui/layout";
import type { Project } from "../../../entities/projects/model/types";

export function MobileCardSliders({ groupedCards = {} }:
    { groupedCards?: Record<string, { title: string; items: Project[] }> }
) {
    if (!groupedCards) return

    return (
        <div className="flex flex-col gap-[70px]">
            {Object.entries(groupedCards).map(([filter, cards]) => {
                if (!cards) return null;
                const controls = useSliderControls()
                return (
                    <div key={filter} className="flex flex-col gap-[40px] mb-8">
                        <h3 className="h2 text-lg font-medium">
                            {cards.title}
                        </h3>
                        <Container $variant="full">
                            <Slider className="px-[15px]" controls={controls}>
                                {cards.items!.map(card => (
                                    <MaybeSliderItem key={card.id} isSliderItems>
                                        <ProjectCard {...card} />
                                    </MaybeSliderItem>
                                ))}
                            </Slider>
                        </Container>
                    </div>
                );
            })}
        </div>
    );
}