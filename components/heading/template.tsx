/**
 * @license EUPL-1.2
 * Copyright (c) 2022 Community for NL Design System
 */
import clsx from 'clsx';
import React from 'react';
import { defaultArgs } from './defaultArgs';
import { Icon, iconNames as iconOptions } from '../icon/template';
import { IconType } from '../icon/types';
import { Link } from '../link/template';
import './index.scss';

export interface IHeadingProps {
  type?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  textContent?: string | React.ReactNode;
  link?: string;
  children?: React.ReactNode;
  showIcon?: 'no' | 'before' | 'after';
  icon?: IconType;
  iconAriaLabel?: string;
  noMargins?: boolean;
  mixedBoldAndNormal?: boolean;
  className?: string;
}

export const argTypes = {
  type: {
    options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
    control: { type: 'select' },
  },
  textContent: {
    control: 'text',
  },
  link: {
    control: 'text',
  },
  showIcon: {
    options: ['no', 'before', 'after'],
    control: { type: 'radio' },
  },
  icon: {
    control: { type: 'select' },
    options: iconOptions,
  },
  iconAriaLabel: { control: 'text' },
  noMargins: {
    control: 'boolean',
  },
  mixedBoldAndNormal: {
    control: 'boolean',
  },
};

export const Heading: React.FC<IHeadingProps> = ({
  type = defaultArgs.type,
  textContent = defaultArgs.textContent,
  link = defaultArgs.link,
  children,
  showIcon = defaultArgs.showIcon,
  icon = defaultArgs.icon,
  iconAriaLabel = defaultArgs.iconAriaLabel,
  noMargins = defaultArgs.noMargins,
  mixedBoldAndNormal = defaultArgs.mixedBoldAndNormal,
  className,
  ...otherProps
}: IHeadingProps) => {
  let headingMarkup = textContent;

  const props = {
    className: clsx(`utrecht-heading-${type.replace('h', '')}`, className),
    ...otherProps,
  };

  if (!children && icon) {
    let iconSize, gap;

    switch (type) {
      case 'h1':
        iconSize = 'xl';
        gap = 'sm';
        break;
      case 'h2':
        iconSize = 'xl';
        gap = 'sm';
        break;
      case 'h3':
        iconSize = 'lg';
        gap = 'xs';
        break;
      case 'h4':
        iconSize = 'lg';
        gap = 'xs';
        break;
      case 'h5':
        iconSize = 'md';
        gap = 'xs';
        break;
      case 'h6':
        iconSize = 'sm';
        gap = 'xs';
        break;
    }

    props.className += ` rvo-layout-row rvo-layout-gap--${gap}`;
    const iconMarkup = <Icon icon={icon as any} size={iconSize} ariaLabel={iconAriaLabel} />;

    if (showIcon === 'before') {
      headingMarkup = (
        <>
          {iconMarkup}
          {textContent}
        </>
      );
    }

    if (showIcon === 'after') {
      headingMarkup = (
        <>
          {textContent}
          {iconMarkup}
        </>
      );
    }
  }

  if (noMargins) {
    props.className += ` rvo-heading--no-margins`;
  }

  if (mixedBoldAndNormal) {
    props.className += ` rvo-heading--mixed`;
  }

  switch (type) {
    default:
    case 'h1':
      headingMarkup = <h1 {...props}>{children || headingMarkup}</h1>;
      break;
    case 'h2':
      headingMarkup = <h2 {...props}>{children || headingMarkup}</h2>;
      break;
    case 'h3':
      headingMarkup = <h3 {...props}>{children || headingMarkup}</h3>;
      break;
    case 'h4':
      headingMarkup = <h4 {...props}>{children || headingMarkup}</h4>;
      break;
    case 'h5':
      headingMarkup = <h5 {...props}>{children || headingMarkup}</h5>;
      break;
    case 'h6':
      headingMarkup = <h6 {...props}>{children || headingMarkup}</h6>;
      break;
  }

  if (link && link.length) {
    return (
      <Link href={link} noUnderline={true}>
        {headingMarkup}
      </Link>
    );
  } else {
    return headingMarkup;
  }
};

export default Heading;
