import type { Meta, StoryObj } from '@storybook/react';
import { defaultArgs } from './src/defaultArgs';
import { Tag } from './src/template';

const meta: Meta<typeof Tag> = {
  title: 'Componenten/Tag',
  component: Tag,
  args: defaultArgs,
  parameters: {
    status: {
      type: 'PRODUCTION',
    },
    docusaurus: {
      link: 'tag',
    },
  },
};
export default meta;

type Story = StoryObj<typeof Tag>;

export const Default: Story = { args: defaultArgs, name: 'Tag' };
