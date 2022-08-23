import '@nl-rvo/assets/fonts/index.css';
import '@nl-rvo/assets/icons/index.css';
import '@nl-rvo/assets/images/index.css';
import '@nl-rvo/design-tokens/dist/index.css';
import { defineCustomElements } from '@nl-rvo/web-components-stencil';
import theme from './theme';
import './preview.scss';
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
    transformSource: (input) => {
      return prettier
        .format(input, {
          parser: 'babel',
          plugins: [prettierBabel],
        })
        .replace(/;\s*$/, '')
        .replace('=""', '');
    },
  },
  html: {
    root: '#story',
    removeEmptyComments: true,
  },
};
