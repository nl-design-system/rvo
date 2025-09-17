/**
 * @license CC0-1.0
 * Copyright (c) 2021 Community for NL Design System
 */
import clsx from 'clsx';
import React, { HTMLAttributes, ReactNode } from 'react';
import { defaultArgs } from './defaultArgs';
import Heading, { IHeadingProps } from '../../heading/src/template';
import Icon from '../../icon/src/template';
import Link, { ILinkProps } from '../../link/src/template';
import parseContentMarkup from '../../utils/parseContentMarkup';
import './index.scss';

export interface ICardProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'>, Pick<ILinkProps, 'LinkComponent'> {
  background?: 'none' | 'color' | 'image';
  backgroundColor?: 'none' | 'wit' | 'grijs-100' | 'hemelblauw' | 'lichtblauw-150';
  backgroundImage?: string;
  children?: ReactNode | undefined;
  className?: string;
  content?: string;
  fullCardLink?: boolean;
  headingClassName?: string;
  headingProps?: Omit<IHeadingProps, 'children'>;
  image?: ReactNode;
  imageAlt?: string;
  imageHeight?: string;
  imageSize?: 'sm' | 'md';
  imageWidth?: string;
  inlineImage?: boolean;
  invertedColors?: boolean;
  layout?: 'column' | 'row';
  link?: string;
  linkClassName?: string;
  linkProps?: Omit<ILinkProps, 'children'>;
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
  outline?: boolean;
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  showLinkIndicator?: boolean;
  title?: string | ReactNode;
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
    options: ['none', 'sm', 'md', 'lg'],
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
  children,
  className = defaultArgs.className,
  content,
  fullCardLink = defaultArgs.fullCardLink,
  headingClassName,
  headingProps = {},
  image = defaultArgs.image,
  imageAlt,
  imageHeight,
  imageSize = defaultArgs.imageSize,
  imageWidth,
  inlineImage = false,
  invertedColors = defaultArgs.invertedColors,
  layout = 'column',
  link = defaultArgs.link,
  linkClassName,
  LinkComponent,
  linkProps = {},
  onClick,
  outline = defaultArgs.outline,
  showLinkIndicator = defaultArgs.showLinkIndicator,
  title,
  ...props
}: ICardProps) => {
  const contentMarkup: string | React.ReactNode = parseContentMarkup(children || content);
  const hasLinkIndicator = showLinkIndicator && link && link.length > 0 && fullCardLink === true;
  const hasBackgroundImage = background === 'image' && backgroundImage && backgroundImage?.length > 0;

  const ContentContainer = hasLinkIndicator ? 'div' : React.Fragment;
  const contentContainerProps = hasLinkIndicator ? { className: clsx('rvo-card--with-link-indicator') } : {};

  const contentClass = clsx(
    'rvo-card__content',
    layout === 'row' ? 'rvo-layout-row rvo-layout-align-content-center rvo-layout-gap--md' : undefined,
  );

  const linkClasses = clsx(
    'rvo-card__link',
    linkClassName && linkClassName,
    fullCardLink && 'rvo-card__full-card-link',
  );

  const imageContent =
    typeof image === 'string' ? (
      <img
        alt={imageAlt || ''}
        className={clsx('rvo-card__image', imageSize && `rvo-card-img--${imageSize}`)}
        height={imageHeight || undefined}
        src={image}
        style={imageWidth || imageHeight ? { width: imageWidth, height: imageHeight } : undefined}
        width={imageWidth || undefined}
      />
    ) : React.isValidElement(image) ? (
      React.cloneElement<React.ImgHTMLAttributes<HTMLImageElement>>(image as React.ReactElement, {
        alt: imageAlt || '',
        className: clsx((image as any).props?.className, 'rvo-card__image', imageSize && `rvo-card-img--${imageSize}`),
        height: imageHeight || (image as any).props?.height,
        style: imageWidth || imageHeight ? { width: imageWidth, height: imageHeight } : (image as any).props?.style,
        width: imageWidth || (image as any).props?.width,
      })
    ) : null;

  return (
    <div
      className={clsx(
        'rvo-card',
        image && !inlineImage && 'rvo-card--with-image',
        image && imageSize && !inlineImage && `rvo-card--with-image-${imageSize}`,
        outline && background !== 'image' && 'rvo-card--outline',
        padding && padding !== 'none' && `rvo-card--padding--${padding}`,
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
      {/* Only render image container if not inlineImage */}
      {image && !inlineImage && (
        <div className={clsx('rvo-card__image-container', layout === 'row' && 'rvo-card__image-container--row')}>
          {imageContent}
        </div>
      )}

      <ContentContainer {...contentContainerProps}>
        <div className={contentClass}>
          {/* Render image inline if requested */}
          {image && inlineImage && layout === 'row' && imageContent}

          {title && (
            <Heading type="h3" className={headingClassName} {...headingProps}>
              {link && link.length > 0 ? (
                <Link href={link} LinkComponent={LinkComponent} className={linkClasses} {...linkProps}>
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
            ariaLabel="Delta naar rechts"
            className="rvo-card__link-indicator"
            color="hemelblauw"
            icon="delta-naar-rechts"
            role="img"
            size="sm"
          />
        )}
      </ContentContainer>
    </div>
  );
};

export default Card;
