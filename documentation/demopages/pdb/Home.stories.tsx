import type { Meta, StoryObj } from '@storybook/react';
import Home from './Home';

const meta: Meta<typeof Home> = {
  title: "Demo pagina's/projects.rvo.nl/Home",
  component: Home,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
};
export default meta;

type Story = StoryObj<typeof Home>;

export const Default: Story = { name: 'Home' };
