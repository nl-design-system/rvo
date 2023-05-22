import type { Meta, StoryObj } from '@storybook/react';
import { defaultArgs } from './defaultArgs';
import { TimeInputField } from './template';

const meta: Meta<typeof TimeInputField> = {
  title: 'Componenten/Form/Time input field',
  component: TimeInputField,
  args: defaultArgs,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
    docusaurus: {
      link: 'form-field-timeinput',
    },
  },
};
export default meta;

type Story = StoryObj<typeof TimeInputField>;

export const Default: Story = { args: { ...defaultArgs, helperText: 'Helper time' }, name: 'Time input field' };
