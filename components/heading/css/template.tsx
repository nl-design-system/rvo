/**
 * @license EUPL-1.2
 * Copyright (c) 2022 Community for NL Design System
 */

import clsx from 'clsx';
import React from 'react';

interface IHeadingProps {
  type: string;
  textContent: string;
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
};

export const defaultArgs: IHeadingProps = {
  type: 'h1',
  textContent: 'Heading',
};

export const Heading: React.FC<IHeadingProps> = ({
  type = defaultArgs.type,
  textContent = defaultArgs.textContent,
}) => {
  const props = {
    className: clsx(`utrecht-heading-${type.replace('h', '')}`),
  };

  switch (type) {
    default:
    case 'h1':
      return <h1 {...props}>{textContent}</h1>;
    case 'h2':
      return <h2 {...props}>{textContent}</h2>;
    case 'h3':
      return <h3 {...props}>{textContent}</h3>;
    case 'h4':
      return <h4 {...props}>{textContent}</h4>;
    case 'h5':
      return <h5 {...props}>{textContent}</h5>;
    case 'h6':
      return <h6 {...props}>{textContent}</h6>;
  }
};
