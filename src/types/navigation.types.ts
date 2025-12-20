import type { FileRoutesByFullPath } from "../routeTree.gen"

export interface INavLink {
    label: string
    to: keyof FileRoutesByFullPath
}