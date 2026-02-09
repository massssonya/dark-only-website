import { ProjectCard } from "../../../components/card";
import SectionLayout from "../../../components/layout/section-layout";
import { MaybeSliderItem, Slider } from "../../../components/slider";
import { Container } from "../../../components/ui/layout";
import { useMediaQueryState } from "../../../providers/media-query-provider";
import { cards, groupByFilter, type CardFilter, type CardProps } from "./cards";
import { ContentLayout } from "./content-layout";

export function ProjectSection() {
    const { isMobile } = useMediaQueryState()
    const groupedCards = groupByFilter(cards);
    return (
        <section
            className="
                        mt-[80px] flex flex-col inset-0
                        md:mt-[70px]
                        xl:mt-[8vw]
                      ">
            {isMobile &&
                <Container className="mb-[70px]">
                    <Description />
                </Container>
            }
            <SectionLayout
                title={"проекты"}
                description={
                    isMobile
                        ? <></>
                        : <Description />
                }
                content={
                    <ContentLayout>
                        {isMobile
                            ? <MobileSliders groupedCards={groupedCards} />
                            : <DesktopGrid cards={cards} />
                        }
                    </ContentLayout>
                }

            />
        </section >
    )
}

function Description() {
    return (
        <div className="flex flex-col gap-[1.67vw]">
            <h3 className="h2">
                Аналитика, брендинг
                <br />
                и разработка для B2B
            </h3>
            <p className="text2">
                Only — digital—агентство с фокусом на сильную аналитику, дизайн и разработку. В основе наших проектов лежат идеи, создаваемые на стыке стратегии, креатива и технологий.
                <br />
                <br />
                Обеспечиваем компании лучшими техническими и дизайн-решениями, создавая digital-проекты.
            </p>
        </div>
    )
}

function DesktopGrid({ cards }: { cards: CardProps[] }) {
    return (
        <>
            {cards.map(card => (
                <ProjectCard key={card.id} {...card} />
            ))}
        </>
    );
}

function MobileSliders({
    groupedCards,
}: {
    groupedCards: Record<CardFilter, CardProps[]>;
}) {
    return (
        <div className="flex flex-col gap-[70px]">
            {Object.entries(groupedCards).map(([filter, cards]) => {
                if (!cards.length) return null;
                return (
                    <div key={filter} className="flex flex-col gap-[40px] mb-8">
                        <SliderTitle filter={filter as CardFilter} />
                        <Container $variant="full">
                            <Slider className="px-[15px]">
                                {cards.map(card => (
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

function SliderTitle({ filter }: { filter: CardFilter }) {
    const map: Record<CardFilter, string> = {
        large: "Крупнейшие проекты",
        b2c: "B2C",
        develop: "Девелоперы",
    };

    return (
        <h3 className="h2 text-lg font-medium">
            {map[filter]}
        </h3>
    );
}