import SectionLayout from "../../../components/layout/section-layout";
import { Content } from './content';
import { Description } from "./description";

export function ClientSection() {

  return (
    <section className='mt-[8vw] flex flex-col inset-0'>
      <SectionLayout
        title={"клиенты"}
        description={<Description />}
        content={<Content />}
      />
    </section>
  )
}