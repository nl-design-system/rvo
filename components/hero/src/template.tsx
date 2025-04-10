/**
 * @license CC0-1.0
 * Copyright (c) 2021 Community for NL Design System
 */
import clsx from 'clsx';
import React, { ReactNode } from 'react';
import { defaultArgs } from './defaultArgs';
import Heading from '../../heading/src/template';
import MaxWidthLayout from '../../max-width-layout/src/template';
import './index.scss';
import parseContentMarkup from '../../utils/parseContentMarkup';
import { isOfType } from '../../utils/typeUtils';

export interface IHeroProps {
  image?: Pick<HTMLImageElement, 'src' | 'alt'> | React.JSX.Element;
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
  // customImage,
  title = defaultArgs.title,
  subtitle = defaultArgs.subtitle,
  size = defaultArgs.size,
  className = defaultArgs.className,
  content = defaultArgs.content,
  children,
  ...props
}: IHeroProps) => {
  // Parse content markup (either a string, HTML string, React node or children)
  const contentMarkup: string | ReactNode = parseContentMarkup(children || content);

  const returnImage = () => {
    if (React.isValidElement(image)) {
      return <span className="rvo-hero__custom-image-wrapper">{image}</span>;
    }

    if (isOfType(image, 'src')) return <img src={image.src} className="rvo-hero__image" alt={image.alt} />;

    return null;
  };

  return (
    <MaxWidthLayout size={size} className={clsx('rvo-hero', className)} {...props}>
      <div className="rvo-hero__image-container">{returnImage()}</div>
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
