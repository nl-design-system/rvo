import type { Meta, StoryObj } from '@storybook/react';
import Subsidiewijzer from './Subsidiewijzer';

const meta: Meta<typeof Subsidiewijzer> = {
  title: "Pagina's/Experimenteel/Subsidiewijzer/Subsidiewijzer",
  component: Subsidiewijzer,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
};
export default meta;

type Story = StoryObj<typeof Subsidiewijzer>;

export const Default: Story = { name: 'Subsidiewijzer' };
