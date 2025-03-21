import type { Meta, StoryObj } from '@storybook/react';
import Training from './Training';

const meta: Meta<typeof Training> = {
  title: "Pagina's/Voorbeelden/www/Training",
  component: Training,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
};
export default meta;

type Story = StoryObj<typeof Training>;

export const Default: Story = { name: 'Training' };
