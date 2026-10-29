import type { Meta, StoryObj } from '@storybook/react-webpack5';
import LinkBlocks from './LinkBlocks';

export default {
  title: "Pagina's/Voorbeelden/www/LinkBlocks",
  component: LinkBlocks,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
} satisfies Meta<typeof LinkBlocks>;
type Story = StoryObj<typeof LinkBlocks>;

export const Default: Story = { name: 'LinkBlocks' };
