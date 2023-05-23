import type { Meta, StoryObj } from '@storybook/react';
import { defaultArgs } from './defaultArgs';
import { ExpandableText } from './template';

const meta: Meta<typeof ExpandableText> = {
  title: 'Componenten/Expandable text',
  component: ExpandableText,
  args: defaultArgs,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
    docusaurus: {
      link: 'expandable-text',
    },
  },
};
export default meta;

type Story = StoryObj<typeof ExpandableText>;

export const Default: Story = { args: defaultArgs, name: 'Expandable text' };
