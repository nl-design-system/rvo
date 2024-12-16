import type { Meta, StoryObj } from '@storybook/react';
import { defaultArgs } from './src/defaultArgs';
import { SelectField } from './src/template';

const meta: Meta<typeof SelectField> = {
  title: 'Componenten/Select field',
  component: SelectField,
  args: defaultArgs,
  parameters: {
    status: {
      type: 'PRODUCTION',
    },
    docusaurus: {
      link: 'form-field-select',
    },
  },
};
export default meta;

type Story = StoryObj<typeof SelectField>;

export const Default: Story = { args: { ...defaultArgs, helperText: 'Helper text' }, name: 'Select field' };
