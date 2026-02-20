import SectionLayout from "../../../components/layout/section-layout";
import { Content } from "./content";
import { Description } from "./description";

export function WorkDirectionsSection() {
  return (
    <section className='mt-[8vw] flex flex-col inset-0'>
      <SectionLayout
        title={"направления"}
        description={
          <Description />
        }
        content={
          <Content />
        }
      />
    </section >
  )
}