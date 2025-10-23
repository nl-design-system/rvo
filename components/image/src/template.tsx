/**
 * @license CC0-1.0
 * Copyright (c) 2025 Community for NL Design System
 */
import clsx from 'clsx';
import React from 'react';
import '@nl-rvo/component-library-css';

export interface IImageSource {
  srcSet: string;
  type?: string;
  media?: string;
}

export interface IImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  /** Required image source */
  src: string;
  /** Required alt text for accessibility */
  alt: string;
  /** Optional caption displayed below the image */
  caption?: string;
  /** Optional language code (applies only to <figure> when a caption is present) */
  lang?: string;
  /** Corner rounding variant (token-based, RTL-safe) */
  radius?: 'none' | 'all' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  /** Border radius size — maps to design tokens */
  radiusSize?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  /** Responsive or alternative sources (used inside <picture>) */
  sources?: IImageSource[];
  /** Lazy/eager loading mode (optional) */
  loading?: 'lazy' | 'eager';
  /** Image decoding strategy (optional) */
  decoding?: 'async' | 'sync' | 'auto';
  /** Fetch priority hint (optional) */
  fetchPriority?: 'high' | 'low' | 'auto';
  /** Explicit image width (recommended for layout stability) */
  width?: number | string;
  /** Explicit image height (recommended for layout stability) */
  height?: number | string;
  /** Custom class name for styling overrides */
  className?: string;
}

/**
 * Accessible, responsive Image component.
 * - Uses `<picture>` when `sources` are provided.
 * - Wraps in `<figure>` only if a caption is present.
 * - Supports both `radius` (which corners) and `radiusSize` (how much).
 * - Ignores `radiusSize` when `radius="none"`.
 */
export const Image: React.FC<IImageProps> = ({
  alt,
  caption,
  lang,
  radius = 'none',
  radiusSize,
  sources = [],
  loading,
  decoding,
  fetchPriority,
  width,
  height,
  className,
  ...rest
}) => {
  const hasRadius = radius && radius !== 'none';

  const imgClass = clsx(
    'rvo-image',
    hasRadius && `rvo-image--radius-${radius}`,
    hasRadius && `rvo-image--radius-size-${radiusSize ?? '2xl'}`,
    className,
  );

  const imgElement = (
    <img
      {...rest}
      alt={alt}
      className={imgClass}
      {...(loading ? { loading } : {})}
      {...(decoding ? { decoding } : {})}
      {...(fetchPriority ? { fetchPriority } : {})}
      {...(width ? { width } : {})}
      {...(height ? { height } : {})}
    />
  );

  const content =
    sources.length > 0 ? (
      <picture>
        {sources.map((source, index) => (
          <source key={index} {...source} />
        ))}
        {imgElement}
      </picture>
    ) : (
      imgElement
    );

  // Only render <figure> when a caption is present
  if (caption) {
    return (
      <figure className={clsx('rvo-image-wrapper', className)} {...(lang ? { lang } : {})}>
        {content}
        <figcaption className="rvo-image__caption">{caption}</figcaption>
      </figure>
    );
  }

  return content;
};

export default Image;
