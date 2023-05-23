import type { Meta, StoryObj } from '@storybook/react';
import Hero from './Hero';

const meta: Meta<typeof Hero> = {
  title: "Demo pagina's/Algemeen/Hero",
  component: Hero,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
};
export default meta;

type Story = StoryObj<typeof Hero>;

export const Default: Story = { name: 'Hero' };
