import type { Meta, StoryObj } from '@storybook/react';
import Profiel from './Profiel';

const meta: Meta<typeof Profiel> = {
  title: "Demo pagina's/Mijn RVO/Profiel",
  component: Profiel,
  parameters: {
    status: {
      type: 'HIDDEN',
    },
  },
};
export default meta;

type Story = StoryObj<typeof Profiel>;

export const Default: Story = { name: 'Profiel' };
