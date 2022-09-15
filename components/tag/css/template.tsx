/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Community for NL Design System
 */
import '@utrecht/component-library-css';
import clsx from 'clsx';
import React from 'react';
import { Icon, options as iconOptions } from '../../icon/css/template';

interface ITagProps {
  content: string;
  type: 'default' | 'info' | 'warning' | 'error' | 'success';
  showIcon?: string;
  icon?: string;
  hover?: boolean;
  disableHover?: boolean;
  active?: boolean;
  focus?: boolean;
  classNames?: string[];
}

export const argTypes = {
  content: {
    control: 'text',
  },
  type: {
    options: ['default', 'info', 'warning', 'error', 'success'],
    control: { type: 'radio' },
  },
  showIcon: {
    options: ['no', 'before', 'after'],
    control: { type: 'radio' },
  },
  icon: {
    control: 'select',
    options: iconOptions,
  },
  hover: {
    control: 'boolean',
  },
  disableHover: {
    control: 'boolean',
  },
  active: {
    control: 'boolean',
  },
  focus: {
    control: 'boolean',
  },
};

export const defaultArgs: ITagProps = {
  content: 'Tag name',
  type: 'default',
  showIcon: 'no',
  icon: iconOptions[0],
  hover: false,
  disableHover: false,
  active: false,
  focus: false,
};

export const Tag: React.FC<ITagProps> = ({
  content = defaultArgs.content,
  type = defaultArgs.type,
  showIcon = defaultArgs.showIcon,
  icon = defaultArgs.icon,
  active = defaultArgs.active,
  hover = defaultArgs.hover,
  disableHover = defaultArgs.disableHover,
  focus = defaultArgs.focus,
  classNames,
}) => {
  // Parse icon markup
  const iconClassNames = [];
  if (showIcon === 'before') {
    iconClassNames.push('rvo-link__icon--before');
  }
  if (showIcon === 'after') {
    iconClassNames.push('rvo-link__icon--after');
  }
  const iconMarkup = Icon({ icon, size: 'md', color: 'hemelblauw', classNames: iconClassNames });

  return (
    <div
      className={clsx(
        'rvo-tag',
        classNames,
        showIcon !== 'no' && ['rvo-layout-row', 'rvo-layout-gap--sm'],
        {
          'rvo-tag--active': active,
          'rvo-tag--hover': hover,
          'rvo-tag--focus': focus,
          'rvo-tag--nohover': disableHover,
        },
        type === 'default' && 'rvo-tag--default',
        type === 'info' && 'rvo-tag--info',
        type === 'warning' && 'rvo-tag--warning',
        type === 'error' && 'rvo-tag--error',
        type === 'success' && 'rvo-tag--success',
      )}
    >
      {showIcon === 'before' && iconMarkup}
      {content}
      {showIcon === 'after' && iconMarkup}
    </div>
  );
};
