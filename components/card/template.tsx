/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Community for NL Design System
 */
import clsx from 'clsx';
import React, { PropsWithChildren } from 'react';
import Icon from '../icon/template';
import parseContentMarkup from '../utils/parseContentMarkup';
import { defaultArgs } from './defaultArgs';
import './index.scss';

export interface ICardProps extends PropsWithChildren {
  background: 'none' | 'color' | 'image';
  backgroundColor?: string;
  backgroundImage?: string;
  padding?: 'sm' | 'md' | 'lg';
  outline?: boolean;
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
  backgroundColor: { if: { arg: 'background', eq: 'color' }, control: { type: 'color' } },
  backgroundImage: { if: { arg: 'background', eq: 'image' }, control: { type: 'text' } },
  padding: {
    options: ['sm', 'md', 'lg'],
    control: { type: 'radio' },
  },
  outline: { control: { type: 'boolean' } },
  link: { control: { type: 'text' } },
  fullCardLink: { control: { type: 'boolean' } },
  showLinkIndicator: { control: { type: 'boolean' } },
  invertedColors: { control: { type: 'boolean' } },
  content: { control: { type: 'text' } },
};

export const Card: React.FC<ICardProps> = ({
  // background = defaultArgs.background,
  // backgroundColor = defaultArgs.backgroundColor,
  // backgroundImage = defaultArgs.backgroundImage,
  // padding = defaultArgs.padding,
  outline = defaultArgs.outline,
  // link = defaultArgs.link,
  showLinkIndicator = defaultArgs.showLinkIndicator,
  // invertedColors = defaultArgs.invertedColors,
  content = defaultArgs.content,

  children,
}: ICardProps) => {
  const contentMarkup: string | React.ReactNode = parseContentMarkup(children || content);

  return (
    <div
      className={clsx('rvo-card', showLinkIndicator && 'rvo-card--with-link-indicator', outline && 'rvo-card--outline')}
    >
      <div className="rvo-card__content">{contentMarkup}</div>
      {showLinkIndicator && (
        <Icon icon="delta-naar-rechts" size="sm" color="hemelblauw" ariaLabel="Delta naar rechts" role="img" />
      )}
    </div>
  );
};

export default Card;
