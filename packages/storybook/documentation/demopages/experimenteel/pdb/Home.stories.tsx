import type { Meta, StoryObj } from '@storybook/react-webpack5';
import Home from './Home';

export default {
  title: "Pagina's/Experimenteel/projects.rvo.nl/Home",
  component: Home,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
} satisfies Meta<typeof Home>;
type Story = StoryObj<typeof Home>;

export const Default: Story = { name: 'Home' };
