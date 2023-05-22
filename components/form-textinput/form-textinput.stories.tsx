import type { Meta, StoryObj } from '@storybook/react';
import { defaultArgs } from './defaultArgs';
import { TextInput } from './template';

const meta: Meta<typeof TextInput> = {
  title: 'Componenten/Form/Text input',
  component: TextInput,
  args: defaultArgs,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
    docusaurus: {
      link: 'form-textinput',
    },
  },
};
export default meta;

type Story = StoryObj<typeof TextInput>;

export const Default: Story = { args: defaultArgs, name: 'Text input' };
