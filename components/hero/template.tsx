/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Community for NL Design System
 */
import clsx from 'clsx';
import React from 'react';
import { defaultArgs } from './defaultArgs';
import Heading from '../heading/template';
import MaxWidthLayout from '../max-width-layout/template';
import './index.scss';

export interface IHeroProps {
  image?: string;
  imageAlt?: string;
  title?: string;
  subtitle?: string;
  size?: 'sm' | 'md' | 'lg';
  /** @uxpinignoreprop */
  className?: string;
}

export const argTypes = {
  image: {
    control: { type: 'text' },
  },
  imageAlt: {
    control: { type: 'text' },
  },
  title: {
    control: 'text',
  },
  subtitle: {
    control: 'text',
  },
  size: {
    options: ['sm', 'md', 'lg'],
    control: { type: 'radio' },
  },
  className: {
    control: 'text',
  },
};

export const Hero: React.FC<IHeroProps> = ({
  image = defaultArgs.image,
  imageAlt = defaultArgs.imageAlt,
  title = defaultArgs.title,
  subtitle = defaultArgs.subtitle,
  size = defaultArgs.size,
  className = defaultArgs.className,
  ...props
}: IHeroProps) => {
  const getImageSrc = (image: string) => {
    return image.startsWith('http') ? image : `images/www/${image}`;
  };

  return (
    <MaxWidthLayout size={size} className={clsx('rvo-hero', className)} {...props}>
      <div className="rvo-hero__image-container">
        {image && <img src={getImageSrc(image)} className="rvo-hero__image" alt={imageAlt} />}
      </div>
      <Heading type="h1" className="rvo-hero__title">
        {title}
        <span className="rvo-hero__subtitle">{subtitle}</span>
      </Heading>
    </MaxWidthLayout>
  );
};

export default Hero;
