import type { Meta, StoryObj } from '@storybook/react-webpack5';
import VoordatUBegint from './VoordatUBegint';

export default {
  title: "Pagina's/Voorbeelden/Bijen op het dak/Voordat u begint met aanvragen",
  component: VoordatUBegint,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
} satisfies Meta<typeof VoordatUBegint>;
type Story = StoryObj<typeof VoordatUBegint>;

export const Default: Story = { name: 'Voordat u begint met aanvragen' };
