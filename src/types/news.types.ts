export interface News {
    id: string
    sourceId: string
    tags: string[]
    title: string
    link: string
    description: string
    date: string
    feedId: string
    image?: {
        url: string
        type: string
    }

}

export interface NewsDto {
    status: string,
    data: News[]
}

export interface NewsItemDto {
    data: News
}