import type { Meta, StoryObj } from '@storybook/react';
import Project from './Project';

const meta: Meta<typeof Project> = {
  title: "Demo pagina's/Jonge Vissers/Project",
  component: Project,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
};
export default meta;

type Story = StoryObj<typeof Project>;

export const Default: Story = { name: 'Project' };
