/**
 * @license CC0-1.0
 * Copyright (c) 2022 Community for NL Design System
 */
import type { Meta, StoryObj } from '@storybook/react-webpack5';
import Uitloggen from './Uitloggen';

const meta: Meta<typeof Uitloggen> = {
  title: "Pagina's/Voorbeelden/Uitloggen/U bent uitgelogd",
  component: Uitloggen,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
};
export default meta;

type Story = StoryObj<typeof Uitloggen>;

export const Default: Story = { name: 'U bent uitgelogd' };
