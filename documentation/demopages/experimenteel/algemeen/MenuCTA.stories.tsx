import type { Meta, StoryObj } from '@storybook/react';
import MenuCTA from './MenuCTA';

const meta: Meta<typeof MenuCTA> = {
  title: "Pagina's/Experimenteel/Algemeen/Menu CTA",
  component: MenuCTA,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
};
export default meta;

type Story = StoryObj<typeof MenuCTA>;

export const Default: Story = { name: 'Menu CTA' };
