import type { Meta, StoryObj } from '@storybook/react-webpack5';
import AnimatedAlert from './AnimatedAlert';

const meta: Meta<typeof AnimatedAlert> = {
  title: 'Prototypes/Algemeen/Animated Alert',
  component: AnimatedAlert,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
};
export default meta;

type Story = StoryObj<typeof AnimatedAlert>;

export const Default: Story = { name: 'Animated Alert' };
