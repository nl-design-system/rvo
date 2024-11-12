import type { Meta, StoryObj } from '@storybook/react';
import { defaultArgs } from './defaultArgs';
import { ExpandableContent } from './template';

const meta: Meta<typeof ExpandableContent> = {
  title: 'Componenten/Expandable content',
  component: ExpandableContent,
  args: defaultArgs,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
    docusaurus: {
      link: 'expandable-content',
    },
  },
};
export default meta;

type Story = StoryObj<typeof ExpandableContent>;

export const Default: Story = { args: defaultArgs, name: 'Expandable content' };
