import type { Meta, StoryObj } from '@storybook/react';
import { defaultArgs } from './src/defaultArgs';
import { DateInput } from './src/template';

const meta: Meta<typeof DateInput> = {
  title: 'Componenten/Form/Date input',
  component: DateInput,
  args: defaultArgs,
  parameters: {
    status: {
      type: 'PRODUCTION',
    },
    docusaurus: {
      link: 'form-dateinput',
    },
  },
};
export default meta;

type Story = StoryObj<typeof DateInput>;

export const Default: Story = { args: defaultArgs, name: 'Date input' };
