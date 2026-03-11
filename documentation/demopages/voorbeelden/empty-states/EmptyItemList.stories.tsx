import type { Meta, StoryObj } from '@storybook/react-webpack5';
import EmptyItemList from './EmptyItemList';

const meta: Meta<typeof EmptyItemList> = {
  title: "Pagina's/Voorbeelden/Empty states/Empty Item list",
  component: EmptyItemList,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
};
export default meta;

type Story = StoryObj<typeof EmptyItemList>;

export const Default: Story = { name: 'Empty Item list' };
