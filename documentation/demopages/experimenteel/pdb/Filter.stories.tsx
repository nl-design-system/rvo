import type { Meta, StoryObj } from '@storybook/react';
import Filter from './Filter';

const meta: Meta<typeof Filter> = {
  title: "Pagina's/Experimenteel/projects.rvo.nl/Filter/Filter A",
  component: Filter,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
};
export default meta;

type Story = StoryObj<typeof Filter>;

export const Default: Story = { name: 'Filter A' };
