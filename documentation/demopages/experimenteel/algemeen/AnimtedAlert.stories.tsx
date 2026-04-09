import type { Meta, StoryObj } from '@storybook/react-webpack5';
import AnimatedAlert from './AnimatedAlert';

export default {
  title: "Pagina's/Experimenteel/Algemeen/Animated Alert",
  component: AnimatedAlert,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
} satisfies Meta<typeof AnimatedAlert>;
type Story = StoryObj<typeof AnimatedAlert>;

export const Default: Story = { name: 'Animated Alert' };
