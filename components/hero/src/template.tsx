/**
 * @license CC0-1.0
 * Copyright (c) 2021 Community for NL Design System
 */
import clsx from 'clsx';
import React, { ReactNode } from 'react';
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

export const Hero: React.FC<IHeroProps> = (props: IHeroProps) => {
  const { image, title, subtitle, size, className, content, children, ...rest } = props;

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
    <MaxWidthLayout size={size} className={clsx('rvo-hero', className)} {...rest}>
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
