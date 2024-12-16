import type { Meta, StoryObj } from '@storybook/react';
import { defaultArgs } from './src/defaultArgs';
import { FileInput } from './src/template';

const meta: Meta<typeof FileInput> = {
  title: 'Componenten/File input',
  component: FileInput,
  args: defaultArgs,
  parameters: {
    status: {
      type: 'PRODUCTION',
    },
    docusaurus: {
      link: 'form-fileinput',
    },
  },
};
export default meta;

type Story = StoryObj<typeof FileInput>;

export const Default: Story = { args: defaultArgs, name: 'File input' };
