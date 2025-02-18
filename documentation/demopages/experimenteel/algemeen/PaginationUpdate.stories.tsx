import type { Meta, StoryObj } from '@storybook/react';
import PaginationUpdate from './PaginationUpdate';

const meta: Meta<typeof PaginationUpdate> = {
  title: "Pagina's/Experimenteel/Algemeen/Pagination Update",
  component: PaginationUpdate,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
};
export default meta;

type Story = StoryObj<typeof PaginationUpdate>;

export const Default: Story = { name: 'Pagination Update' };
