import type { Meta, StoryObj } from '@storybook/react-webpack5';
import RegisterAlternativepagina from './RegisterAlternativepagina';

const meta: Meta<typeof RegisterAlternativepagina> = {
  title: "Pagina's/Voorbeelden/www/Registerpagina alternatief",
  component: RegisterAlternativepagina,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
};
export default meta;

type Story = StoryObj<typeof RegisterAlternativepagina>;

export const Default: Story = { name: 'Registerpagina alternatief' };
