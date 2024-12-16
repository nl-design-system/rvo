import type { Meta, StoryObj } from '@storybook/react';
import { defaultArgs } from './src/defaultArgs';
import { TextInput } from './src/template';

const meta: Meta<typeof TextInput> = {
  title: 'Componenten/Text input',
  component: TextInput,
  args: defaultArgs,
  parameters: {
    status: {
      type: 'PRODUCTION',
    },
    docusaurus: {
      link: 'form-textinput',
    },
  },
};
export default meta;

type Story = StoryObj<typeof TextInput>;

export const Default: Story = { args: defaultArgs, name: 'Text input' };
