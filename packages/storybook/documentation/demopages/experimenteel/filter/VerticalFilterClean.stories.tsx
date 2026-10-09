import type { Meta, StoryObj } from '@storybook/react-webpack5';
import VerticalFilterClean from './VerticalFilterClean';

export default {
  title: "Pagina's/Experimenteel/Filter/Vertical filter clean",
  component: VerticalFilterClean,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
} satisfies Meta<typeof VerticalFilterClean>;
type Story = StoryObj<typeof VerticalFilterClean>;

export const Default: Story = { name: 'Vertical filter clean' };
