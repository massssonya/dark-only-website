import SectionLayout from "../../components/layout/section-layout";

export function ProjectSection() {
    return (
        <section className='
                            mt-[80px] flex flex-col inset-0
                            md:mt-[70px]
                            xl:mt-[8vw]
                            '>
            <SectionLayout
                title={"проекты"}
                description={
                    <div className="flex flex-col gap-[1.67vw]">
                        <h3 className="h2">
                            Аналитика, брендинг
                            <br />
                            и разработка для B2B
                        </h3>
                        <p className="text2">Обеспечиваем компании лучшими техническими и дизайн-решениями, создавая digital-проекты.</p>
                    </div>}
                content={123}

            />
        </section>
    )
}