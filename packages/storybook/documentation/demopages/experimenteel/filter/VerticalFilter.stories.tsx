import type { Meta, StoryObj } from '@storybook/react-webpack5';
import VerticalFilter from './VerticalFilter';

export default {
  title: "Pagina's/Experimenteel/Filter/Vertical filter",
  component: VerticalFilter,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
} satisfies Meta<typeof VerticalFilter>;
type Story = StoryObj<typeof VerticalFilter>;

export const Default: Story = { name: 'Vertical filter' };
