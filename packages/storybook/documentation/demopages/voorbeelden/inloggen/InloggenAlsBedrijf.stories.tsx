/**
 * @license CC0-1.0
 * Copyright (c) 2022 Community for NL Design System
 */
import type { Meta, StoryObj } from '@storybook/react-webpack5';
import InloggenAlsBedrijf from './InloggenAlsBedrijf';

export default {
  title: "Pagina's/Voorbeelden/Inloggen/Inloggen als bedrijf of organisatie",
  component: InloggenAlsBedrijf,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
} satisfies Meta<typeof InloggenAlsBedrijf>;
type Story = StoryObj<typeof InloggenAlsBedrijf>;

export const Default: Story = { args: {}, name: 'Inloggen als bedrijf of organisatie' };
