import type { Meta, StoryObj } from '@storybook/react';
import Aanvrager from './Aanvrager';

const meta: Meta<typeof Aanvrager> = {
  title: "Pagina's/Experimenteel/WBSO/Aanvrager",
  component: Aanvrager,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
};
export default meta;

type Story = StoryObj<typeof Aanvrager>;

export const Default: Story = { name: 'Aanvrager' };
