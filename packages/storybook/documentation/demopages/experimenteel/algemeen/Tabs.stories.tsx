import type { Meta, StoryObj } from '@storybook/react-webpack5';
import Tabs from './Tabs';

export default {
  title: "Pagina's/Experimenteel/Algemeen/Tabs",
  component: Tabs,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
} satisfies Meta<typeof Tabs>;
type Story = StoryObj<typeof Tabs>;

export const Default: Story = { name: 'Tabs' };
