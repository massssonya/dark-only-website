export type CardFilter = "large" | "b2c" | "develop"

export interface CardProps {
  id: string,
  client: string,
  title: string,
  description: string,
  img: string,
  tags: string[],
  filter: CardFilter
}

export const cards: CardProps[] = [
  {
    id: 'sibur',
    client: "СИБУР",
    title: "Only & СИБУР: развитие и поддержка",
    description: "Разрабатываем и\u00A0развиваем цифровые решения для\u00A0продуктов и\u00A0сервисов СИБУРа\u00A0—\u00A0от\u00A0 анализа потребностей до\u00A0масштабирования",
    img: "https://only.digital/_next/image?url=https%3A%2F%2Fapi.only.digital%2Fstorage%2F2025%2F10%2F29%2F90dded9756e5f4334fd3fcda064a1460161fabf8.webp&w=3840&q=100",
    tags: ['Digital-айдентика', 'Продуктовый дизайн', 'Техподдержка'],
    filter: "large"
  },
  {
    id: 'severstal',
    client: "Северсталь",
    title: "Карьерный портал «Северстали»",
    description: `Разработка,\u00A0UX/UI-дизайн и\u00A0развитие айдентики для\u00A0карьерного сайта`,
    img: "https://api.only.digital/storage/2025/07/08/4812e7d50325fba7ea46647ce0aaf9f61c3307cf.jpg",
    tags: ['Продуктовый дизайн', 'Интеграции', 'Карьерные порталы'],
    filter: "large"
  },
  {
    id: 'mys',
    client: "MR Group",
    title: "Сайт ЖК «Мыс» от MR Group",
    description: "Разработка и\u00A0UX/UI-дизайн сайта с\u00A0крафтовыми иллюстрациями для\u00A0современного жилого кластера",
    img: "https://api.only.digital/storage/2025/10/29/c351b0a02bdf31422ad3f0f5d087e2a391650542.webp",
    tags: ['Корпоративные сайты', 'Digital-айдентика', 'Исследования'],
    filter: "develop"
  },
  {
    id: 'kapsulaVK',
    client: "VK",
    title: "Сайт «VK Капсула Про»",
    description: `Промосайт для\u00A0флагманской колонки VK`,
    img: "https://api.only.digital/storage/2026/01/28/937ac010cdbf328f9a047990730ec6aea487fde7.webp",
    tags: ['Промосайты', 'Графический дизайн и 3D'],
    filter: "b2c"
  }
]

export function groupByFilter(cards: CardProps[]) {
  return cards.reduce<Record<CardFilter, CardProps[]>>(
    (acc, card) => {
      acc[card.filter].push(card);
      return acc;
    },
    {
      large: [],
      b2c: [],
      develop: [],
    }
  );
}