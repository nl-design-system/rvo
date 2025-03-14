import type { Meta, StoryObj } from '@storybook/react';
import { defaultArgs } from './src/defaultArgs';
import { FileInputField } from './src/template';

const meta: Meta<typeof FileInputField> = {
  title: 'Componenten/File input field',
  component: FileInputField,
  args: defaultArgs,
  parameters: {
    status: {
      type: 'PRODUCTION',
    },
    docusaurus: {
      link: 'form-field-fileinput',
    },
  },
};
export default meta;

type Story = StoryObj<typeof FileInputField>;

export const Default: Story = { args: { ...defaultArgs, helperText: 'Helper text' }, name: 'File input field' };
