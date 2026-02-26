import type { Meta, StoryObj } from '@storybook/react-webpack5';
import Formulier from './Formulier';

const meta: Meta<typeof Report> = {
  title: "Pagina's/Templates/Formulier",
  component: Formulier,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
};
export default meta;

type Story = StoryObj<typeof Formulier>;

export const Default: Story = { name: 'Formulier' };
