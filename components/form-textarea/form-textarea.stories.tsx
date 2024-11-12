import type { Meta, StoryObj } from '@storybook/react';
import { defaultArgs } from './defaultArgs';
import { Textarea } from './template';

const meta: Meta<typeof Textarea> = {
  title: 'Componenten/Form/Text area',
  component: Textarea,
  args: defaultArgs,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
    docusaurus: {
      link: 'form-textarea',
    },
  },
};
export default meta;

type Story = StoryObj<typeof Textarea>;

export const Default: Story = { args: defaultArgs, name: 'Text area' };
