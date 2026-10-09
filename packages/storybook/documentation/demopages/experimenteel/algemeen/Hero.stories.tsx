import type { Meta, StoryObj } from '@storybook/react-webpack5';
import Hero from './Hero';

export default {
  title: "Pagina's/Experimenteel/Algemeen/Hero",
  component: Hero,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
} satisfies Meta<typeof Hero>;
type Story = StoryObj<typeof Hero>;

export const Default: Story = { name: 'Hero' };
