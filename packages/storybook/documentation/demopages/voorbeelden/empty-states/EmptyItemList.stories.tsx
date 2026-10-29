import type { Meta, StoryObj } from '@storybook/react-webpack5';
import EmptyItemList from './EmptyItemList';

export default {
  title: "Pagina's/Voorbeelden/Empty states/Empty Item list",
  component: EmptyItemList,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
} satisfies Meta<typeof EmptyItemList>;
type Story = StoryObj<typeof EmptyItemList>;

export const Default: Story = { name: 'Empty Item list' };
