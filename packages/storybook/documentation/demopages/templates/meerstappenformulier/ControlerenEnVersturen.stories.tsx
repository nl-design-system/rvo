/**
 * @license CC0-1.0
 * Copyright (c) 2022 Community for NL Design System
 */
import type { Meta, StoryObj } from '@storybook/react-webpack5';
import ControlerenEnVersturen from './ControlerenEnVersturen';

export default {
  title: "Pagina's/Templates/Meerstappenformulier/Controleren en versturen",
  component: ControlerenEnVersturen,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
} satisfies Meta<typeof ControlerenEnVersturen>;
type Story = StoryObj<typeof ControlerenEnVersturen>;

export const Default: Story = { name: 'Controleren en versturen' };
