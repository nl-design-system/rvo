/**
 * @license CC0-1.0
 * Copyright (c) 2022 Community for NL Design System
 */
import type { Meta, StoryObj } from '@storybook/react-webpack5';
import Stap2 from './Stap2';

export default {
  title: "Pagina's/Templates/Meerstappenformulier/Stap 2",
  component: Stap2,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
} satisfies Meta<typeof Stap2>;
type Story = StoryObj<typeof Stap2>;

export const Default: Story = { name: 'Stap 2' };
