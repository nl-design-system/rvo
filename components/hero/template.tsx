/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Community for NL Design System
 */
// import EmblemSrc from '@nl-rvo/assets/images/emblem.svg';
import clsx from 'clsx';
import React from 'react';
import { defaultArgs } from './defaultArgs';
import Heading from '../heading/template';
import MaxWidthLayout from '../max-width-layout/template';
import './index.scss';

export interface IHeroProps {
  image?: string;
  title?: string;
  subtitle?: string;
  size?: string;
  className?: string;
}

export const argTypes = {
  image: {
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
  title = defaultArgs.title,
  subtitle = defaultArgs.subtitle,
  size = defaultArgs.size,
  className = defaultArgs.className,
}) => {
  return (
    <MaxWidthLayout size={size} className={clsx('rvo-hero', className)}>
      <div className="rvo-hero__image-container">
        <img src={`images/www/${image}`} className="rvo-hero__image" alt="Boer haalt oogst van het veld." />
      </div>
      <Heading type="h1" className="rvo-hero__title">
        {title}
        <span className="rvo-hero__subtitle">{subtitle}</span>
      </Heading>
    </MaxWidthLayout>
  );
};

export default Hero;
