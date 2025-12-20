import { createFileRoute, Link } from '@tanstack/react-router'
import axios from 'axios';
import type { News } from '../../types/news.types';

async function fetchNewsById(id: string): Promise<News | undefined> {
  try {
    const { data: newsData } = await axios.get<{ data: News[] }>("/news.json");
    const res = newsData.data.find(item => item.id === id)
    return res
  } catch (e) {
    console.error(e);
  }
}

export const Route = createFileRoute('/news/$newsId')({
  component: NewsIdPage,
  loader: async ({ params }) => fetchNewsById(params.newsId),
})



export function NewsIdPage() {
  const newsItem = Route.useLoaderData();
  if (!newsItem) {
    return <div>News not found!</div>;
  }

  return (
    <div className="p-4">
      <Link to='/news'>Назад</Link>
      <h1 className="text-2xl font-bold mb-4">{newsItem.title}</h1>
      {newsItem.image && (
        <img src={newsItem.image.url} alt={newsItem.title} className="mb-4 w-full h-auto object-cover" />
      )}
      <p className="text-white mb-4">{newsItem.description}</p>
      <a href={newsItem.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
        Read more
      </a>
    </div>
  );
}