import type { Meta, StoryObj } from '@storybook/react';
import { defaultArgs } from './src/defaultArgs';
import { ExpandableContent } from './src/template';

const meta: Meta<typeof ExpandableContent> = {
  title: 'Componenten/Expandable content',
  component: ExpandableContent,
  args: defaultArgs,
  parameters: {
    status: {
      type: 'PRODUCTION',
    },
    docusaurus: {
      link: 'expandable-content',
    },
  },
};
export default meta;

type Story = StoryObj<typeof ExpandableContent>;

export const Default: Story = { args: defaultArgs, name: 'Expandable content' };
