import type { Meta, StoryObj } from '@storybook/react-webpack5';
import Dashboard from './Dashboard';

export default {
  title: "Pagina's/Voorbeelden/I&R/Dashboard",
  component: Dashboard,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
} satisfies Meta<typeof Dashboard>;
type Story = StoryObj<typeof Dashboard>;

export const Default: Story = { name: 'Dashboard' };
