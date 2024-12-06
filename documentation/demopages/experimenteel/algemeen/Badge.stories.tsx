import type { Meta, StoryObj } from '@storybook/react';
import Badge from './Badge';

const meta: Meta<typeof Badge> = {
  title: "Pagina's/Experimenteel/Algemeen/Badge",
  component: Badge,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
};
export default meta;

type Story = StoryObj<typeof Badge>;

export const Default: Story = { name: 'Badge' };
