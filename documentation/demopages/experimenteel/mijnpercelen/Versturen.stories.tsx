import type { Meta, StoryObj } from '@storybook/react';
import Versturen from './Versturen';

const meta: Meta<typeof Versturen> = {
  title: "Pagina's/Experimenteel/Mijn Percelen/Versturen",
  component: Versturen,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
};
export default meta;

type Story = StoryObj<typeof Versturen>;

export const Default: Story = { name: 'Versturen' };
