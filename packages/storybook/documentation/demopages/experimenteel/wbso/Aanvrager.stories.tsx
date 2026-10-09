import type { Meta, StoryObj } from '@storybook/react-webpack5';
import Aanvrager from './Aanvrager';

export default {
  title: "Pagina's/Experimenteel/WBSO/Aanvrager",
  component: Aanvrager,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
} satisfies Meta<typeof Aanvrager>;
type Story = StoryObj<typeof Aanvrager>;

export const Default: Story = { name: 'Aanvrager' };
