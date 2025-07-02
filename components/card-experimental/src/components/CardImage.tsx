import clsx from 'clsx';
import React from 'react';

export interface ICardImageProps {
  /**
   * Image or icon as ReactNode, e.g. SVG or <img />
   */
  image: React.ReactNode;
  imageAlt?: string;
  className?: string;
  imageSize?: 'sm' | 'md';
}

const CardImage: React.FC<ICardImageProps> = ({ image, className, imageAlt }) => {
  return (
    <div className={clsx('rvo-card__image-container', className)}>
      {typeof image === 'string' ? (
        <img src={image} alt={imageAlt} className="rvo-card__image" />
      ) : React.isValidElement(image) ? (
        React.cloneElement<React.ImgHTMLAttributes<HTMLImageElement>>(image as React.ReactElement, {
          className: clsx((image as any).props?.className, 'rvo-card__image'),
        })
      ) : null}
    </div>
  );
};

export default CardImage;
