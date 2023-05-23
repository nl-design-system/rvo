import type { Meta, StoryObj } from '@storybook/react';
import Zoeken from './Zoeken';

const meta: Meta<typeof Zoeken> = {
  title: "Demo pagina's/de Regelmaat/Zoeken",
  component: Zoeken,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
};
export default meta;

type Story = StoryObj<typeof Zoeken>;

export const Default: Story = { name: 'Zoeken' };
