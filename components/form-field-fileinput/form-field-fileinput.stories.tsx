import type { Meta, StoryObj } from '@storybook/react';
import { defaultArgs } from './defaultArgs';
import { FileInputField } from './template';

const meta: Meta<typeof FileInputField> = {
  title: 'Componenten/Form/File input field',
  component: FileInputField,
  args: defaultArgs,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
    docusaurus: {
      link: 'form-field-fileinput',
    },
  },
};
export default meta;

type Story = StoryObj<typeof FileInputField>;

export const Default: Story = { args: { ...defaultArgs, helperText: 'Helper text' }, name: 'File input field' };
