import type { Meta, StoryObj } from '@storybook/react';
import VerticalFilterClean from './VerticalFilterClean';

const meta: Meta<typeof VerticalFilterClean> = {
  title: "Pagina's/Experimenteel/Filter/Vertical filter clean",
  component: VerticalFilterClean,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
};
export default meta;

type Story = StoryObj<typeof VerticalFilterClean>;

export const Default: Story = { name: 'Vertical filter clean' };
