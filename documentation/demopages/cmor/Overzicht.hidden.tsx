import type { Meta, StoryObj } from '@storybook/react';
import Overzicht from './Overzicht';

const meta: Meta<typeof Overzicht> = {
  title: "Demo pagina's/CMOR/Overzicht",
  component: Overzicht,
  parameters: {
    status: {
      type: 'HIDDEN',
    },
  },
};
export default meta;

type Story = StoryObj<typeof Overzicht>;

export const Default: Story = { name: 'Overzicht' };
