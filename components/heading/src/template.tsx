/**
 * @license CC0-1.0
 * Copyright (c) 2022 Community for NL Design System
 */
import clsx from 'clsx';
import React, { createElement, ReactNode } from 'react';
import { Icon } from '../../icon/src/template';
import { IconType } from '../../icon/src/types';
import { Link } from '../../link/src/template';
import parseContentMarkup from '../../utils/parseContentMarkup';
import './index.scss';

export interface IHeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  type: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  title?: string;
  url?: string;
  showIcon?: 'no' | 'before' | 'after';
  icon?: IconType;
  iconAriaLabel?: string;
  noMargins?: boolean;
  /** @uxpinignoreprop */
  fontWeightNormal?: boolean;
  children?: string | ReactNode;
  /** @uxpinignoreprop */
  className?: string;
}

export const Heading: React.FC<IHeadingProps> = ({
  type,
  title,
  url,
  showIcon,
  icon,
  noMargins,
  fontWeightNormal,
  className,
  children,
  ...rest
}: IHeadingProps) => {
  let iconSize: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl';

  switch (type) {
    default:
    case 'h1':
    case 'h2':
      iconSize = 'xl' as const;
      break;
    case 'h3':
    case 'h4':
      iconSize = 'lg' as const;
      break;
    case 'h5':
    case 'h6':
      iconSize = 'md' as const;
      break;
  }

  const renderHeading = () => {
    const Tag = createElement(
      type,
      {
        className: clsx(className, `utrecht-heading-${type?.replace('h', '')}`),
        ...rest,
      },
      children ? parseContentMarkup(children) : title,
    );

    return (
      <div
        className={clsx(
          'rvo-heading',
          noMargins && 'rvo-heading--no-margins',
          `rvo-heading--margin-${type?.replace('h', '')}`,
          'rvo-layout-row',
          `rvo-layout-gap--${type === 'h1' || type === 'h2' ? 'sm' : 'xs'}`,
          fontWeightNormal && 'rvo-heading--normal',
        )}
      >
        {showIcon === 'before' && (
          <Icon icon={icon as any} color="logoblauw" size={iconSize} ariaLabel={`${icon}-icon`} />
        )}
        {Tag}
        {showIcon === 'after' && (
          <Icon icon={icon as any} color="logoblauw" size={iconSize} ariaLabel={`${icon}-icon`} />
        )}
      </div>
    );
  };

  if (url && url.length) {
    return (
      <Link href={url} noUnderline={true}>
        {renderHeading()}
      </Link>
    );
  } else {
    return renderHeading();
  }
};

export default Heading;
