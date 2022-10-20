// import { defineCustomElements } from '@nl-rvo/web-components-stencil';
import theme from './theme';
import './preview.scss';
import prettier from 'prettier/standalone';
import prettierBabel from 'prettier/parser-babel';
import * as ReactDOMServer from 'react-dom/server';

import '@nl-rvo/assets/fonts/index.css';
import '@nl-rvo/assets/icons/index.css';
import '@nl-rvo/assets/images/index.css';
import '@nl-rvo/design-tokens/dist/index.css';
import '@utrecht/component-library-css/dist/index.css';

// defineCustomElements();

// Configure @etchteam/storybook-addon-status
const addonStatus = {
  status: {
    statuses: {
      PRODUCTION: {
        background: '#088008',
        color: '#ffffff',
        description:
          'Used in production in a variety of situations, well tested, stable APIs, mostly patches and minor releases.',
      },
      BETA: {
        background: '#3065ee',
        color: '#ffffff',
        description:
          'Used in production in a specific situation, evolving APIs based on feedback, breaking changes are still likely.',
      },
      ALPHA: {
        background: '#e0bc2e',
        color: '#000000',
        description:
          'Used in prototypes and in projects that are still in development, breaking changes occur frequently and are not communicated.',
      },
      'WORK IN PROGRESS': {
        background: '#cc0000',
        color: '#ffffff',
        description:
          'Do not use in production. Does not follow semantic versioning and any published packages are for internal use only.',
      },
    },
  },
};

const previewTabs = {
  'storybook/docs/panel': { index: -1, title: 'Documentation' },
  canvas: { title: 'Sandbox' },
};

const storySort = {
  order: [
    'Introductie',
    'Aan de slag',
    'Huisstijl',
    ['Color', 'Font', 'Size', 'Space'],
    'CSS Components',
    "Pagina's",
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
    components: {
      // TODO: Add styled components to style docs template
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
    transformSource: (src, storyContext) => {
      // Ensure valid HTML in the Preview source
      if (storyContext.component) {
        return prettier
          .format(ReactDOMServer.renderToStaticMarkup(storyContext.component(storyContext.parameters.args)), {
            parser: 'babel',
            plugins: [prettierBabel],
          })
          .replace(/\{\" \"\}/gm, ' ')
          .replace(/(;)[^;]*$/g, '');
      }
      return src;
    },
  },
  ...addonStatus,
  layout: 'fullscreen',
  html: {
    root: '#story',
    removeEmptyComments: true,
  },
};
