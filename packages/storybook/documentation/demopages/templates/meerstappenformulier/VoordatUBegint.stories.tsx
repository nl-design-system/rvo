/**
 * @license CC0-1.0
 * Copyright (c) 2022 Community for NL Design System
 */
import type { Meta, StoryObj } from '@storybook/react-webpack5';
import VoordatUBegint from './VoordatUBegint';

export default {
  title: "Pagina's/Templates/Meerstappenformulier/Voordat u begint",
  component: VoordatUBegint,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
} satisfies Meta<typeof VoordatUBegint>;
type Story = StoryObj<typeof VoordatUBegint>;

export const Default: Story = { name: 'Voordat u begint' };
