import type { Meta, StoryObj } from '@storybook/react-webpack5';
import Import from './Import';

export default {
  title: "Pagina's/Voorbeelden/I&R/Import",
  component: Import,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
} satisfies Meta<typeof Import>;
type Story = StoryObj<typeof Import>;

export const Default: Story = { name: 'Import' };
