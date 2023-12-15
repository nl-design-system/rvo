import type { Meta, StoryObj } from '@storybook/react';
import { defaultArgs } from './defaultArgs';
import { DateInput } from './template';

const meta: Meta<typeof DateInput> = {
  title: 'Componenten/Form/Date input',
  component: DateInput,
  args: defaultArgs,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
    docusaurus: {
      link: 'form-dateinput',
    },
  },
};
export default meta;

type Story = StoryObj<typeof DateInput>;

export const Default: Story = { args: defaultArgs, name: 'Date input' };
