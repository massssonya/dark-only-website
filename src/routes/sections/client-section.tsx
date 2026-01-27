import SectionLayout from "../../components/layout/section-layout";

export function ClientSection() {
  return (
    <section className='mt-[8vw] flex flex-col inset-0'>
      <SectionLayout
        title={"клиенты"}
        description={
          <div className="flex flex-col gap-[1.67vw]">
            <h3 className="h2 md:w-[37.890625vw]">
              Мы&nbsp;работаем с&nbsp;ведущими компаниями и&nbsp;брендами из&nbsp;различных отраслей
            </h3>
          </div>}
        content={123}
      />
    </section>
  )
}