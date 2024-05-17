import type { Meta, StoryObj } from '@storybook/react';
import Filter from './Filter';

const meta: Meta<typeof Filter> = {
  title: "Demo pagina's/projects.rvo.nl/Filter",
  component: Filter,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
};
export default meta;

type Story = StoryObj<typeof Filter>;

export const Default: Story = { name: 'Filter' };
