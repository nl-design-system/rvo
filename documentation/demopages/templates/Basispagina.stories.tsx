import type { Meta, StoryObj } from '@storybook/react-webpack5';
import Basispagina from './Basispagina';

export default {
  title: "Pagina's/Templates/Basispagina",
  component: Basispagina,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
} satisfies Meta<typeof Report>;
type Story = StoryObj<typeof Basispagina>;

export const Default: Story = { name: 'Basispagina' };
