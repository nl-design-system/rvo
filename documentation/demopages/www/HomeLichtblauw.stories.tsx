import type { Meta, StoryObj } from '@storybook/react';
import HomeLichtblauw from './HomeLichtblauw';

const meta: Meta<typeof HomeLichtblauw> = {
  title: "Demo pagina's/www/kleurvariaties/Home (Lichtblauw)",
  component: HomeLichtblauw,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
};
export default meta;

type Story = StoryObj<typeof HomeLichtblauw>;

export const Default: Story = { name: 'Home (Lichtblauw)' };
