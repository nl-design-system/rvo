import type { Meta, StoryObj } from '@storybook/react';
import { defaultArgs } from './defaultArgs';
import { DataList } from './template';

const meta: Meta<typeof DataList> = {
  title: 'Componenten/Data list',
  component: DataList,
  args: defaultArgs,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
    docusaurus: {
      link: 'data-list',
    },
  },
};
export default meta;

type Story = StoryObj<typeof DataList>;

export const Default: Story = { args: defaultArgs, name: 'Data list' };
