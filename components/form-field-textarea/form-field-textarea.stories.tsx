import type { Meta, StoryObj } from '@storybook/react';
import { defaultArgs } from './defaultArgs';
import { TextareaField } from './template';

const meta: Meta<typeof TextareaField> = {
  title: 'Componenten/Form/Textarea field',
  component: TextareaField,
  args: defaultArgs,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
    docusaurus: {
      link: 'form-field-textarea',
    },
  },
};
export default meta;

type Story = StoryObj<typeof TextareaField>;

export const Default: Story = { args: { ...defaultArgs, helperText: 'Helper text' }, name: 'Textarea field' };
