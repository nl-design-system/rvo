import '@nl-rvo/assets/fonts/index.css';
import '@nl-rvo/design-tokens/dist/index.css';
import * as designTokens from '@nl-rvo/design-tokens/dist/index.js';
import { defineCustomElements } from '@nl-rvo/web-components-stencil';
import { DocsContainer, DocsPage } from '@storybook/addon-docs';
import React from 'react';
// import { ComponentName } from '../../../documentation/components/ComponentName';
import theme from './theme';
import prettier from 'prettier/standalone';
import prettierBabel from 'prettier/parser-babel';

defineCustomElements();

// const statuses = {
//   BETA: '#9F5E0F',
//   STABLE: '#339900',
//   DEPRECATED: '#f02c2c',
//   'IN DEVELOPMENT': '#174050',
// };

const previewTabs = {
  'storybook/docs/panel': { index: -1, title: 'Documentation' },
  canvas: { title: 'Sandbox' },
};

const storySort = {
  order: [
    'Introductie',
    'Huisstijl',
    ['Kleuren', 'Typografie', 'Ruimtes', 'Groottes'],
    'CSS Components',
    "Demo Pagina's",
    'Informatie',
    ['Toestemming voor gebruik', 'Open source licentie'],
  ],
};

export const parameters = {
  previewTabs,
  viewMode: 'docs',
  // statuses,
  options: {
    panelPosition: 'bottom',
    storySort,
  },
  controls: {
    expanded: true,
    sort: 'requiredFirst',
  },
  docs: {
    theme,
    container: (props) => (
      <div id="docsContainer" style={{ fontFamily: designTokens.rvoFontSansSerifFontFamily }}>
        <DocsContainer {...props} />
      </div>
    ),
    page: DocsPage,
    components: {
      // TODO: Add styled components
      // h1: ComponentName,
      // h2: SectionName,
      // h3: Title,
      // li: AnchorListItem,
      // a: LinkComponent,
      // p: Paragraph,
      // Tip,
    },
    source: {
      state: 'open',
      language: 'html',
    },
    transformSource: (input) => {
      return prettier
        .format(input, {
          parser: 'babel',
          plugins: [prettierBabel],
        })
        .replace(/;\s*$/, '');
    },
  },
  html: {
    root: '#story',
    removeEmptyComments: true,
  },
};

export const decorators = [
  (story) => {
    return `<div id="story" style="font-family: ${designTokens.rvoFontSansSerifFontFamily}">${story()}</div>`;
  },
];
