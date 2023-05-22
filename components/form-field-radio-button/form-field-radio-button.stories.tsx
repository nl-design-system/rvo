import type { Meta, StoryObj } from '@storybook/react';
import { defaultArgs } from './defaultArgs';
import { RadioButtonField } from './template';

const meta: Meta<typeof RadioButtonField> = {
  title: 'Componenten/Form/Radio button field',
  component: RadioButtonField,
  args: defaultArgs,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
    docusaurus: {
      link: 'form-field-radio-button',
    },
  },
};
export default meta;

type Story = StoryObj<typeof RadioButtonField>;

export const Default: Story = { args: { ...defaultArgs, helperText: 'Helper text' }, name: 'Radio button field' };
