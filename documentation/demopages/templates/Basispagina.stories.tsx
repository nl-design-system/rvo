import type { Meta, StoryObj } from '@storybook/react';
import Basispagina from './Basispagina';

const meta: Meta<typeof Report> = {
  title: "Pagina's/Templates/Basispagina",
  component: Basispagina,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
};
export default meta;

type Story = StoryObj<typeof Basispagina>;

export const Default: Story = { name: 'Basispagina' };
