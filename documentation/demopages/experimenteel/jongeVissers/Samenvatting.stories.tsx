import type { Meta, StoryObj } from '@storybook/react';
import Samenvatting from './Samenvatting';

const meta: Meta<typeof Samenvatting> = {
  title: "Pagina's/Experimenteel/Jonge Vissers/Samenvatting",
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
