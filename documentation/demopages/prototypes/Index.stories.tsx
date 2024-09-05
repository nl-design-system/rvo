import type { Meta, StoryObj } from '@storybook/react';
import Index from './Index';

const meta: Meta<typeof Index> = {
  title: "Pagina's/Prototypes/Index",
  component: Index,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
};
export default meta;

type Story = StoryObj<typeof Index>;

export const Default: Story = { name: 'Index' };
