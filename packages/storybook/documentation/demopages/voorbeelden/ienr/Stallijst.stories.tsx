import type { Meta, StoryObj } from '@storybook/react-webpack5';
import Stallijst from './Stallijst';

export default {
  title: "Pagina's/Voorbeelden/I&R/Stallijst",
  component: Stallijst,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
} satisfies Meta<typeof Stallijst>;
type Story = StoryObj<typeof Stallijst>;

export const Default: Story = { name: 'Stallijst' };
