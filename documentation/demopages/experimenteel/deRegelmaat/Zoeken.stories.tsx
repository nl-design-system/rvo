import type { Meta, StoryObj } from '@storybook/react';
import Zoeken from './Zoeken';

const meta: Meta<typeof Zoeken> = {
  title: "Pagina's/Experimenteel/de Regelmaat/Zoeken",
  component: Zoeken,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
    viewport: {
      defaultViewport: 'mobile2',
    },
  },
};
export default meta;

type Story = StoryObj<typeof Zoeken>;

export const Default: Story = { name: 'Zoeken' };
