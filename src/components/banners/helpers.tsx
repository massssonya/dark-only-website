import type { ReactNode } from "react";
import type { ResponsiveImageProps, UniqueResponsiveImagesConfig } from "../ui/image/types";
import { type BannerImageItem } from ".";
import { ResponsiveImage } from "../ui/image";

export const word = (id: string, children: ReactNode) => ({
    id,
    element: "word" as const,
    children,
})

export const icon = (id: string, children: ReactNode) => ({
    id,
    element: "icon" as const,
    children,
})

export const br = (id: string) => ({
    id,
    element: "line-break" as const
})

export const badge = (id:string, children: ReactNode) => ({
    id,
    element: "badge" as const,
    children
})

export const responsiveImageForBannerFactory = (id: string, props: ResponsiveImageProps): BannerImageItem => ({
    id,
    node: <ResponsiveImage {...props} />
})

export function getBannerImageItem(config: UniqueResponsiveImagesConfig, isDefault?: boolean) {
    const banners = isDefault ? config.default : config.mobile
    return banners.map(item => responsiveImageForBannerFactory(item.id, { ...item }));
}
