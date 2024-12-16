import type { Meta, StoryObj } from '@storybook/react';
import { defaultArgs } from './src/defaultArgs';
import { Textarea } from './src/template';

const meta: Meta<typeof Textarea> = {
  title: 'Componenten/Textarea',
  component: Textarea,
  args: defaultArgs,
  parameters: {
    status: {
      type: 'PRODUCTION',
    },
    docusaurus: {
      link: 'form-textarea',
    },
  },
};
export default meta;

type Story = StoryObj<typeof Textarea>;

export const Default: Story = { args: { ...defaultArgs, maxLength: 300, maxLengthIndicator: true }, name: 'Textarea' };
