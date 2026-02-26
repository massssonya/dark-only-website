import { memo, type CSSProperties } from "react";
import type { ResponsiveImageProps } from "./types";

export const ResponsiveImage = memo(
  ({
    src,
    alt = "",
    sources,
    style,
    loading = "lazy",
  }: ResponsiveImageProps) => {
    const baseStyle: CSSProperties = {
      position: "absolute",
      display: "block",
      ...style,
    };

    if (!sources?.length) {
      return (
        <img
          src={src}
          alt={alt}
          loading={loading}
          decoding="async"
          style={baseStyle}
        />
      );
    }

    return (
      <picture style={baseStyle}>
        {sources.map((s, i) => (
          <source key={i} {...s} />
        ))}

        <img
          src={src}
          alt={alt}
          loading={loading}
          decoding="async"
          style={{ width: '100%', height: '100%' }}
        />
      </picture>
    );
  }
);