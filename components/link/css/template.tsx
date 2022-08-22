/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Community for NL Design System
 */
import '@utrecht/component-library-css';
import clsx from 'clsx';
import React from 'react';
import { iconNames } from '../../icon/css/template';

interface ILinkProps {
  content: string;
  url: string;
  showIcon?: string;
  icon?: string;
  iconSize?: string;
  hover?: boolean;
  active?: boolean;
  focus?: boolean;
  noUnderline?: boolean;
  classNames?: string[];
}

export const argTypes = {
  content: {
    control: 'text',
  },
  url: {
    control: 'text',
  },
  showIcon: {
    options: ['no', 'before', 'after'],
    control: { type: 'radio' },
  },
  icon: {
    control: 'select',
    options: iconNames,
  },
  iconSize: {
    options: ['sm', 'md'],
    control: { type: 'radio' },
  },
  hover: {
    control: 'boolean',
  },
  active: {
    control: 'boolean',
  },
  focus: {
    control: 'boolean',
  },
  noUnderline: {
    control: 'boolean',
  },
};

export const defaultArgs: ILinkProps = {
  content: 'Dit is een link',
  url: '#',
  showIcon: 'no',
  hover: false,
  icon: iconNames[0],
  iconSize: 'md',
  active: false,
  focus: false,
  noUnderline: false,
};

export const Link: React.FC<ILinkProps> = ({
  content = defaultArgs.content,
  url = defaultArgs.url,
  showIcon = defaultArgs.showIcon,
  icon = defaultArgs.icon,
  iconSize = defaultArgs.iconSize,
  hover = defaultArgs.hover,
  active = defaultArgs.active,
  focus = defaultArgs.focus,
  noUnderline = defaultArgs.noUnderline,
  classNames = [],
}) => {
  const iconMarkup = (
    <div
      className={clsx(
        'rvo-link__icon',
        { 'rvo-link__icon--before': showIcon === 'before', 'rvo-link__icon--after': showIcon === 'after' },
        'rvo-icon',
        `rvo-icon--${iconSize}`,
        'rvo-icon--hemelblauw',
        `rvo-icon-${icon}`,
      )}
    ></div>
  );

  return (
    <a
      href={url}
      className={clsx(
        'rvo-link',
        classNames,
        {
          'rvo-link--active': active,
          'rvo-link--hover': hover,
          'rvo-link--focus': focus,
        },
        'rvo-layout-row',
        'rvo-layout-gap--sm',
        noUnderline && 'rvo-link--no-underline',
      )}
    >
      {showIcon === 'before' && iconMarkup}
      {content}
      {showIcon === 'after' && iconMarkup}
    </a>
  );
};
