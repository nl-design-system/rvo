import type { Meta, StoryObj } from '@storybook/react';
import Import from './Import';

const meta: Meta<typeof Import> = {
  title: "Pagina's/Voorbeelden/I&R/Import",
  component: Import,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
};
export default meta;

type Story = StoryObj<typeof Import>;

export const Default: Story = { name: 'Import' };
