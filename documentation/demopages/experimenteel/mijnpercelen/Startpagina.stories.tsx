import type { Meta, StoryObj } from '@storybook/react';
import Startpagina from './Startpagina';

const meta: Meta<typeof Startpagina> = {
  title: "Pagina's/Experimenteel/Mijn Percelen/Startpagina",
  component: Startpagina,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
};
export default meta;

type Story = StoryObj<typeof Startpagina>;

export const Default: Story = { name: 'Startpagina' };
