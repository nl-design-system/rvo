import type { Meta, StoryObj } from '@storybook/react';
import Oplossen from './Oplossen';

const meta: Meta<typeof Oplossen> = {
  title: "Demo pagina's/Mijn Percelen/Oplossen",
  component: Oplossen,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
};
export default meta;

type Story = StoryObj<typeof Oplossen>;

export const Default: Story = { name: 'Oplossen' };
