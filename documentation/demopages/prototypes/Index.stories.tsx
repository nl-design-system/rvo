import type { Meta, StoryObj } from '@storybook/react-webpack5';
import Index from './Index';

export default {
  title: 'Prototypes/Index',
  component: Index,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
} satisfies Meta<typeof Index>;
type Story = StoryObj<typeof Index>;

export const Default: Story = { name: 'Index' };
