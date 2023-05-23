import type { Meta, StoryObj } from '@storybook/react';
import Kosten from './Kosten';

const meta: Meta<typeof Kosten> = {
  title: "Demo pagina's/Jonge Vissers/Kosten",
  component: Kosten,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
};
export default meta;

type Story = StoryObj<typeof Kosten>;

export const Default: Story = { name: 'Kosten' };
