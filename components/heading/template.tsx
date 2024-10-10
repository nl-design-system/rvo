/**
 * @license EUPL-1.2
 * Copyright (c) 2022 Community for NL Design System
 */
import clsx from 'clsx';
import React, { ReactNode } from 'react';
import { defaultArgs } from './defaultArgs';
import { Icon, iconNames as iconOptions } from '../icon/template';
import { IconType } from '../icon/types';
import { Link } from '../link/template';
import './index.scss';
import parseContentMarkup from '../utils/parseContentMarkup';

export interface IHeadingProps {
  type?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  /** @uxpinignoreprop */
  textContent?: string | ReactNode;
  link?: string;
  /** @uxpinpropname Content */
  children?: ReactNode | undefined;
  showIcon?: 'no' | 'before' | 'after';
  icon?: IconType;
  iconAriaLabel?: string;
  noMargins?: boolean;
  /** @uxpinignoreprop */
  mixedBoldAndNormal?: boolean;
  /** @uxpinignoreprop */
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
  children: {
    table: {
      disable: true,
    },
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
  let headingMarkup = parseContentMarkup(children || textContent);

  const props = {
    className: clsx(className, `utrecht-heading-${type?.replace('h', '')}`),
    ...otherProps,
  };

  if (icon) {
    let iconSize, gap;

    switch (type) {
      default:
      case 'h1':
        iconSize = 'xl' as const;
        gap = 'sm' as const;
        break;
      case 'h2':
        iconSize = 'xl' as const;
        gap = 'sm' as const;
        break;
      case 'h3':
        iconSize = 'lg' as const;
        gap = 'xs' as const;
        break;
      case 'h4':
        iconSize = 'lg' as const;
        gap = 'xs' as const;
        break;
      case 'h5':
        iconSize = 'md' as const;
        gap = 'xs' as const;
        break;
      case 'h6':
        iconSize = 'sm' as const;
        gap = 'xs' as const;
        break;
    }

    props.className += ` rvo-layout-row rvo-layout-gap--${gap}`;
    const iconMarkup = <Icon icon={icon as any} size={iconSize} ariaLabel={iconAriaLabel} />;

    if (showIcon === 'before') {
      headingMarkup = (
        <>
          {iconMarkup}
          {headingMarkup}
        </>
      );
    }

    if (showIcon === 'after') {
      headingMarkup = (
        <>
          {headingMarkup}
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
      headingMarkup = <h1 {...props}>{headingMarkup}</h1>;
      break;
    case 'h2':
      headingMarkup = <h2 {...props}>{headingMarkup}</h2>;
      break;
    case 'h3':
      headingMarkup = <h3 {...props}>{headingMarkup}</h3>;
      break;
    case 'h4':
      headingMarkup = <h4 {...props}>{headingMarkup}</h4>;
      break;
    case 'h5':
      headingMarkup = <h5 {...props}>{headingMarkup}</h5>;
      break;
    case 'h6':
      headingMarkup = <h6 {...props}>{headingMarkup}</h6>;
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
