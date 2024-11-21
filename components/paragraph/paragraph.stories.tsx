import type { Meta, StoryObj } from '@storybook/react';
import { defaultArgs } from './src/defaultArgs';
import { Paragraph } from './src/template';

const meta: Meta<typeof Paragraph> = {
  title: 'Componenten/Paragraph',
  component: Paragraph,
  args: defaultArgs,
  parameters: {
    status: {
      type: 'PRODUCTION',
    },
    docusaurus: {
      link: 'paragraph',
    },
  },
};
export default meta;

type Story = StoryObj<typeof Paragraph>;

export const Default: Story = { args: defaultArgs, name: 'Paragraph' };
