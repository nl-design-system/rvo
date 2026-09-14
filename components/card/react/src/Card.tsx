/**
 * @license CC0-1.0
 * Copyright (c) 2021 Community for NL Design System
 */
import clsx from 'clsx';
import React from 'react';
import parseContentMarkup from '../../../../packages/component-library-react/src/utils/parseContentMarkup';
import { Heading } from '@nl-rvo/react-heading';
import { Icon } from '@nl-rvo/react-icon';
import { Link } from '@nl-rvo/react-link';
import '@nl-rvo/css-card';
import { ICardProps } from './Card.types';

export const Card: React.FC<ICardProps> = ({
  background,
  backgroundColor,
  backgroundImage,
  padding = 'md',
  children,
  className,
  content,
  fullCardLink,
  headingClassName,
  headingProps,
  image,
  imageAlt,
  imageHeight,
  imageLine,
  imageSize,
  imageWidth,
  inlineImage = false,
  invertedColors,
  layout = 'column',
  link,
  linkClassName,
  LinkComponent,
  linkProps = {},
  onClick,
  outline,
  showLinkIndicator,
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
        image && imageLine && imageLine !== 'none' && ['rvo-card__image-lined', `rvo-card__image-lined--${imageLine}`],
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
