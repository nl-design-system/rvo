import type { Meta, StoryObj } from '@storybook/react';
import OverzichtClean from './OverzichtClean';

const meta: Meta<typeof OverzichtClean> = {
  title: "Demo pagina's/CMOR/Overzicht(clean)",
  component: OverzichtClean,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
};
export default meta;

type Story = StoryObj<typeof OverzichtClean>;

export const Default: Story = { name: 'OverzichtClean' };
