/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Community for NL Design System
 */
import clsx from 'clsx';
import React, { PropsWithChildren } from 'react';
import Icon from '../icon/template';
import Link from '../link/template';
import parseContentMarkup from '../utils/parseContentMarkup';
import { defaultArgs } from './defaultArgs';
import './index.scss';

export interface ICardProps extends PropsWithChildren {
  background: 'none' | 'color' | 'image';
  backgroundColor?: 'none' | 'grijs-100';
  backgroundImage?: string;
  padding?: 'sm' | 'md' | 'lg' | 'xl';
  outline?: boolean;
  title?: string;
  link?: string;
  fullCardLink?: boolean;
  showLinkIndicator?: boolean;
  invertedColors?: boolean;
  content?: string | React.ReactNode;
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
  showLinkIndicator: { control: { type: 'boolean' } },
  invertedColors: { control: { type: 'boolean' } },
  content: { control: { type: 'text' } },
};

export const Card: React.FC<ICardProps> = ({
  background = defaultArgs.background,
  backgroundColor = defaultArgs.backgroundColor,
  // backgroundImage = defaultArgs.backgroundImage,
  padding = defaultArgs.padding,
  outline = defaultArgs.outline,
  title = defaultArgs.title,
  link = defaultArgs.link,
  fullCardLink = defaultArgs.fullCardLink,
  showLinkIndicator = defaultArgs.showLinkIndicator,
  // invertedColors = defaultArgs.invertedColors,
  content = defaultArgs.content,

  children,
}: ICardProps) => {
  const contentMarkup: string | React.ReactNode = parseContentMarkup(children || content);
  const hasLinkIndicator = showLinkIndicator && link.length > 0 && fullCardLink === true;

  return (
    <div
      className={clsx(
        'rvo-card',
        hasLinkIndicator && 'rvo-card--with-link-indicator',
        outline && 'rvo-card--outline',
        (outline || background !== 'none') && `rvo-card--padding-${padding}`,
        background === 'color' && backgroundColor !== 'none' && `rvo-card--full-colour--${backgroundColor}`,
      )}
    >
      <div className="rvo-card__content">
        {title.length && (
          <h3 className="utrecht-heading-3">
            {link.length ? (
              <Link href="#" color="zwart" className={clsx(fullCardLink && 'rvo-card_full-card-link')}>
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
        <Icon icon="delta-naar-rechts" size="sm" color="hemelblauw" ariaLabel="Delta naar rechts" role="img" />
      )}
    </div>
  );
};

export default Card;
