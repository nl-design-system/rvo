import type { Meta, StoryObj } from '@storybook/react-webpack5';
import Subsidiewijzer from './Subsidiewijzer';

export default {
  title: "Pagina's/Experimenteel/Subsidiewijzer/Subsidiewijzer",
  component: Subsidiewijzer,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
} satisfies Meta<typeof Subsidiewijzer>;
type Story = StoryObj<typeof Subsidiewijzer>;

export const Default: Story = { name: 'Subsidiewijzer' };
