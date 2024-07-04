import type { Meta, StoryObj } from '@storybook/react';
import FilterB from './FilterB';

const meta: Meta<typeof FilterB> = {
  title: "Demo pagina's/projects.rvo.nl/Filter/Filter B",
  component: FilterB,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
};
export default meta;

type Story = StoryObj<typeof FilterB>;

export const Default: Story = { name: 'Filter B' };
