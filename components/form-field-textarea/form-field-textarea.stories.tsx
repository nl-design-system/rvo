import type { Meta, StoryObj } from '@storybook/react';
import { HTMLAttributes } from 'react';
import { defaultArgs } from './src/defaultArgs';
import { ITextareaFieldProps, TextareaField } from './src/template';

const meta: Meta<typeof TextareaField> = {
  title: 'Componenten/Textarea field',
  component: TextareaField,
  args: defaultArgs as Partial<ITextareaFieldProps & HTMLAttributes<HTMLTextAreaElement>>,
  parameters: {
    status: {
      type: 'PRODUCTION',
    },
    docusaurus: {
      link: 'form-field-textarea',
    },
  },
};
export default meta;

type Story = StoryObj<typeof TextareaField>;

export const Default: Story = {
  args: { ...defaultArgs, helperText: 'Helper text', maxLength: 300, maxLengthIndicator: true } as Partial<
    ITextareaFieldProps & HTMLAttributes<HTMLTextAreaElement>
  >,
  name: 'Textarea field',
};
