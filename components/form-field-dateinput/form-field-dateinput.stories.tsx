import type { Meta, StoryObj } from '@storybook/react';
import { defaultArgs } from './defaultArgs';
import { DateInputField } from './template';

const meta: Meta<typeof DateInputField> = {
  title: 'Componenten/Form/Date input field',
  component: DateInputField,
  args: defaultArgs,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
    docusaurus: {
      link: 'form-field-dateinput',
    },
  },
};
export default meta;

type Story = StoryObj<typeof DateInputField>;

export const Default: Story = { args: { ...defaultArgs, helperText: 'Helper date' }, name: 'Date input field' };
