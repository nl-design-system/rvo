import type { Meta, StoryObj } from '@storybook/react-webpack5';
import PaginationUpdate from './PaginationUpdate';

export default {
  title: "Pagina's/Experimenteel/Algemeen/Pagination Update",
  component: PaginationUpdate,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
} satisfies Meta<typeof PaginationUpdate>;
type Story = StoryObj<typeof PaginationUpdate>;

export const Default: Story = { name: 'Pagination Update' };
