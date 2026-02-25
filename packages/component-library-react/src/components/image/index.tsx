/**
 * @license CC0-1.0
 * Copyright (c) 2025 Community for NL Design System
 */
import clsx from 'clsx';
import React from 'react';
import '@nl-rvo/css-image/dist/index.css';

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
 * - Supports both `radius` (which corners) and `radiusSize` (how much).
 * - Ignores `radiusSize` when `radius="none"`.
 */
export const Image: React.FC<IImageProps> = ({
  alt,
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
  const imgElement = (
    <img
      {...rest}
      alt={alt}
      className={clsx(
        'rvo-image',
        hasRadius && `rvo-image--radius-${radius}`,
        hasRadius && `rvo-image--radius-size-${radiusSize ?? '2xl'}`,
        className,
      )}
      {...(loading ? { loading } : {})}
      {...(decoding ? { decoding } : {})}
      {...(fetchPriority ? { fetchPriority } : {})}
      {...(width ? { width } : {})}
      {...(height ? { height } : {})}
    />
  );

  if (sources.length > 0) {
    return (
      <picture className="rvo-image__wrapper">
        {sources.map((source, index) => (
          <source key={index} {...source} />
        ))}
        {imgElement}
      </picture>
    );
  }

  return imgElement;
};

export default Image;
