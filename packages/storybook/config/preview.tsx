import { useArgs } from '@storybook/preview-api';
import { Preview, StoryContext, StoryFn } from '@storybook/react';
import './preview.scss';
import theme from './theme';

import '@nl-rvo/assets/fonts/index.css';
import '@nl-rvo/assets/icons/index.css';
import '@nl-rvo/assets/images/index.css';
import '@nl-rvo/design-tokens/dist/index.css';
import '@nl-rvo/rijkshuisstijl-design-tokens/dist/index.css';
import '@utrecht/component-library-css/dist/index.css';
import parserBabel from 'prettier/esm/parser-babel.mjs';
import prettier from 'prettier/esm/standalone.mjs';
import * as ReactDOMServer from 'react-dom/server';

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
      HIDDEN: {
        background: '#cccccc',
        color: '#ffffff',
        description: 'Hidden from sidebar.',
      },
    },
  },
};

const parameters = {
  options: {
    storySort: {
      order: [
        'Introductie',
        'Aan de slag',
        'Huisstijl',
        ['Color', 'Font', 'Size', 'Space'],
        'Componenten',
        'Templates',
        "Demo pagina's",
        [
          'Algemeen',
          'de Regelmaat',
          [
            'Splash',
            'Akkoord',
            'Profiel intro',
            'Maatregelen',
            'Maatregel',
            'Zoeken',
            'Bewaard',
            'Suggesties',
            'Profiel',
          ],
          'Jonge Vissers',
          [
            'Controleer uw gegevens',
            'Correspondentie',
            'Datum',
            'Project',
            'Kosten opvoeren',
            'Kosten',
            'Bijlagen',
            'Samenvatting',
            'Ondertekening',
            'Bevestiging',
          ],
          'Mijn RVO',
          ['Inloggen', 'Mijn zaken', 'Zaak', 'Diensten', 'Profiel'],
          'Nieuwe Rijkshuisstijl',
          'RVO.nl',
          'WBSO',
          ['Voordat u start', 'Vormvrije aanvraag', 'Aanvrager'],
        ],
        'Informatie',
        ['Toestemming voor gebruik', 'Open source licentie'],
      ],
    },
  },
  controls: {
    expanded: true,
    sort: 'requiredFirst',
  },
  docs: {
    theme,
    source: {
      state: 'open',
      language: 'html',
      transform: (src, storyContext) => {
        // Ensure valid HTML in the Preview source
        let currentStoryArgs = storyContext.args;
        if (storyContext.originalStoryFn) {
          return prettier
            .format(ReactDOMServer.renderToStaticMarkup(storyContext.originalStoryFn(currentStoryArgs, storyContext)), {
              parser: 'babel',
              plugins: [parserBabel],
            })
            .replace(/\{" "\}/gm, ' ')
            .replace(/(;)[^;]*$/g, '');
        }
        return src;
      },
    },
  },
  ...addonStatus,
  layout: 'fullscreen',
  html: {
    root: '#storybook-root',
    removeEmptyComments: true,
  },
  themes: {
    default: 'ROOS 1.0',
    target: 'root',
    list: [
      { name: 'ROOS 1.0', class: 'rvo-theme', color: '#007bc7' },
      { name: 'ROOS 2.0', class: 'rvo-rijkshuisstijl', color: '#007bc7' },
    ],
  },
};

const decorators = [
  // Add the updateArgs function to the component props
  (storyFn: StoryFn, context: StoryContext) => {
    const [, updateArgs] = useArgs();
    return storyFn({ ...context.args, updateArgs }, context);
  },
];

const preview: Preview = {
  parameters,
  decorators,
};

export default preview;
