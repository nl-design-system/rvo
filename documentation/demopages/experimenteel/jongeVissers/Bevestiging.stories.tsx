import type { Meta, StoryObj } from '@storybook/react';
import Bevestiging from './Bevestiging';

const meta: Meta<typeof Bevestiging> = {
  title: "Pagina's/Experimenteel/Jonge Vissers/Bevestiging",
  component: Bevestiging,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
};
export default meta;

type Story = StoryObj<typeof Bevestiging>;

export const Default: Story = { name: 'Bevestiging' };
