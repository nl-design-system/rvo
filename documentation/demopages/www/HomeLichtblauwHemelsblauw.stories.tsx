import type { Meta, StoryObj } from '@storybook/react';
import HomeLichtblauwHemelsblauw from './HomeLichtblauwHemelsblauw';

const meta: Meta<typeof HomeLichtblauwHemelsblauw> = {
  title: "Demo pagina's/www/kleurvariaties/Home (Lichtblauw en Hemelsblauw)",
  component: HomeLichtblauwHemelsblauw,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
};
export default meta;

type Story = StoryObj<typeof HomeLichtblauwHemelsblauw>;

export const Default: Story = { name: 'Home (Lichtblauw en Hemelsblauw)' };
