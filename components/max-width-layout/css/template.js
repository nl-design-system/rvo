/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Community for NL Design System
 */
import * as designTokens from '@nl-rvo/design-tokens/dist';

export const argTypes = {
  size: {
    options: ['medium', 'large'],
    control: { type: 'radio' },
  },
};

export const defaultArgs = {
  size: 'medium',
};

export const MaxWidthLayout = ({ size = defaultArgs.size }) => {
  let maxWidth;
  switch (size) {
    case 'medium':
      maxWidth = designTokens.rvoLayoutMaxWidthMedium;
      break;
    case 'large':
      maxWidth = designTokens.rvoLayoutMaxWidthLarge;
      break;
  }
  return `<div class="rvo-max-width-layout--${size}">Deze layout container heeft een maximale breedte van ${maxWidth}.</div>`;
};
