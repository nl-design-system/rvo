import type { Meta, StoryObj } from '@storybook/react';
import SIBstartpagina from './SIBstartpagina';

const meta: Meta<typeof SIBstartpagina> = {
  title: "Pagina's/Voorbeelden/SIB/Startpagina",
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
