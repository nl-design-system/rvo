/**
 * @license EUPL-1.2
 * Copyright (c) 2022 Community for NL Design System
 */

import clsx from 'clsx';

export const argTypes = {
  type: {
    options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
    mapping: {
      h1: 1,
      h2: 2,
      h3: 3,
      h4: 4,
      h5: 5,
      h6: 6,
    },
    control: { type: 'select' },
  },
  textContent: {
    control: 'text',
  },
  distanced: {
    control: 'boolean',
  },
};

export const defaultArgs = {
  type: 'h1',
  textContent: 'Heading',
  distanced: false,
};

export const Heading = ({
  type = defaultArgs.type,
  textContent = defaultArgs.textContent,
  distanced = defaultArgs.distanced,
}) => {
  return `<h${type} class="${clsx(`utrecht-heading-${type}`, {
    [`utrecht-heading-${type}--distanced`]: distanced,
  })}">${textContent}</h${type}>`;
};
