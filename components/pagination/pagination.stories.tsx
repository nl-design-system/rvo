import type { Meta, StoryObj } from '@storybook/react';
import { defaultArgs } from './defaultArgs';
import { Pagination } from './template';

const meta: Meta<typeof Pagination> = {
  title: 'Componenten/Pagination',
  component: Pagination,
  args: defaultArgs,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
    docusaurus: {
      link: 'pagination',
    },
  },
};
export default meta;

type Story = StoryObj<typeof Pagination>;

export const Default: Story = { args: defaultArgs, name: 'Pagination' };
