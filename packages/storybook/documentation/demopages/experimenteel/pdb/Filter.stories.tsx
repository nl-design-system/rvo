import type { Meta, StoryObj } from '@storybook/react-webpack5';
import Filter from './Filter';

export default {
  title: "Pagina's/Experimenteel/projects.rvo.nl/Filter/Filter A",
  component: Filter,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
} satisfies Meta<typeof Filter>;
type Story = StoryObj<typeof Filter>;

export const Default: Story = { name: 'Filter A' };
