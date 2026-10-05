import type { Meta, StoryObj } from '@storybook/react-webpack5';
import Percelen from './Percelen';

export default {
  title: "Pagina's/Experimenteel/Mijn Percelen/Percelen",
  component: Percelen,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
} satisfies Meta<typeof Percelen>;
type Story = StoryObj<typeof Percelen>;

export const Default: Story = { name: 'Percelen' };
