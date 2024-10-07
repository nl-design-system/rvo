import type { Meta, StoryObj } from '@storybook/react';
import VoordatUStart from './VoordatUStart';

const meta: Meta<typeof VoordatUStart> = {
  title: "Pagina's/Experimenteel/WBSO/Voordat u start",
  component: VoordatUStart,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
};
export default meta;

type Story = StoryObj<typeof VoordatUStart>;

export const Default: Story = { name: 'Voordat u start' };
