import type { Meta, StoryObj } from '@storybook/react-webpack5';
import SearchInNav from './SearchInNav';

export default {
  title: "Pagina's/Experimenteel/Algemeen/Search in menubar",
  component: SearchInNav,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
} satisfies Meta<typeof SearchInNav>;
type Story = StoryObj<typeof SearchInNav>;

export const Default: Story = { name: 'Search in menubar' };
