/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Community for NL Design System
 */
import { Link as UtrechtLink } from '@utrecht/component-library-react';
import clsx from 'clsx';
import React from 'react';
import { Icon, iconColors, options as iconOptions } from '../../icon/css/template';

interface ILinkProps {
  content: string;
  url: string;
  showIcon?: string;
  icon?: string;
  iconSize?: string;
  iconColor?: string;
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
    options: iconOptions,
  },
  iconSize: {
    options: ['sm', 'md'],
    control: { type: 'radio' },
  },
  iconColor: {
    options: iconColors,
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
  icon: iconOptions[0],
  iconSize: 'md',
  iconColor: 'hemelblauw',
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
  iconColor = defaultArgs.iconColor,
  noUnderline = defaultArgs.noUnderline,
  classNames = [],
}) => {
  const iconMarkup = Icon({ icon, size: iconSize, color: iconColor });

  return (
    <UtrechtLink href={url} className={clsx(classNames, noUnderline && 'rvo-link--no-underline')}>
      {showIcon === 'before' && iconMarkup}
      {content}
      {showIcon === 'after' && iconMarkup}
    </UtrechtLink>
  );
};
