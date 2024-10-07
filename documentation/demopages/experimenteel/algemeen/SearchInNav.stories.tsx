import type { Meta, StoryObj } from '@storybook/react';
import SearchInNav from './SearchInNav';

const meta: Meta<typeof SearchInNav> = {
  title: "Pagina's/Experimenteel/Algemeen/Search in menubar",
  component: SearchInNav,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
};
export default meta;

type Story = StoryObj<typeof SearchInNav>;

export const Default: Story = { name: 'Search in menubar' };
