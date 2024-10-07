import type { Meta, StoryObj } from '@storybook/react';
import UwOnderneming from './UwOnderneming';

const meta: Meta<typeof UwOnderneming> = {
  title: "Pagina's/Voorbeelden/SIB/Uw onderneming",
  component: UwOnderneming,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
};
export default meta;

type Story = StoryObj<typeof UwOnderneming>;

export const Default: Story = { name: 'UwOnderneming' };
