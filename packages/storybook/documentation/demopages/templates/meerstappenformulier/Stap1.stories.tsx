/**
 * @license CC0-1.0
 * Copyright (c) 2022 Community for NL Design System
 */
import type { Meta, StoryObj } from '@storybook/react-webpack5';
import Stap1 from './Stap1';

export default {
  title: "Pagina's/Templates/Meerstappenformulier/Stap 1",
  component: Stap1,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
} satisfies Meta<typeof Stap1>;
type Story = StoryObj<typeof Stap1>;

export const Default: Story = { name: 'Stap 1' };
