import { Link } from "../../../components/ui/link";
import { Tag } from "../../../components/ui/tag";
import { useProjects } from "../../../entities/projects/hooks/use-projects";

export function Description() {
    const { groupedSectors } = useProjects()

    return (
        <div className="flex flex-col gap-[1.67vw]">
            <h3 className="h2 md:w-[37.890625vw]">
                Мы&nbsp;работаем с&nbsp;ведущими компаниями и&nbsp;брендами из&nbsp;различных отраслей
            </h3>
            <div className="mt-[32px] pb-[24px] flex flex-wrap gap-[10px] md:mt-[50px] md:pb-[30px] md:gap-[15px]">
                {groupedSectors && groupedSectors.map((item) => (
                    <Tag key={item.sector} className="">
                        <Link href="" className="menu">{item.sector}</Link>
                        <span className="text4">{item.numberProjects}</span>
                    </Tag>
                ))}
            </div>
        </div>
    )
}