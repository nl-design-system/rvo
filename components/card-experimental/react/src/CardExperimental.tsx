/**
 * @license CC0-1.0
 * Copyright (c) 2021 Community for NL Design System
 */

import clsx from 'clsx';
import React from 'react';
import Icon from '../../../icon/react/src/Icon';
import CardContent from './components/CardContent';
import CardHeader from './components/CardHeader';
import CardImage from './components/CardImage';
import {
  filterComponents,
  getChildComponent,
  getChildComponentPropValue,
} from '../../../../packages/component-library-react/src/utils/getChildComponent';
import '@nl-rvo/css-card-experimental';
import {
  CardComponents,
  IExperimentalCardHeaderProps,
  IExperimentalCardImageProps,
  IExperimentalCardProps,
} from './CardExperimental.types';

export const CardExperimental: React.FC<IExperimentalCardProps> & CardComponents = ({
  backgroundColor = 'none',
  backgroundImage = '',
  className,
  invertedColors = false,
  onClick,
  outline = false,
  padding = 'md',
  children,
}) => {
  // the card image component
  const cardImageComponent = getChildComponent<IExperimentalCardImageProps>(CardImage, children);
  // all children except CardImage
  const otherComponents = filterComponents(CardImage, children);

  const imageSize = getChildComponentPropValue<IExperimentalCardImageProps>(CardImage, 'imageSize', children) ?? 'md';

  const hasFullCardLinkProp =
    getChildComponentPropValue<IExperimentalCardHeaderProps>(CardHeader, 'fullCardLink', children) ?? false;
  const showLinkIndicator =
    getChildComponentPropValue<IExperimentalCardHeaderProps>(CardHeader, 'showLinkIndicator', children) ?? false;

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
        [`rvo-card--padding--${padding}`]: padding && padding !== 'none',
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
