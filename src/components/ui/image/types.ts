import type { CSSProperties } from "react";

interface Source {
  srcSet: string;
  media?: string;
  type?: string;
}

export interface ResponsiveImageProps {
  src: string;
  alt?: string;
  sources?: Source[];
  style?: CSSProperties;
  loading?: "lazy" | "eager";
}

export type UniqueResponsiveImage = ResponsiveImageProps & { id: string }

export type UniqueResponsiveImagesConfig = {
  mobile: UniqueResponsiveImage[],
  default: UniqueResponsiveImage[]
}