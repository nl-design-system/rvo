/**
 * @license CC0-1.0
 * Copyright (c) 2021 Community for NL Design System
 */
import clsx from 'clsx';
import React, { HTMLAttributes, ReactNode } from 'react';
import { defaultArgs } from './defaultArgs';
import Heading from '../../heading/src/template';
import Icon from '../../icon/src/template';
import Link, { ILinkProps } from '../../link/src/template';
import parseContentMarkup from '../../utils/parseContentMarkup';
import './index.scss';

export interface ICardProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'>, Pick<ILinkProps, 'LinkComponent'> {
  background?: 'none' | 'color' | 'image';
  backgroundColor?: 'none' | 'wit' | 'grijs-100' | 'hemelblauw';
  backgroundImage?: string;
  padding?: 'sm' | 'md' | 'lg' | 'xl';
  outline?: boolean;
  title?: string | ReactNode;
  link?: string;
  fullCardLink?: boolean;
  image?: ReactNode;
  imageSize?: 'sm' | 'md';
  showLinkIndicator?: boolean;
  invertedColors?: boolean;
  /** @uxpinignoreprop */
  content?: string;
  /** @uxpinignoreprop */
  className?: string;
  /** @uxpinpropname Content */
  children?: ReactNode | undefined;
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
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
  children: {
    table: {
      disable: true,
    },
  },
  onClick: {
    table: {
      disable: true,
    },
  },
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
  onClick,
  LinkComponent,
  ...props
}: ICardProps) => {
  const contentMarkup: string | React.ReactNode = parseContentMarkup(children || content);
  const hasLinkIndicator = showLinkIndicator && link && link.length > 0 && fullCardLink === true;
  const hasBackgroundImage = background === 'image' && backgroundImage && backgroundImage?.length > 0;

  const ContentContainer = hasLinkIndicator ? 'div' : React.Fragment;
  const contentContainerProps = hasLinkIndicator ? { className: clsx('rvo-card--with-link-indicator') } : {};

  return (
    <div
      className={clsx(
        'rvo-card',
        image && 'rvo-card--with-image',
        image && imageSize && `rvo-card--with-image-${imageSize}`,
        outline && background !== 'image' && 'rvo-card--outline',
        (outline || background !== 'none') && `rvo-card--padding-${padding}`,
        background === 'color' && backgroundColor !== 'none' && `rvo-card--full-colour--${backgroundColor}`,
        hasBackgroundImage && 'rvo-card--with-background-image',
        invertedColors && 'rvo-card--inverted-colors',
        className,
      )}
      onClick={onClick}
      {...props}
    >
      {hasBackgroundImage && (
        <div className={clsx('rvo-card__background-image-container')}>
          <img src={backgroundImage} className="rvo-card__background-image" />
        </div>
      )}
      {image && (
        <div className={clsx('rvo-card__image-container')}>
          {typeof image === 'string' ? (
            <img src={image} className="rvo-card__image" />
          ) : React.isValidElement(image) ? (
            React.cloneElement<React.ImgHTMLAttributes<HTMLImageElement>>(image as React.ReactElement, {
              className: clsx((image as any).props?.className, 'rvo-card__image'),
            })
          ) : null}
        </div>
      )}

      <ContentContainer {...contentContainerProps}>
        <div className="rvo-card__content">
          {title && (
            <Heading type="h3">
              {link && link.length > 0 ? (
                <Link
                  href={link}
                  LinkComponent={LinkComponent}
                  className={clsx('rvo-card__link', fullCardLink && 'rvo-card__full-card-link')}
                >
                  {parseContentMarkup(title)}
                </Link>
              ) : (
                <>{parseContentMarkup(title)}</>
              )}
            </Heading>
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
