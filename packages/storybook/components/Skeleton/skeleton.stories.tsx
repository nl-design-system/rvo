import { Skeleton } from '@nl-rvo/component-library-react';
import type { Meta, StoryObj } from '@storybook/react-webpack5';

export default {
  title: 'Componenten/Skeleton',
  component: Skeleton,
  args: {
    color: 'grijs-300',
  },
  argTypes: {
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
  },
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
type Story = StoryObj<typeof Skeleton>;

export const Base: Story = {};
