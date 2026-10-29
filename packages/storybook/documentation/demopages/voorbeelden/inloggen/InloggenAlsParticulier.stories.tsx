/**
 * @license CC0-1.0
 * Copyright (c) 2022 Community for NL Design System
 */
import type { Meta, StoryObj } from '@storybook/react-webpack5';
import InloggenAlsParticulier from './InloggenAlsParticulier';

export default {
  title: "Pagina's/Voorbeelden/Inloggen/Inloggen als particulier",
  component: InloggenAlsParticulier,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
} satisfies Meta<typeof InloggenAlsParticulier>;
type Story = StoryObj<typeof InloggenAlsParticulier>;

export const Default: Story = { args: {}, name: 'Inloggen als particulier' };
