import type { Meta, StoryObj } from '@storybook/react';
import Samenvatting from './Samenvatting';

const meta: Meta<typeof Samenvatting> = {
  title: "Demo pagina's/Mijn Percelen/Samenvatting",
  component: Samenvatting,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
};
export default meta;

type Story = StoryObj<typeof Samenvatting>;

export const Default: Story = { name: 'Samenvatting' };
