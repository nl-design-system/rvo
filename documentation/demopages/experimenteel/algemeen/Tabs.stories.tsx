import type { Meta, StoryObj } from '@storybook/react';
import Tabs from './Tabs';

const meta: Meta<typeof Tabs> = {
  title: "Pagina's/Experimenteel/Algemeen/Tabs",
  component: Tabs,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
};
export default meta;

type Story = StoryObj<typeof Tabs>;

export const Default: Story = { name: 'Tabs' };
