import { ISkeletonProps, Skeleton } from '@nl-rvo/component-library-react';
import type { Meta, StoryObj, Table } from '@storybook/react-webpack5';

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

export default {
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
} satisfies Meta<typeof Skeleton>;
// Stories
type Story = StoryObj<typeof Table>;

export const Default: Story = {
  args: defaultArgs,
  name: 'Skeleton',
};
