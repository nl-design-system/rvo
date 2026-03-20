import type { Meta, StoryObj } from '@storybook/react-webpack5';
import Evenementen from './Evenementen';

const meta: Meta<typeof Evenementen> = {
  title: "Pagina's/Voorbeelden/www/Evenementen",
  component: Evenementen,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
    layout: 'fullscreen',
  },
};
export default meta;

type Story = StoryObj<typeof Evenementen>;

export const Default: Story = { name: 'Evenementen' };
