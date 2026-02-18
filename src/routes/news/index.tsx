import { createFileRoute } from '@tanstack/react-router'
import axios from "axios"
import { useQuery } from "@tanstack/react-query"
import { Link } from "@tanstack/react-router"
import type { NewsDto } from '../../types/news.types'
import { NewsCard } from '../../components/cards'


export const Route = createFileRoute('/news/')({
  component: NewsPage,
})


async function fetchNews(): Promise<NewsDto> {
    const data = await axios.get("public/news.json")
    return data.data
}

function NewsPage() {
    const { data, isLoading } = useQuery({
        queryKey: ['news'],
        queryFn: fetchNews,
        select(data) {
            return data.data
        },
    })

    if (isLoading) return <>Loading...</>

    return (
        <div className="grid justify-center lg:grid-cols-3 sm:grid-cols-2 gap-x-6 gap-y-4">
            {data?.map((item) => (
                <Link to={`/news/$newsId`} params={{ newsId: item.id }} key={item.id} >
                    <NewsCard item={item} />
                </Link>
            ))}
        </div>
    )
}

