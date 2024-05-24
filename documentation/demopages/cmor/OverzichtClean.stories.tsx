import type { Meta, StoryObj } from '@storybook/react';
import OverzichtClean from './OverzichtClean';

const meta: Meta<typeof OverzichtClean> = {
  title: "Demo pagina's/CMOR/Clean (zonder externe CSS)/Overzicht",
  component: OverzichtClean,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
};
export default meta;

type Story = StoryObj<typeof OverzichtClean>;

export const Default: Story = { name: 'Overzicht' };
