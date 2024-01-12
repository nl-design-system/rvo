/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Community for NL Design System
 */
import clsx from 'clsx';
import React, { PropsWithChildren } from 'react';
import { defaultArgs } from './defaultArgs';
import Icon from '../icon/template';
import Link from '../link/template';
import parseContentMarkup from '../utils/parseContentMarkup';
import './index.scss';

export interface ICardProps extends PropsWithChildren {
  background: 'none' | 'color' | 'image';
  backgroundColor?: 'none' | 'wit' | 'grijs-100' | 'hemelblauw';
  backgroundImage?: string;
  padding?: 'sm' | 'md' | 'lg' | 'xl';
  outline?: boolean;
  title?: string;
  link?: string;
  fullCardLink?: boolean;
  image?: string;
  imageSize?: 'sm' | 'md';
  showLinkIndicator?: boolean;
  invertedColors?: boolean;
  content?: string;
  className?: string;
}

export const argTypes = {
  background: {
    options: ['none', 'color', 'image'],
    control: { type: 'radio' },
  },
  backgroundColor: {
    if: { arg: 'background', eq: 'color' },
    options: ['', 'grijs-100'],
    control: { type: 'radio' },
  },
  backgroundImage: { if: { arg: 'background', eq: 'image' }, control: { type: 'text' } },
  padding: {
    options: ['sm', 'md', 'lg'],
    control: { type: 'radio' },
  },
  outline: { control: { type: 'boolean' } },
  title: { control: { type: 'text' } },
  link: { control: { type: 'text' } },
  fullCardLink: { control: { type: 'boolean' } },
  image: { control: { type: 'text' } },
  imageSize: {
    if: { arg: 'background', eq: 'image' },
    options: ['sm', 'md'],
    control: { type: 'radio' },
  },
  showLinkIndicator: { control: { type: 'boolean' } },
  invertedColors: { control: { type: 'boolean' } },
  content: { control: { type: 'text' } },
};

export const Card: React.FC<ICardProps> = ({
  background = defaultArgs.background,
  backgroundColor = defaultArgs.backgroundColor,
  backgroundImage = defaultArgs.backgroundImage,
  padding = defaultArgs.padding,
  outline = defaultArgs.outline,
  title = defaultArgs.title,
  link = defaultArgs.link,
  fullCardLink = defaultArgs.fullCardLink,
  image = defaultArgs.image,
  imageSize = defaultArgs.imageSize,
  showLinkIndicator = defaultArgs.showLinkIndicator,
  invertedColors = defaultArgs.invertedColors,
  content = defaultArgs.content,
  className = defaultArgs.className,
  children,
}: ICardProps) => {
  const contentMarkup: string | React.ReactNode = parseContentMarkup(children || content);
  const hasLinkIndicator = showLinkIndicator && link.length > 0 && fullCardLink === true;
  const hasBackgroundImage = background === 'image' && backgroundImage.length > 0;

  const ContentContainer = hasLinkIndicator ? 'div' : React.Fragment;
  const contentContainerProps = hasLinkIndicator ? { className: clsx('rvo-card--with-link-indicator') } : {};

  return (
    <div
      className={clsx(
        'rvo-card',
        image.length > 0 && 'rvo-card--with-image',
        image.length > 0 && imageSize && `rvo-card--with-image-${imageSize}`,
        outline && background !== 'image' && 'rvo-card--outline',
        (outline || background !== 'none') && `rvo-card--padding-${padding}`,
        background === 'color' && backgroundColor !== 'none' && `rvo-card--full-colour--${backgroundColor}`,
        hasBackgroundImage && 'rvo-card--with-background-image',
        invertedColors && 'rvo-card--inverted-colors',
        className,
      )}
    >
      {hasBackgroundImage && (
        <div className={clsx('rvo-card__background-image-container')}>
          <img src={`images/www/${backgroundImage}`} className="rvo-card__background-image" />
        </div>
      )}

      {image.length > 0 && (
        <div className={clsx('rvo-card__image-container')}>
          <img src={`images/www/${image}`} className="rvo-card__image" />
        </div>
      )}

      <ContentContainer {...contentContainerProps}>
        <div className="rvo-card__content">
          {title?.length > 0 && (
            <h3 className="utrecht-heading-3">
              {link.length ? (
                <Link href="#" className={clsx('rvo-card__link', fullCardLink && 'rvo-card__full-card-link')}>
                  {title}
                </Link>
              ) : (
                <>{title}</>
              )}
            </h3>
          )}
          {contentMarkup}
        </div>
        {hasLinkIndicator && (
          <Icon
            icon="delta-naar-rechts"
            size="sm"
            color="hemelblauw"
            ariaLabel="Delta naar rechts"
            role="img"
            className="rvo-card__link-indicator"
          />
        )}
      </ContentContainer>
    </div>
  );
};

export default Card;
