import type { Meta, StoryObj } from '@storybook/react-webpack5';
import SkeletonLoader from './SkeletonLoader';

const argTypes = {
  animation: {
    options: [undefined, 'shimmer', 'pulse'],
    control: {
      type: 'radio',
      labels: {
        undefined: 'None',
        shimmer: 'Shimmer',
        pulse: 'Pulse',
      },
    },
  },
};

export default {
  title: "Pagina's/Experimenteel/Algemeen/Skeleton",
  component: SkeletonLoader,
  argTypes,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
} satisfies Meta<typeof SkeletonLoader>;
type Story = StoryObj<typeof SkeletonLoader>;

export const Default: Story = { name: 'Skeleton' };
