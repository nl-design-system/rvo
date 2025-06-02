/**
 * @license CC0-1.0
 * Copyright (c) 2021 Community for NL Design System
 */

import clsx from 'clsx';
import React from 'react';
import CardContent from './components/CardContent';
import CardHeader, { ICardHeaderProps } from './components/CardHeader';
import CardImage, { ICardImageProps } from './components/CardImage';
import './index.scss';
import Icon from '../../icon/src/template';
import { filterComponents, getChildComponent, getChildComponentPropValue } from '../../utils/getChildComponent';

interface CardComponents {
  Content: typeof CardContent;
  Header: typeof CardHeader;
  Image: typeof CardImage;
}

export interface ICardProps extends React.HTMLAttributes<HTMLDivElement> {
  backgroundImage?: string;
  backgroundColor?: 'none' | 'wit' | 'grijs-100' | 'hemelblauw';
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
  invertedColors?: boolean;
  outline?: boolean;
  padding?: 'sm' | 'md' | 'lg' | 'xl';
}

export const CardExperimental: React.FC<ICardProps> & CardComponents = ({
  backgroundColor = 'none',
  backgroundImage = '',
  className,
  invertedColors = false,
  onClick,
  outline = false,
  padding = 'sm',
  children,
}) => {
  // the card image component
  const cardImageComponent = getChildComponent<ICardImageProps>(CardImage, children);
  // all children except CardImage
  const otherComponents = filterComponents(CardImage, children);

  const imageSize = getChildComponentPropValue<ICardImageProps>(CardImage, 'imageSize', children) ?? 'md';

  const hasFullCardLinkProp =
    getChildComponentPropValue<ICardHeaderProps>(CardHeader, 'fullCardLink', children) ?? false;
  const showLinkIndicator =
    getChildComponentPropValue<ICardHeaderProps>(CardHeader, 'showLinkIndicator', children) ?? false;

  const hasImage = !!cardImageComponent;
  const hasBackgroundImage = backgroundImage && backgroundImage?.length > 0;

  // wrap the children with a link indicator if required
  const wrapWithLinkIndicator = (children: React.ReactNode) => {
    if (hasFullCardLinkProp && showLinkIndicator) {
      return (
        <div className="rvo-card--with-link-indicator">
          <div>{children}</div>
          <Icon
            ariaLabel="Delta naar rechts"
            className="rvo-card__link-indicator"
            color="hemelblauw"
            icon="delta-naar-rechts"
            role="img"
            size="sm"
          />
        </div>
      );
    }
    return <div>{children}</div>;
  };

  return (
    <div
      className={clsx('rvo-card', className, {
        'rvo-card--outline': outline,
        'rvo-card--with-background-image': hasBackgroundImage,
        [`rvo-card--full-colour--${backgroundColor}`]: backgroundColor !== 'none',
        'rvo-card--with-image': hasImage,
        [`rvo-card--with-image-${imageSize}`]: hasImage && imageSize,
        [`rvo-card--padding-${padding}`]: outline || backgroundImage,
        'rvo-card--inverted-colors': invertedColors,
      })}
      onClick={onClick}
    >
      {hasBackgroundImage && (
        <div className={clsx('rvo-card__background-image-container')}>
          <img src={backgroundImage} className="rvo-card__background-image" />
        </div>
      )}
      {cardImageComponent}
      {wrapWithLinkIndicator(otherComponents)}
    </div>
  );
};

CardExperimental.Content = CardContent;
CardExperimental.Header = CardHeader;
CardExperimental.Image = CardImage;

export default CardExperimental;
