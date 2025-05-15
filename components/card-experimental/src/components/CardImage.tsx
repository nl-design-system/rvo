import clsx from 'clsx';
import React from 'react';
import { defaultArgs } from '../defaultArgs';

export interface ICardImageProps {
  imageAlt?: string;
  className?: string;
  imageSize?: 'sm' | 'md';
  imageSrc: string;
}

const CardImage: React.FC<ICardImageProps> = ({ imageSrc = defaultArgs.imageSrc, className, imageAlt }) => {
  return (
    <div className={clsx('rvo-card__image-container', className)}>
      <img src={imageSrc} alt={imageAlt} className={clsx('rvo-card__image')} />
    </div>
  );
};

export default CardImage;
