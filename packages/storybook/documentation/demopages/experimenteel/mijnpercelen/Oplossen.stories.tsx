import type { Meta, StoryObj } from '@storybook/react-webpack5';
import Oplossen from './Oplossen';

export default {
  title: "Pagina's/Experimenteel/Mijn Percelen/Oplossen",
  component: Oplossen,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
} satisfies Meta<typeof Oplossen>;
type Story = StoryObj<typeof Oplossen>;

export const Default: Story = { name: 'Oplossen' };
