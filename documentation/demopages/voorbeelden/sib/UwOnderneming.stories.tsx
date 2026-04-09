import type { Meta, StoryObj } from '@storybook/react-webpack5';
import UwOnderneming from './UwOnderneming';

export default {
  title: "Pagina's/Voorbeelden/SIB/Uw onderneming",
  component: UwOnderneming,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
} satisfies Meta<typeof UwOnderneming>;
type Story = StoryObj<typeof UwOnderneming>;

export const Default: Story = { name: 'Uw onderneming' };
