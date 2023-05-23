import type { Meta, StoryObj } from '@storybook/react';
import { defaultArgs } from './defaultArgs';
import { TimeInput } from './template';

const meta: Meta<typeof TimeInput> = {
  title: 'Componenten/Form/Time input',
  component: TimeInput,
  args: defaultArgs,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
    docusaurus: {
      link: 'form-timeinput',
    },
  },
};
export default meta;

type Story = StoryObj<typeof TimeInput>;

export const Default: Story = { args: defaultArgs, name: 'Time input' };
