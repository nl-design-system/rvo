import type { Meta, StoryObj } from '@storybook/react';
import Notify from './Notify';

const meta: Meta<typeof Notify> = {
  title: "Demo pagina's/www/Notify",
  component: Notify,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
};
export default meta;

type Story = StoryObj<typeof Notify>;

export const Default: Story = { name: 'Notify' };
