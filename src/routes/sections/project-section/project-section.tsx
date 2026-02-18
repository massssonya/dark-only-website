import SectionLayout from "../../../components/layout/section-layout";
import { Container } from "../../../components/ui/layout";
import { useMediaQueryState } from "../../../providers/media-query-provider";
import { Content } from "./content";
import { Description } from "./description";

export function ProjectSection() {
    const { isMobile } = useMediaQueryState()

    return (
        <section
            className="mt-[80px] flex flex-col inset-0 md:mt-[70px] xl:mt-[8vw]">
            {isMobile &&
                <Container className="mb-[70px]">
                    <Description />
                </Container>
            }
            <SectionLayout
                title={"проекты"}
                description={!isMobile && <Description />}
                content={<Content isMobile={isMobile} />}
            />
        </section>
    )
}