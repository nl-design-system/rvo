/**
 * @license CC0-1.0
 * Copyright (c) 2025 Community for NL Design System
 */
import type { Meta, StoryObj } from '@storybook/react';
import { defaultArgs } from './src/defaultArgs';
import { Image } from './src/template';

const argTypes = {
  src: {
    control: 'text',
    description: 'Afbeeldingsbron (URL) — verplicht.',
  },
  alt: {
    control: 'text',
    description: 'Alternatieve tekst — verplicht voor toegankelijkheid.',
  },
  caption: {
    control: 'text',
    description: 'Optioneel bijschrift dat onder de afbeelding wordt weergegeven.',
  },
  lang: {
    control: 'text',
    description: 'Taalcode voor het bijschrift (alleen toegepast op `<figure>`).',
  },
  width: {
    control: { type: 'number' },
    description: 'Optionele vaste breedte. Verbetert lay-outstabiliteit (CLS).',
  },
  height: {
    control: { type: 'number' },
    description: 'Optionele vaste hoogte. Gebruik samen met `width` voor de beste prestaties.',
  },
  radius: {
    control: { type: 'select' },
    options: ['none', 'all', 'top-left', 'top-right', 'bottom-left', 'bottom-right'],
    description: 'Bepaalt welke hoeken afgerond zijn.',
  },
  radiusSize: {
    control: { type: 'select' },
    options: ['sm', 'md', 'lg', 'xl', '2xl'],
    description: 'Bepaalt de grootte van de afgeronde hoeken (token-based).',
  },
  loading: {
    control: { type: 'select' },
    options: [undefined, 'lazy', 'eager'],
    description: 'Laadgedrag van de afbeelding (optioneel).',
  },
  decoding: {
    control: { type: 'select' },
    options: [undefined, 'async', 'sync', 'auto'],
    description: 'Decode-strategie voor de afbeelding (optioneel).',
  },
  fetchPriority: {
    control: { type: 'select' },
    options: [undefined, 'high', 'low', 'auto'],
    description: 'Prioriteit voor het ophalen van de afbeelding (optioneel).',
  },
  sources: {
    control: { disable: true },
    description: 'Alternatieve bronnen voor responsieve afbeeldingen (alleen via code).',
  },
  className: {
    control: { disable: true },
  },
};

defaultArgs.src = 'images/www/beursbezoek.jpeg';
defaultArgs.width = 427;
defaultArgs.height = 640;

const meta: Meta<typeof Image> = {
  title: 'Componenten/Image',
  component: Image,
  args: defaultArgs,
  argTypes,
  parameters: {
    status: { type: 'BETA' },
    docusaurus: { link: 'image' },
    docs: {
      description: {
        component: `
Een toegankelijke, responsieve **Image** component voor het NL Design System.

- Gebruikt \`<picture>\` automatisch wanneer \`sources\` aanwezig zijn.
- Rendert alleen \`loading\`, \`decoding\` of \`fetchPriority\` wanneer expliciet ingesteld.
- Ondersteunt \`caption\`, \`radius\` en \`radiusSize\` tokens voor afgeronde hoeken.
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Image>;

/* === STORIES === */

export const Default: Story = {
  name: 'Default',
  args: {
    ...defaultArgs,
    radius: 'none',
  },
  parameters: {
    docs: {
      description: {
        story: 'Standaardafbeelding met minimale instellingen (alleen `src` en `alt`).',
      },
    },
  },
};

export const TopLeftRounded: Story = {
  name: 'Afgerond (linksboven)',
  args: {
    ...defaultArgs,
    radius: 'top-left',
    radiusSize: '2xl',
  },
};

export const BottomRightRounded: Story = {
  name: 'Afgerond (rechtsonder)',
  args: {
    ...defaultArgs,
    radius: 'bottom-right',
    radiusSize: '2xl',
  },
};

export const WithCaption: Story = {
  name: 'Met bijschrift',
  args: {
    ...defaultArgs,
    caption: 'Een bijschrift dat de afbeelding beschrijft.',
    radius: 'bottom-right',
    radiusSize: '2xl',
  },
};

export const PerformanceTuned: Story = {
  name: 'Performance-optimalisatie (hero)',
  args: {
    ...defaultArgs,
    loading: 'eager',
    decoding: 'auto',
    fetchPriority: 'high',
    caption: 'Hero-afbeelding met fetchPriority="high" voor snellere laadtijd.',
  },
  parameters: {
    docs: {
      description: {
        story: 'Voor hero- of boven-de-vouwafbeeldingen. Wordt vroeg geladen en heeft hogere ophaalprioriteit.',
      },
    },
  },
};

export const Decorative: Story = {
  name: 'Decoratief (lage prioriteit)',
  args: {
    ...defaultArgs,
    alt: '',
    caption: undefined,
    loading: 'lazy',
    fetchPriority: 'low',
    radius: 'all',
    radiusSize: 'md',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Een decoratieve afbeelding met `alt=""` (niet zichtbaar voor schermlezers). Wordt traag geladen en met lage prioriteit opgehaald.',
      },
    },
  },
};
