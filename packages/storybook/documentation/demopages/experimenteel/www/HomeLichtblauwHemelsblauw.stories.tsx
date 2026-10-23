import type { Meta, StoryObj } from '@storybook/react-webpack5';
import HomeLichtblauwHemelsblauw from './HomeLichtblauwHemelsblauw';

export default {
  title: "Pagina's/Experimenteel/www/kleurvariaties/Home (Lichtblauw en Hemelsblauw)",
  component: HomeLichtblauwHemelsblauw,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
} satisfies Meta<typeof HomeLichtblauwHemelsblauw>;
type Story = StoryObj<typeof HomeLichtblauwHemelsblauw>;

export const Default: Story = { name: 'Home (Lichtblauw en Hemelsblauw)' };
