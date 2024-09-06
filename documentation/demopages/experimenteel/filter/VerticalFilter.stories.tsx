import type { Meta, StoryObj } from '@storybook/react';
import VerticalFilter from './VerticalFilter';

const meta: Meta<typeof VerticalFilter> = {
  title: "Pagina's/Experimenteel/Filter/Vertical filter",
  component: VerticalFilter,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
};
export default meta;

type Story = StoryObj<typeof VerticalFilter>;

export const Default: Story = { name: 'Vertical filter' };
