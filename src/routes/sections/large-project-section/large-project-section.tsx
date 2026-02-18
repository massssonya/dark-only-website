import { ClientCard } from "../../../components/cards";
import SectionLayout from "../../../components/layout/section-layout";
import { Slider, SliderItem, useSliderControls } from "../../../components/slider";
import { Button } from "../../../components/ui/button";
import { Container } from "../../../components/ui/layout";
import { useProjects } from "../../../entities/projects/hooks/use-projects";
import { useMediaQueryState } from "../../../providers/media-query-provider";

export function LargeProjectSection() {
  const controls = useSliderControls()
  const { isMobile } = useMediaQueryState()
  const { groupedProjectsByClient } = useProjects()

  return (
    <section className='mt-[8vw] flex flex-col inset-0'>
      <SectionLayout
        title={"крупные проекты"}
        description={
          <div className="flex md:gap-[1.171875vw] xl:justify-between">
            <div className="flex flex-col gap-[1.67vw]">
              <h3 className="h2">
                Поддерживаем и развиваем
                <br />
                долгосрочное сотрудничество
              </h3>
            </div>
            {!isMobile && <div className="hidden md:flex md:gap-[10px]">
              <Button $variant="control" onClick={controls.prev} disabled={controls.isFirst}>&lt;</Button>
              <Button $variant="control" onClick={controls.next} disabled={controls.isLast}>&gt;</Button>
            </div>}
          </div>}
        content={
          <Container className="mt-[20px]" $variant="full">
            <Slider className="px-[15px] md:px-[25px]" controls={controls}>
              {groupedProjectsByClient && Object.entries(groupedProjectsByClient).map(([clientId, projects]) => {
                if (!projects.length) return null;

                return (
                  <SliderItem key={clientId}>
                    <ClientCard projects={projects} />
                  </SliderItem>
                );
              })}
            </Slider>
          </Container>
        }
      />
    </section>
  )
}