import type { Meta, StoryObj } from '@storybook/react-webpack5';
import Loading from './Loading';

export default {
  title: "Pagina's/Experimenteel/Algemeen/Loading",
  component: Loading,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
} satisfies Meta<typeof Loading>;
type Story = StoryObj<typeof Loading>;

export const Default: Story = { name: 'Loading' };
