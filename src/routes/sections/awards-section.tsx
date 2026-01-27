import SectionLayout from "../../components/layout/section-layout";

export function AwardsSection() {
  return (
    <section className='my-[8vw] flex flex-col inset-0'>
      <SectionLayout
        title={"награды"}
        description={
          <div className="flex flex-col gap-[1.67vw] md:w-[37.890625vw]">
            <h3 className="h2">
              За 10 лет активной работы мы завоевали более 150 призовых мест
            </h3>
            <p className="text2">
              Каждый год подтверждаем высокие позиции в Рейтинге Рунета в сегменте крупного B2B-бизнеса. Побеждаем на международных и российских конкурсах в номинациях digital-дизайна и разработки сайтов.
            </p>
          </div>
        }
        content={123}
      />
    </section>
  )
}