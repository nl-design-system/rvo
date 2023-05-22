import type { Meta, StoryObj } from '@storybook/react';
import { defaultArgs } from './defaultArgs';
import { SelectField } from './template';

const meta: Meta<typeof SelectField> = {
  title: 'Componenten/Form/Select field',
  component: SelectField,
  args: defaultArgs,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
    docusaurus: {
      link: 'form-field-select',
    },
  },
};
export default meta;

type Story = StoryObj<typeof SelectField>;

export const Default: Story = { args: { ...defaultArgs, helperText: 'Helper text' }, name: 'Select field' };
