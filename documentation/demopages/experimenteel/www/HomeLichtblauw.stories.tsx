import type { Meta, StoryObj } from '@storybook/react-webpack5';
import HomeLichtblauw from './HomeLichtblauw';

export default {
  title: "Pagina's/Experimenteel/www/kleurvariaties/Home (Lichtblauw)",
  component: HomeLichtblauw,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
} satisfies Meta<typeof HomeLichtblauw>;
type Story = StoryObj<typeof HomeLichtblauw>;

export const Default: Story = { name: 'Home (Lichtblauw)' };
