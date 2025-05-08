import type { Meta, StoryObj } from '@storybook/react';
import Skeleton, { ISkeletonProps } from './src/template';

const argTypes = {
  variant: {
    options: [undefined, 'circular'],
    control: {
      type: 'radio',
      labels: {
        undefined: 'None',
        circular: 'Circular',
      },
    },
  },
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
  duration: {
    control: { type: 'text' },
  },
  width: {
    control: { type: 'text' },
  },
  height: {
    control: { type: 'text' },
  },
  className: {
    control: { type: 'text' },
  },
};

const defaultArgs: ISkeletonProps = {
  color: 'grijs-300',
};

const meta: Meta<typeof Skeleton> = {
  title: 'Componenten/Skeleton',
  component: Skeleton,
  args: defaultArgs,
  argTypes,
  parameters: {
    status: {
      type: 'PRODUCTION',
    },
    docusaurus: {
      link: 'skeleton',
    },
  },
};
export default meta;

// Stories
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: defaultArgs,
  name: 'Skeleton',
};
