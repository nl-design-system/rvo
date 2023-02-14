/**
 * @license EUPL-1.2
 * Copyright (c) 2022 Community for NL Design System
 */

import clsx from 'clsx';
import React from 'react';
import { Link } from '../link/template';
import { defaultArgs } from './defaultArgs';
import './index.scss';

export interface IHeadingProps {
  type?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  textContent?: string | React.ReactNode;
  link?: string;
  children?: React.ReactNode;
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
};

export const Heading: React.FC<IHeadingProps> = ({
  type = defaultArgs.type,
  textContent = defaultArgs.textContent,
  link = defaultArgs.link,
  children,
}: IHeadingProps) => {
  const props = {
    className: clsx(`utrecht-heading-${type.replace('h', '')}`),
  };

  let headingMarkup;
  switch (type) {
    default:
    case 'h1':
      headingMarkup = <h1 {...props}>{children || textContent}</h1>;
      break;
    case 'h2':
      headingMarkup = <h2 {...props}>{children || textContent}</h2>;
      break;
    case 'h3':
      headingMarkup = <h3 {...props}>{children || textContent}</h3>;
      break;
    case 'h4':
      headingMarkup = <h4 {...props}>{children || textContent}</h4>;
      break;
    case 'h5':
      headingMarkup = <h5 {...props}>{children || textContent}</h5>;
      break;
    case 'h6':
      headingMarkup = <h6 {...props}>{children || textContent}</h6>;
      break;
  }

  if (link && link.length) {
    return <Link href={link} content={headingMarkup} noUnderline={true} />;
  } else {
    return headingMarkup;
  }
};

export default Heading;