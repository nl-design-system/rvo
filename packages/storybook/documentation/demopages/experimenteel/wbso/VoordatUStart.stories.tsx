import type { Meta, StoryObj } from '@storybook/react-webpack5';
import VoordatUStart from './VoordatUStart';

export default {
  title: "Pagina's/Experimenteel/WBSO/Voordat u start",
  component: VoordatUStart,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
} satisfies Meta<typeof VoordatUStart>;
type Story = StoryObj<typeof VoordatUStart>;

export const Default: Story = { name: 'Voordat u start' };
