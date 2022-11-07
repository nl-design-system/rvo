/**
 * @license EUPL-1.2
 * Copyright (c) 2022 Community for NL Design System
 */

import clsx from 'clsx';
import React from 'react';
import { Link } from '../../link/css/template';
import './index.scss';

interface IHeadingProps {
  type: string;
  textContent: string;
  link?: string;
  distanced?: boolean;
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

export const defaultArgs: IHeadingProps = {
  type: 'h1',
  textContent: 'Heading',
  link: '',
};

export const Heading: React.FC<IHeadingProps> = ({
  type = defaultArgs.type,
  textContent = defaultArgs.textContent,
  link = defaultArgs.link,
}) => {
  const props = {
    className: clsx(`utrecht-heading-${type.replace('h', '')}`),
  };

  let headingMarkup;
  switch (type) {
    default:
    case 'h1':
      headingMarkup = <h1 {...props}>{textContent}</h1>;
      break;
    case 'h2':
      headingMarkup = <h2 {...props}>{textContent}</h2>;
      break;
    case 'h3':
      headingMarkup = <h3 {...props}>{textContent}</h3>;
      break;
    case 'h4':
      headingMarkup = <h4 {...props}>{textContent}</h4>;
      break;
    case 'h5':
      headingMarkup = <h5 {...props}>{textContent}</h5>;
      break;
    case 'h6':
      headingMarkup = <h6 {...props}>{textContent}</h6>;
      break;
  }

  if (link && link.length) {
    return <Link url={link} content={headingMarkup} noUnderline={true} />;
  } else {
    return headingMarkup;
  }
};
