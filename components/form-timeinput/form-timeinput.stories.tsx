import type { Meta, StoryObj } from '@storybook/react';
import { defaultArgs } from './src/defaultArgs';
import { TimeInput } from './src/template';

const meta: Meta<typeof TimeInput> = {
  title: 'Componenten/Form/Time input',
  component: TimeInput,
  args: defaultArgs,
  parameters: {
    status: {
      type: 'PRODUCTION',
    },
    docusaurus: {
      link: 'form-timeinput',
    },
  },
};
export default meta;

type Story = StoryObj<typeof TimeInput>;

export const Default: Story = { args: defaultArgs, name: 'Time input' };
