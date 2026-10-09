import type { Meta, StoryObj } from '@storybook/react-webpack5';
import Subsidiepagina from './Subsidiepagina';

export default {
  title: "Pagina's/Voorbeelden/www/Subsidiepagina",
  component: Subsidiepagina,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
} satisfies Meta<typeof Subsidiepagina>;
type Story = StoryObj<typeof Subsidiepagina>;

export const Default: Story = { name: 'Subsidiepagina' };
