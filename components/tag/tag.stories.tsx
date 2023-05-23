import type { Meta, StoryObj } from '@storybook/react';
import { defaultArgs } from './defaultArgs';
import { Tag } from './template';

const meta: Meta<typeof Tag> = {
  title: 'Componenten/Tag',
  component: Tag,
  args: defaultArgs,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
    docusaurus: {
      link: 'tag',
    },
  },
};
export default meta;

type Story = StoryObj<typeof Tag>;

export const Default: Story = { args: defaultArgs, name: 'Tag' };
