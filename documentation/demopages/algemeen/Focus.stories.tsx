import type { Meta, StoryObj } from '@storybook/react';
import Focus from './Focus';

const meta: Meta<typeof Focus> = {
  title: "Demo pagina's/Algemeen/Focus",
  component: Focus,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
};
export default meta;

type Story = StoryObj<typeof Focus>;

export const Default: Story = { name: 'Focus' };
