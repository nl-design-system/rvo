/**
 * @license CC0-1.0
 * Copyright (c) 2022 Community for NL Design System
 */
import type { Meta, StoryObj } from '@storybook/react-webpack5';
import UitloggenAutomatisch from './UitloggenAutomatisch';

const meta: Meta<typeof UitloggenAutomatisch> = {
  title: "Pagina's/Voorbeelden/Uitloggen/U bent automatisch uitgelogd",
  component: UitloggenAutomatisch,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
};
export default meta;

type Story = StoryObj<typeof UitloggenAutomatisch>;

export const Default: Story = { name: 'U bent automatisch uitgelogd' };
