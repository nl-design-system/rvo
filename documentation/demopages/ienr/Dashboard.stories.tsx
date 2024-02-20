import type { Meta, StoryObj } from '@storybook/react';
import Dashboard from './Dashboard';

const meta: Meta<typeof Dashboard> = {
  title: "Demo pagina's/I&R/Dashboard",
  component: Dashboard,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
};
export default meta;

type Story = StoryObj<typeof Dashboard>;

export const Default: Story = { name: 'Dashboard' };
