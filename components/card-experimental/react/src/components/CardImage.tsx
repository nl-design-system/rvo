import clsx from 'clsx';
import React from 'react';
import { IExperimentalCardImageProps } from '../CardExperimental.types';

const CardImage: React.FC<IExperimentalCardImageProps> = ({ imageSrc, className, imageAlt }) => {
  return (
    <div className={clsx('rvo-card__image-container', className)}>
      <img src={imageSrc} alt={imageAlt} className={clsx('rvo-card__image')} />
    </div>
  );
};

export default CardImage;
