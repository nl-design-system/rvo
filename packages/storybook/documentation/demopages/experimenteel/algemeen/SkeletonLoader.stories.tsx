import type { Meta, StoryObj } from '@storybook/react-webpack5';
import SkeletonLoader from './SkeletonLoader';

export default {
  title: "Pagina's/Experimenteel/Algemeen/Skeleton",
  component: SkeletonLoader,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
} satisfies Meta<typeof SkeletonLoader>;
type Story = StoryObj<typeof SkeletonLoader>;

export const Default: Story = { name: 'Skeleton' };
