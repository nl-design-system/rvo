import type { Meta, StoryObj } from '@storybook/react-webpack5';
import Loading from './Loading';

const meta: Meta<typeof Loading> = {
  title: "Pagina's/Experimenteel/Algemeen/Loading",
  component: Loading,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
};
export default meta;

type Story = StoryObj<typeof Loading>;

export const Default: Story = { name: 'Loading' };
