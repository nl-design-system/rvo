import type { Meta, StoryObj } from '@storybook/react-webpack5';
import LinkBlocks from './LinkBlocks';

const meta: Meta<typeof LinkBlocks> = {
  title: "Pagina's/Voorbeelden/www/LinkBlocks",
  component: LinkBlocks,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
};
export default meta;

type Story = StoryObj<typeof LinkBlocks>;

export const Default: Story = { name: 'LinkBlocks' };
