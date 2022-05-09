import '../../../proprietary/fonts/fonts.css';
import '@nl-rvo/design-tokens/dist/index.css';
import * as designTokens from '@nl-rvo/design-tokens/dist/index.js';
import { defineCustomElements } from '@nl-rvo/web-components-stencil';
import { DocsContainer } from '@storybook/addon-docs';
import React from 'react';
import theme from './theme';

defineCustomElements();

const statuses = {
  BETA: '#9F5E0F',
  STABLE: '#339900',
  DEPRECATED: '#f02c2c',
  'IN DEVELOPMENT': '#174050',
};

const previewTabs = {
  'storybookjs/notes/panel': { title: 'Documentation' },
  'storybook/docs/panel': { title: 'API' },
  canvas: { title: 'Design Tokens' },
};

export const parameters = {
  previewTabs,
  statuses,
  options: {
    panelPosition: 'bottom',
  },
  docs: {
    theme,
    container: (props) => (
      <div id="docsContainer" style={{ fontFamily: designTokens.rvoFontSansSerifFontFamily }}>
        <DocsContainer {...props} />
      </div>
    ),
  },
};

export const decorators = [
  (Story) => {
    const children = Story();

    // Support both React and HTML string stories
    if (typeof children === 'string') {
      return `<div id="story" style="font-family: ${designTokens.rvoFontSansSerifFontFamily}">${children}</div>`;
    } else {
      return (
        <div id="story" style={{ fontFamily: designTokens.rvoFontSansSerifFontFamily }}>
          {children}
        </div>
      );
    }
  },
];
