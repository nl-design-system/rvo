import type { Meta, StoryObj } from '@storybook/react';
import SIBstartpagina from './SIBstartpagina';

const meta: Meta<typeof SIBstartpagina> = {
  title: "Demo pagina's/SIB",
  component: SIBstartpagina,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
};
export default meta;

type Story = StoryObj<typeof SIBstartpagina>;

export const Default: Story = { name: 'SIBstartpagina' };
