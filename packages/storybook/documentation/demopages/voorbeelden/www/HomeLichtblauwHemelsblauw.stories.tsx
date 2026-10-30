import type { Meta, StoryObj } from '@storybook/react-webpack5';
import HomeLichtblauwHemelsblauw from './HomeLichtblauwHemelsblauw';

export default {
  title: "Pagina's/Voorbeelden/www/Home lichtblauw hemelsblauw",
  component: HomeLichtblauwHemelsblauw,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
} satisfies Meta<typeof HomeLichtblauwHemelsblauw>;
type Story = StoryObj<typeof HomeLichtblauwHemelsblauw>;

export const Default: Story = { name: 'HomeLichtblauwHemelsblauw' };
