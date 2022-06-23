/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Community for NL Design System
 */
import * as designTokens from '@nl-rvo/design-tokens/dist';

export const argTypes = {
  size: {
    options: ['medium', 'large'],
    mapping: {
      medium: 'md',
      large: 'lg',
    },
    control: { type: 'radio' },
  },
};

export const defaultArgs = {
  size: 'medium',
};

export const MaxWidthLayout = ({ size = defaultArgs.size }) => {
  let maxWidth;
  switch (size) {
    case 'md':
      maxWidth = designTokens.rvoLayoutMaxWidthMd;
      break;
    case 'lg':
      maxWidth = designTokens.rvoLayoutMaxWidthLg;
      break;
  }
  return `<div class="rvo-max-width-layout rvo-max-width-layout--${size}">Deze gecentreerde layout container heeft een maximale breedte van ${maxWidth}.</div>`;
};
