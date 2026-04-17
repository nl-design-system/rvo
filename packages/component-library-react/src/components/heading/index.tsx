/**
 * @license CC0-1.0
 * Copyright (c) 2022 Community for NL Design System
 */
import clsx from 'clsx';
import React, { createElement, ReactNode } from 'react';
import parseContentMarkup from '../../utils/parseContentMarkup';
import '@nl-rvo/component-library-css/dist/components/heading.css';
import Icon from '../icon';
import { IconType } from '../icon/types';

export interface IHeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  type: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  noMargins?: boolean;
  fontWeightNormal?: boolean;
  children?: string | ReactNode;
  className?: string;
  showIcon?: 'before' | 'after';
  icon?: IconType;
}

export const Heading: React.FC<IHeadingProps> = ({
  type,
  noMargins,
  fontWeightNormal,
  className,
  children,
  showIcon,
  icon,
  ...rest
}: IHeadingProps) => {
  let iconSize: 'xl' | 'lg' | 'md' = 'xl';
  switch (type) {
    case 'h1':
    case 'h2':
      iconSize = 'xl';
      break;
    case 'h3':
    case 'h4':
      iconSize = 'lg';
      break;
    case 'h5':
    case 'h6':
      iconSize = 'md';
      break;
    default:
      iconSize = 'xl';
      break;
  }

  const Tag = createElement(
    type,
    {
      className: clsx(
        `utrecht-heading-${type?.replace('h', '')}`,
        'rvo-heading',
        !noMargins && `rvo-heading--margin-${type?.replace('h', '')}`,
        fontWeightNormal && 'rvo-heading--normal',
        `rvo-heading--gap-${type === 'h1' || type === 'h2' ? 'sm' : 'xs'}`,
        className,
      ),
      ...rest,
    },
    <>
      {showIcon === 'before' && icon && (
        <div className="rvo-heading__icon">
          <Icon icon={icon} color="lintblauw" size={iconSize} />
        </div>
      )}
      <div className="rvo-heading__content">{children && parseContentMarkup(children)}</div>
      {showIcon === 'after' && icon && (
        <div className="rvo-heading__icon">
          <Icon icon={icon} color="lintblauw" size={iconSize} />
        </div>
      )}
    </>,
  );

  return Tag;
};

export default Heading;
