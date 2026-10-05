import type { Meta, StoryObj } from '@storybook/react-webpack5';
import FilterC from './FilterC';

export default {
  title: "Pagina's/Experimenteel/projects.rvo.nl/Filter/Filter C",
  component: FilterC,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
} satisfies Meta<typeof FilterC>;
type Story = StoryObj<typeof FilterC>;

export const Default: Story = { name: 'Filter C' };
