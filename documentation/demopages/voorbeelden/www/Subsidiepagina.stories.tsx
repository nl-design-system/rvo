import type { Meta, StoryObj } from '@storybook/react-webpack5';
import Subsidiepagina from './Subsidiepagina';

const meta: Meta<typeof Subsidiepagina> = {
  title: "Pagina's/Voorbeelden/www/Subsidiepagina",
  component: Subsidiepagina,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
};
export default meta;

type Story = StoryObj<typeof Subsidiepagina>;

export const Default: Story = { name: 'Subsidiepagina' };
