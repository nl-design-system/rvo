/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Community for NL Design System
 */
import * as designTokens from '@nl-rvo/design-tokens/dist';

export const argTypes = {
  size: {
    options: ['sm', 'md', 'lg'],
    control: { type: 'radio' },
  },
  content: {
    control: 'text',
  },
};

export const defaultArgs = {
  size: 'md',
  content: 'Deze gecentreerde layout container heeft een maximale breedte van {maxWidth}.',
};

export const MaxWidthLayout = ({ size = defaultArgs.size, content = defaultArgs.content }) => {
  let parsedContent = content;
  if (parsedContent.indexOf('{maxWidth}') > -1) {
    let maxWidth;
    switch (size) {
      case 'sm':
        maxWidth = designTokens.rvoLayoutMaxWidthSm;
        break;
      case 'md':
        maxWidth = designTokens.rvoLayoutMaxWidthMd;
        break;
      case 'lg':
        maxWidth = designTokens.rvoLayoutMaxWidthLg;
        break;
    }
    parsedContent = parsedContent.replace(/{maxWidth}/g, maxWidth);
  }

  return `<div class="rvo-max-width-layout rvo-max-width-layout--${size}">${parsedContent}</div>`;
};
