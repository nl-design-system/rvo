import type { Meta, StoryObj } from '@storybook/react';
import { defaultArgs } from './src/defaultArgs';
import { TimeInputField } from './src/template';

const meta: Meta<typeof TimeInputField> = {
  title: 'Componenten/Time input field',
  component: TimeInputField,
  args: defaultArgs,
  parameters: {
    status: {
      type: 'PRODUCTION',
    },
    docusaurus: {
      link: 'form-field-timeinput',
    },
  },
};
export default meta;

type Story = StoryObj<typeof TimeInputField>;

export const Default: Story = { args: { ...defaultArgs, helperText: 'Helper time' }, name: 'Time input field' };
