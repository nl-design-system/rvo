import type { Meta, StoryObj } from '@storybook/react';
import FilterC from './FilterC';

const meta: Meta<typeof FilterC> = {
  title: "Demo pagina's/projects.rvo.nl/Filter/Filter C",
  component: FilterC,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
};
export default meta;

type Story = StoryObj<typeof FilterC>;

export const Default: Story = { name: 'Filter C' };
