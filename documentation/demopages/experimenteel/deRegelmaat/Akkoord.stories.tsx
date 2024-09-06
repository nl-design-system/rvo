import type { Meta, StoryObj } from '@storybook/react';
import Akkoord from './Akkoord';

const meta: Meta<typeof Akkoord> = {
  title: "Pagina's/Experimenteel/de Regelmaat/Akkoord",
  component: Akkoord,
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

type Story = StoryObj<typeof Akkoord>;

export const Default: Story = { name: 'Akkoord' };
