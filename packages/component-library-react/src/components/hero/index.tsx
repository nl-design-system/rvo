/**
 * @license CC0-1.0
 * Copyright (c) 2021 Community for NL Design System
 */
import clsx from 'clsx';
import React, { ReactNode } from 'react';
import Heading from '../heading';
import MaxWidthLayout from '../max-width-layout';
import '@nl-rvo/css-hero/dist/index.css';
import parseContentMarkup from '../../utils/parseContentMarkup';

type HeroImage =
  | {
      src: string;
      alt: string;
      loading?: 'eager' | 'lazy';
      fetchPriority?: 'high' | 'low' | 'auto';
      decoding?: 'async' | 'sync' | 'auto';
      width?: number;
      height?: number;
      srcSet?: string;
      sizes?: string;
    }
  | React.ReactElement<React.ImgHTMLAttributes<HTMLImageElement>>;

export interface IHeroProps {
  image: HeroImage;
  title?: string;
  subtitle?: string;
  size?: 'sm' | 'md' | 'lg';
  children?: ReactNode | undefined;
}

type HeroProps = IHeroProps & React.HTMLAttributes<HTMLDivElement>;

export const Hero: React.FC<HeroProps> = (props) => {
  const { image, title, subtitle, size, className, children, ...rootElementProps } = props;

  // Parse content markup (either a string, HTML string, React node or children)
  const contentMarkup: string | ReactNode = parseContentMarkup(children);
  const renderImage = () => {
    if (React.isValidElement(image)) {
      return <span className="rvo-hero__custom-image-wrapper">{image}</span>;
    }

    if (!image.src.trim()) throw new Error('Hero: image.src must be a non-empty string.');

    if (!image.alt.trim()) throw new Error('Hero: image.alt must be a non-empty string.');

    const loading = image.loading ?? 'eager';
    const fetchPriority = image.fetchPriority ?? (loading === 'eager' ? 'high' : 'auto');
    const decoding = image.decoding ?? 'async';

    return (
      <img
        src={image.src}
        alt={image.alt}
        className="rvo-hero__image"
        loading={loading}
        fetchPriority={fetchPriority}
        decoding={decoding}
        width={image.width}
        height={image.height}
        srcSet={image.srcSet}
        sizes={image.sizes}
      />
    );
  };

  return (
    <MaxWidthLayout size={size} className={clsx('rvo-hero', className)} {...rootElementProps}>
      <div className="rvo-hero__image-container">{renderImage()}</div>
      {(title || subtitle || contentMarkup) && (
        <div className="rvo-hero__content">
          {title && (
            <Heading type="h1" className="rvo-hero__title" noMargins={true}>
              {title}
            </Heading>
          )}
          {subtitle && <span className="rvo-hero__subtitle">{subtitle}</span>}
          {contentMarkup}
        </div>
      )}
    </MaxWidthLayout>
  );
};

export default Hero;
