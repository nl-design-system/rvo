import type { Meta, StoryObj } from '@storybook/react-webpack5';
import MenuCTA from './MenuCTA';

export default {
  title: "Pagina's/Experimenteel/Algemeen/Menu CTA",
  component: MenuCTA,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
} satisfies Meta<typeof MenuCTA>;
type Story = StoryObj<typeof MenuCTA>;

export const Default: Story = { name: 'Menu CTA' };
