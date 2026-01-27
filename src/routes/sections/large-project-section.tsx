import SectionLayout from "../../components/layout/section-layout";

export function LargeProjectSection() {
  return (
    <section className='mt-[8vw] flex flex-col inset-0'>
      <SectionLayout
        title={"крупные проекты"}
        description={
          <div className="flex flex-col gap-[1.67vw]">
            <h3 className="h2">
              Поддерживаем и развиваем
              <br />
              долгосрочное сотрудничество
            </h3>
          </div>}
        content={123}

      />
    </section>
  )
}