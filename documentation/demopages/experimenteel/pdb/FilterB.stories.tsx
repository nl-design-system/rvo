import type { Meta, StoryObj } from '@storybook/react-webpack5';
import FilterB from './FilterB';

export default {
  title: "Pagina's/Experimenteel/projects.rvo.nl/Filter/Filter B",
  component: FilterB,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
} satisfies Meta<typeof FilterB>;
type Story = StoryObj<typeof FilterB>;

export const Default: Story = { name: 'Filter B' };
