import type { Meta, StoryObj } from '@storybook/react-webpack5';
import Project from './Project';

export default {
  title: "Pagina's/Experimenteel/Jonge Vissers/Project",
  component: Project,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
} satisfies Meta<typeof Project>;
type Story = StoryObj<typeof Project>;

export const Default: Story = { name: 'Project' };
