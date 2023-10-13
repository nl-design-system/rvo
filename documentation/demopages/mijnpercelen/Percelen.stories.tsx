import type { Meta, StoryObj } from '@storybook/react';
import Percelen from '../mijnpercelen/Percelen';

const meta: Meta<typeof Percelen> = {
  title: "Demo pagina's/Mijn Percelen/Percelen",
  component: Percelen,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
};
export default meta;

type Story = StoryObj<typeof Percelen>;

export const Default: Story = { name: 'Percelen' };
