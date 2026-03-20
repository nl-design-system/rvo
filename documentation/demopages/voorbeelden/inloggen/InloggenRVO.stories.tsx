/**
 * @license CC0-1.0
 * Copyright (c) 2022 Community for NL Design System
 */
import type { Meta, StoryObj } from '@storybook/react-webpack5';
import InloggenRVO from './InloggenRVO';

const meta: Meta<typeof InloggenRVO> = {
  title: "Pagina's/Voorbeelden/Inloggen/Inloggen bij RVO",
  component: InloggenRVO,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
};
export default meta;

type Story = StoryObj<typeof InloggenRVO>;

export const Default: Story = { name: 'Inloggen bij RVO' };
