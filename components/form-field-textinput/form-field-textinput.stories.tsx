import type { Meta, StoryObj } from '@storybook/react';
import { defaultArgs } from './defaultArgs';
import { TextInputField } from './template';

const meta: Meta<typeof TextInputField> = {
  title: 'Componenten/Form/Text input field',
  component: TextInputField,
  args: defaultArgs,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
    docusaurus: {
      link: 'form-field-textinput',
    },
  },
};
export default meta;

type Story = StoryObj<typeof TextInputField>;

export const Default: Story = { args: { ...defaultArgs, helperText: 'Helper text' }, name: 'Text input field' };
