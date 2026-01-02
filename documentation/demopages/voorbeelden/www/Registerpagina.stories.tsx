import type { Meta, StoryObj } from '@storybook/react';
import Registerpagina from './Registerpagina';

const meta: Meta<typeof Registerpagina> = {
  title: "Pagina's/Voorbeelden/www/Registerpagina",
  component: Registerpagina,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
};
export default meta;

type Story = StoryObj<typeof Registerpagina>;

export const Default: Story = { name: 'Registerpagina' };
