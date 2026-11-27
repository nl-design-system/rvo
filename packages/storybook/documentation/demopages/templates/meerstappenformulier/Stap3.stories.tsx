/**
 * @license CC0-1.0
 * Copyright (c) 2022 Community for NL Design System
 */
import type { Meta, StoryObj } from '@storybook/react-webpack5';
import Stap3 from './Stap3';

export default {
  title: "Pagina's/Templates/Meerstappenformulier/Stap 3",
  component: Stap3,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
} satisfies Meta<typeof Stap3>;
type Story = StoryObj<typeof Stap3>;

export const Default: Story = { name: 'Stap 3' };
