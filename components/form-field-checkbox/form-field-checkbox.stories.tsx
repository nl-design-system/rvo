import type { Meta, StoryObj } from '@storybook/react';
import { defaultArgs } from './src/defaultArgs';
import { CheckboxField } from './src/template';

const meta: Meta<typeof CheckboxField> = {
  title: 'Componenten/Checkbox field',
  component: CheckboxField,
  args: defaultArgs,
  parameters: {
    status: {
      type: 'PRODUCTION',
    },
    docusaurus: {
      link: 'form-field-checkbox',
    },
  },
};
export default meta;

type Story = StoryObj<typeof CheckboxField>;

export const Default: Story = { args: { ...defaultArgs, helperText: 'Helper text' }, name: 'Checkbox field' };
