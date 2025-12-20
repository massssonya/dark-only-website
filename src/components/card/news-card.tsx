import type { News } from "../../types/news.types";


export function NewsCard({ item }: { item: News }) {
  const creatingDate = new Date(item.date).toLocaleDateString('ru-RU', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  });
  return (
    <article className='bg-white rounded-b-lg max-w-[400px] sm:min-w-[300px] h-[350px]'>
        <div className="">
          <div className="h-[200px]">
            <img src={item.image?.url} className="w-full h-full object-cover" />
          </div>
          <div className="px-3 py-2 text-black">
            <header className="flex justify-between text-sm mb-1" >
              <span>{item.sourceId}</span>
              <span className="font-normal text-gray-500">{creatingDate}</span>
            </header>
            <div className="h-[110px] mb-1 overflow-hidden leading-4">
              <h3 className="text-[1rem] leading-5 font-bold line-clamp-2 mb-1">{item.title}</h3>
              <p className="text-[1rem] font-normal line-clamp-4">{item.description}</p>
            </div>
          </div>
        </div>
    </article>
  )
}