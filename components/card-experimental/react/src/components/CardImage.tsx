import clsx from 'clsx';
import React from 'react';
import { ICardImageProps } from '../CardExperimental.types';

const CardImage: React.FC<ICardImageProps> = ({ imageSrc, className, imageAlt }) => {
  return (
    <div className={clsx('rvo-card__image-container', className)}>
      <img src={imageSrc} alt={imageAlt} className={clsx('rvo-card__image')} />
    </div>
  );
};

export default CardImage;
