import type { Meta, StoryObj } from '@storybook/react';
import Stallijst from './Stallijst';

const meta: Meta<typeof Stallijst> = {
  title: "Demo pagina's/I&R/Stallijst",
  component: Stallijst,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
};
export default meta;

type Story = StoryObj<typeof Stallijst>;

export const Default: Story = { name: 'Stallijst' };
