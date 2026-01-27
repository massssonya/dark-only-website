import SectionLayout from "../../components/layout/section-layout";

export function WorkDirectionsSection() {
  return (
    <section className='mt-[8vw] flex flex-col inset-0'>
      <SectionLayout
        title={"направления"}
        description={
          <div className="flex flex-col gap-[1.67vw]">
            <h3 className="h2">
              Мы объединили все необходимые направления для качественной продуктовой разработки
            </h3>
            <p className="text2">
              Наш продукт — это наша компания. Процессы, технологии и методы. Сохранение и передача компетенций. Система разработки проектов и развития команды.
            </p>
          </div>
        }
        content={123}
      />
    </section>
  )
}