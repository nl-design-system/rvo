import type { Meta, StoryObj } from '@storybook/react-webpack5';
import Registerpagina from './Registerpagina';

export default {
  title: "Pagina's/Voorbeelden/www/Registerpagina",
  component: Registerpagina,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
} satisfies Meta<typeof Registerpagina>;
type Story = StoryObj<typeof Registerpagina>;

export const Default: Story = { name: 'Registerpagina' };
