/**
 * @license CC0-1.0
 * Copyright (c) 2021 Community for NL Design System
 */

import clsx from 'clsx';
import React from 'react';
import CardContent, { ICardContentProps } from './components/CardContent';
import CardImage, { ICardImageProps } from './components/CardImage';
import CardLink, { ICardLinkProps } from './components/CardLink';
import CardTitle, { ICardTitleProps } from './components/CardTitle';
import './index.scss';
import { defaultArgs } from './defaultArgs';
import Icon from '../../icon/src/template';
import { filterComponents, getChildComponent, getChildComponentPropValue } from '../../utils/getChildComponent';

interface CardComponents {
  Content: React.FC<ICardContentProps>;
  Image: React.FC<ICardImageProps>;
  Link: React.FC<ICardLinkProps>;
  Title: React.FC<ICardTitleProps>;
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

export const Card: React.FC<ICardProps> & CardComponents = ({
  backgroundColor = defaultArgs.backgroundColor,
  backgroundImage = defaultArgs.backgroundImage,
  className = defaultArgs.className,
  invertedColors = defaultArgs.invertedColors,
  onClick = defaultArgs.onClick,
  outline = defaultArgs.outline,
  padding = defaultArgs.padding,
  children,
}) => {
  // the card image component
  const cardImageComponent = getChildComponent<ICardImageProps>(CardImage, children);
  // all children except CardImage
  const otherComponents = filterComponents(CardImage, children);

  const imageSize =
    getChildComponentPropValue<ICardImageProps>(CardImage, 'imageSize', children) ?? defaultArgs.imageSize;
  const hasFullCardLinkProp =
    getChildComponentPropValue<ICardLinkProps>(CardLink, 'fullCardLink', children) ?? defaultArgs.fullCardLink;
  const showLinkIndicator =
    getChildComponentPropValue<ICardLinkProps>(CardLink, 'showLinkIndicator', children) ??
    defaultArgs.showLinkIndicator;

  const hasImage = !!cardImageComponent;
  const hasBackgroundImage = backgroundImage && backgroundImage?.length > 0;

  // wrap the children with a link indicator if required
  const wrapWithLinkIndicator = (children: React.ReactNode) => {
    if (hasFullCardLinkProp && showLinkIndicator) {
      return (
        <div className="rvo-card--with-link-indicator">
          {children}
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
    return children;
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

Card.Content = CardContent;
Card.Image = CardImage;
Card.Link = CardLink;
Card.Title = CardTitle;

export default Card;
