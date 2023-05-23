import type { Meta, StoryObj } from '@storybook/react';
import Aanvrager from './Aanvrager';

const meta: Meta<typeof Aanvrager> = {
  title: "Demo pagina's/WBSO/03 Aanvrager",
  component: Aanvrager,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
};
export default meta;

type Story = StoryObj<typeof Aanvrager>;

export const Default: Story = { name: '03 Aanvrager' };
