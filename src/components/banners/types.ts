import type { ReactNode } from "react";
import type { UniqueResponsiveImagesConfig } from "../ui/image/types";
import type { VariantSpanComponent } from "../ui/text/span-component";

type TitleElement = "line-break" | "icon" | "word";

type TitleItem = {
    id: string;
    children?: ReactNode;
    element: VariantSpanComponent;
}

export type BannerImageItem = {
    id: string;
    node: ReactNode;
};

export interface ProjectBannersProps {
    id: string;
    heading: string;
    title: TitleItem[];
    text: ReactNode;
    imagesConfig: UniqueResponsiveImagesConfig;
    href: string;
}