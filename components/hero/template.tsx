/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Community for NL Design System
 */
import clsx from 'clsx';
import React, { ReactNode } from 'react';
import { defaultArgs } from './defaultArgs';
import Heading from '../heading/template';
import MaxWidthLayout from '../max-width-layout/template';
import './index.scss';
import parseContentMarkup from '../utils/parseContentMarkup';

export interface IHeroProps {
  image?: string;
  imageAlt?: string;
  title?: string;
  subtitle?: string;
  size?: 'sm' | 'md' | 'lg';
  /** @uxpinignoreprop */
  className?: string;
  /** @uxpinpropname Content */
  children?: ReactNode | undefined;
  /** @uxpinignoreprop */
  content?: string | React.ReactNode;
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
  content: {
    control: 'text',
  },
  children: {
    table: {
      disable: true,
    },
  },
};

export const Hero: React.FC<IHeroProps> = ({
  image = defaultArgs.image,
  imageAlt = defaultArgs.imageAlt,
  title = defaultArgs.title,
  subtitle = defaultArgs.subtitle,
  size = defaultArgs.size,
  className = defaultArgs.className,
  content = defaultArgs.content,
  children,
  ...props
}: IHeroProps) => {
  const getImageSrc = (image: string) => {
    return image.startsWith('http') ? image : `images/www/${image}`;
  };

  // Parse content markup (either a string, HTML string, React node or children)
  const contentMarkup: string | ReactNode = parseContentMarkup(children || content);

  return (
    <MaxWidthLayout size={size} className={clsx('rvo-hero', className)} {...props}>
      <div className="rvo-hero__image-container">
        {image && <img src={getImageSrc(image)} className="rvo-hero__image" alt={imageAlt} />}
      </div>
      <div className="rvo-hero__content">
        <Heading type="h1" className="rvo-hero__title" noMargins={true}>
          {title}
        </Heading>
        <span className="rvo-hero__subtitle">{subtitle}</span>
        {contentMarkup}
      </div>
    </MaxWidthLayout>
  );
};

export default Hero;
