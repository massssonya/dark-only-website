export interface Project {
    id: string,
    client: string,
    clientId: string,
    title: string,
    description: string,
    img: string,
    tags: string[],
    filter: string,
    sector: string
}

export type ProjectResponse = Project[]


