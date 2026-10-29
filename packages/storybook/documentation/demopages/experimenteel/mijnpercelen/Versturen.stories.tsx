import type { Meta, StoryObj } from '@storybook/react-webpack5';
import Versturen from './Versturen';

export default {
  title: "Pagina's/Experimenteel/Mijn Percelen/Versturen",
  component: Versturen,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
} satisfies Meta<typeof Versturen>;
type Story = StoryObj<typeof Versturen>;

export const Default: Story = { name: 'Versturen' };
