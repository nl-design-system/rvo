import type { Meta, StoryObj } from '@storybook/react-webpack5';
import Badge from './Badge';

export default {
  title: "Pagina's/Experimenteel/Algemeen/Badge",
  component: Badge,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
} satisfies Meta<typeof Badge>;
type Story = StoryObj<typeof Badge>;

export const Default: Story = { name: 'Badge' };
