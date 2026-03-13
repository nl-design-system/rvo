/**
 * @license CC0-1.0
 * Copyright (c) 2022 Community for NL Design System
 */
import type { Meta, StoryObj } from '@storybook/react-webpack5';
import Inloggen from './Inloggen';

const meta: Meta<typeof Inloggen> = {
  title: "Pagina's/Voorbeelden/Inloggen/Inloggen",
  component: Inloggen,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
};
export default meta;

type Story = StoryObj<typeof Inloggen>;

export const Default: Story = { name: 'Inloggen' };
