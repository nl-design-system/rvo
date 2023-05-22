import type { Meta, StoryObj } from '@storybook/react';
import { defaultArgs } from './defaultArgs';
import { CheckboxField } from './template';

const meta: Meta<typeof CheckboxField> = {
  title: 'Componenten/Form/Checkbox field',
  component: CheckboxField,
  args: defaultArgs,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
    docusaurus: {
      link: 'form-field-checkbox',
    },
  },
};
export default meta;

type Story = StoryObj<typeof CheckboxField>;

export const Default: Story = { args: { ...defaultArgs, helperText: 'Helper text' }, name: 'Checkbox field' };
