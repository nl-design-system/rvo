import type { Meta, StoryObj } from '@storybook/react-webpack5';
import Notify from './Notify';

export default {
  title: "Pagina's/Experimenteel/www/Notify",
  component: Notify,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
} satisfies Meta<typeof Notify>;
type Story = StoryObj<typeof Notify>;

export const Default: Story = { name: 'Notify' };
